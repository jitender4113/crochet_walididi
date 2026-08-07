import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { products } from '../../data/productsData'
import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'

const bestSellers = products.filter((product) => product.isBestSeller)

export default function BestSellers() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section id="bestsellers" className="bg-cream-deep/60 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="loved again & again"
            title="Best Sellers"
            subtitle="The pieces our customers keep coming back for."
          />
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/20 text-cocoa hover:bg-cocoa/5"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/20 text-cocoa hover:bg-cocoa/5"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {bestSellers.map((product) => (
            <div key={product.id} className="w-[62%] shrink-0 snap-start sm:w-[38%] lg:w-[23%]">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
