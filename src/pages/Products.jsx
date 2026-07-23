// import { useEffect, useMemo, useRef, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Search, X, ArrowLeft, ArrowRight } from 'lucide-react'
// import ProductCard from "../components/ui/ProductCard";
// import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";
// import { products, productCategories } from "../data/productsData";

// export default function Products() {
//   const [activeCategory, setActiveCategory] = useState('All')
//   const [query, setQuery] = useState('')
//   const [isLoading, setIsLoading] = useState(true)
//   const scrollerRef = useRef(null)
//   const isFirstRender = useRef(true)

//   // Initial "fetch" simulation — shows skeletons before the grid renders
//   useEffect(() => {
//     const t = setTimeout(() => setIsLoading(false), 700)
//     return () => clearTimeout(t)
//   }, [])

//   // Brief skeleton pulse when switching category, so the grid never
//   // pops in instantly — feels like content is being fetched/filtered
//   useEffect(() => {
//     if (isFirstRender.current) {
//       isFirstRender.current = false
//       return
//     }
//     setIsLoading(true)
//     const t = setTimeout(() => setIsLoading(false), 450)
//     return () => clearTimeout(t)
//   }, [activeCategory])

//   const categoryFiltered = useMemo(
//     () =>
//       activeCategory === 'All'
//         ? products
//         : products.filter((p) => p.category === activeCategory),
//     [activeCategory]
//   )

//   const searchedProducts = useMemo(
//     () =>
//       categoryFiltered.filter((p) =>
//         p.name.toLowerCase().includes(query.trim().toLowerCase())
//       ),
//     [categoryFiltered, query]
//   )

//   const bestSellers = useMemo(
//     () => categoryFiltered.filter((p) => p.bestseller),
//     [categoryFiltered]
//   )

//   const scrollBy = (dir) => {
//     scrollerRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
//   }

//   return (
//     <>
//       {/* Hero */}
//       <section className="bg-cream-deep/60">
//         <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
//           <motion.span
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="font-script text-2xl leading-none text-blush-dark"
//           >
//             crafted with love
//           </motion.span>
//           <motion.h1
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mt-3 font-display text-4xl font-medium text-balance text-cocoa sm:text-5xl lg:text-6xl"
//           >
//             Handmade Creations for Every Occasion
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mx-auto mt-4 max-w-xl text-sm text-cocoa-light sm:text-base"
//           >
//             From bouquets to wearables — every piece stitched by hand, one loop at a time.
//           </motion.p>
//         </div>
//       </section>

//       <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
//         {/* Always-visible search bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="sticky top-[72px] z-30 mx-auto mb-6 flex max-w-xl items-center gap-3 rounded-full border border-cocoa/15 bg-cream/95 px-5 py-3 shadow-soft backdrop-blur-sm transition-all duration-300 focus-within:border-sage-dark/50"
//         >
//           <Search size={18} strokeWidth={1.5} className="shrink-0 text-cocoa-light" />
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search bouquets, totes, scrunchies..."
//             className="w-full bg-transparent text-sm text-cocoa placeholder:text-cocoa-light focus:outline-none"
//           />
//           {query && (
//             <button aria-label="Clear search" onClick={() => setQuery('')}>
//               <X size={16} className="text-cocoa-light hover:text-cocoa" />
//             </button>
//           )}
//         </motion.div>

//         {/* Category chips */}
//         <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
//           {productCategories.map((cat) => {
//             const active = activeCategory === cat
//             return (
//               <motion.button
//                 key={cat}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 sm:px-5 ${
//                   active
//                     ? 'bg-cocoa text-cream shadow-tag'
//                     : 'bg-white/60 text-cocoa ring-1 ring-cocoa/15 hover:bg-blush-light'
//                 }`}
//               >
//                 {cat}
//               </motion.button>
//             )
//           })}
//         </div>

//         {/* Best Sellers — directly below categories */}
//         <AnimatePresence mode="wait">
//           {(isLoading || bestSellers.length > 0) && !query && (
//             <motion.section
//               key={activeCategory}
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               transition={{ duration: 0.4 }}
//               className="mb-16"
//             >
//               <div className="flex items-end justify-between gap-4">
//                 <div>
//                   <span className="font-script text-xl leading-none text-blush-dark">
//                     loved again &amp; again
//                   </span>
//                   <h2 className="mt-1 font-display text-2xl font-medium text-cocoa sm:text-3xl">
//                     Best Sellers
//                   </h2>
//                 </div>
//                 <div className="hidden gap-2 sm:flex">
//                   <button
//                     onClick={() => scrollBy(-1)}
//                     aria-label="Scroll left"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-colors duration-300 hover:bg-cocoa/5"
//                   >
//                     <ArrowLeft size={18} />
//                   </button>
//                   <button
//                     onClick={() => scrollBy(1)}
//                     aria-label="Scroll right"
//                     className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-colors duration-300 hover:bg-cocoa/5"
//                   >
//                     <ArrowRight size={18} />
//                   </button>
//                 </div>
//               </div>

//               <div
//                 ref={scrollerRef}
//                 className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//               >
//                 {isLoading
//                   ? Array.from({ length: 4 }).map((_, i) => (
//                       <div key={i} className="w-[58%] shrink-0 sm:w-[34%] lg:w-[22%]">
//                         <ProductCardSkeleton index={i} />
//                       </div>
//                     ))
//                   : bestSellers.map((product) => (
//                       <div key={product.id} className="w-[58%] shrink-0 snap-start sm:w-[34%] lg:w-[22%]">
//                         <ProductCard product={product} />
//                       </div>
//                     ))}
//               </div>
//             </motion.section>
//           )}
//         </AnimatePresence>

