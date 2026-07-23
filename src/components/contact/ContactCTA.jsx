import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { WhatsAppIcon } from './BrandIcons'

export default function ContactCTA() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-cocoa px-6 py-16 text-center shadow-soft sm:px-10 sm:py-20"
      >
        <div className="bg-grain absolute inset-0 opacity-40" />

        <div className="relative z-10">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-medium text-cream sm:text-4xl lg:text-5xl">
            Let's Create Something Beautiful Together ❤️
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-cocoa shadow-tag transition-all duration-300 hover:bg-blush hover:gap-3 sm:w-auto"
            >
              Order Now
              <ArrowUpRight size={17} strokeWidth={2} />
            </Link>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-cream/10 hover:gap-3 sm:w-auto"
            >
              <WhatsAppIcon size={17} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
