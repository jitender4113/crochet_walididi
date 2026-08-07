import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, UploadCloud, X } from 'lucide-react'
import { sendCustomRequestOnWhatsApp } from '../../utils/customRequest'

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5MB

const inputClass =
  'w-full rounded-2xl border border-cocoa/15 bg-white/60 px-4 py-3 text-sm text-cocoa placeholder:text-cocoa-light transition-all duration-300 focus:border-sage-dark/50 focus:outline-none'

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-cocoa-light'

export default function CustomRequestForm() {
  const [productName, setProductName] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isDragActive, setIsDragActive] = useState(false)
  const [imageError, setImageError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  // Revoke the previous object URL whenever the preview changes/unmounts
  useEffect(() => {
    if (!imagePreview) return
    return () => URL.revokeObjectURL(imagePreview)
  }, [imagePreview])

  const applyImageFile = (file) => {
    if (!file) return

    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setImageError('Only JPG, PNG or WEBP images are allowed')
      return
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setImageError('Image must be under 5MB')
      return
    }

    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
    setImageError('')
    setSubmitted(false)
  }

  const handleFileInput = (e) => {
    applyImageFile(e.target.files?.[0])
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragActive(false)
    applyImageFile(e.dataTransfer.files?.[0])
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!imageFile) {
      setImageError('Please attach a reference image')
      return
    }

    // sendCustomRequestOnWhatsApp(productName)
    await sendCustomRequestOnWhatsApp(productName, imageFile)
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-3xl bg-white/60 p-6 shadow-soft ring-1 ring-cocoa/10 backdrop-blur-sm sm:p-8"
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* Reference image */}
        <div>
          <span className={labelClass}>Reference Image *</span>

          {imagePreview ? (
            <div className="relative w-fit">
              <img
                src={imagePreview}
                alt="Reference upload preview"
                className="h-40 w-40 rounded-2xl object-cover ring-1 ring-cocoa/10 sm:h-48 sm:w-48"
              />
              <button
                type="button"
                aria-label="Remove image"
                onClick={removeImage}
                className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-cocoa text-cream shadow-tag transition-colors duration-300 hover:bg-cocoa/90"
              >
                <X size={14} strokeWidth={2.5} />
              </button>
              <p className="mt-2 max-w-[10rem] truncate text-xs text-cocoa-light">{imageFile?.name}</p>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragActive(true)
              }}
              onDragLeave={() => setIsDragActive(false)}
              onDrop={handleDrop}
              role="button"
              tabIndex={0}
              className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 py-10 text-center transition-colors duration-300 ${
                isDragActive
                  ? 'border-sage-dark/60 bg-sage-light/40'
                  : 'border-cocoa/25 hover:border-cocoa/40'
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-light text-cocoa">
                <UploadCloud size={22} strokeWidth={1.5} />
              </span>
              <p className="text-sm font-medium text-cocoa">
                Drag & drop your image, or{' '}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    fileInputRef.current?.click()
                  }}
                  className="text-sage-dark underline-offset-2 hover:underline"
                >
                  browse
                </button>
              </p>
              <p className="text-xs text-cocoa-light">JPG, PNG or WEBP · Max 5MB</p>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileInput}
            className="hidden"
          />
          {imageError && <p className="mt-1.5 text-xs text-red-500">{imageError}</p>}
        </div>

        {/* Product name */}
        <div>
          <label htmlFor="productName" className={labelClass}>
            Product Name (Optional)
          </label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="e.g. Sunflower Bouquet"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-semibold text-cream shadow-tag transition-all duration-300 hover:gap-3 hover:bg-cocoa/90 sm:w-fit"
        >
          <Send size={16} strokeWidth={1.75} />
          Ask Didi on WhatsApp 💛
        </button>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-sage-light px-4 py-3 text-xs font-medium leading-relaxed text-sage-dark sm:text-sm"
          >
            💬 Please attach your reference image in WhatsApp before sending the message.
          </motion.p>
        )}
      </form>
    </motion.div>
  )
}