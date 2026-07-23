import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ImagePlus, X, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react'
import Badge from './ui/Badge'

const STORAGE_PREFIX = 'cwd_reviews_'

// Deterministic seed reviews so each product has believable starting
// content instead of an empty list on first load.
function buildSeedReviews(productId, productName) {
  const seedPool = [
    {
      name: 'Ananya Sharma',
      rating: 5,
      text: `The ${productName.toLowerCase()} was even more beautiful in real life. Packaging was so thoughtful too!`,
      daysAgo: 6,
      verified: true,
      photos: [`https://picsum.photos/seed/review-${productId}-a/300/300`],
    },
    {
      name: 'Priya Verma',
      rating: 4,
      text: 'Lovely handmade quality, took a little longer to arrive than expected but totally worth the wait.',
      daysAgo: 14,
      verified: true,
      photos: [],
    },
    {
      name: 'Rohan Das',
      rating: 5,
      text: 'Ordered this as a gift and it was a huge hit. Will definitely be ordering again for future occasions.',
      daysAgo: 22,
      verified: false,
      photos: [`https://picsum.photos/seed/review-${productId}-b/300/300`, `https://picsum.photos/seed/review-${productId}-c/300/300`],
    },
  ]

  return seedPool.map((r, i) => ({
    id: `seed-${productId}-${i}`,
    name: r.name,
    rating: r.rating,
    text: r.text,
    date: new Date(Date.now() - r.daysAgo * 24 * 60 * 60 * 1000).toISOString(),
    verified: r.verified,
    photos: r.photos,
  }))
}

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function StarRow({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-gold text-gold' : 'text-cocoa/20'}
        />
      ))}
    </div>
  )
}

