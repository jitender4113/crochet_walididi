import { motion } from 'framer-motion'
import { Heart, Sparkles, Gift, Leaf, Hourglass, Award } from 'lucide-react'
import { whyHandmade } from '../../data/aboutData'

const iconMap = { Heart, Sparkles, Gift, Leaf, Hourglass, Award }

export default function WhyHandmade() {
  return (
    <section className="bg-cream-deep/60 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-script text-2xl leading-none text-blush-dark">
            the little difference
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-cocoa sm:text-4xl">
            Why Handmade Matters
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {whyHandmade.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-start gap-4 rounded-3xl bg-white/60 p-6 shadow-soft ring-1 ring-cocoa/10 backdrop-blur-sm transition-shadow duration-500 hover:shadow-tag sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-light text-blush-dark">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="font-display text-lg font-semibold text-cocoa">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-cocoa-light">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
