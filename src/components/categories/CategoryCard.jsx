import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CategoryCard({ category, index = 0 }) {
  const { name, tagline, description, image } = category

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/40 ring-1 ring-cocoa/10 shadow-soft transition-shadow duration-500 hover:shadow-tag"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/5]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Gradient overlay, deepens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/20 to-transparent transition-opacity duration-500 group-hover:from-cocoa/90" />

        {/* Tagline chip */}
        <span className="absolute left-4 top-4 rounded-tag bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cocoa shadow-tag sm:left-5 sm:top-5">
          {tagline}
        </span>

        {/* Content over image */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 sm:p-7">
          <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            {name}
          </h3>

          {/* Description: always visible on mobile, reveals on hover on desktop */}
          <p
            className="max-w-md text-sm leading-relaxed text-cream/90 sm:max-h-0 sm:overflow-hidden sm:opacity-0 sm:transition-all sm:duration-500 sm:ease-out sm:group-hover:max-h-24 sm:group-hover:opacity-100"
          >
            {description}
          </p>

          <button
            type="button"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-cocoa transition-all duration-300 hover:bg-blush hover:gap-3"
          >
            Explore
            <ArrowUpRight size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
