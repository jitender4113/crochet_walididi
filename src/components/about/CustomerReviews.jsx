import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { reviews } from '../../data/aboutData'

export default function CustomerReviews() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="font-script text-2xl leading-none text-blush-dark">
          from our crochet family
        </span>
        <h2 className="mt-3 font-display text-3xl font-medium text-cocoa sm:text-4xl">
          Customer Love ❤️
        </h2>
      </div>

      <div className="mt-12 columns-1 gap-5 sm:columns-2 sm:gap-6 lg:columns-3">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: 'easeOut' }}
            whileHover={{ y: -5 }}
            className="mb-5 break-inside-avoid rounded-2xl bg-white/60 p-6 shadow-soft ring-1 ring-cocoa/10 backdrop-blur-sm transition-shadow duration-400 hover:shadow-tag sm:mb-6"
          >
            <Quote size={20} className="mb-2 text-blush-dark/60" />
            <p className="text-sm leading-relaxed text-cocoa">{review.text}</p>

            <div className="mt-5 flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-cream"
              />
              <div>
                <p className="text-sm font-semibold text-cocoa">{review.name}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
