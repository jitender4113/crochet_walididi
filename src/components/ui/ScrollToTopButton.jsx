import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton({ threshold = 400 }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ y: -4, scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-cocoa text-cream shadow-tag transition-colors duration-300 hover:bg-cocoa/90 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
        >
          <ArrowUp size={20} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
