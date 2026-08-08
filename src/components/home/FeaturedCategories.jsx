import { motion } from "framer-motion";
import { categories } from "../../data/homeData";
import SectionHeading from "../ui/SectionHeading";
import { Link } from "react-router-dom";
import { Grid2x2 } from "lucide-react";

const MotionLink = motion(Link);

export default function FeaturedCategories({
  onCategoryClick,
  activeCategory,
  showAll = false,
}) {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <SectionHeading
        eyebrow="shop by feeling"
        title="Find Your Favourite Corner"
        subtitle="Four little worlds, all stitched by the same two hands."
      />

      <div
        className={`mt-10 grid gap-4 ${
          showAll
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5"
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5"
        }`}
      >
        {/* Categories */}
        {categories.map((cat, i) => {
          const isActive = activeCategory === cat.id;

          const card = (
            <div
              className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
                isActive
                  ? "ring-2 ring-cocoa shadow-xl"
                  : "bg-white/40 ring-1 ring-cocoa/10"
              }`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/60 via-cocoa/0 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="font-display text-base font-semibold text-cream sm:text-lg">
                    {cat.name}
                  </p>

                  <p className="hidden text-xs text-cream/80 sm:block">
                    {cat.tagline}
                  </p>
                </div>
              </div>
            </div>
          );

          /*
           * PRODUCTS PAGE
           * Category click filters products directly.
           */
          if (onCategoryClick) {
            return (
              <motion.button
                key={cat.id}
                type="button"
                onClick={() => onCategoryClick(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                className="text-left"
              >
                {card}
              </motion.button>
            );
          }

          /*
           * HOME PAGE
           * Category click goes to Products page
           * with category + from=home.
           */
          return (
            <MotionLink
              key={cat.id}
              to={`/products?category=${cat.id}&from=home`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
            >
              {card}
            </MotionLink>
          );
        })}

        {/* All */}
        {showAll && (
          <motion.button
            type="button"
            onClick={() => onCategoryClick("all")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{
              duration: 0.4,
              delay: categories.length * 0.08,
            }}
            className="text-left"
          >
            <div
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-300 ${
                activeCategory === "all"
                  ? "ring-2 ring-cocoa shadow-xl"
                  : "ring-1 ring-cocoa/10"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush-light to-cream-deep" />

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cocoa/10 blur-2xl" />

              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blush/30 blur-xl" />

              <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                  <Grid2x2
                    size={30}
                    className="text-cocoa"
                  />
                </div>

                <h3 className="font-display text-2xl font-semibold text-cocoa">
                  All
                </h3>

                <p className="mt-2 text-sm text-cocoa/70">
                  Browse every handmade creation
                </p>
              </div>
            </div>
          </motion.button>
        )}
      </div>
    </section>
  );
}