import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'

import { useWishlist } from '../../context/WishlistContext.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { useProductSearch } from '../../hooks/useProductSearch.js'
import SearchSuggestions from '../common/SearchSuggestions.jsx'
import logo from '../../assets/logo.webp'

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Bouquet/Hamper', to: '/build-your-own-bouquet' },
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

  // --------------------------------------------------
  // Navbar shadow/background on scroll
  // --------------------------------------------------
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // --------------------------------------------------
  // Close mobile menu/search when route changes
  // --------------------------------------------------
  useEffect(() => {
    setMobileOpen(false)
    setMobileSearchOpen(false)
    setDesktopSearchOpen(false)
    setSearchQuery('')
  }, [location.pathname])

  // --------------------------------------------------
  // Lock body scroll when mobile drawer is open
  // --------------------------------------------------
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // --------------------------------------------------
  // Close desktop search suggestions
  // --------------------------------------------------
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(e.target)
      ) {
        setDesktopSearchOpen(false)
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setDesktopSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // --------------------------------------------------
  // Search product selection
  // --------------------------------------------------
  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`)

    setSearchQuery('')
    setDesktopSearchOpen(false)
    setMobileSearchOpen(false)
  }

  // --------------------------------------------------
  // Close drawer
  // --------------------------------------------------
  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 shadow-soft backdrop-blur-sm'
          : 'bg-cream'
      }`}
    >
      {/* ==================================================
          MAIN NAVBAR
      ================================================== */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">

        {/* ==================================================
            LOGO
        ================================================== */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Crochet Wali Didi"
            className="h-14 w-auto sm:h-16 lg:h-18"
          />
        </Link>

        {/* ==================================================
            DESKTOP CENTER NAVIGATION
        ================================================== */}
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

        {/* ==================================================
            DESKTOP RIGHT SIDE
            SEARCH + WISHLIST + CART
        ================================================== */}
        <div className="hidden items-center gap-5 lg:flex">

          {/* Desktop Search */}
          <div
            ref={desktopSearchRef}
            className="relative"
          >
            <div className="flex items-center gap-2 rounded-full border border-cocoa/15 bg-cream-deep/60 px-4 py-2 transition-all duration-300 focus-within:border-sage-dark/50 focus-within:bg-cream">
              <Search
                size={16}
                strokeWidth={1.5}
                className="shrink-0 text-cocoa-light"
              />

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

          {/* Wishlist */}
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative text-cocoa transition-colors duration-300 hover:text-sage-dark"
          >
            <Heart
              size={20}
              strokeWidth={1.5}
            />

            {wishlistCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blush text-[10px] font-bold text-cocoa">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative text-cocoa transition-colors duration-300 hover:text-sage-dark"
          >
            <ShoppingBag
              size={20}
              strokeWidth={1.5}
            />

            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-cream">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* ==================================================
            MOBILE RIGHT SIDE

            SEARCH → CART → HAMBURGER
        ================================================== */}
        <div className="flex items-center gap-4 lg:hidden">

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="relative text-cocoa transition-colors duration-300 hover:text-sage-dark"
            onClick={() => setMobileSearchOpen((s) => !s)}
          >
            <Search
              size={21}
              strokeWidth={1.5}
            />
          </button>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative flex items-center justify-center text-cocoa transition-colors duration-300 hover:text-sage-dark"
          >
            <ShoppingBag
              size={21}
              strokeWidth={1.5}
            />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="text-cocoa transition-colors duration-300 hover:text-sage-dark"
            onClick={() => setMobileOpen(true)}
          >
            <Menu
              size={25}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </nav>

      {/* ==================================================
          MOBILE SEARCH BAR
      ================================================== */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
            }}
            className="overflow-hidden border-t border-cocoa/10 bg-cream lg:hidden"
          >
            <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3 sm:px-6">

              <Search
                size={18}
                className="shrink-0 text-cocoa-light"
              />

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
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery('')}
                >
                  <X
                    size={16}
                    className="text-cocoa-light hover:text-cocoa"
                  />
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

      {/* ==================================================
          MOBILE RIGHT SIDE DRAWER
          
          IMPORTANT:
          - Fixed to viewport
          - Solid white background
          - Dark overlay behind it
          - Works even after page scroll
      ================================================== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* ==================================================
                DARK BACKDROP

                This sits BEHIND the drawer.
                The actual website becomes darker.
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-[55] bg-black/45 lg:hidden"
            />

            {/* ==================================================
                WHITE RIGHT DRAWER

                bg-white is forced so it NEVER becomes
                transparent when page is scrolled.
            ================================================== */}
            <motion.aside
              initial={{
                x: '100%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[60] flex h-[100dvh] w-[82%] flex-col overflow-hidden bg-white !bg-white shadow-2xl lg:hidden sm:w-[65%]"
              style={{
                backgroundColor: '#ffffff',
                opacity: 1,
                isolation: 'isolate',
              }}
            >

              {/* ==================================================
                  DRAWER HEADER
              ================================================== */}
              <div className="flex shrink-0 items-center justify-between border-b border-cocoa/10 bg-white px-5 py-4">

                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="flex items-center"
                >
                  <img
                    src={logo}
                    alt="Crochet Wali Didi"
                    className="h-14 w-auto sm:h-16"
                  />
                </Link>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-cocoa transition-colors hover:bg-cream-deep"
                >
                  <X
                    size={28}
                    strokeWidth={1.7}
                  />
                </button>
              </div>

              {/* ==================================================
                  NAVIGATION LINKS
              ================================================== */}
              <div className="flex-1 overflow-y-auto bg-white px-6 py-6">

                {mainLinks.map((link, i) => {
                  const active = location.pathname === link.to

                  return (
                    <motion.div
                      key={link.label}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.08 + i * 0.06,
                        duration: 0.3,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        to={link.to}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-between border-b border-cocoa/10 py-6 font-display text-2xl font-medium transition-colors ${
                          active
                            ? 'text-sage-dark'
                            : 'text-cocoa hover:text-sage-dark'
                        }`}
                      >
                        <span>{link.label}</span>

                        <span className="text-xl text-cocoa-light">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* ==================================================
                  WISHLIST + CART
              ================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.3,
                }}
                className="shrink-0 border-t border-cocoa/10 bg-white px-6 pb-6"
              >

                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between border-b border-cocoa/10 py-5 text-cocoa"
                >
                  <div className="flex items-center gap-4">
                    <Heart
                      size={22}
                      strokeWidth={1.5}
                    />

                    <span className="text-base font-medium">
                      Wishlist ({wishlistCount})
                    </span>
                  </div>

                  <span className="text-xl text-cocoa-light">
                    →
                  </span>
                </Link>

                {/* Cart */}
                <Link
                  to="/cart"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between py-5 text-cocoa"
                >
                  <div className="flex items-center gap-4">
                    <ShoppingBag
                      size={22}
                      strokeWidth={1.5}
                    />

                    <span className="text-base font-medium">
                      Cart ({cartCount})
                    </span>
                  </div>

                  <span className="text-xl text-cocoa-light">
                    →
                  </span>
                </Link>

              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}