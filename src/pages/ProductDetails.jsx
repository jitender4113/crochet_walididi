import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import SwingTag from '../components/ui/SwingTag'
import Badge from '../components/ui/Badge'
import ProductCard from '../components/ui/ProductCard'
import ReviewsSection from '../components/common/ReviewsSection'
import ImageLightbox from '../components/common/ImageLightbox'

import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { products } from '../data/productsData'

export default function ProductDetails() {
  const { id } = useParams()

  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [showAllRelated, setShowAllRelated] = useState(false)

  const { isWishlisted, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()

  const galleryRef = useRef(null)

  // =========================================================
  // PRODUCT
  // =========================================================

  const product = useMemo(
    () => products.find((p) => String(p.id) === id),
    [id]
  )

  // =========================================================
  // GALLERY IMAGES
  // =========================================================

  const galleryImages = useMemo(() => {
    if (!product) return []

    return product.images && product.images.length > 0
      ? product.images
      : [product.image]
  }, [product])

  // =========================================================
  // RELATED PRODUCTS
  // =========================================================

  const allRelatedProducts = useMemo(() => {
    if (!product) return []

    const variants = products.filter(
      (p) =>
        p.subCategory === product.subCategory &&
        p.id !== product.id
    )

    const categoryProducts = products.filter(
      (p) =>
        p.category === product.category &&
        p.subCategory !== product.subCategory &&
        p.id !== product.id
    )

    return [...variants, ...categoryProducts]
  }, [product])

  const relatedProducts = showAllRelated
    ? allRelatedProducts
    : allRelatedProducts.slice(0, 8)

  // =========================================================
  // RESET WHEN PRODUCT CHANGES
  // =========================================================

  useEffect(() => {
    setSelectedImageIndex(0)
    setQuantity(1)

    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: 0,
        behavior: 'auto',
      })
    }
  }, [id])

  // =========================================================
  // GO TO IMAGE
  // =========================================================

  const goToImage = (index) => {
    if (!galleryRef.current || galleryImages.length === 0) {
      return
    }

    const total = galleryImages.length

    const safeIndex =
      ((index % total) + total) % total

    const container = galleryRef.current

    const slides = Array.from(container.children)

    const targetSlide = slides[safeIndex]

    if (!targetSlide) return

    container.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth',
    })

    setSelectedImageIndex(safeIndex)
  }

  // =========================================================
  // DETECT IMAGE WHILE SWIPING
  // =========================================================

  const handleGalleryScroll = () => {
    if (!galleryRef.current) return

    const container = galleryRef.current

    const slides = Array.from(container.children)

    if (!slides.length) return

    const currentScroll = container.scrollLeft

    let closestIndex = 0
    let closestDistance = Infinity

    slides.forEach((slide, index) => {
      const distance = Math.abs(
        slide.offsetLeft - currentScroll
      )

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setSelectedImageIndex(closestIndex)
  }

  // =========================================================
  // PRODUCT NOT FOUND
  // =========================================================

  if (!product) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <p className="font-display text-2xl text-cocoa">
          We couldn't find that piece
        </p>

        <p className="text-sm text-cocoa-light">
          It may have sold out or the link may be incorrect.
        </p>

        <Link
          to="/products"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
        >
          <ArrowLeft
            size={16}
            strokeWidth={2}
          />

          Back to Products
        </Link>
      </section>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

      {/* ===================================================== */}
      {/* BACK TO PRODUCTS */}
      {/* ===================================================== */}

      <Link
        to="/products"
        className="mb-6 inline-flex items-center gap-2 text-sm text-cocoa-light transition-colors duration-300 hover:text-cocoa"
      >
        <ArrowLeft
          size={15}
          strokeWidth={2}
        />

        Back to Products
      </Link>

      {/* ===================================================== */}
      {/* PRODUCT MAIN GRID */}
      {/* ===================================================== */}

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">

        {/* =================================================== */}
        {/* IMAGE GALLERY */}
        {/* =================================================== */}

        {/* ===================================================== */}
{/* IMAGE GALLERY */}
{/* ===================================================== */}

<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex min-w-0 flex-col gap-3"
>
  {/* Main Gallery */}
  <div className="relative rounded-2xl bg-white p-3 shadow-sm ring-1 ring-cocoa/10">

    {/* Previous Button */}
    {galleryImages.length > 1 && (
      <button
        type="button"
        onClick={() =>
          goToImage(selectedImageIndex - 1)
        }
        aria-label="Previous image"
        className="absolute left-5 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 text-cocoa shadow-tag ring-1 ring-cocoa/10 transition-all duration-300 hover:scale-105 hover:bg-white"
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </button>
    )}

    {/* Next Button */}
    {galleryImages.length > 1 && (
      <button
        type="button"
        onClick={() =>
          goToImage(selectedImageIndex + 1)
        }
        aria-label="Next image"
        className="absolute right-5 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 text-cocoa shadow-tag ring-1 ring-cocoa/10 transition-all duration-300 hover:scale-105 hover:bg-white"
      >
        <ChevronRight size={18} strokeWidth={2} />
      </button>
    )}

    {/* ================================================= */}
    {/* CAROUSEL VIEWPORT */}
    {/* ================================================= */}

    <div
      ref={galleryRef}
      onScroll={handleGalleryScroll}
      className="
        flex
        gap-3
        overflow-x-auto
        scroll-smooth
        snap-x
        snap-mandatory
        overscroll-x-contain
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
      style={{
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {galleryImages.map((img, index) => (
        <div
          key={`${img}-${index}`}
          className="
            relative
            w-[calc(100%-48px)]
            min-w-[calc(100%-48px)]
            shrink-0
            snap-start
          "
        >
          {/* EVERY IMAGE HAS EXACTLY SAME BOX */}
          <button
            type="button"
            onClick={() => {
              setSelectedImageIndex(index)
              setIsLightboxOpen(true)
            }}
            aria-label={`Open image ${index + 1} of ${product.name}`}
            className="
              relative
              block
              w-full
              overflow-hidden
              rounded-xl
              bg-white
              ring-1
              ring-cocoa/10
              cursor-zoom-in
            "
          >
            {/* FIXED IMAGE SIZE */}
            <div className="aspect-[4/5] w-full">
              <img
                src={img}
                alt={`${product.name} — view ${index + 1}`}
                draggable="false"
                className="block h-full w-full select-none object-cover"
              />
            </div>

            {/* Badge */}
            {index === 0 && product.badge && (
              <SwingTag className="absolute left-4 top-4">
                {product.badge}
              </SwingTag>
            )}
          </button>
        </div>
      ))}
    </div>

    {/* ================================================= */}
    {/* DOTS */}
    {/* ================================================= */}

    {galleryImages.length > 1 && (
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-cocoa/60 px-2.5 py-1.5 backdrop-blur-sm">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              selectedImageIndex === index
                ? 'w-5 bg-cream'
                : 'w-1.5 bg-cream/50'
            }`}
          />
        ))}
      </div>
    )}
  </div>

  {/* ================================================= */}
  {/* THUMBNAILS */}
  {/* ================================================= */}

  {galleryImages.length > 1 && (
    <div className="grid grid-cols-4 gap-3">
      {galleryImages.map((img, index) => (
        <button
          key={`${img}-thumb-${index}`}
          type="button"
          onClick={() => goToImage(index)}
          aria-label={`View image ${index + 1} of ${product.name}`}
          aria-pressed={selectedImageIndex === index}
          className={`relative aspect-square overflow-hidden rounded-xl ring-2 transition-all duration-300 ${
            selectedImageIndex === index
              ? 'ring-cocoa'
              : 'ring-transparent opacity-70 hover:opacity-100 hover:ring-cocoa/30'
          }`}
        >
          <img
            src={img}
            alt={`${product.name} thumbnail ${index + 1}`}
            draggable="false"
            className="block h-full w-full select-none object-cover"
          />
        </button>
      ))}
    </div>
  )}
</motion.div>

        {/* =================================================== */}
        {/* PRODUCT DETAILS */}
        {/* =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="flex flex-col gap-5"
        >

          {/* CATEGORY + NAME */}

          <div>

            <span className="text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              {product.category}
            </span>

            <h1 className="mt-2 font-display text-3xl font-medium text-cocoa sm:text-4xl">
              {product.name}
            </h1>

          </div>

          {/* PRICE + RATING */}

          <div className="flex items-center gap-4">

            <span className="font-display text-2xl font-semibold text-cocoa">
              ₹{product.price}
            </span>

            {product.rating && (
              <span className="flex items-center gap-1 text-sm text-cocoa-light">

                <Star
                  size={15}
                  className="fill-gold text-gold"
                />

                {product.rating}

              </span>
            )}

          </div>

          {/* HANDMADE */}

          <Badge
            variant="handmade"
            className="w-fit normal-case"
          >
            100% Handmade
          </Badge>

          {/* DESCRIPTION */}

          <p className="text-sm leading-relaxed text-cocoa-light sm:text-base">
            {product.description}
          </p>

          {/* ================================================= */}
          {/* QUANTITY */}
          {/* ================================================= */}

          <div>

            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Quantity
            </span>

            <div className="inline-flex items-center gap-4 rounded-full border border-cocoa/15 bg-white/60 px-2 py-2">

              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() =>
                  setQuantity(
                    (q) =>
                      Math.max(
                        1,
                        q - 1
                      )
                  )
                }
                disabled={quantity <= 1}
                className="flex h-8 w-8 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10 disabled:opacity-40"
              >
                <Minus
                  size={15}
                  strokeWidth={2}
                />
              </button>

              <span className="w-6 text-center font-display text-base font-medium text-cocoa">
                {quantity}
              </span>

              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() =>
                  setQuantity(
                    (q) =>
                      Math.min(
                        10,
                        q + 1
                      )
                  )
                }
                className="flex h-8 w-8 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
              >
                <Plus
                  size={15}
                  strokeWidth={2}
                />
              </button>

            </div>

          </div>

          {/* ================================================= */}
          {/* ACTION BUTTONS */}
          {/* ================================================= */}

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">

            {/* ADD TO CART */}

            <button
              type="button"
              onClick={() =>
                addToCart(
                  product.id,
                  quantity
                )
              }
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
            >
              <ShoppingBag
                size={17}
                strokeWidth={1.75}
              />

              Add to Cart
            </button>

            {/* WISHLIST */}

            <button
              type="button"
              onClick={() =>
                toggleWishlist(
                  product.id
                )
              }
              aria-pressed={isWishlisted(
                product.id
              )}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/30 px-6 py-3.5 text-sm font-semibold text-cocoa transition-all duration-300 hover:border-cocoa hover:bg-cocoa/5"
            >
              <Heart
                size={17}
                strokeWidth={1.75}
                className={
                  isWishlisted(
                    product.id
                  )
                    ? 'fill-blush-dark text-blush-dark'
                    : ''
                }
              />

              {isWishlisted(
                product.id
              )
                ? 'Wishlisted'
                : 'Wishlist'}
            </button>

          </div>

        </motion.div>

      </div>

      {/* ===================================================== */}
      {/* REVIEWS */}
      {/* ===================================================== */}

      <ReviewsSection
        productId={product.id}
        productName={product.name}
      />

      {/* ===================================================== */}
      {/* RELATED PRODUCTS */}
      {/* ===================================================== */}

      {relatedProducts.length > 0 && (
        <section className="mt-16 lg:mt-24">

          <div className="mb-6">

            <span className="font-script text-xl leading-none text-blush-dark">
              you may also love
            </span>

            <h2 className="mt-1 font-display text-2xl font-medium text-cocoa sm:text-3xl">
              Related Products
            </h2>

          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">

            {relatedProducts.map(
              (related) => (
                <ProductCard
                  key={related.id}
                  product={related}
                />
              )
            )}

          </div>

          {/* SEE MORE */}

          {allRelatedProducts.length >
            8 && (
            <div className="mt-8 flex justify-center">

              <button
                type="button"
                onClick={() =>
                  setShowAllRelated(
                    !showAllRelated
                  )
                }
                className="rounded-full border border-cocoa px-6 py-3 text-sm font-semibold text-cocoa transition hover:bg-cocoa hover:text-white"
              >
                {showAllRelated
                  ? 'Show Less'
                  : 'See More'}
              </button>

            </div>
          )}

        </section>
      )}

      {/* ===================================================== */}
      {/* LIGHTBOX */}
      {/* ===================================================== */}

      {isLightboxOpen && (
        <ImageLightbox
          images={galleryImages}
          initialIndex={
            selectedImageIndex
          }
          productName={product.name}
          onClose={() =>
            setIsLightboxOpen(false)
          }
        />
      )}

    </div>
  )
}