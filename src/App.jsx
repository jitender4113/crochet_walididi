import { useEffect } from 'react'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnnouncementBar from './components/layout/AnnouncementBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import RouteLoader from './components/ui/RouteLoader'


export default function App() {
  const location = useLocation()
  const navigation = useNavigation()

  // Reset scroll position on every route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-cream">
      {/* Top loading bar */}
      <RouteLoader active={navigation.state === 'loading'} />

      <AnnouncementBar />
      <Navbar />

      <main className="min-h-[70vh]">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <Outlet />
        </motion.div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

