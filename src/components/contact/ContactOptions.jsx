import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { contactOptions } from '../../data/contactData'

export default function ContactOptions() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactOptions.map((option, i) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
            className="flex flex-col items-start gap-4 rounded-3xl bg-white/60 p-7 shadow-soft ring-1 ring-cocoa/10 backdrop-blur-sm transition-shadow duration-500 hover:shadow-tag"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-light text-3xl">
              {option.emoji}
            </span>
            <h3 className="font-display text-xl font-semibold text-cocoa">
              {option.title}
            </h3>
            <p className="text-sm leading-relaxed text-cocoa-light">{option.desc}</p>

            <a
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-cocoa px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-cocoa/90 hover:gap-3"
            >
              {option.buttonLabel}
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
