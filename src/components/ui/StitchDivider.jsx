import { motion } from 'framer-motion'

/**
 * StitchDivider — the brand's signature element.
 * A hand-drawn crochet chain-stitch line that "hooks" itself in as it
 * scrolls into view. Used between sections instead of a plain <hr />.
 */
export default function StitchDivider({ color = '#C9A66B', className = '' }) {
  return (
    <div className={`relative flex w-full items-center justify-center py-2 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 24"
        className="h-6 w-full max-w-xs sm:max-w-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M2 12 C 20 2, 34 22, 50 12 C 66 2, 80 22, 96 12 C 112 2, 126 22, 142 12 C 158 2, 172 22, 188 12 C 204 2, 218 22, 234 12 C 250 2, 264 22, 280 12 C 296 2, 310 22, 326 12 C 342 2, 356 22, 372 12 C 384 6, 392 12, 398 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
