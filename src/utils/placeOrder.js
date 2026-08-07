// const WHATSAPP_NUMBER = '911234567890'

// /**
//  * Builds the full order object from shipping details, cart items, an
//  * optional custom bouquet (from the Build Your Own Bouquet page), and
//  * totals. Keeping this separate from the UI so the shape is easy to
//  * reuse (e.g. to format a WhatsApp message) without touching Checkout.jsx.
//  */
// export function buildOrder({ customer, items, customBouquet = null, totals }) {
//   return {
//     customer,
//     items: items.map((item) => ({
//       id: item.id,
//       name: item.name,
//       price: item.price,
//       quantity: item.quantity,
//       subtotal: item.price * item.quantity,
//     })),
//     customBouquet: customBouquet
//       ? {
//           items: customBouquet.items.map((item) => ({
//             id: item.id,
//             name: item.name,
//             price: item.price,
//             quantity: item.quantity,
//             subtotal: item.subtotal ?? item.price * item.quantity,
//           })),
//           total: customBouquet.total,
//         }
//       : null,
//     totals,
//     createdAt: new Date().toISOString(),
//   }
// }

// /**
//  * Formats the order (customer details, regular cart items, custom
//  * bouquet items with quantities, and the total amount) into a readable
//  * WhatsApp message.
//  */
// function formatOrderForWhatsApp(order) {
//   const { customer, items, customBouquet, totals } = order

//   const lines = [
//     'New Order — Crochet Wali Didi',
//     '',
//     'Customer Details:',
//     `Name: ${customer.name}`,
//     `Phone: ${customer.phone}`,
//     `Address: ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}`,
//     '',
//   ]

//   if (items.length > 0) {
//     lines.push('Cart Items:')
//     items.forEach((item) => {
//       lines.push(`• ${item.name} x${item.quantity} — ₹${item.subtotal}`)
//     })
//     lines.push('')
//   }

//   if (customBouquet && customBouquet.items.length > 0) {
//     lines.push('Custom Bouquet:')
//     customBouquet.items.forEach((item) => {
//       lines.push(`• ${item.name} x${item.quantity} — ₹${item.subtotal}`)
//     })
//     lines.push(`Bouquet Total: ₹${customBouquet.total}`)
//     lines.push('')
//   }

//   lines.push(`Subtotal: ₹${totals.subtotal}`)
//   lines.push(`Delivery Charge: ${totals.deliveryCharge === 0 ? 'Free' : `₹${totals.deliveryCharge}`}`)
//   lines.push(`Total Amount: ₹${totals.total}`)

//   return lines.join('\n')
// }

// /**
//  * Called when the user clicks "Place Order". Opens WhatsApp with a
//  * prefilled message containing the customer details, cart items, any
//  * custom bouquet, and the total amount. Checkout.jsx clears the cart
//  * and the saved custom bouquet once this resolves successfully.
//  */
// export async function handlePlaceOrder(order) {
//   const message = formatOrderForWhatsApp(order)
//   const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

//   const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

//   return { success: true, order, whatsappOpened: Boolean(opened) }
// }

export const WHATSAPP_NUMBER = '9992175168'

/**
 * Builds the full order object from shipping details, cart items, an
 * optional custom bouquet (from the Build Your Own Bouquet page), and
 * totals. Keeping this separate from the UI so the shape is easy to
 * reuse (e.g. to format a WhatsApp message) without touching Checkout.jsx.
 */
export function buildOrder({ customer, items, customBouquet = null, totals }) {
  return {
    customer,
    items: items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      subtotal: item.price * item.quantity,
    })),
    customBouquet: customBouquet
      ? {
          items: customBouquet.items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            subtotal: item.subtotal ?? item.price * item.quantity,
          })),
          total: customBouquet.total,
        }
      : null,
    totals,
    createdAt: new Date().toISOString(),
  }
}

/**
 * Formats the order (customer details, regular cart items, custom
 * bouquet items with quantities, and the total amount) into a readable
 * WhatsApp message.
 */
function formatOrderForWhatsApp(order) {
  const { customer, items, customBouquet, totals } = order

  const lines = [
    'New Order — Crochet Wali Didi',
    '',
    'Customer Details:',
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Address: ${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}`,
    '',
  ]

  if (items.length > 0) {
    lines.push('Cart Items:')
    items.forEach((item) => {
      lines.push(`• ${item.name} x${item.quantity} — ₹${item.subtotal}`)
    })
    lines.push('')
  }

  if (customBouquet && customBouquet.items.length > 0) {
    lines.push('Custom Bouquet:')
    customBouquet.items.forEach((item) => {
      lines.push(`• ${item.name} x${item.quantity} — ₹${item.subtotal}`)
    })
    lines.push(`Bouquet Total: ₹${customBouquet.total}`)
    lines.push('')
  }

  lines.push(`Subtotal: ₹${totals.subtotal}`)
  lines.push(`Delivery Charge: ${totals.deliveryCharge === 0 ? 'Free' : `₹${totals.deliveryCharge}`}`)
  lines.push(`Total Amount: ₹${totals.total}`)

  return lines.join('\n')
}

/**
 * Called when the user clicks "Place Order". Opens WhatsApp with a
 * prefilled message containing the customer details, cart items, any
 * custom bouquet, and the total amount. Checkout.jsx clears the cart
 * and the saved custom bouquet once this resolves successfully.
 */
export async function handlePlaceOrder(order) {
  const message = formatOrderForWhatsApp(order)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

  return { success: true, order, whatsappOpened: Boolean(opened) }
}