import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

import ProductCard from "../components/ui/ProductCard";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";

import { products } from "../data/productsData";
import { matchesQuery } from "../hooks/useProductSearch";
import { categories } from "../data/homeData";

import FeaturedCategories from "../components/home/FeaturedCategories";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get("category");

const isValidCategory =
  categoryParam && categories.some((c) => c.id === categoryParam);

const [activeCategory, setActiveCategory] = useState(
  isValidCategory ? categoryParam : "all"
);
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const scrollerRef = useRef(null)
  const isFirstRender = useRef(true)

  // Keep activeCategory in sync if the URL's ?category= changes — e.g. the
  // user clicks a different FeaturedCategories card while already here.
  useEffect(() => {
  const nextCategory =
    categoryParam && categories.some((c) => c.id === categoryParam)
      ? categoryParam
      : "all";

  setActiveCategory(nextCategory);
}, [categoryParam]);

  const selectCategory = (slug) => {
  setActiveCategory(slug)

  if (slug === "all") {
    const next = new URLSearchParams(searchParams);
    next.delete("category");
    setSearchParams(next, { replace: true });
  } else {
    setSearchParams({ category: slug }, { replace: true });
  }
};

  // Initial "fetch" simulation — shows skeletons before the grid renders
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  // Brief skeleton pulse when switching category, so the grid never
  // pops in instantly — feels like content is being fetched/filtered
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setIsLoading(true)
    const t = setTimeout(() => setIsLoading(false), 450)
    return () => clearTimeout(t)
  }, [activeCategory])

  // const categoryFiltered = useMemo(
  //   () =>
  //     activeCategory === 'all'
  //       ? products
  //       : products.filter((p) => p.subCategory === activeCategory),
  //   [activeCategory]
  // )

  const categoryFiltered = useMemo(() => {
  if (activeCategory === "all") return products;

  const map = {
    bouquets: "Flowers",
    bags: "Bags",
    "hair-accessories": "Hair Accessories",
    keychains: "Keychains",
    fashion: "Fashion",
  };

  return products.filter(
    (p) => p.category === map[activeCategory]
  );
}, [activeCategory]);

  const searchedProducts = useMemo(
    () => categoryFiltered.filter((p) => matchesQuery(p, query)),
    [categoryFiltered, query]
  )

  const bestSellers = useMemo(
    () => categoryFiltered.filter((p) => p.isBestSeller),
    [categoryFiltered]
  )

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <>

      <FeaturedCategories
  showAll={true}
  activeCategory={activeCategory}
  onCategoryClick={selectCategory}
/>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Always-visible search bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sticky top-[90px] z-30 mx-auto mb-6 flex max-w-xl items-center gap-3 rounded-full border border-cocoa/15 bg-cream/95 px-5 py-3 shadow-soft backdrop-blur-sm transition-all duration-300 focus-within:border-sage-dark/50"
        >
          <Search size={18} strokeWidth={1.5} className="shrink-0 text-cocoa-light" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bouquets, totes, scrunchies..."
            className="w-full bg-transparent text-sm text-cocoa placeholder:text-cocoa-light focus:outline-none"
          />
          {query && (
            <button aria-label="Clear search" onClick={() => setQuery('')}>
              <X size={16} className="text-cocoa-light hover:text-cocoa" />
            </button>
          )}
        </motion.div>

        {/* Category chips */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">

  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={() => selectCategory("all")}
    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
      activeCategory === "all"
        ? "bg-cocoa text-cream shadow-tag"
        : "bg-white/60 text-cocoa ring-1 ring-cocoa/15 hover:bg-blush-light"
    }`}
  >
    All
  </motion.button>

  {categories.map((cat) => {
    const active = activeCategory === cat.id;

    return (
      <motion.button
        key={cat.id}
        whileTap={{ scale: 0.95 }}
        onClick={() => selectCategory(cat.id)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          active
            ? "bg-cocoa text-cream shadow-tag"
            : "bg-white/60 text-cocoa ring-1 ring-cocoa/15 hover:bg-blush-light"
        }`}
      >
        {cat.name}
      </motion.button>
    );
  })}
</div>

        {/* Result count */}
        <p className="mb-6 text-center text-sm text-cocoa-light">
          {isLoading
            ? 'Fetching handmade pieces...'
            : `${searchedProducts.length} ${searchedProducts.length === 1 ? 'piece' : 'pieces'} found`}
        </p>

        {/* Pinterest-style masonry grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} index={i} />
            ))}
          </div>
        ) : searchedProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">

          <AnimatePresence>

          {searchedProducts.map((product) => (

          <ProductCard key={product.id} product={product} />

          ))}

          </AnimatePresence>

          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-20 text-center">
            <p className="font-display text-xl text-cocoa">No pieces found</p>
            <p className="text-sm text-cocoa-light">
              Try a different search term or category.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
