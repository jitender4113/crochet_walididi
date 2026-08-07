import { AnimatePresence, motion } from 'framer-motion'
import { getBouquetVisualItems } from '../../utils/bouquetComposition'

/**
 * Renders the live bouquet preview using the deterministic composition
 * engine (src/utils/bouquetComposition.js) instead of the old circular
 * scatter/slot-cycling positioning. Purely presentational — receives
 * `selectedItems` and renders, nothing else.
 *
 * Each physical unit (quantity) of an item gets its own fanned-out
 * position, and animates in/out with Framer Motion when added or
 * removed. object-contain (not object-cover) preserves each item's
 * transparent PNG without cropping, and a soft alpha-aware drop-shadow
 * (rather than a boxy shadow) keeps overlapping items looking like a
 * real layered bouquet instead of flat stickers.
 */
export default function BouquetComposition({ selectedItems }) {
  const visuals = getBouquetVisualItems(selectedItems)

  return (
    <AnimatePresence>
      {visuals.map(({ key, item, top, left, rotate, scale, zIndex }, index) => (
        <motion.img
          key={key}
          src={item.image}
          alt={item.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale, rotate, x: '-50%', y: '-50%' }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 210,
            damping: 24,
            mass: 0.7,
            delay: index * 0.02,
          }}
          className="absolute h-16 w-16 select-none object-contain drop-shadow-[0_6px_10px_rgba(43,15,5,0.18)] sm:h-20 sm:w-20"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            zIndex,
          }}
          draggable={false}
        />
      ))}
    </AnimatePresence>
  )
}