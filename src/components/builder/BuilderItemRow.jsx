import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

/**
 * BuilderItemRow — one item inside a customization category card.
 * Shows an "Add" button when quantity is 0, and a highlighted
 * quantity stepper once the item has been added.
 */
export default function BuilderItemRow({ item, quantity, onIncrease, onDecrease }) {
  const selected = quantity > 0

  return (
    <motion.div
      layout
      className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-colors duration-300 ${
        selected
          ? 'bg-sage-light/60 ring-1 ring-sage-dark/40'
          : 'bg-white/50 ring-1 ring-cocoa/10 hover:bg-blush-light/40'
      }`}
    >
      <div className="flex flex-col">
        <span className="font-display text-sm font-medium text-cocoa sm:text-base">
          {item.name}
        </span>
        <span className="text-xs text-cocoa-light">₹{item.price}</span>
      </div>

      {selected ? (
        <div className="flex items-center gap-3 rounded-full bg-cream px-2 py-1 shadow-tag ring-1 ring-cocoa/10">
          <button
            aria-label={`Remove one ${item.name}`}
            onClick={() => onDecrease(item.id)}
            className="flex h-6 w-6 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-cocoa/10"
          >
            <Minus size={13} />
          </button>
          <span className="min-w-[1rem] text-center text-sm font-semibold text-cocoa">
            {quantity}
          </span>
          <button
            aria-label={`Add one more ${item.name}`}
            onClick={() => onIncrease(item.id)}
            className="flex h-6 w-6 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-cocoa/10"
          >
            <Plus size={13} />
          </button>
        </div>
      ) : (
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onIncrease(item.id)}
          className="flex items-center gap-1 rounded-full bg-cocoa px-3.5 py-1.5 text-xs font-semibold text-cream shadow-soft transition-colors hover:bg-cocoa/90"
        >
          <Plus size={13} /> Add
        </motion.button>
      )}
    </motion.div>
  )
}
