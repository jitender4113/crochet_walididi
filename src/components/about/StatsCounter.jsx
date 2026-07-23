import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { stats } from '../../data/aboutData'

function Counter({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="bg-cocoa py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="font-display text-3xl font-semibold text-blush sm:text-4xl lg:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
            </p>
            <p className="mt-2 text-xs text-cream/80 sm:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
