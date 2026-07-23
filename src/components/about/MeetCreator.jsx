import { motion } from 'framer-motion'

export default function MeetCreator() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto h-40 w-40 sm:h-52 sm:w-52"
      >
        {/* EDITABLE: replace the image src below with the creator's photo */}
        <img
          src="https://i.pravatar.cc/400?img=47"
          alt="Founder of Crochet Wali Didi"
          className="h-full w-full rounded-full object-cover shadow-tag ring-4 ring-cream"
        />
        <span className="absolute inset-0 rounded-full ring-1 ring-cocoa/10" />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-6 block font-script text-2xl leading-none text-blush-dark"
      >
        the hands behind the hook
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="mt-2 text-balance font-display text-3xl font-medium text-cocoa sm:text-4xl"
      >
        Meet the Artist Behind Crochet Wali Didi
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cocoa-light sm:text-base"
      >
        Hi, I'm the maker behind every stitch here. What began as a quiet little hobby
        turned into a promise — that everything leaving this home would carry warmth,
        care, and a piece of my heart along with it. Thank you for letting my work be
        part of your special moments.
      </motion.p>
    </section>
  )
}
