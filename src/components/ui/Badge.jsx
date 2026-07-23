const VARIANTS = {
  handmade: 'bg-sage-light text-sage-dark ring-sage-dark/20',
  bestseller: 'bg-gold-light text-cocoa ring-gold/40',
  neutral: 'bg-cream text-cocoa ring-cocoa/10',
}

export default function Badge({ children, variant = 'neutral', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-tag px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-tag ring-1 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
