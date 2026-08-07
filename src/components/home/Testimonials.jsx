import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/homeData'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
  eyebrow="happy customers"
  title="Loved by Our Customers"
  subtitle="Every kind word motivates us to keep creating handmade pieces with love."
/>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col gap-4 rounded-2xl bg-white/60 p-6 shadow-soft ring-1 ring-cocoa/10"
          >
            <div className="flex gap-1 text-gold">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} size={14} className="fill-gold" />
              ))}
            </div>
            <p className="font-script text-xl leading-snug text-cocoa">&ldquo;{t.text}&rdquo;</p>
            <div className="mt-auto text-sm text-cocoa-light">
              <span className="font-semibold text-cocoa">{t.name}</span> · {t.location}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
