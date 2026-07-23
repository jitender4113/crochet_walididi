import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function InstagramFamily() {
  return (
    <section className="bg-cream-deep/60 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-script text-2xl leading-none text-blush-dark"
        >
          let's stay close
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-3 font-display text-3xl font-medium text-cocoa sm:text-4xl"
        >
          Join Our Crochet Family
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 flex w-fit flex-col items-center gap-5 rounded-3xl bg-white/70 p-8 shadow-soft ring-1 ring-cocoa/10 backdrop-blur-sm sm:p-10"
        >
          {/* EDITABLE: replace this placeholder with your Instagram QR code */}
          <div className="flex h-44 w-44 items-center justify-center rounded-2xl border-2 border-dashed border-cocoa/25 bg-cream sm:h-52 sm:w-52">
            <span className="px-4 text-center text-xs text-cocoa-light">
              Your Instagram QR code goes here
            </span>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cocoa px-7 py-3 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:bg-cocoa/90 hover:gap-3"
          >
            <Instagram size={18} strokeWidth={1.75} />
            Follow us on Instagram
          </a>

          <p className="max-w-xs text-sm text-cocoa-light">
            Stay updated with new handmade creations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
