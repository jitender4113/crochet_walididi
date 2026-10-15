# Crochet Wali Didi — E-commerce Website

**Live Website:** https://crochet-walididi.vercel.app/

Crochet Wali Didi is a freelance e-commerce website developed for a small handmade crochet business. It gives customers an online storefront to explore crochet products, create a cart, customize bouquet selections, and send order details directly to the business through WhatsApp.

## Features

- **Product catalogue:** Browse handmade crochet products with product images, prices, and categories.
- **Product discovery:** Browse categories and search/filter products.
- **Product details:** View individual product information and images.
- **Shopping cart:** Add products, update quantities, and review the order total.
- **Wishlist:** Save favourite products for later.
- **Custom bouquet builder:** Select items to create a personalized bouquet.
- **Checkout form:** Collect customer name, phone number, and delivery address, with basic form validation.
- **WhatsApp order flow:** Generate a pre-filled WhatsApp message containing customer details, items, quantities, and order totals so the business can review and confirm the order.
- **Custom product requests:** Customers can submit a product name and reference image; the image is uploaded to Cloudinary and its link is included in the WhatsApp request.
- **Responsive design:** Designed for mobile and desktop shopping.
- **Persistent cart and wishlist:** Cart and wishlist data are saved in browser local storage.

## Tech Stack

- **Frontend:** React.js, JavaScript, HTML5, CSS3
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **UI and animation:** Framer Motion, Lucide React
- **Image uploads:** Cloudinary
- **Build tool:** Vite
- **Deployment:** Vercel

## How Orders Work

1. A customer browses products and adds items to the cart.
2. The customer enters their contact and delivery details at checkout.
3. The website formats the order details, including items and calculated totals, into a WhatsApp message.
4. WhatsApp opens with the message pre-filled for the business to review and confirm.
5. Custom product requests can include a Cloudinary-hosted reference image link.

**Order handling note:** In this version, order requests are handed off to WhatsApp. The project does not include a server-side order database, an admin order dashboard, or an integrated payment gateway.

## Run Locally

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone <your-repository-url>
cd <project-folder>
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── components/   # Reusable UI, layout, home, product and contact components
├── context/      # Cart and wishlist state management
├── data/         # Product, category and page content data
├── hooks/        # Reusable hooks, including product search
├── images/       # Website and category imagery
├── pages/        # Home, products, product details, cart, checkout and other pages
└── utils/        # Order-message formatting, custom requests and image upload helpers
```

## Business Use

The website provides the business with a branded online catalogue and a simpler way for customers to prepare order requests. The business reviews incoming WhatsApp requests and confirms availability, pricing, and delivery arrangements directly with the customer.

## Future Improvements

- Store orders in a backend database and provide order IDs.
- Add a secure admin dashboard for order status and inventory management.
- Integrate an online payment provider if required by the business.
- Add automated order notifications and order-volume/load testing after backend order processing is implemented.

---

Built as a freelance web development project for **Crochet Wali Didi**, a handmade crochet brand.
