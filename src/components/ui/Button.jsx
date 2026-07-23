import { motion } from 'framer-motion'

const VARIANTS = {
  primary: 'bg-cocoa text-cream hover:bg-cocoa/90',
  outline: 'bg-transparent text-cocoa border border-cocoa/40 hover:border-cocoa hover:bg-cocoa/5',
  blush: 'bg-blush text-cocoa hover:bg-blush-dark',
  sage: 'bg-sage text-cream hover:bg-sage-dark',
  ghost: 'bg-transparent text-cream border border-cream/50 hover:bg-cream/10',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className="group relative inline-block"
    >
      <Tag
        className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide shadow-soft transition-all duration-300 group-hover:shadow-tag ${VARIANTS[variant]} ${className}`}
        {...props}
      >
        {/* subtle shine sweep on hover */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </Tag>
    </motion.div>
  )
}
