import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-cocoa sm:min-h-[80vh]">
      {/* Background image placeholder — replace src later */}
      <img
        src="https://picsum.photos/seed/crochet-hero-bg/1600/1000"
        alt="Handmade crochet texture"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/70 via-cocoa/60 to-cocoa/90" />
      <div className="bg-grain absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-script text-2xl leading-none text-blush sm:text-3xl"
        >
          our story, our stitches
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-balance font-display text-4xl font-medium text-cream sm:text-5xl lg:text-6xl"
        >
          Every Stitch Tells a Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-5 max-w-xl text-sm text-cream/85 sm:text-base"
        >
          Every creation is handmade with patience, love and creativity.
        </motion.p>
      </div>

      {/* Soft bottom fade into page background */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
