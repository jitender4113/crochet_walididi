import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Star } from 'lucide-react'
import SwingTag from '../components/ui/SwingTag'
import Badge from '../components/ui/Badge'
import ProductCard from '../components/ui/ProductCard'
import ReviewsSection from '../components/ReviewsSection'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { products } from '../data/productsData'

export default function ProductDetails() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const { isWishlisted, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()

  const product = useMemo(
    () => products.find((p) => String(p.id) === id),
    [id]
  )

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <p className="font-display text-2xl text-cocoa">We couldn't find that piece</p>
        <p className="text-sm text-cocoa-light">
          It may have sold out or the link may be incorrect.
        </p>
        <Link
          to="/products"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Back to Products
        </Link>
      </section>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Breadcrumb / back link */}
      <Link
        to="/products"
        className="mb-6 inline-flex items-center gap-2 text-sm text-cocoa-light transition-colors duration-300 hover:text-cocoa"
      >
        <ArrowLeft size={15} strokeWidth={2} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-white/50 ring-1 ring-cocoa/10"
        >
          <div className="relative aspect-square w-full overflow-hidden sm:aspect-[4/5]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <SwingTag className="absolute left-4 top-4">{product.badge}</SwingTag>
            )}
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              {product.category}
            </span>
            <h1 className="mt-2 font-display text-3xl font-medium text-cocoa sm:text-4xl">
              {product.name}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-display text-2xl font-semibold text-cocoa">
              ₹{product.price}
            </span>
            {product.rating && (
              <span className="flex items-center gap-1 text-sm text-cocoa-light">
                <Star size={15} className="fill-gold text-gold" />
                {product.rating}
              </span>
            )}
          </div>

          <Badge variant="handmade" className="w-fit normal-case">
            100% Handmade
          </Badge>

          <p className="text-sm leading-relaxed text-cocoa-light sm:text-base">
            {product.description}
          </p>

          {/* Quantity selector */}
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Quantity
            </span>
            <div className="inline-flex items-center gap-4 rounded-full border border-cocoa/15 bg-white/60 px-2 py-2">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10 disabled:opacity-40"
                disabled={quantity <= 1}
              >
                <Minus size={15} strokeWidth={2} />
              </button>
              <span className="w-6 text-center font-display text-base font-medium text-cocoa">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
              >
                <Plus size={15} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={() => addToCart(product.id, quantity)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
            >
              <ShoppingBag size={17} strokeWidth={1.75} />
              Add to Cart
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={isWishlisted(product.id)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa/30 px-6 py-3.5 text-sm font-semibold text-cocoa transition-all duration-300 hover:border-cocoa hover:bg-cocoa/5"
            >
              <Heart
                size={17}
                strokeWidth={1.75}
                className={isWishlisted(product.id) ? 'fill-blush-dark text-blush-dark' : ''}
              />
              {isWishlisted(product.id) ? 'Wishlisted' : 'Wishlist'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Reviews */}
      <ReviewsSection productId={product.id} productName={product.name} />

      {/* Related products */}
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
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
