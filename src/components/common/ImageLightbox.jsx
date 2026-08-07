import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * ImageLightbox — fullscreen image viewer opened from the Product Details
 * gallery. Supports Previous/Next buttons, keyboard arrows + ESC, click
 * outside to close, swipe navigation on mobile, and zoom (hover/click to
 * zoom on desktop, pinch-to-zoom on mobile).
 */
export default function ImageLightbox({ images, initialIndex = 0, productName = '', onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const [scale, setScale] = useState(1)
  const [origin, setOrigin] = useState('center center')
  const touchState = useRef({ startX: 0, startY: 0, pinchDist: 0, baseScale: 1, isPinching: false })

  // Keep in sync if opened again on a different starting image
  useEffect(() => {
    setIndex(initialIndex)
    setScale(1)
  }, [initialIndex])

  // Lock background scroll while the lightbox is open
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [])

  const goNext = () => {
    setScale(1)
    setIndex((i) => (i + 1) % images.length)
  }

  const goPrev = () => {
    setScale(1)
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  // Keyboard: arrows to navigate, ESC to close
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, onClose])

  // Desktop: hover-to-zoom, following the cursor
  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
    setScale(2)
  }

  const handleMouseLeave = () => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setScale(1)
  }

  // Desktop/touch: click to toggle a locked zoom (useful when hover isn't available)
  const handleImageClick = (e) => {
    e.stopPropagation()
    if (scale > 1) {
      setScale(1)
      return
    }
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
    setScale(2)
  }

  const getTouchDistance = (touches) => {
    const [a, b] = touches
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY)
  }

  // Mobile: pinch-to-zoom + single-finger swipe to navigate
  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      touchState.current.isPinching = true
      touchState.current.pinchDist = getTouchDistance(e.touches)
      touchState.current.baseScale = scale
    } else if (e.touches.length === 1) {
      touchState.current.isPinching = false
      touchState.current.startX = e.touches[0].clientX
      touchState.current.startY = e.touches[0].clientY
    }
  }

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault()
      const dist = getTouchDistance(e.touches)
      const ratio = dist / (touchState.current.pinchDist || dist)
      const nextScale = Math.min(3, Math.max(1, touchState.current.baseScale * ratio))
      setScale(nextScale)
    }
  }

  const handleTouchEnd = (e) => {
    if (touchState.current.isPinching) {
      touchState.current.isPinching = false
      if (scale < 1.05) setScale(1)
      return
    }
    if (scale <= 1.05 && e.changedTouches.length === 1) {
      const dx = e.changedTouches[0].clientX - touchState.current.startX
      const dy = e.changedTouches[0].clientY - touchState.current.startY
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) goNext()
        else goPrev()
      }
    }
  }

  if (!images || images.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cocoa/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${productName} image gallery`}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-300 hover:bg-cream/20 sm:right-6 sm:top-6"
      >
        <X size={20} strokeWidth={2} />
      </button>

      {/* Image counter */}
      {images.length > 1 && (
        <span className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-cream/10 px-3 py-1 text-xs font-medium text-cream sm:top-6">
          {index + 1} / {images.length}
        </span>
      )}

      {/* Previous button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            goPrev()
          }}
          aria-label="Previous image"
          className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-300 hover:bg-cream/20 sm:left-6"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            goNext()
          }}
          aria-label="Next image"
          className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-300 hover:bg-cream/20 sm:right-6"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      )}

      {/* Zoomable image — click stopPropagation so it doesn't close the lightbox */}
      <div
        className="relative flex h-full max-h-[85vh] w-full max-w-4xl items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`${productName} — full view ${index + 1}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleImageClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transform: `scale(${scale})`, transformOrigin: origin }}
          className={`max-h-[85vh] w-auto max-w-full touch-none select-none rounded-lg object-contain transition-transform duration-200 ease-out ${
            scale > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          draggable={false}
        />
      </div>
    </motion.div>
  )
}
