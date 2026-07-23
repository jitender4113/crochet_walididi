import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Heart, Award } from 'lucide-react'

const badges = [
  { icon: Heart, label: '100% Handmade' },
  { icon: Award, label: 'Premium Quality Yarn' },
  { icon: Truck, label: 'Safe & Careful Packaging' },
  { icon: ShieldCheck, label: 'Loved by 500+ Customers' },
]

export default function TrustBadges() {
  return (
    <section className="bg-cream-deep/60 pt-8">
      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="flex items-center gap-3 rounded-2xl bg-white/50 px-4 py-4 ring-1 ring-cocoa/10 backdrop-blur-sm sm:px-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush-light text-blush-dark">
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <span className="text-xs font-medium leading-tight text-cocoa sm:text-sm">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
