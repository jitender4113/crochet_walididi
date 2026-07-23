import { AnimatePresence, motion } from 'framer-motion'

export default function RouteLoader({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-cocoa/10"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: ['-100%', '10%', '60%', '100%'] }}
            transition={{ duration: 1.1, ease: 'easeInOut', repeat: Infinity }}
            className="h-full w-1/3 bg-gradient-to-r from-blush via-sage to-blush-dark"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
