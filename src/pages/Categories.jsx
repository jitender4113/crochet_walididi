import { motion } from "framer-motion";
import StitchDivider from "../components/ui/StitchDivider";
import CategoryCard from "../components/categories/CategoryCard";
import { pageCategories } from "../data/categoriesData";

export default function Categories() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-cream-deep/60">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-script text-2xl leading-none text-blush-dark"
          >
            explore our world
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-display text-4xl font-medium text-cocoa sm:text-5xl"
          >
            Shop by Category
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm text-cocoa-light sm:text-base"
          >
            Four little worlds of handmade crochet, each stitched with the same care, thread by thread.
          </motion.p>
        </div>
      </section>

      <StitchDivider />

      {/* Category cards */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {pageCategories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
