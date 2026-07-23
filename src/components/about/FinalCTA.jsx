import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-cocoa px-6 py-16 text-center shadow-soft sm:px-10 sm:py-20"
      >
        <img
          src="https://picsum.photos/seed/final-cta-crochet/1400/700"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/80 to-cocoa/60" />

        <div className="relative z-10">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-medium text-cream sm:text-4xl lg:text-5xl">
            Bring Home Something Handmade With Love
          </h2>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-cocoa shadow-tag transition-all duration-300 hover:bg-blush hover:gap-3"
          >
            Explore Our Collection
            <ArrowUpRight size={17} strokeWidth={2} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
