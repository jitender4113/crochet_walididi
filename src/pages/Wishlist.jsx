import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ArrowLeft } from 'lucide-react'
import ProductCard from '../components/ui/ProductCard'
import { useWishlist } from '../context/WishlistContext.jsx'
import { products } from '../data/productsData'

export default function Wishlist() {
  const { wishlist } = useWishlist()

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Hero */}
      <div className="mb-10 text-center">
        <span className="font-script text-2xl leading-none text-blush-dark">
          saved with love
        </span>
        <h1 className="mt-2 font-display text-3xl font-medium text-cocoa sm:text-4xl">
          Your Wishlist
        </h1>
        {wishlistedProducts.length > 0 && (
          <p className="mt-2 text-sm text-cocoa-light">
            {wishlistedProducts.length}{' '}
            {wishlistedProducts.length === 1 ? 'piece' : 'pieces'} saved
          </p>
        )}
      </div>

      {wishlistedProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {wishlistedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 py-20 text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush-light text-blush-dark">
            <Heart size={26} strokeWidth={1.5} />
          </span>
          <p className="font-display text-xl text-cocoa">Your wishlist is empty</p>
          <p className="max-w-xs text-sm text-cocoa-light">
            Tap the heart on any piece you love to save it here for later.
          </p>
          <Link
            to="/products"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Explore Products
          </Link>
        </motion.div>
      )}
    </div>
  )
}
