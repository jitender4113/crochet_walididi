import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { PinterestIcon, WhatsAppIcon } from '../ui/BrandIcons'
import { socialLinks } from '../../data/contactData'

const iconMap = {
  Instagram: Instagram,
  Pinterest: PinterestIcon,
  WhatsApp: WhatsAppIcon,
}

export default function SocialMedia() {
  return (
    <section className="bg-cream-deep/60 py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-script text-2xl leading-none text-blush-dark">
            stay in touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-cocoa sm:text-4xl">
            Follow Our Journey
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {socialLinks.map((social, i) => {
            const Icon = iconMap[social.name]
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex flex-col items-center gap-3 rounded-3xl bg-white/60 p-7 text-center shadow-soft ring-1 ring-cocoa/10 backdrop-blur-sm transition-shadow duration-400 hover:shadow-tag"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-light text-sage-dark">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <p className="font-display text-lg font-semibold text-cocoa">
                  {social.name}
                </p>
                <p className="text-sm text-cocoa-light">{social.handle}</p>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
