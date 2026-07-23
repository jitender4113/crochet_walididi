import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-cocoa py-16 text-cream lg:py-20">
      <div className="bg-grain absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6"
      >
        <span className="font-script text-3xl text-blush">a bouquet, waiting for its person</span>
        <h2 className="font-display text-3xl font-medium text-balance sm:text-5xl">
          Ready to Gift Something That Was Actually Made For You?
        </h2>
        <Button variant="blush" as="a" href="#bestsellers">
          Start Shopping
        </Button>
      </motion.div>
    </section>
  )
}