//         {/* Result count */}
//         <p className="mb-6 text-center text-sm text-cocoa-light">
//           {isLoading
//             ? 'Fetching handmade pieces...'
//             : `${searchedProducts.length} ${searchedProducts.length === 1 ? 'piece' : 'pieces'} found`}
//         </p>

//         {/* Pinterest-style masonry grid */}
//         {isLoading ? (
//           <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
//             {Array.from({ length: 8 }).map((_, i) => (
//               <ProductCardSkeleton key={i} index={i} />
//             ))}
//           </div>
//         ) : searchedProducts.length > 0 ? (
//           <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">

//           <AnimatePresence>

//           {searchedProducts.map((product) => (

//           <ProductCard key={product.id} product={product} />

//           ))}

//           </AnimatePresence>

//           </div>
//         ) : (
//           <div className="flex flex-col items-center gap-2 py-20 text-center">
//             <p className="font-display text-xl text-cocoa">No pieces found</p>
//             <p className="text-sm text-cocoa-light">
//               Try a different search term or category.
//             </p>
//           </div>
//         )}
//       </div>
//     </>
//   )
// }

import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowLeft, ArrowRight } from 'lucide-react'
import ProductCard from "../components/ui/ProductCard";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";
import { products, productFilterCategories } from "../data/productsData";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const isValidCategory = productFilterCategories.some((c) => c.slug === categoryParam)
  const [activeCategory, setActiveCategory] = useState(isValidCategory ? categoryParam : 'all')
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const scrollerRef = useRef(null)
  const isFirstRender = useRef(true)

  // Keep activeCategory in sync if the URL's ?category= changes — e.g. the
  // user clicks a different FeaturedCategories card while already here.
  useEffect(() => {
    const nextCategory = productFilterCategories.some((c) => c.slug === categoryParam)
      ? categoryParam
      : 'all'
    setActiveCategory((current) => (current === nextCategory ? current : nextCategory))
  }, [categoryParam])

  const selectCategory = (slug) => {
    setActiveCategory(slug)
    if (slug === 'all') {
      const next = new URLSearchParams(searchParams)
      next.delete('category')
      setSearchParams(next, { replace: true })
    } else {
      setSearchParams({ category: slug }, { replace: true })
    }
  }

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

  const categoryFiltered = useMemo(
    () =>
      activeCategory === 'all'
        ? products
        : products.filter((p) => p.subCategory === activeCategory),
    [activeCategory]
  )

  const searchedProducts = useMemo(
    () =>
      categoryFiltered.filter((p) =>
        p.name.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [categoryFiltered, query]
  )

  const bestSellers = useMemo(
    () => categoryFiltered.filter((p) => p.bestseller),
    [categoryFiltered]
  )

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-cream-deep/60">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-script text-2xl leading-none text-blush-dark"
          >
            crafted with love
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-display text-4xl font-medium text-balance text-cocoa sm:text-5xl lg:text-6xl"
          >
            Handmade Creations for Every Occasion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm text-cocoa-light sm:text-base"
          >
            From bouquets to wearables — every piece stitched by hand, one loop at a time.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Always-visible search bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="sticky top-[72px] z-30 mx-auto mb-6 flex max-w-xl items-center gap-3 rounded-full border border-cocoa/15 bg-cream/95 px-5 py-3 shadow-soft backdrop-blur-sm transition-all duration-300 focus-within:border-sage-dark/50"
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
          {productFilterCategories.map((cat) => {
            const active = activeCategory === cat.slug
            return (
              <motion.button
                key={cat.slug}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectCategory(cat.slug)}
                aria-pressed={active}
                className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 sm:px-5 ${
                  active
                    ? 'bg-cocoa text-cream shadow-tag'
                    : 'bg-white/60 text-cocoa ring-1 ring-cocoa/15 hover:bg-blush-light'
                }`}
              >
                {cat.label}
              </motion.button>
            )
          })}
        </div>

        {/* Best Sellers — directly below categories */}
        <AnimatePresence mode="wait">
          {(isLoading || bestSellers.length > 0) && !query && (
            <motion.section
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="mb-16"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="font-script text-xl leading-none text-blush-dark">
                    loved again &amp; again
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-medium text-cocoa sm:text-3xl">
                    Best Sellers
                  </h2>
                </div>
                <div className="hidden gap-2 sm:flex">
                  <button
                    onClick={() => scrollBy(-1)}
                    aria-label="Scroll left"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-colors duration-300 hover:bg-cocoa/5"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={() => scrollBy(1)}
                    aria-label="Scroll right"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-colors duration-300 hover:bg-cocoa/5"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div
                ref={scrollerRef}
                className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {isLoading
                  ? Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="w-[58%] shrink-0 sm:w-[34%] lg:w-[22%]">
                        <ProductCardSkeleton index={i} />
                      </div>
                    ))
                  : bestSellers.map((product) => (
                      <div key={product.id} className="w-[58%] shrink-0 snap-start sm:w-[34%] lg:w-[22%]">
                        <ProductCard product={product} />
                      </div>
                    ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

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
