import { useEffect, useMemo, useRef, useState } from 'react'
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
  ChevronLeft,
  ChevronRight,
  Heart,
  Truck,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ShieldCheck,
  PackageCheck,
  Lock,
  Unlock,
} from 'lucide-react'
import Button from '../components/ui/Button'
import { customizationCategories, offerTiers } from '../data/customizationData'
import { useCart } from '../context/CartContext.jsx'
import build_hero from '../images/home_build/build_hero.webp'
import bouquet_base from '../images/home_build/build-bouquet.webp'
import hamper_base from "../images/home_build/hamper_box.webp"

const categoryCards = [
  { icon: Flower2, title: 'Crochet Flowers' },
  { icon: Candy, title: 'Chocolates' },
  { icon: Gift, title: 'Gifts' },
  { icon: Gem, title: 'Jewellery' },
  { icon: Sparkles, title: 'Crochet Accessories' },
  { icon: PackageOpen, title: 'Packaging' },
]


const scatterPositions = [
  { top: '10%', left: '50%' },

  { top: '16%', left: '36%' },
  { top: '16%', left: '64%' },

  { top: '22%', left: '44%' },
  { top: '22%', left: '56%' },

  { top: '28%', left: '30%' },
  { top: '28%', left: '70%' },

  { top: '34%', left: '40%' },
  { top: '34%', left: '60%' },

  { top: '40%', left: '50%' },

  { top: '8%', left: '40%' },
  { top: '12%', left: '28%' },
  { top: '16%', left: '20%' },
  { top: '20%', left: '14%' },

  // NEW
  { top: '10%', left: '60%' },
  { top: '14%', left: '76%' },
  { top: '20%', left: '82%' },
  { top: '26%', left: '86%' },
  { top: '34%', left: '18%' },
  { top: '42%', left: '26%' },
  { top: '48%', left: '40%' },
  { top: '48%', left: '60%' },
  { top: '42%', left: '74%' },
  { top: '56%', left: '50%' },
  { top: '60%', left: '36%' },
  { top: '60%', left: '64%' },
  { top: '68%', left: '50%' },

  { top: '8%', left: '60%' },
{ top: '10%', left: '72%' },
{ top: '12%', left: '50%' },
{ top: '14%', left: '84%' },
{ top: '18%', left: '76%' },
{ top: '20%', left: '90%' },
{ top: '24%', left: '18%' },
{ top: '24%', left: '82%' },
{ top: '30%', left: '12%' },
{ top: '30%', left: '88%' },
{ top: '36%', left: '24%' },
{ top: '36%', left: '76%' },
{ top: '42%', left: '18%' },
{ top: '42%', left: '82%' },
{ top: '48%', left: '30%' },
{ top: '48%', left: '70%' },
{ top: '56%', left: '40%' },
{ top: '56%', left: '60%' },
{ top: '64%', left: '50%' },
{ top: '72%', left: '50%' },
]


// Realistic bouquet zones per category, so flowers cluster at the top,
// ribbons/decorations sit near the wrap, jewellery dangles at the sides,
// and packaging anchors the base — instead of random placement.

//----
const categoryPositions = {
  flowers: [
    { top: '20%', left: '50%' },
    { top: '28%', left: '32%' },
    { top: '28%', left: '68%' },
    { top: '38%', left: '50%' },
  ],
  chocolates: [
    { top: '46%', left: '38%' },
    { top: '46%', left: '62%' },
    { top: '52%', left: '50%' },
  ],
  gifts: [
    { top: '60%', left: '76%' },
    { top: '70%', left: '80%' },
    { top: '80%', left: '74%' },
  ],
  jewellery: [
    { top: '64%', left: '24%' },
    { top: '74%', left: '20%' },
    { top: '82%', left: '28%' },
  ],
  decorations: [
    { top: '14%', left: '50%' },
    { top: '32%', left: '18%' },
    { top: '32%', left: '82%' },
  ],
  packaging: [
    { top: '88%', left: '50%' },
    { top: '92%', left: '38%' },
    { top: '92%', left: '62%' },
  ],
}

// Bouquet Progress Meter tiers — purely derived from selectedItems.length,
// no state involved.
const bouquetTiers = [
  { label: 'Simple', min: 0 },
  { label: 'Beautiful', min: 3 },
  { label: 'Luxury', min: 6 },
]

