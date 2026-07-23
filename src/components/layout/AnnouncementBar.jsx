const messages = [
  'Free shipping across India on orders over ₹999',
  'Every piece made to order, by hand — allow 3-5 days',
  'New: the Monsoon Bouquet Edit is here',
]

export default function AnnouncementBar() {
  const loop = [...messages, ...messages]

  return (
    <div className="relative overflow-hidden bg-cocoa py-2 text-cream">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-xs font-medium tracking-wide sm:text-[13px]">
        {loop.map((msg, i) => (
          <span key={i} className="flex items-center gap-3">
            <span className="text-gold">✦</span> {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
