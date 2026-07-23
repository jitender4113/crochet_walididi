import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { instagramPosts } from '../../data/homeData'
import SectionHeading from '../ui/SectionHeading'

export default function InstagramGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="@crochetwalididi"
        title="Follow the Making, Not Just the Made"
        subtitle="Behind-the-scenes loops, works-in-progress, and daily doses of yarn."
      />

      <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
        {instagramPosts.map((post, i) => (
          <motion.a
            key={post.id}
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-cocoa/10"
          >
            <img src={post.image} alt="Instagram post" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center bg-cocoa/0 opacity-0 transition-all duration-300 group-hover:bg-cocoa/40 group-hover:opacity-100">
              <Instagram size={20} className="text-cream" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
