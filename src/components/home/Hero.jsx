import { motion } from 'framer-motion'
import Button from '../ui/Button'
import heroImage from "../../images/hero-bouquet.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-14">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 flex flex-col items-start gap-6 lg:order-1"
        >
          <span className="font-script text-3xl text-blush-dark sm:text-4xl">
            a little studio of yarn &amp; patience
          </span>
          <h1 className="font-display text-4xl font-medium leading-[1.1] text-balance text-cocoa sm:text-5xl lg:text-6xl">
            Handmade with Love,
            <br />
            Woven with Memories.
          </h1>
          <p className="max-w-md text-sm text-cocoa-light sm:text-base">
            Every bouquet, bag, and bow you see here was looped by hand, one stitch
            at a time — never mass-produced, never in a hurry.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="primary" as="a" href="#bestsellers">
              Shop Now
            </Button>
            <Button variant="outline" as="a" href="#categories">
              Explore Collections
            </Button>
          </div>

          <div className="mt-4 flex items-center gap-6 text-xs text-cocoa-light">
            <div className="flex flex-col">
              <span className="font-display text-xl text-cocoa">500+</span>
              handmade orders
            </div>
            <div className="h-8 w-px bg-cocoa/15" />
            <div className="flex flex-col">
              <span className="font-display text-xl text-cocoa">4.9★</span>
              average rating
            </div>
            <div className="h-8 w-px bg-cocoa/15" />
            <div className="flex flex-col">
              <span className="font-display text-xl text-cocoa">100%</span>
              made to order
            </div>
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-blush-light/70 blur-2xl" />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border-8 border-cream shadow-soft ring-1 ring-cocoa/10">
            <img
              src={heroImage}
              alt="Large handmade crochet flower bouquet in blush and sage tones"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating swing tag */}
          <motion.div
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-8 hidden rounded-tag bg-cream px-4 py-3 text-center shadow-tag ring-1 ring-cocoa/10 sm:block"
          >
            <p className="font-script text-xl leading-none text-blush-dark">from</p>
            <p className="font-display text-lg font-semibold text-cocoa">₹899</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
