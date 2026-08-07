import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useWishlist } from '../../context/WishlistContext.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { useProductSearch } from '../../hooks/useProductSearch.js'
import SearchSuggestions from '../common/SearchSuggestions.jsx'
import logo from '../../assets/logo.png'

// const mainLinks = [
//   { label: 'Home', to: '/' },
//   { label: 'Products', to: '/products' },
//   { label: 'categories', to: '/categories' },
//   { label: 'build', to: '/build-your-own-bouquet' },
//   { label: 'About Us', to: '/about' },
//   { label: 'Contact', to: '/contact' },
// ]

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  // { label: 'Categories', to: '/categories' },
  { label: 'Build', to: '/build-your-own-bouquet' },
  { label: 'Our Story', to: '/our-story' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { count: wishlistCount } = useWishlist()
  const { count: cartCount } = useCart()
  const searchResults = useProductSearch(searchQuery)
  const desktopSearchRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu + search + suggestions on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileSearchOpen(false)
    setDesktopSearchOpen(false)
    setSearchQuery('')
  }, [location.pathname])

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Close the desktop suggestions dropdown on outside click / Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target)) {
        setDesktopSearchOpen(false)
      }
    }
    const handleEscape = (e) => {
      if (e.key === 'Escape') setDesktopSearchOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`)
    setSearchQuery('')
    setDesktopSearchOpen(false)
    setMobileSearchOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-cream/95 shadow-soft backdrop-blur-sm' : 'bg-cream'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        {/* <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-xl font-semibold text-cocoa transition-colors duration-300 sm:text-2xl">
            Crochet Wali Didi
          </span>
          <span className="hidden font-script text-lg text-blush-dark sm:block">
            handmade, with love
          </span>
        </Link> */}
        <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Crochet Wali Didi"
    className="h-14 w-auto sm:h-16 lg:h-18"
  />
</Link>

        {/* Desktop center nav */}
        <div className="hidden items-center gap-9 lg:flex">
          {mainLinks.map((link) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-sage-dark ${
                  active ? 'text-sage-dark' : 'text-cocoa'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-sage-dark transition-all duration-300 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            )
          })}
        </div>

        {/* Desktop right: search + wishlist + cart */}
        <div className="hidden items-center gap-5 lg:flex">
          <div ref={desktopSearchRef} className="relative">
            <div className="flex items-center gap-2 rounded-full border border-cocoa/15 bg-cream-deep/60 px-4 py-2 transition-all duration-300 focus-within:border-sage-dark/50 focus-within:bg-cream">
              <Search size={16} strokeWidth={1.5} className="shrink-0 text-cocoa-light" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setDesktopSearchOpen(true)
                }}
                onFocus={() => setDesktopSearchOpen(true)}
                placeholder="Search handmade pieces..."
                aria-label="Search products by name or category"
                className="w-40 bg-transparent text-sm text-cocoa placeholder:text-cocoa-light focus:outline-none xl:w-56"
              />
            </div>
            <AnimatePresence>
              {desktopSearchOpen && searchQuery.trim() && (
                <SearchSuggestions
                  results={searchResults}
                  query={searchQuery}
                  onSelect={handleSelectProduct}
                  className="absolute left-0 right-0 top-full z-50 mt-2 w-80"
                />
              )}
            </AnimatePresence>
          </div>
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative text-cocoa transition-colors duration-300 hover:text-sage-dark"
          >
            <Heart size={20} strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blush text-[10px] font-bold text-cocoa">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative text-cocoa transition-colors duration-300 hover:text-sage-dark"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-cream">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile right: search icon + hamburger */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            aria-label="Search"
            className="text-cocoa transition-colors duration-300 hover:text-sage-dark"
            onClick={() => setMobileSearchOpen((s) => !s)}
          >
            <Search size={21} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Open menu"
            className="text-cocoa transition-colors duration-300 hover:text-sage-dark"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile expandable search bar */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-cocoa/10 bg-cream lg:hidden"
          >
            <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3 sm:px-6">
              <Search size={18} className="shrink-0 text-cocoa-light" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bouquets, totes, scrunchies..."
                aria-label="Search products by name or category"
                className="w-full bg-transparent text-sm text-cocoa placeholder:text-cocoa-light focus:outline-none"
                autoFocus
              />
              {searchQuery && (
                <button aria-label="Clear search" onClick={() => setSearchQuery('')}>
                  <X size={16} className="text-cocoa-light hover:text-cocoa" />
                </button>
              )}
            </div>
            <AnimatePresence>
              {searchQuery.trim() && (
                <SearchSuggestions
                  results={searchResults}
                  query={searchQuery}
                  onSelect={handleSelectProduct}
                  className="mx-4 mb-3 border-t-0 sm:mx-6"
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen slide menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex h-full w-full flex-col bg-cream lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <span className="font-display text-xl font-semibold text-cocoa">
                Crochet Wali Didi
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={26} className="text-cocoa" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
              {mainLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.35, ease: 'easeOut' }}
                >
                  <Link
                    to={link.to}
                    className="font-display text-3xl font-medium text-cocoa transition-colors duration-300 hover:text-sage-dark"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="flex items-center justify-center gap-10 border-t border-cocoa/10 px-6 py-8 text-cocoa"
            >
              <Link to="/wishlist" className="flex items-center gap-2">
                <Heart size={20} strokeWidth={1.5} />
                <span className="text-sm font-medium">Wishlist ({wishlistCount})</span>
              </Link>
              <Link to="/cart" className="flex items-center gap-2">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="text-sm font-medium">Cart ({cartCount})</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
