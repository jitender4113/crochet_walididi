import { motion } from 'framer-motion'
import BuilderItemRow from './BuilderItemRow'

const ACCENT_RING = {
  blush: 'ring-blush-dark/30',
  sage: 'ring-sage-dark/30',
  gold: 'ring-gold/40',
}

/**
 * BuilderCategoryCard — a premium rounded card for one customization
 * category (Flowers, Chocolates, Gifts, etc). Lists its items as
 * BuilderItemRow entries with Add / stepper controls.
 */
export default function BuilderCategoryCard({ category, selections, onIncrease, onDecrease }) {
  const selectedCount = category.items.reduce(
    (sum, item) => sum + (selections[item.id] || 0),
    0
  )

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl bg-white/60 p-5 shadow-soft ring-1 backdrop-blur-sm sm:p-6 ${
        ACCENT_RING[category.accent] || 'ring-cocoa/10'
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cream text-xl shadow-tag ring-1 ring-cocoa/10">
            {category.emoji}
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-cocoa sm:text-xl">
              {category.title}
            </h3>
            <p className="text-xs text-cocoa-light sm:text-sm">{category.description}</p>
          </div>
        </div>
        {selectedCount > 0 && (
          <span className="shrink-0 rounded-full bg-cocoa px-2.5 py-1 text-xs font-semibold text-cream">
            {selectedCount}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2.5">
        {category.items.map((item) => (
          <BuilderItemRow
            key={item.id}
            item={item}
            quantity={selections[item.id] || 0}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </div>
    </motion.div>
  )
}
