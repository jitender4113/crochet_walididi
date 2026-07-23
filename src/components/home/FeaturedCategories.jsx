import { motion } from 'framer-motion'
import { categories } from '../../data/homeData'
import SectionHeading from '../ui/SectionHeading'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)

export default function FeaturedCategories() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="shop by feeling"
        title="Find Your Favourite Corner"
        subtitle="Four little worlds, all stitched by the same two hands."
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <MotionLink
  to={`/products?category=${cat.id}`}
  key={cat.id}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -6 }}
  transition={{ duration: 0.5, delay: i * 0.08 }}
  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 ring-1 ring-cocoa/10"
>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/60 via-cocoa/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="font-display text-base font-semibold text-cream sm:text-lg">
                  {cat.name}
                </p>
                <p className="hidden text-xs text-cream/80 sm:block">{cat.tagline}</p>
              </div>
            </div>
          </MotionLink>
        ))}
      </div>
    </section>

    
  )
}