export default function ReviewsSection({ productId, productName }) {
  const storageKey = `${STORAGE_PREFIX}${productId}`
  const [reviews, setReviews] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(null) // index into allPhotos, or null

  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [text, setText] = useState('')
  const [photos, setPhotos] = useState([]) // array of base64 data URLs
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  // Load (or seed) reviews for this product on mount / when product changes
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) {
        setReviews(JSON.parse(raw))
      } else {
        const seeded = buildSeedReviews(productId, productName)
        setReviews(seeded)
        localStorage.setItem(storageKey, JSON.stringify(seeded))
      }
    } catch {
      setReviews(buildSeedReviews(productId, productName))
    }
    // Reset form when navigating between products
    setName('')
    setRating(0)
    setText('')
    setPhotos([])
    setError('')
  }, [storageKey, productId, productName])

  const averageRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0'

  // Flat list of every photo across all reviews, so the lightbox can
  // step through next/previous across review boundaries.
  const allPhotos = reviews.flatMap((review) =>
    (review.photos || []).map((src) => ({ src, reviewerName: review.name }))
  )

  const openLightbox = (photoSrc) => {
    const index = allPhotos.findIndex((p) => p.src === photoSrc)
    if (index !== -1) setLightboxIndex(index)
  }

  const closeLightbox = () => setLightboxIndex(null)

  const showPrev = () => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + allPhotos.length) % allPhotos.length
    )
  }

  const showNext = () => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % allPhotos.length
    )
  }

  // Keyboard navigation while the lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, allPhotos.length])

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files || [])
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        setPhotos((current) => [...current, reader.result])
      }
      reader.readAsDataURL(file)
    })
    // allow re-selecting the same file later
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const removePhoto = (index) => {
    setPhotos((current) => current.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim() || rating === 0 || !text.trim()) {
      setError('Please add your name, a star rating, and a review before submitting.')
      return
    }

    const newReview = {
      id: `review-${Date.now()}`,
      name: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toISOString(),
      verified: false,
      photos,
    }

    const updated = [newReview, ...reviews]
    setReviews(updated)
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated))
    } catch {
      // ignore storage write errors
    }

    setName('')
    setRating(0)
    setText('')
    setPhotos([])
    setError('')
  }

  return (
    <section className="mt-16 lg:mt-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-script text-xl leading-none text-blush-dark">
            what our customers say
          </span>
          <h2 className="mt-1 font-display text-2xl font-medium text-cocoa sm:text-3xl">
            Customer Reviews
          </h2>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/50 px-4 py-3 ring-1 ring-cocoa/10">
          <span className="font-display text-3xl font-semibold text-cocoa">
            {averageRating}
          </span>
          <div className="flex flex-col">
            <StarRow rating={Math.round(Number(averageRating))} size={13} />
            <span className="text-xs text-cocoa-light">
              {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
            </span>
          </div>
        </div>
      </div>

      {/* Review list */}
      {reviews.length > 0 ? (
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-white/50 p-5 ring-1 ring-cocoa/10 sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-display text-sm font-semibold text-cocoa sm:text-base">
                    {review.name}
                  </span>
                  {review.verified && (
                    <Badge variant="handmade" className="normal-case">
                      <BadgeCheck size={11} strokeWidth={2} />
                      Verified Purchase
                    </Badge>
                  )}
                </div>
                <span className="text-xs text-cocoa-light">{formatDate(review.date)}</span>
              </div>

              <div className="mt-2">
                <StarRow rating={review.rating} />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-cocoa-light sm:text-base">
                {review.text}
              </p>

              {review.photos?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {review.photos.map((photo, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => openLightbox(photo)}
                      className="transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={photo}
                        alt={`${review.name} review photo ${i + 1}`}
                        className="h-16 w-16 cursor-pointer rounded-xl object-cover ring-1 ring-cocoa/10 sm:h-20 sm:w-20"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-cocoa-light">No reviews yet. Be the first to share one!</p>
      )}

      {/* Write a review */}
      <div className="mt-10 rounded-2xl bg-white/50 p-5 ring-1 ring-cocoa/10 sm:p-6">
        <h3 className="font-display text-lg font-semibold text-cocoa">Write a Review</h3>

        <form onSubmit={handleSubmit} noValidate className="mt-4 flex flex-col gap-4">
          <div>
            <label htmlFor="review-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Name
            </label>
            <input
              id="review-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-2xl border border-cocoa/15 bg-white/60 px-4 py-3 text-sm text-cocoa placeholder:text-cocoa-light transition-all duration-300 focus:border-sage-dark/50 focus:outline-none"
            />
          </div>

          <div>
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Your Rating
            </span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => {
                const starValue = i + 1
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
                    onClick={() => setRating(starValue)}
                    className="p-0.5"
                  >
                    <Star
                      size={22}
                      className={starValue <= rating ? 'fill-gold text-gold' : 'text-cocoa/20'}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <label htmlFor="review-text" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Review
            </label>
            <textarea
              id="review-text"
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Tell us what you loved about this piece..."
              className="w-full resize-none rounded-2xl border border-cocoa/15 bg-white/60 px-4 py-3 text-sm text-cocoa placeholder:text-cocoa-light transition-all duration-300 focus:border-sage-dark/50 focus:outline-none"
            />
          </div>

          <div>
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light">
              Photos
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {photos.map((photo, i) => (
                <div key={i} className="relative">
                  <img
                    src={photo}
                    alt={`Upload preview ${i + 1}`}
                    className="h-16 w-16 rounded-xl object-cover ring-1 ring-cocoa/10"
                  />
                  <button
                    type="button"
                    aria-label="Remove photo"
                    onClick={() => removePhoto(i)}
                    className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-cocoa text-cream shadow-tag"
                  >
                    <X size={11} strokeWidth={2.5} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-cocoa/25 text-cocoa-light transition-colors duration-300 hover:border-cocoa/40 hover:text-cocoa"
              >
                <ImagePlus size={18} strokeWidth={1.5} />
                <span className="text-[10px]">Add</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && allPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-cocoa/90 px-4 py-10"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={closeLightbox}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-300 hover:bg-cream/20 sm:right-6 sm:top-6"
            >
              <X size={20} strokeWidth={2} />
            </button>

            {allPhotos.length > 1 && (
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation()
                  showPrev()
                }}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-300 hover:bg-cream/20 sm:left-6"
              >
                <ChevronLeft size={22} strokeWidth={2} />
              </button>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full max-w-full flex-col items-center gap-3"
            >
              <img
                src={allPhotos[lightboxIndex].src}
                alt={`${allPhotos[lightboxIndex].reviewerName} review photo`}
                className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-tag"
              />
              <p className="text-sm text-cream/80">
                Photo by {allPhotos[lightboxIndex].reviewerName} · {lightboxIndex + 1} of{' '}
                {allPhotos.length}
              </p>
            </motion.div>

            {allPhotos.length > 1 && (
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation()
                  showNext()
                }}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors duration-300 hover:bg-cream/20 sm:right-6"
              >
                <ChevronRight size={22} strokeWidth={2} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
