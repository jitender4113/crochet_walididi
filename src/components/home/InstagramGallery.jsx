// import { motion } from 'framer-motion'
// import { Instagram } from 'lucide-react'
// import { instagramPosts } from '../../data/homeData'
// import SectionHeading from '../ui/SectionHeading'

// export default function InstagramGallery() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
//       <SectionHeading
//         eyebrow="@crochetwalididi"
//         title="Follow the Making, Not Just the Made"
//         subtitle="Behind-the-scenes loops, works-in-progress, and daily doses of yarn."
//       />

//       <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-6">
//         {instagramPosts.map((post, i) => (
//           <motion.a
//             key={post.id}
//             href="#"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.4, delay: i * 0.06 }}
//             className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-cocoa/10"
//           >
//             <img src={post.image} alt="Instagram post" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
//             <div className="absolute inset-0 flex items-center justify-center bg-cocoa/0 opacity-0 transition-all duration-300 group-hover:bg-cocoa/40 group-hover:opacity-100">
//               <Instagram size={20} className="text-cream" />
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { instagramPosts } from '../../data/homeData'
import SectionHeading from '../ui/SectionHeading'

export default function InstagramGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="follow us on instagram"
        title="Made with Love, Shared with You"
        subtitle="Explore our latest handmade creations, custom orders, and behind-the-scenes moments."
      />

      {/* Gallery */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {instagramPosts.map((post, i) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-cocoa/10"
          >
            <img
              src={post.image}
              alt="Instagram Post"
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cocoa/0 opacity-0 transition-all duration-300 group-hover:bg-cocoa/50 group-hover:opacity-100">
              <Instagram size={28} className="text-white" />
              <span className="mt-2 text-sm font-medium text-white">
                View on Instagram
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 rounded-3xl bg-blush-light/40 p-8 text-center ring-1 ring-cocoa/10"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
          <Instagram className="text-blush-dark" size={26} />
        </div>

        <h3 className="mt-5 font-display text-2xl text-cocoa">
          Love Our Handmade Creations?
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-cocoa-light">
          Follow <span className="font-semibold">@crochet_walididi</span> for
          new launches, custom orders, behind-the-scenes moments, and exclusive
          crochet inspiration.
        </p>

        <a
          href="https://www.instagram.com/crochet_walididi/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-blush px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-blush-dark"
        >
          <Instagram size={18} />
          Follow on Instagram
        </a>
      </motion.div>
    </section>
  )
}