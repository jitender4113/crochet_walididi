import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-lg text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-script text-2xl leading-none text-blush-dark"
        >
          oops, a dropped stitch
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 font-display text-6xl font-semibold text-cocoa sm:text-7xl"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm leading-relaxed text-cocoa-light sm:text-base"
        >
          We couldn't find the page you're looking for. Maybe it unravelled, or maybe it
          never existed — either way, let's get you back to something handmade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-cocoa px-7 py-3 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Back to Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-cocoa/30 px-7 py-3 text-sm font-semibold text-cocoa transition-all duration-300 hover:border-cocoa hover:bg-cocoa/5"
          >
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
