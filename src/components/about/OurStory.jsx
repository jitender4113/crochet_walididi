import { motion } from 'framer-motion'
import { Heart, Clock, Sparkles, Gift } from 'lucide-react'

const points = [
  { icon: Heart, text: 'Handmade with love' },
  { icon: Clock, text: 'Hours of craftsmanship' },
  { icon: Sparkles, text: 'Every stitch matters' },
  { icon: Gift, text: 'Every order is special' },
]

export default function OurStory() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-cocoa/10">
            <img
              src="https://picsum.photos/seed/our-story-crochet/800/900"
              alt="Handmade crochet work in progress"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-cream px-6 py-4 shadow-tag ring-1 ring-cocoa/10 sm:block">
            <p className="font-display text-2xl font-semibold text-sage-dark">100%</p>
            <p className="text-xs text-cocoa-light">Handmade, always</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="font-script text-2xl leading-none text-blush-dark">
            how it all began
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-cocoa sm:text-4xl">
            Our Story
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-cocoa-light sm:text-base">
            Crochet Wali Didi began at a small table, a single hook, and a heart full of
            patience. What started as a way to slow down and create something beautiful
            slowly grew into a little world of bouquets, keychains, toys and accessories —
            each one made by hand, never by a machine.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cocoa-light sm:text-base">
            Every bouquet you hold took hours of quiet looping and knotting. Every keychain
            was shaped stitch by stitch, with the same care as the very first piece ever
            made. Nothing here is factory-made — it is felt, considered, and finished with
            love before it ever reaches you.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cocoa-light sm:text-base">
            Because to us, every order isn't just a purchase. It's a story we get to be
            part of — and we intend to make every stitch worthy of that.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {points.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-2xl bg-white/50 px-4 py-3 ring-1 ring-cocoa/10"
              >
                <Icon size={18} strokeWidth={1.5} className="shrink-0 text-sage-dark" />
                <span className="text-sm font-medium text-cocoa">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
