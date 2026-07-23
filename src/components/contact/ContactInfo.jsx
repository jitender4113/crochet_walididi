import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '../../data/contactData'

const iconMap = { Email: Mail, Phone: Phone, Location: MapPin }

export default function ContactInfo() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
        {contactInfo.map((info, i) => {
          const Icon = iconMap[info.type]
          return (
            <motion.div
              key={info.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 rounded-3xl bg-white/50 p-7 text-center ring-1 ring-cocoa/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-light text-blush-dark">
                <Icon size={20} strokeWidth={1.5} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-cocoa-light">
                {info.type}
              </p>
              <p className="font-display text-base font-medium text-cocoa sm:text-lg">
                {info.value}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