function getMissingAmount(threshold, subtotal) {
  return Math.max(threshold - subtotal, 0)
}

// Reuses the copy above (title -> desc) so every category card can show a
// short description without touching customizationData.js.

const trustStrip = [
  { icon: Heart, label: 'Handmade with Love' },
  { icon: Gift, label: 'Premium Gift Packaging' },
  { icon: Truck, label: 'Secure Delivery Across India' },
]

// Static threshold for the "free delivery" progress card — not React state,
// just a constant compared against the existing subtotal value.
const FREE_DELIVERY_THRESHOLD = 999

// Presentational only — owns its own scroll ref for the arrow buttons.
// Does not touch selections/coupon/cart state or handlers.
function CategoryRow({
cat,
selections,
updateQuantity,
onItemAdded
}) {
  const scrollRef = useRef(null)
  const Icon = cat.icon

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({ left: direction * 1100, behavior: 'smooth' })
  }

  return (
    <div id={`category-${cat.id}`} className="scroll-mt-24">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blush-light text-blush-dark">
    <Icon size={18} strokeWidth={1.75} />
  </span>

  <h3 className="font-display text-xl font-semibold text-cocoa">
    {cat.title}
  </h3>
</div>

        {/* <button
          type="button"
          className="hidden shrink-0 items-center gap-1 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-gold transition-colors duration-300 hover:text-cocoa sm:inline-flex"
        >
          View All
          <ArrowRight size={13} strokeWidth={2} />
        </button> */}
      </div>

      <div className="mt-4 h-px w-full bg-gradient-to-r from-cocoa/15 via-cocoa/5 to-transparent" />

      <div className="relative mt-5">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={`Scroll ${cat.title} left`}
          className="absolute -left-3 top-[68px] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-cocoa shadow-tag ring-1 ring-cocoa/10 transition-all duration-300 hover:scale-105 hover:bg-white md:flex"
        >
          <ChevronLeft size={16} strokeWidth={2} />
        </button>

        <div
          ref={scrollRef}
          className="flex max-w-[860px] gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cat.items.map((item) => {
            const qty = selections[item.id] || 0
            return (
              <div
                key={item.id}
className="group w-[180px] shrink-0 overflow-hidden rounded-3xl bg-cream shadow-soft ring-1 ring-cocoa/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-tag sm:w-[190px]"              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col gap-2.5 p-4">
                  <p className="truncate text-sm font-medium text-cocoa">{item.name}</p>
                  <p className="text-sm font-semibold text-gold">₹{item.price}</p>

                  <div className="mt-1 flex items-center justify-between gap-2 rounded-full border border-cocoa/15 bg-white/70 px-2 py-1.5">
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
                      onClick={()=>{
    updateQuantity(item.id,1)
    onItemAdded?.(item.name)
}}
                      className="flex h-7 w-7 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
                    >
                      <Plus size={13} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={`Scroll ${cat.title} right`}
          className="absolute -right-3 top-[68px] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-cocoa shadow-tag ring-1 ring-cocoa/10 transition-all duration-300 hover:scale-105 hover:bg-white md:flex"
        >
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}

export default function BuildYourOwnBouquet() {
  const { addCustomBouquet } = useCart()
  const navigate = useNavigate()
  const [selections, setSelections] = useState({}) // { [itemId]: quantity }
  const [appliedCoupon, setAppliedCoupon] = useState(null) // the applied offerTiers entry, or null
  const [toast, setToast] = useState(null)
  const [builderType, setBuilderType] = useState("bouquet")

  const allItems = useMemo(
  () =>
    customizationCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        ...item,
        layer: cat.layer,
        categoryId: cat.id,
      }))
    ),
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
  if (!toast) return

  const timer = setTimeout(() => {
    setToast(null)
  },1000)

  return ()=>clearTimeout(timer)

},[toast])

