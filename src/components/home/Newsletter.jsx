import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Button from '../ui/Button'

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-sage-light/50 py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blush-light/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-gold-light/50 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-2xl flex-col items-center gap-5 px-4 text-center sm:px-6"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-cocoa ring-1 ring-cocoa/10">
          <Mail size={20} />
        </div>
        <h2 className="font-display text-3xl font-medium text-cocoa sm:text-4xl">
          Get First Dibs on New Drops
        </h2>
        <p className="text-sm text-cocoa-light sm:text-base">
          Join our little circle for early access to limited bouquets and 10% off your first order.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-cocoa/20 bg-cream px-5 py-3 text-sm text-cocoa placeholder:text-cocoa-light/70 focus:border-sage focus:outline-none"
          />
          <Button variant="primary" type="submit" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-cocoa-light/80">No spam, just yarn. Unsubscribe anytime.</p>
      </motion.div>
    </section>
  )
}
