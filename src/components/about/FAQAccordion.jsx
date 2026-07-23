import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../../data/aboutData'

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="text-center">
        <span className="font-script text-2xl leading-none text-blush-dark">
          curious minds
        </span>
        <h2 className="mt-3 font-display text-3xl font-medium text-cocoa sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl bg-white/60 ring-1 ring-cocoa/10"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span className="font-display text-base font-medium text-cocoa sm:text-lg">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blush-light text-cocoa"
                >
                  <Plus size={15} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-cocoa-light sm:px-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
