import { motion } from 'framer-motion'
import { trending } from '../../data/homeData'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TrendingThisWeek() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="fresh off the hook"
        title="Trending This Week"
        subtitle="What everyone's adding to their cart right now."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6"
      >
        {trending.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
