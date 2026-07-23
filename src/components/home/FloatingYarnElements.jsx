import { motion } from 'framer-motion'

function YarnBall({ className = '', color = '#D9AFAE', size = 64 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      fill="none"
    >
      <circle cx="50" cy="50" r="46" fill={color} opacity="0.9" />
      <path
        d="M12 40c20 10 56 10 76 0M10 58c22 12 58 12 80 0M20 20c14 22 46 22 60 0M20 80c14-22 46-22 60 0"
        stroke="#fff"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CrochetHook({ className = '', size = 56 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none">
      <path
        d="M70 15c8 0 14 6 14 13s-6 12-13 12c-5 0-9-2-12-6"
        stroke="#C9A66B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M63 35 25 78"
        stroke="#C9A66B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="82" r="5" fill="#C9A66B" />
    </svg>
  )
}

const float = (duration, delay = 0) => ({
  animate: { y: [0, -14, 0], rotate: [0, 4, 0] },
  transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
})

export default function FloatingYarnElements() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div {...float(7)} className="absolute left-[4%] top-[14%] hidden sm:block">
        <YarnBall color="#D9AFAE" size={52} />
      </motion.div>

      <motion.div {...float(8, 1)} className="absolute right-[6%] top-[8%] hidden lg:block">
        <YarnBall color="#90A186" size={40} />
      </motion.div>

      <motion.div {...float(6.5, 0.5)} className="absolute bottom-[18%] left-[10%] hidden md:block">
        <CrochetHook size={46} />
      </motion.div>

      <motion.div {...float(9, 1.5)} className="absolute bottom-[10%] right-[16%] hidden sm:block">
        <YarnBall color="#C9A66B" size={34} />
      </motion.div>

      <motion.div {...float(7.5, 0.8)} className="absolute right-[2%] top-[48%] hidden xl:block">
        <YarnBall color="#D9AFAE" size={28} />
      </motion.div>
    </div>
  )
}
