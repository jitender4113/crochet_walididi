import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { products } from '../data/productsData'
import { buildOrder, handlePlaceOrder } from '../utils/placeOrder.js'

const DELIVERY_CHARGE = 99
const FREE_DELIVERY_THRESHOLD = 1999

const initialForm = {
  name: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
}

function validateForm(form) {
  const errors = {}

  if (!form.name.trim()) errors.name = 'Name is required'

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid 10-digit phone number'
  }

  if (!form.address.trim()) errors.address = 'Address is required'
  if (!form.city.trim()) errors.city = 'City is required'
  if (!form.state.trim()) errors.state = 'State is required'

  if (!form.pincode.trim()) {
    errors.pincode = 'Pincode is required'
  } else if (!/^\d{6}$/.test(form.pincode.trim())) {
    errors.pincode = 'Enter a valid 6-digit pincode'
  }

  return errors
}

const inputClass =
  'w-full rounded-2xl border border-cocoa/15 bg-white/60 px-4 py-3 text-sm text-cocoa placeholder:text-cocoa-light transition-all duration-300 focus:border-sage-dark/50 focus:outline-none'

export default function Checkout() {
  const { cart, clearCart } = useCart()

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const cartItems = cart
    .map((entry) => {
      if (entry.type === 'custom-bouquet') return entry
      const product = products.find((p) => p.id === entry.id)
      return product ? { ...product, quantity: entry.quantity } : null
    })
    .filter(Boolean)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryCharge = cartItems.length === 0 || subtotal >= FREE_DELIVERY_THRESHOLD
    ? 0
    : DELIVERY_CHARGE
  const total = subtotal + deliveryCharge

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validateForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    if (cartItems.length === 0) return

    setSubmitting(true)

    const order = buildOrder({
      customer: form,
      items: cartItems,
      totals: { subtotal, deliveryCharge, total },
    })

    try {
      const result = await handlePlaceOrder(order)
      if (result?.success) {
        clearCart()
        setOrderPlaced(true)
      }
    } finally {
      setSubmitting(false)
    }
  }

  // Confirmation state after a successful placeholder order
  if (orderPlaced) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-light text-sage-dark">
            <CheckCircle2 size={28} strokeWidth={1.75} />
          </span>
          <p className="font-display text-2xl text-cocoa">Order received!</p>
          <p className="max-w-sm text-sm text-cocoa-light">
            Thank you for your order. We'll be in touch shortly to confirm the details.
          </p>
          <Link
            to="/products"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    )
  }

  // Empty cart guard
  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <p className="font-display text-xl text-cocoa">Your cart is empty</p>
        <p className="mt-2 text-sm text-cocoa-light">
          Add a few handmade pieces before checking out.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Explore Products
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Link
        to="/cart"
        className="mb-6 inline-flex items-center gap-2 text-sm text-cocoa-light transition-colors duration-300 hover:text-cocoa"
      >
        <ArrowLeft size={15} strokeWidth={2} />
        Back to Cart
      </Link>

      <div className="mb-8 text-center">
        <span className="font-script text-2xl leading-none text-blush-dark">
          one last step
        </span>
        <h1 className="mt-2 font-display text-3xl font-medium text-cocoa sm:text-4xl">
          Checkout
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        {/* Shipping form */}
        <form
          id="checkout-form"
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4 rounded-2xl bg-white/50 p-5 ring-1 ring-cocoa/10 sm:p-6 lg:col-span-2"
        >
          <h2 className="font-display text-lg font-semibold text-cocoa">
            Shipping Details
          </h2>

          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              placeholder="Your full name"
              className={inputClass}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              value={form.phone}
              onChange={handleChange('phone')}
              placeholder="10-digit mobile number"
              className={inputClass}
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="address" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Address
            </label>
            <textarea
              id="address"
              rows={3}
              value={form.address}
              onChange={handleChange('address')}
              placeholder="House no., street, locality"
              className={`${inputClass} resize-none`}
            />
            {errors.address && <p className="mt-1.5 text-xs text-red-500">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="city" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
                City
              </label>
              <input
                id="city"
                type="text"
                value={form.city}
                onChange={handleChange('city')}
                placeholder="City"
                className={inputClass}
              />
              {errors.city && <p className="mt-1.5 text-xs text-red-500">{errors.city}</p>}
            </div>

            <div>
              <label htmlFor="state" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
                State
              </label>
              <input
                id="state"
                type="text"
                value={form.state}
                onChange={handleChange('state')}
                placeholder="State"
                className={inputClass}
              />
              {errors.state && <p className="mt-1.5 text-xs text-red-500">{errors.state}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="pincode" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Pincode
            </label>
            <input
              id="pincode"
              type="text"
              inputMode="numeric"
              value={form.pincode}
              onChange={handleChange('pincode')}
              placeholder="6-digit pincode"
              className={`${inputClass} sm:w-1/2`}
            />
            {errors.pincode && <p className="mt-1.5 text-xs text-red-500">{errors.pincode}</p>}
          </div>

          {/* Mobile: submit button lives at the bottom of the form */}
          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90 disabled:opacity-60 lg:hidden"
          >
            <ShoppingBag size={17} strokeWidth={1.75} />
            {submitting ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>

        {/* Order summary */}
        <div className="h-fit rounded-2xl bg-white/60 p-6 ring-1 ring-cocoa/10">
          <h2 className="font-display text-lg font-semibold text-cocoa">
            Order Summary
          </h2>

          <div className="mt-4 flex flex-col gap-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="truncate text-sm font-medium text-cocoa">{item.name}</p>
                  <p className="text-xs text-cocoa-light">Qty {item.quantity}</p>
                </div>
                <span className="text-sm font-semibold text-cocoa">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-cocoa/10 pt-4 text-sm text-cocoa-light">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-cocoa-light">
            <span>Delivery Charge</span>
            <span>{deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge}`}</span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-cocoa/10 pt-4">
            <span className="font-display text-base font-semibold text-cocoa">Total</span>
            <span className="font-display text-lg font-semibold text-cocoa">₹{total}</span>
          </div>

          {/* Desktop: submit button lives in the summary panel, tied to the form via the "form" attribute */}
          <button
            type="submit"
            form="checkout-form"
            disabled={submitting}
            className="mt-6 hidden w-full items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90 disabled:opacity-60 lg:inline-flex"
          >
            <ShoppingBag size={17} strokeWidth={1.75} />
            {submitting ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>
      </div>
    </div>
  )
}
