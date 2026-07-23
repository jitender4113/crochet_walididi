import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'cwd_cart'
const CartContext = createContext(null)

function readStoredCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  // cart: array of { id, quantity }
  const [cart, setCart] = useState(readStoredCart)

  // Persist to localStorage whenever the cart changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch {
      // ignore write errors (e.g. private browsing storage limits)
    }
  }, [cart])

  const isInCart = (productId) => cart.some((item) => item.id === productId)

  const getQuantity = (productId) =>
    cart.find((item) => item.id === productId)?.quantity ?? 0

  const addToCart = (productId, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === productId)
      if (existing) {
        return current.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...current, { id: productId, quantity }]
    })
  }

  // Adds a single composite "Custom Bouquet" cart line, carrying its own
  // included items and pricing breakdown (used by the Build Your Own
  // Bouquet page). Distinct from addToCart, which references productsData.
  const addCustomBouquet = ({ name, image, includedItems, subtotal, discount, total }) => {
    const bouquetEntry = {
      id: `custom-${Date.now()}`,
      type: 'custom-bouquet',
      quantity: 1,
      name,
      image,
      price: total,
      includedItems,
      subtotal,
      discount,
      total,
    }
    setCart((current) => [...current, bouquetEntry])
  }

  const removeFromCart = (productId) => {
    setCart((current) => current.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    setCart((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.id !== productId)
      }
      return current.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    })
  }

  const increaseQuantity = (productId) => {
    setCart((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (productId) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => setCart([])

  const count = cart.reduce((sum, item) => sum + item.quantity, 0)

  const value = {
    cart,
    count,
    isInCart,
    getQuantity,
    addToCart,
    addCustomBouquet,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
