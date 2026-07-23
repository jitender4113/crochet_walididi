import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      className={`flex max-w-xl flex-col gap-3 ${alignment}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {eyebrow && (
        <span className="font-script text-2xl leading-none text-blush-dark">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl font-medium text-balance text-cocoa sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-sm text-cocoa-light sm:text-base">{subtitle}</p>}
    </motion.div>
  )
}