const handleItemAdded=(name)=>{
    setToast({
        id:Date.now(),
        name
    })
}

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
      image: bouquet_base,
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
      <AnimatePresence>
  {toast && (
    <motion.div
      key={toast.id}
      initial={{ opacity:0,y:-20 }}
      animate={{ opacity:1,y:0 }}
      exit={{ opacity:0,y:-20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-cocoa text-cream px-5 py-2 rounded-full"
    >
      + {toast.name} Added
    </motion.div>
  )}
</AnimatePresence>
      {/* Hero */}
      {/* Hero */}
{/* Hero */}
<section className="relative overflow-hidden bg-gradient-to-br from-cream via-[#fffaf6] to-blush-light/30">

  {/* Background Blur */}
  <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blush-light/40 blur-[120px]" />
  <div className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">

    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

      {/* ================= IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
        className="relative order-1 flex justify-center lg:order-2"
      >

        {/* Glow */}
        <div className="absolute h-[280px] w-[280px] rounded-full bg-blush-light/40 blur-[80px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />

        {/* Floating Icons */}
        <div className="absolute left-2 top-4 text-2xl sm:left-6 sm:top-10 sm:text-3xl">
          💕
        </div>

        <div className="absolute right-2 top-10 text-xl sm:right-8 sm:top-20 sm:text-2xl">
          ✨
        </div>

        <div className="absolute bottom-10 left-2 text-xl sm:bottom-20 sm:left-0 sm:text-2xl">
          🌸
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,.12)] sm:rounded-[40px] sm:p-4">

          <img
            src={build_hero}
            alt="Crochet Bouquet"
            className="w-[300px] rounded-2xl object-cover sm:w-[380px] lg:w-[430px]"
          />

        </div>

      </motion.div>

      {/* ================= TEXT ================= */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
        className="order-2 text-center lg:order-1 lg:text-left"
      >

        <p className="font-script text-2xl text-blush-dark sm:text-3xl">
          handmade just for you ✨
        </p>

        <h1 className="mt-3 font-display text-4xl leading-tight text-cocoa sm:text-5xl lg:mt-4 lg:text-6xl">
          Build Your
          <br />
          Bouquet or Hamper
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-cocoa-light lg:mx-0 lg:text-lg">
         Create your own personalized bouquet or luxury hamper with handmade flowers, chocolates, gifts and premium packaging.
        </p>

        {/* Features */}
        {/* <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

          <div className="rounded-full bg-white px-4 py-2 text-sm shadow-soft sm:px-5 sm:py-3">
            🌸 Handmade
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm shadow-soft sm:px-5 sm:py-3">
            🎁 Personalized
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm shadow-soft sm:px-5 sm:py-3">
            🚚 PAN India Delivery
          </div>

        </div> */}

        {/* Button */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">

          <Button
            variant="primary"
            as="a"
            href="#customize"
            className="rounded-full px-8 py-4 text-base shadow-xl"
          >
            Start Customizing
          </Button>

        </div>

        

      </motion.div>

    </div>

  </div>

</section>

<section className="bg-cream py-10">
  <div className="mx-auto max-w-5xl px-4">

    <div className="mb-8 text-center">
      <h2 className="font-display text-3xl text-cocoa">
        Choose What You Want To Create
      </h2>

      <p className="mt-2 text-cocoa-light">
        Select your preferred gifting style before customizing.
      </p>
    </div>

    <div className="mx-auto grid max-w-2xl grid-cols-2 gap-5">

  {/* Bouquet */}
  <button
    onClick={() => setBuilderType("bouquet")}
    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
      builderType === "bouquet"
        ? "border-gold shadow-xl ring-2 ring-gold/20"
        : "border-cocoa/10 hover:-translate-y-1 hover:shadow-lg"
    }`}
  >
    <div className="aspect-[4/3] overflow-hidden bg-cream">
      <img
        src={bouquet_base}
        alt="Bouquet"
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>

    <div className="p-5">
      <h3 className="font-display text-xl text-cocoa">
        Custom Bouquet
      </h3>

      <p className="mt-2 text-sm text-cocoa-light">
        Handmade crochet flowers with chocolates & gifts.
      </p>

      {builderType === "bouquet" && (
        <span className="mt-4 inline-block rounded-full bg-gold px-4 py-1 text-xs font-semibold text-white">
          Selected ✓
        </span>
      )}
    </div>
  </button>

  {/* Hamper */}
  <button
    onClick={() => setBuilderType("hamper")}
    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
      builderType === "hamper"
        ? "border-gold shadow-xl ring-2 ring-gold/20"
        : "border-cocoa/10 hover:-translate-y-1 hover:shadow-lg"
    }`}
  >
    <div className="aspect-[4/3] overflow-hidden bg-cream">
      <img
        src={hamper_base}
        alt="Luxury Hamper"
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>

    <div className="p-5">
      <h3 className="font-display text-xl text-cocoa">
        Luxury Hamper
      </h3>

      <p className="mt-2 text-sm text-cocoa-light">
        Gifts, chocolates, jewellery & premium packaging.
      </p>

      {builderType === "hamper" && (
        <span className="mt-4 inline-block rounded-full bg-gold px-4 py-1 text-xs font-semibold text-white">
          Selected ✓
        </span>
      )}
    </div>
  </button>

