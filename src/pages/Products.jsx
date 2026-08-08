import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useSearchParams } from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Search,
  X,
} from "lucide-react";

import ProductCard from "../components/ui/ProductCard";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";

import { products } from "../data/productsData";
import { matchesQuery } from "../hooks/useProductSearch";
import { categories } from "../data/homeData";

import FeaturedCategories from "../components/home/FeaturedCategories";


export default function Products() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const categoryParam =
    searchParams.get("category");

  const fromHome =
    searchParams.get("from") === "home";


  // --------------------------------------------------
  // Check valid category
  // --------------------------------------------------

  const isValidCategory =
    categoryParam &&
    categories.some(
      (cat) => cat.id === categoryParam
    );


  // --------------------------------------------------
  // Active category
  // --------------------------------------------------

  const [activeCategory, setActiveCategory] =
    useState(
      isValidCategory
        ? categoryParam
        : "all"
    );


  const [query, setQuery] =
    useState("");

  const [isLoading, setIsLoading] =
    useState(true);


  // Reference to products section
  const productsGridRef =
    useRef(null);


  // --------------------------------------------------
  // Keep active category synced with URL
  // --------------------------------------------------

  useEffect(() => {
    const nextCategory =
      categoryParam &&
      categories.some(
        (cat) => cat.id === categoryParam
      )
        ? categoryParam
        : "all";

    setActiveCategory(nextCategory);
  }, [categoryParam]);


  // --------------------------------------------------
  // Initial loading only
  // --------------------------------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);


  // --------------------------------------------------
  // HOME → CATEGORY → PRODUCTS
  //
  // Featured Categories will still be visible,
  // but page automatically scrolls to products.
  // --------------------------------------------------

  useEffect(() => {
    if (!fromHome || !categoryParam) {
      return;
    }

    /*
     * Wait until products are rendered,
     * then scroll directly to product grid.
     */
    const timer = setTimeout(() => {
      productsGridRef.current?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }, 350);

    return () => clearTimeout(timer);
  }, [fromHome, categoryParam]);


  // --------------------------------------------------
  // CATEGORY SELECT
  // --------------------------------------------------

  const selectCategory = (slug) => {
    setActiveCategory(slug);

    const next =
      new URLSearchParams(searchParams);

    /*
     * User is now interacting inside
     * Products page, so remove from=home.
     */
    next.delete("from");


    if (slug === "all") {
      next.delete("category");
    } else {
      next.set("category", slug);
    }


    setSearchParams(next, {
      replace: true,
    });


    /*
     * Scroll to products after category change.
     */
    setTimeout(() => {
      productsGridRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  };


  // --------------------------------------------------
  // CATEGORY → PRODUCT CATEGORY MAP
  // --------------------------------------------------

  const categoryFiltered = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }


    const map = {
      bouquets: "Flowers",
      bags: "Bags",
      "hair-accessories": "Hair Accessories",
      keychains: "Keychains",
      fashion: "Fashion",
    };


    const actualCategory =
      map[activeCategory];


    if (!actualCategory) {
      return products;
    }


    return products.filter(
      (product) =>
        product.category === actualCategory
    );
  }, [activeCategory]);


  // --------------------------------------------------
  // SEARCH FILTER
  // --------------------------------------------------

  const searchedProducts = useMemo(
    () =>
      categoryFiltered.filter(
        (product) =>
          matchesQuery(
            product,
            query
          )
      ),
    [
      categoryFiltered,
      query,
    ]
  );


  return (
    <>
      {/* ==================================================
          FEATURED CATEGORIES
          
          ALWAYS VISIBLE
          ================================================== */}

      <FeaturedCategories
        showAll={true}
        activeCategory={activeCategory}
        onCategoryClick={selectCategory}
      />


      {/* ==================================================
          PRODUCTS AREA
          ================================================== */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          py-10
          sm:px-6
          lg:px-8
          lg:py-14
        "
      >


        {/* =================================================
            SEARCH BAR
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            sticky
            top-[90px]
            z-30
            mx-auto
            mb-6
            flex
            max-w-xl
            items-center
            gap-3
            rounded-full
            border
            border-cocoa/15
            bg-cream/95
            px-5
            py-3
            shadow-soft
            backdrop-blur-sm
            transition-all
            duration-300
            focus-within:border-sage-dark/50
          "
        >

          <Search
            size={18}
            strokeWidth={1.5}
            className="
              shrink-0
              text-cocoa-light
            "
          />


          <input
            type="text"
            value={query}
            onChange={(e) =>
              setQuery(
                e.target.value
              )
            }
            placeholder="Search bouquets, totes, scrunchies..."
            className="
              w-full
              bg-transparent
              text-sm
              text-cocoa
              placeholder:text-cocoa-light
              focus:outline-none
            "
          />


          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() =>
                setQuery("")
              }
            >
              <X
                size={16}
                className="
                  text-cocoa-light
                  hover:text-cocoa
                "
              />
            </button>
          )}

        </motion.div>


        {/* =================================================
            CATEGORY CHIPS
            ================================================= */}

        <div
          className="
            mb-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-2.5
            sm:gap-3
          "
        >

          {categories.map(
            (cat) => {
              const active =
                activeCategory === cat.id;

              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() =>
                    selectCategory(
                      cat.id
                    )
                  }
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    ${
                      active
                        ? "bg-cocoa text-cream shadow-tag"
                        : "bg-white/60 text-cocoa ring-1 ring-cocoa/15 hover:bg-blush-light"
                    }
                  `}
                >
                  {cat.name}
                </motion.button>
              );
            }
          )}


          {/* ALL BUTTON */}

          <motion.button
            type="button"
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              selectCategory("all")
            }
            className={`
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
              transition-all
              ${
                activeCategory === "all"
                  ? "bg-cocoa text-cream shadow-tag"
                  : "bg-white/60 text-cocoa ring-1 ring-cocoa/15 hover:bg-blush-light"
              }
            `}
          >
            All
          </motion.button>

        </div>


        {/* =================================================
            CATEGORY TITLE
            ================================================= */}

        {activeCategory !== "all" && (
          <div
            className="
              mb-8
              text-center
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-cocoa-light
              "
            >
              Shop
            </p>


            <h1
              className="
                mt-1
                font-display
                text-3xl
                font-semibold
                text-cocoa
                sm:text-4xl
              "
            >
              {
                categories.find(
                  (cat) =>
                    cat.id ===
                    activeCategory
                )?.name
              }
            </h1>

          </div>
        )}


        {/* =================================================
            RESULT COUNT
            ================================================= */}

        <p
          className="
            mb-6
            text-center
            text-sm
            text-cocoa-light
          "
        >
          {isLoading
            ? "Fetching handmade pieces..."
            : `${searchedProducts.length} ${
                searchedProducts.length === 1
                  ? "piece"
                  : "pieces"
              } found`}
        </p>


        {/* =================================================
            PRODUCT GRID
            ================================================= */}

        {isLoading ? (

          <div
            ref={productsGridRef}
            className="
              scroll-mt-28
              grid
              grid-cols-2
              gap-5
              sm:grid-cols-3
              sm:gap-6
              lg:grid-cols-4
            "
          >

            {Array.from({
              length: 8,
            }).map(
              (_, i) => (
                <ProductCardSkeleton
                  key={i}
                  index={i}
                />
              )
            )}

          </div>

        ) : searchedProducts.length > 0 ? (

          <div
            ref={productsGridRef}
            className="
              scroll-mt-28
              grid
              grid-cols-2
              gap-5
              sm:grid-cols-3
              sm:gap-6
              lg:grid-cols-4
            "
          >

            <AnimatePresence mode="popLayout">

              {searchedProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                )
              )}

            </AnimatePresence>

          </div>

        ) : (

          <div
            className="
              flex
              flex-col
              items-center
              gap-2
              py-20
              text-center
            "
          >

            <p
              className="
                font-display
                text-xl
                text-cocoa
              "
            >
              No pieces found
            </p>


            <p
              className="
                text-sm
                text-cocoa-light
              "
            >
              Try a different search
              term or category.
            </p>

          </div>

        )}

      </div>
    </>
  );
}