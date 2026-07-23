import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="bg-cream-deep/60">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:py-20">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-script text-2xl leading-none text-blush-dark"
        >
          say hello
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 font-display text-4xl font-medium text-cocoa sm:text-5xl"
        >
          Let's Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cocoa-light sm:text-base"
        >
          Whether you want to order a handmade crochet product, learn crochet, or work
          with us, we'd love to hear from you.
        </motion.p>
      </div>
    </section>
  )
}
