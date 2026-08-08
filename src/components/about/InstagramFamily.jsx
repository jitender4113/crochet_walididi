import { motion } from 'framer-motion'
import { CheckCircle2, Heart, Instagram } from 'lucide-react'
import instagramProfile from '../../assets/instagram-profile.webp'

const features = [
  { emoji: '✨', title: 'New Designs Every Week' },
  { emoji: '🧶', title: 'Custom Orders Available' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function YarnDecoration({ className }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className}>
      <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M10 24c10 5 20 5 40 1M9 34c11-4 21-4 42 2M17 12c6 9 6 22 0 32M42 10c-5 9-5 24 1 34"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CrochetFlower({ className }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <circle cx="30" cy="18" r="8" />
        <circle cx="42" cy="26" r="8" />
        <circle cx="38" cy="40" r="8" />
        <circle cx="22" cy="40" r="8" />
        <circle cx="18" cy="26" r="8" />
        <circle cx="30" cy="29" r="5" fill="currentColor" fillOpacity="0.15" />
      </g>
    </svg>
  )
}

export default function InstagramFamily() {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF8] py-24 lg:py-32">
      {/* Background decorations */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-[#FEF9EE] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-6 bottom-24 hidden lg:block"
      >
        <YarnDecoration className="h-20 w-20 text-[#683E22]/10" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="pointer-events-none absolute right-10 top-16 hidden lg:block"
      >
        <CrochetFlower className="h-16 w-16 text-[#FD7F79]/20" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-24 bottom-16 hidden sm:block"
      >
        <Heart className="h-6 w-6 text-[#FD7F79]/25" strokeWidth={1.2} />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[55%_45%] lg:gap-12">
          {/* PHONE */}
          {/* PHONE */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
  className="flex justify-center "
>
  <div className="relative w-[340px]">
    {/* Phone frame */}
    <div className="relative rounded-[2.75rem] bg-gradient-to-b from-[#3a2318] to-[#2B0F05] p-3 shadow-[0_60px_120px_-40px_rgba(43,15,5,0.45)]">
      {/* Side buttons */}
      <span className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l-full bg-[#2B0F05]/80" />
      <span className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l-full bg-[#2B0F05]/80" />
      <span className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-full bg-[#2B0F05]/80" />

      {/* Screen */}
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.25rem] bg-black">
        <img
          src={instagramProfile}
          alt="Instagram Profile"
          className="h-full w-full object-cover"
        />

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

        {/* Glass Reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent" />
      </div>
    </div>
  </div>
</motion.div>

          {/* RIGHT CONTENT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-script text-2xl leading-none text-[#FD7F79]"
            >
              let's stay close
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-4xl font-medium leading-[1.1] text-[#2B0F05] sm:text-5xl"
            >
              Join Our
              <br />
              Crochet Family
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-md text-base leading-relaxed text-[#683E22]/70 sm:text-lg"
            >
              Follow our handmade journey and discover behind-the-scenes moments, custom
              creations, product launches and daily crochet inspiration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="https://instagram.com/crochet_walididi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, boxShadow: '0 24px 55px -15px rgba(104,62,34,0.6)' }}
                whileTap={{ y: 0 }}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#683E22] px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_45px_-15px_rgba(104,62,34,0.5)] transition-colors duration-300 hover:bg-[#2B0F05] sm:text-base"
              >
                <Instagram size={18} strokeWidth={1.75} />
                Follow us on Instagram
              </motion.a>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-[#F4DAC7]/70 bg-white/50 p-5 text-center shadow-[0_20px_50px_-30px_rgba(43,15,5,0.35)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(43,15,5,0.4)]"
                >
                  <span className="text-2xl">{feature.emoji}</span>
                  <p className="mt-2 text-xs font-semibold text-[#2B0F05] sm:text-sm">
                    {feature.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* BOTTOM PROFILE BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_16px_40px_-24px_rgba(43,15,5,0.35)] ring-1 ring-[#F4DAC7]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#FD7F79] to-[#F4DAC7] text-white">
                <Instagram size={16} strokeWidth={1.75} />
              </span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wide text-[#683E22]/50">Instagram</p>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-[#2B0F05]">@crochet_walididi</span>
                  <CheckCircle2 size={14} className="text-[#FD7F79]" strokeWidth={2} fill="#FEF9EE" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}