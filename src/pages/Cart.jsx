import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { products } from '../data/productsData'

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  const navigate = useNavigate()

  const cartItems = cart
    .map((entry) => {
      if (entry.type === 'custom-bouquet') return entry
      const product = products.find((p) => p.id === entry.id)
      return product ? { ...product, quantity: entry.quantity } : null
    })
    .filter(Boolean)

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Hero */}
      <div className="mb-10 text-center">
        <span className="font-script text-2xl leading-none text-blush-dark">
          almost yours
        </span>
        <h1 className="mt-2 font-display text-3xl font-medium text-cocoa sm:text-4xl">
          Your Cart
        </h1>
        {cartItems.length > 0 && (
          <p className="mt-2 text-sm text-cocoa-light">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        )}
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Cart items */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <AnimatePresence initial={false}>
              {cartItems.map((item) =>
                item.type === 'custom-bouquet' ? (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4 rounded-2xl bg-white/50 p-3 ring-1 ring-cocoa/10 sm:p-4"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-1.5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-display text-sm font-medium text-cocoa sm:text-base">
                          {item.name}
                        </span>
                        <button
                          type="button"
                          aria-label="Remove item"
                          onClick={() => removeFromCart(item.id)}
                          className="text-cocoa-light transition-colors duration-300 hover:text-cocoa"
                        >
                          <X size={18} strokeWidth={1.75} />
                        </button>
                      </div>

                      <div className="text-xs text-cocoa-light">
                        <p className="font-medium text-cocoa">Included Items:</p>
                        <ul className="mt-1 flex flex-col gap-0.5">
                          {item.includedItems.map((included) => (
                            <li key={included.name}>
                              • {included.name} × {included.quantity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-1 inline-flex w-fit items-center gap-3 rounded-full border border-cocoa/15 bg-white/60 px-2 py-1">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
                        >
                          <Minus size={13} strokeWidth={2} />
                        </button>
                        <span className="w-5 text-center font-display text-sm font-medium text-cocoa">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
                        >
                          <Plus size={13} strokeWidth={2} />
                        </button>
                      </div>

                      <div className="mt-2 flex flex-col gap-0.5 border-t border-cocoa/10 pt-2 text-xs text-cocoa-light">
                        <div className="flex items-center justify-between">
                          <span>Subtotal</span>
                          <span>₹{item.subtotal}</span>
                        </div>
                        {item.discount > 0 && (
                          <div className="flex items-center justify-between text-sage-dark">
                            <span>Discount</span>
                            <span>- ₹{item.discount}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between font-semibold text-cocoa">
                          <span>Final Total</span>
                          <span>₹{item.total * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 rounded-2xl bg-white/50 p-3 ring-1 ring-cocoa/10 sm:p-4"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className="h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col gap-1.5">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-display text-sm font-medium text-cocoa transition-colors duration-300 hover:text-sage-dark sm:text-base"
                      >
                        {item.name}
                      </Link>
                      <span className="text-sm text-cocoa-light">₹{item.price}</span>

                      <div className="mt-1 inline-flex w-fit items-center gap-3 rounded-full border border-cocoa/15 bg-white/60 px-2 py-1">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
                        >
                          <Minus size={13} strokeWidth={2} />
                        </button>
                        <span className="w-5 text-center font-display text-sm font-medium text-cocoa">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
                        >
                          <Plus size={13} strokeWidth={2} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <button
                        type="button"
                        aria-label="Remove item"
                        onClick={() => removeFromCart(item.id)}
                      className="text-cocoa-light transition-colors duration-300 hover:text-cocoa"
                    >
                      <X size={18} strokeWidth={1.75} />
                    </button>
                    <span className="font-display text-sm font-semibold text-cocoa sm:text-base">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order summary */}
          <motion.div
            layout
            className="h-fit rounded-2xl bg-white/60 p-6 ring-1 ring-cocoa/10"
          >
            <h2 className="font-display text-lg font-semibold text-cocoa">
              Order Summary
            </h2>

            <div className="mt-4 flex items-center justify-between text-sm text-cocoa-light">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-cocoa-light">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-cocoa/10 pt-4">
              <span className="font-display text-base font-semibold text-cocoa">
                Total
              </span>
              <span className="font-display text-lg font-semibold text-cocoa">
                ₹{totalPrice}
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('/checkout')}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
            >
              <ShoppingBag size={17} strokeWidth={1.75} />
              Checkout
            </button>

            <Link
              to="/products"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-cocoa-light transition-colors duration-300 hover:text-cocoa"
            >
              <ArrowLeft size={15} strokeWidth={2} />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 py-20 text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush-light text-blush-dark">
            <ShoppingBag size={26} strokeWidth={1.5} />
          </span>
          <p className="font-display text-xl text-cocoa">Your cart is empty</p>
          <p className="max-w-xs text-sm text-cocoa-light">
            Explore our handmade pieces and add your favorites to the cart.
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
