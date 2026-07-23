import { motion } from 'framer-motion'
import { processSteps } from '../../data/homeData'
import SectionHeading from '../ui/SectionHeading'

export default function ProcessTimeline() {
  return (
    <section className="bg-sage-light/40 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="how it's made"
          title="From Skein to Story"
          subtitle="A real, unhurried process — because a bouquet that took 8 hours shouldn't feel like it took 8 minutes."
        />

        <div className="relative mt-14">
          {/* connecting stitch line - desktop */}
          <div className="absolute left-0 right-0 top-8 hidden h-px lg:block">
            <svg width="100%" height="2" className="overflow-visible">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#C9A66B" strokeWidth="2" strokeDasharray="1 10" strokeLinecap="round" />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cream font-display text-xl font-semibold text-cocoa ring-2 ring-gold">
                  0{step.id}
                </div>
                <div className="mb-4 aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl ring-1 ring-cocoa/10">
                  <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display text-lg font-medium text-cocoa">{step.title}</h3>
                <p className="mt-1 text-sm text-cocoa-light">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
