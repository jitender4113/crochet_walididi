import { motion } from 'framer-motion'

/**
 * Wrap any section in this for a consistent fade+rise entrance
 * when it scrolls into view. Doesn't change layout or styling —
 * just standardizes the animation used across the site.
 */
export default function FadeInSection({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  amount = 0.25,
  className = '',
}) {
  const Tag = motion[as] || motion.div

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Tag>
  )
}
