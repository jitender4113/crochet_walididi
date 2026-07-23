import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'cwd_wishlist'
const WishlistContext = createContext(null)

function readStoredWishlist() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(readStoredWishlist)

  // Persist to localStorage whenever the wishlist changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist))
    } catch {
      // ignore write errors (e.g. private browsing storage limits)
    }
  }, [wishlist])

  const isWishlisted = (productId) => wishlist.includes(productId)

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    )
  }

  const removeFromWishlist = (productId) => {
    setWishlist((current) => current.filter((id) => id !== productId))
  }

  const value = {
    wishlist,
    count: wishlist.length,
    isWishlisted,
    toggleWishlist,
    removeFromWishlist,
  }

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
