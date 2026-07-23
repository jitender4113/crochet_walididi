import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Flower2,
  Candy,
  Gift,
  Gem,
  Sparkles,
  PackageOpen,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
} from 'lucide-react'
import Button from '../components/ui/Button'
import { customizationCategories, offerTiers } from '../data/customizationData'
import { useCart } from '../context/CartContext.jsx'

const categoryCards = [
  { icon: Flower2, title: 'Crochet Flowers', desc: 'Choose from a variety of handmade crochet blooms in every color and style.' },
  { icon: Candy, title: 'Chocolates', desc: 'Add a sweet touch with premium chocolates paired perfectly with your bouquet.' },
  { icon: Gift, title: 'Gifts', desc: 'Little handmade extras and keepsakes to make your bouquet extra special.' },
  { icon: Gem, title: 'Jewellery', desc: 'Delicate handmade jewellery pieces to accompany your custom bouquet.' },
  { icon: Sparkles, title: 'Decorations', desc: 'Ribbons, charms and little details that add the finishing sparkle.' },
  { icon: PackageOpen, title: 'Packaging', desc: 'Beautiful wraps and boxes to present your bouquet just the way you like.' },
]

// Deterministic scatter positions for the live preview layers, so items
// don't jump around on re-render (index-based, not random per render).
const scatterPositions = [
  { top: '18%', left: '48%' },
  { top: '30%', left: '28%' },
  { top: '30%', left: '68%' },
  { top: '46%', left: '40%' },
  { top: '46%', left: '58%' },
  { top: '60%', left: '30%' },
  { top: '60%', left: '66%' },
  { top: '72%', left: '48%' },
  { top: '22%', left: '60%' },
  { top: '54%', left: '50%' },
]

function getMissingAmount(threshold, subtotal) {
  return Math.max(threshold - subtotal, 0)
}