</div>

  </div>
</section>

      

      {/* Live customization builder */}
      <section id="customize" className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8 lg:pb-28">
        {/* <div className="mx-auto mb-4 max-w-xl text-center">
          <span className="font-script text-2xl leading-none text-blush-dark">
            watch it come together
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-cocoa sm:text-4xl">
            Customize Your Bouquet
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-cocoa-light sm:text-base">
            Choose every detail and watch your bouquet come alive in real time.
          </p>
          <p className="mt-2 text-xs font-medium text-gold">
            Every handmade piece you add updates your bouquet instantly.
          </p>
        </div> */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[7fr_3fr] lg:gap-10">
          {/* LEFT (70%): progress card + trust strip + all categories */}
          <div className="flex flex-col gap-10">
            {/* Progress card */}
            {/* <div className="rounded-3xl bg-blush-light/40 p-6 ring-1 ring-cocoa/10 sm:p-7">
              <p className="font-display text-lg font-semibold text-cocoa">
                ✨ Your Custom Bouquet
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-cocoa-light">
                Start by selecting your favourite flowers and build something truly unique.
              </p>
            </div> */}

            {/* Trust strip
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustStrip.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-2xl bg-white/50 px-4 py-3 ring-1 ring-cocoa/10"
                >
                  <Icon size={16} strokeWidth={1.75} className="shrink-0 text-gold" />
                  <span className="text-xs font-medium leading-tight text-cocoa">{label}</span>
                </div>
              ))}
            </div> */}

            {customizationCategories.map((cat) => (
              <CategoryRow
    key={cat.id}
    cat={cat}
    selections={selections}
    updateQuantity={updateQuantity}
    onItemAdded={handleItemAdded}
/>
            ))}
          </div>


          {/* RIGHT (30%): sticky live preview + order summary + offers */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            {/* 1. Live preview + status */}
            <div className="rounded-3xl bg-cream p-5 shadow-soft ring-1 ring-cocoa/10 sm:p-6">
              <h3 className="font-display text-lg font-semibold text-cocoa">
                ✨ Live Bouquet Preview
              </h3>

              <div className="relative mt-4 h-[340px] w-full overflow-hidden rounded-2xl bg-blush-light/30 sm:h-[360px]">
                <img
  src={builderType === "bouquet" ? bouquet_base : hamper_base}
  alt="Preview"
  className="h-full w-full object-cover opacity-90"
/>
                <AnimatePresence>
                  {selectedItems.map((item, i) => {
                    const pos = scatterPositions[Math.min(i, scatterPositions.length - 1)]
                    return (
                      <motion.img
                        key={item.id}
                        src={item.image}
                        alt={item.name}
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.4 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 object-contain sm:h-28 sm:w-28"
                        // style={{ top: pos.top, left: pos.left, zIndex: item.layer }}
                        style={{
  top: pos.top,
  left: `calc(${pos.left} - 50px)`,
  zIndex: item.layer,
}}
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

              {/* Dynamic status card — derived from selectedItems.length, no extra state */}
              <div className="mt-4 rounded-2xl bg-blush-light/40 px-4 py-3.5 ring-1 ring-cocoa/10">
                <p className="text-sm font-semibold text-cocoa">🌸 Your Bouquet</p>
                <p className="mt-0.5 text-xs text-cocoa-light">
                  {selectedItems.length > 0
                    ? `${selectedItems.length} Item${selectedItems.length > 1 ? 's' : ''} Added · Looking Beautiful ✨`
                    : 'No items added yet — start customizing below.'}
                </p>
              </div>
            </div>

            {/* 2. Order card: selected items + coupons + free delivery + summary + benefits, with a sticky CTA */}
            <div className="flex flex-col overflow-hidden rounded-3xl bg-white/60 shadow-soft ring-1 ring-cocoa/10 lg:max-h-[calc(100vh-7rem)]">
              <div className="flex-1 p-6 lg:overflow-y-auto lg:[&::-webkit-scrollbar]:w-1.5 lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-cocoa/15">
                {/* Selected Items */}
                <h3 className="font-display text-base font-semibold text-cocoa">
                  Selected Items
                </h3>

                {selectedItems.length > 0 ? (
                  <div className="mt-4 flex flex-col gap-2.5">
                    {selectedItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-2xl bg-cream/60 p-2.5"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-11 w-11 shrink-0 rounded-xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-cocoa">{item.name}</p>
                          <p className="text-xs text-cocoa-light">Qty {item.quantity}</p>
                        </div>
                        <span className="shrink-0 text-sm font-semibold text-cocoa">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-cocoa-light">No items added yet.</p>
                )}

                {/* Coupons */}
                <h3 className="mt-7 font-display text-base font-semibold text-cocoa">
                  Coupons
                </h3>
                <div className="mt-3 flex flex-col gap-2.5">
                  {offerTiers.map((tier) => {
                    const eligible = subtotal >= tier.threshold
                    const isApplied = appliedCoupon?.code === tier.code
                    return (
                      <div
                        key={tier.code}
                        className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 transition-colors duration-300 ${
                          isApplied
                            ? 'border-sage-dark/30 bg-sage-light/40'
                            : 'border-cocoa/12 bg-cream/50'
                        }`}
                      >
                        <div>
                          <p className="font-display text-sm font-semibold tracking-wide text-cocoa">
                            {tier.code}
                          </p>
                          <p className="mt-0.5 text-xs text-cocoa-light">
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

                {/* Free delivery progress — derived from existing subtotal, no new state */}
                <div className="mt-6 rounded-2xl border border-gold/30 bg-gold-light/25 p-4">
                  {subtotal >= FREE_DELIVERY_THRESHOLD ? (
                    <p className="text-sm font-semibold text-cocoa">🎉 Free Delivery Unlocked</p>
                  ) : (
                    <>
                      <p className="text-sm font-medium leading-relaxed text-cocoa">
                        Spend ₹{getMissingAmount(FREE_DELIVERY_THRESHOLD, subtotal)} more to unlock{' '}
                        <span className="font-semibold">FREE Delivery</span>
                      </p>
                      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-cocoa/10">
                        <div
                          className="h-full rounded-full bg-gold transition-all duration-500"
                          style={{
                            width: `${Math.min((subtotal / FREE_DELIVERY_THRESHOLD) * 100, 100)}%`,
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Price summary */}
                <div className="mt-6 flex flex-col gap-2 border-t border-cocoa/10 pt-5 text-sm text-cocoa-light">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Discount</span>
                    <span className={discount > 0 ? 'text-sage-dark' : ''}>
                      {discount > 0 ? `- ₹${discount}` : '₹0'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span className={subtotal >= FREE_DELIVERY_THRESHOLD ? 'text-sage-dark' : ''}>
                      {subtotal >= FREE_DELIVERY_THRESHOLD ? 'Free' : '₹49'}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-cocoa/10 pt-4">
                  <span className="font-display text-base font-semibold text-cocoa">Total</span>
                  <span className="font-display text-xl font-semibold text-cocoa">₹{total}</span>
                </div>

                {/* Delivery benefits */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-cocoa/10 pt-5">
                  {trustStrip.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                      <Icon size={16} strokeWidth={1.75} className="text-gold" />
                      <span className="text-[10px] font-medium leading-tight text-cocoa-light">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sticky Add to Cart — pinned to the bottom of this card */}
              <div className="sticky bottom-0 border-t border-cocoa/10 bg-white/95 p-5 backdrop-blur-sm">
                <button
                  type="button"
                  disabled={selectedItems.length === 0}
                  onClick={handleAddBouquetToCart}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-4 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
                >
                  <ShoppingBag size={18} strokeWidth={1.75} />
                  Add Bouquet to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
 