import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import PageLoader from "./components/ui/PageLoader";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import './index.css'
import OurStory from "./pages/OurStory";


// Lazy-loaded pages: smaller initial bundle + a real loading state
// (shown via PageLoader) whenever a page chunk is being fetched.
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Categories = lazy(() => import("./pages/Categories"));
const BuildYourOwnBouquet = lazy(() => import("./pages/BuildYourOwnBouquet"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: 'products', element: withSuspense(Products) },
      { path: 'product/:id', element: withSuspense(ProductDetails) },
      { path: 'wishlist', element: withSuspense(Wishlist) },
      { path: 'cart', element: withSuspense(Cart) },
      { path: 'checkout', element: withSuspense(Checkout) },
      { path: "categories", element: withSuspense(Categories) },
      { path: "build-your-own-bouquet", element: withSuspense(BuildYourOwnBouquet) },
      // { path: 'about', element: withSuspense(About) },
      // { path: 'contact', element: withSuspense(Contact) },
      { path: 'our-story', element: withSuspense(OurStory) },
      { path: '*', element: withSuspense(NotFound) },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>,
)
