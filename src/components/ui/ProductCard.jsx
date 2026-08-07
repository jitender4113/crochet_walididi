import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Star } from 'lucide-react'
import SwingTag from './SwingTag'
import { useWishlist } from '../../context/WishlistContext.jsx'

export default function ProductCard({ product, className = '' }) {
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishlisted = isWishlisted(product.id)

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl bg-white/50 ring-1 ring-cocoa/10 ${className}`}
    >
      <Link to={`/product/${product.id}`} className="flex flex-col">
        <div className="relative aspect-[5/6] w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* {product.badge && (
            <SwingTag className="absolute left-3 top-3">{product.badge}</SwingTag>
          )} */}
          {product.isBestSeller ? (
  <div className="absolute left-3 top-3 z-20 rounded-full bg-[#D4A017] px-3 py-1 text-xs font-semibold text-white shadow-md">
    ⭐ Best Seller
  </div>
) : (
  product.badge && (
    <SwingTag className="absolute left-3 top-3">
      {product.badge}
    </SwingTag>
  )
)}
          <button
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-pressed={wishlisted}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggleWishlist(product.id)
            }}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-cocoa shadow-tag transition-transform hover:scale-110"
          >
            <Heart
              size={15}
              strokeWidth={1.75}
              className={wishlisted ? 'fill-blush-dark text-blush-dark' : ''}
            />
          </button>
        </div>
        <div className="flex flex-col gap-1 p-3 sm:p-4">
          <p className="truncate font-display text-sm font-medium text-cocoa sm:text-base">
            {product.name}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-cocoa">₹{product.price}</span>
            {product.rating && (
              <span className="flex items-center gap-1 text-xs text-cocoa-light">
                <Star size={12} className="fill-gold text-gold" /> {product.rating}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

