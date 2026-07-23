import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { X, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import StitchDivider from '../ui/StitchDivider'
import { builderCategories } from '../../data/builderData'
import { saveCustomBouquet } from '../../utils/customBouquet'

/**
 * LivePreviewPanel — the right-hand "live bouquet preview".
 * Groups current selections by category, shows a running total, and
 * lets the person proceed to checkout with the bouquet saved for later.
 */
export default function LivePreviewPanel({ selections, onDecrease, onRemove, total }) {
  const navigate = useNavigate()

  const groups = builderCategories
    .map((category) => ({
      ...category,
      selectedItems: category.items.filter((item) => (selections[item.id] || 0) > 0),
    }))
    .filter((group) => group.selectedItems.length > 0)

  const isEmpty = groups.length === 0

  const handleProceedToCheckout = () => {
    if (isEmpty) return
    saveCustomBouquet(selections, total)
    navigate('/checkout')
  }

  return (
    <div className="sticky top-24 flex flex-col gap-5 rounded-3xl border border-white/60 bg-white/50 p-5 shadow-soft backdrop-blur-md sm:p-6">
      <div className="flex items-center gap-2">
        <Sparkles size={18} className="text-gold" />
        <h3 className="font-display text-xl font-semibold text-cocoa">Your Bouquet</h3>
      </div>

      {isEmpty ? (
        <p className="rounded-2xl bg-cream-deep/60 px-4 py-6 text-center text-sm text-cocoa-light">
          Start adding flowers, chocolates and little extras — your bouquet will take shape right here.
        </p>
      ) : (
        <div className="flex max-h-[360px] flex-col gap-4 overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {groups.map((group) => (
              <motion.div
                key={group.id}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-cocoa-light">
                  {group.emoji} Selected {group.title}
                </p>
                <div className="flex flex-col gap-1.5">
                  <AnimatePresence initial={false}>
                    {group.selectedItems.map((item) => {
                      const qty = selections[item.id]
                      return (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 12 }}
                          transition={{ duration: 0.25 }}
                          className="flex items-center justify-between rounded-xl bg-cream px-3 py-2 text-sm ring-1 ring-cocoa/10"
                        >
                          <span className="text-cocoa">
                            {item.name} <span className="text-cocoa-light">x{qty}</span>
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-cocoa">₹{item.price * qty}</span>
                            <button
                              aria-label={`Remove ${item.name} from bouquet`}
                              onClick={() => onRemove(item.id)}
                              className="text-cocoa-light transition-colors hover:text-blush-dark"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <StitchDivider className="py-0" />

      <div className="flex items-center justify-between">
        <span className="font-display text-base font-medium text-cocoa">Estimated Total</span>
        <motion.span
          key={total}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.25 }}
          className="font-display text-2xl font-semibold text-cocoa"
        >
          ₹{total}
        </motion.span>
      </div>

      <Button
        variant="sage"
        onClick={handleProceedToCheckout}
        className={`w-full ${isEmpty ? 'pointer-events-none opacity-50' : ''}`}
        aria-disabled={isEmpty}
        disabled={isEmpty}
      >
        Proceed to Checkout
      </Button>
    </div>
  )
}
