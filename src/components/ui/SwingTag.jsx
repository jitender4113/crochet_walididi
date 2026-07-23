/**
 * SwingTag — a small kraft-paper "price tag" with a string loop.
 * Reinforces the handmade-boutique feel (used for prices, "New", "Bestseller").
 */
export default function SwingTag({ children, className = '' }) {
  return (
    <div className={`relative inline-flex items-center gap-1.5 rounded-tag bg-cream px-3 py-1 text-xs font-semibold text-cocoa shadow-tag ring-1 ring-cocoa/10 ${className}`}>
      <span className="absolute -top-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-cocoa/30 bg-cream" />
      {children}
    </div>
  )
}
