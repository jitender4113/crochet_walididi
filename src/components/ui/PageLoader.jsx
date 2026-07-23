import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
          className="block h-10 w-10 rounded-full border-2 border-cocoa/15 border-t-sage-dark"
        />
        <span className="font-script text-lg text-blush-dark">just a stitch away...</span>
      </div>
    </div>
  )
}