export default function BuildYourOwnBouquet() {
  const { addCustomBouquet } = useCart()
  const navigate = useNavigate()
  const [selections, setSelections] = useState({}) // { [itemId]: quantity }
  const [appliedCoupon, setAppliedCoupon] = useState(null) // the applied offerTiers entry, or null

  const allItems = useMemo(
    () => customizationCategories.flatMap((cat) => cat.items.map((item) => ({ ...item, layer: cat.layer }))),
    []
  )

  const selectedItems = useMemo(
    () =>
      allItems
        .filter((item) => (selections[item.id] || 0) > 0)
        .map((item) => ({ ...item, quantity: selections[item.id] }))
        .sort((a, b) => a.layer - b.layer),
    [allItems, selections]
  )

  const subtotal = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Auto-remove the applied coupon if the cart drops below its minimum
  useEffect(() => {
    if (appliedCoupon && subtotal < appliedCoupon.threshold) {
      setAppliedCoupon(null)
    }
  }, [subtotal, appliedCoupon])

  const discount = appliedCoupon ? appliedCoupon.discount : 0
  const total = Math.max(subtotal - discount, 0)

  const updateQuantity = (itemId, delta) => {
    setSelections((current) => {
      const nextQty = Math.max((current[itemId] || 0) + delta, 0)
      const updated = { ...current, [itemId]: nextQty }
      if (nextQty === 0) delete updated[itemId]
      return updated
    })
  }

  const handleAddBouquetToCart = () => {
    if (selectedItems.length === 0) return
    addCustomBouquet({
      name: 'Custom Bouquet',
      image: 'https://picsum.photos/seed/bouquet-base/800/800',
      includedItems: selectedItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
      })),
      subtotal,
      discount,
      total,
    })
    navigate('/cart')
  }

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-blush-light/40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 flex flex-col items-start gap-6 lg:order-1"
          >
            <span className="font-script text-2xl leading-none text-blush-dark">
              made just for you
            </span>

            <h1 className="text-balance font-display text-4xl font-medium leading-[1.1] text-cocoa sm:text-5xl lg:text-6xl">
              Build Your Own Bouquet
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-cocoa-light sm:text-base">
              Pick your favourite crochet flowers, add a few sweet extras, and create
              a bouquet that's entirely your own — handmade, stitch by stitch, just
              for someone special.
            </p>

            <div className="pt-2">
              <Button variant="primary" as="a" href="#customize">
                Start Customizing
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="relative order-1 lg:order-2"
          >
            <div
              className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden lg:aspect-[5/6]"
              style={{
                maskImage:
                  'radial-gradient(ellipse 75% 80% at 55% 45%, black 55%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 75% 80% at 55% 45%, black 55%, transparent 100%)',
              }}
            >
              <img
                src="https://picsum.photos/seed/build-bouquet-hero/1000/1200"
                alt="Handmade crochet bouquet with customizable elements"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Live customization builder */}
      <section id="customize" className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <span className="font-script text-2xl leading-none text-blush-dark">
            watch it come together
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-cocoa sm:text-4xl">
            Customize Your Bouquet
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[7fr_3fr] lg:gap-10">
          {/* LEFT (70%): all categories, exactly as before */}
          <div className="flex flex-col gap-10">
            {customizationCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div key={cat.id} id={`category-${cat.id}`} className="scroll-mt-24">
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-light text-blush-dark">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-cocoa">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {cat.items.map((item) => {
                      const qty = selections[item.id] || 0
                      return (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 rounded-2xl bg-white/50 p-4 ring-1 ring-cocoa/10"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-[50px] w-[50px] shrink-0 rounded-xl object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-cocoa">{item.name}</p>
                            <p className="text-sm text-cocoa-light">₹{item.price}</p>
                          </div>

                          <div className="flex items-center gap-3 rounded-full border border-cocoa/15 bg-white/60 px-2 py-1.5">
                            <button
                              type="button"
                              aria-label={`Decrease ${item.name}`}
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={qty === 0}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10 disabled:opacity-30"
                            >
                              <Minus size={13} strokeWidth={2} />
                            </button>
                            <span className="w-5 text-center text-sm font-medium text-cocoa">
                              {qty}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase ${item.name}`}
                              onClick={() => updateQuantity(item.id, 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
                            >
                              <Plus size={13} strokeWidth={2} />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT (30%): sticky live preview + order summary + offers */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            {/* 1. Live preview */}
            <div className="relative overflow-hidden rounded-3xl bg-white/50 p-4 shadow-soft ring-1 ring-cocoa/10 sm:p-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-blush-light/30">
                <img
                  src="https://picsum.photos/seed/bouquet-base/800/800"
                  alt="Bouquet base"
                  className="h-full w-full object-cover opacity-90"
                />
                <AnimatePresence>
                  {selectedItems.map((item, i) => {
                    const pos = scatterPositions[i % scatterPositions.length]
                    return (
                      <motion.img
                        key={item.id}
                        src={item.image}
                        alt={item.name}
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.4 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover shadow-tag ring-2 ring-cream sm:h-16 sm:w-16"
                        style={{ top: pos.top, left: pos.left, zIndex: item.layer }}
                      />
                    )
                  })}
                </AnimatePresence>

                {selectedItems.length === 0 && (
                  <div className="absolute inset-x-0 bottom-4 mx-auto w-fit rounded-full bg-cream/90 px-4 py-1.5 text-xs font-medium text-cocoa-light shadow-tag">
                    Add items to build your bouquet
                  </div>
                )}
              </div>
            </div>

            {/* 2. Order summary + 3. Offers & Coupons */}
            <div className="rounded-3xl bg-white/60 p-6 shadow-soft ring-1 ring-cocoa/10">
              <h3 className="font-display text-lg font-semibold text-cocoa">
                Order Summary
              </h3>

              {selectedItems.length > 0 ? (
                <div className="mt-4 flex flex-col gap-3">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-10 w-10 shrink-0 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="truncate text-sm font-medium text-cocoa">{item.name}</p>
                        <p className="text-xs text-cocoa-light">Qty {item.quantity}</p>
                      </div>
                      <span className="text-sm font-semibold text-cocoa">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-cocoa-light">No items added yet.</p>
              )}

              {/* Offers & Coupons */}
              <div className="mt-5 flex flex-col gap-2.5">
                {offerTiers.map((tier) => {
                  const eligible = subtotal >= tier.threshold
                  const isApplied = appliedCoupon?.code === tier.code
                  return (
                    <div
                      key={tier.code}
                      className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition-colors duration-300 ${
                        isApplied
                          ? 'border-sage-dark/30 bg-sage-light/40'
                          : 'border-cocoa/10 bg-blush-light/30'
                      }`}
                    >
                      <div>
                        <p className="text-sm font-semibold text-cocoa">{tier.code}</p>
                        <p className="text-xs text-cocoa-light">
                          Above ₹{tier.threshold}
                          {!eligible && (
                            <span> · ₹{getMissingAmount(tier.threshold, subtotal)} more needed</span>
                          )}
                        </p>
                      </div>
                      <button
                        type="button"
                        disabled={!eligible || isApplied}
                        onClick={() => setAppliedCoupon(tier)}
                        className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                          isApplied
                            ? 'cursor-default bg-sage-dark text-cream'
                            : eligible
                            ? 'bg-cocoa text-cream hover:bg-cocoa/90'
                            : 'cursor-not-allowed bg-cocoa/10 text-cocoa-light'
                        }`}
                      >
                        {isApplied ? 'Applied ✓' : 'Apply'}
                      </button>
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-cocoa/10 pt-4 text-sm text-cocoa-light">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-cocoa-light">
                <span>Discount</span>
                <span className={discount > 0 ? 'text-sage-dark' : ''}>
                  {discount > 0 ? `- ₹${discount}` : '₹0'}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-cocoa/10 pt-4">
                <span className="font-display text-base font-semibold text-cocoa">Total</span>
                <span className="font-display text-lg font-semibold text-cocoa">₹{total}</span>
              </div>

              <button
                type="button"
                disabled={selectedItems.length === 0}
                onClick={handleAddBouquetToCart}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ShoppingBag size={17} strokeWidth={1.75} />
                Add Bouquet to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
