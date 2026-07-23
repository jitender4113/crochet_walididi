const HEIGHTS = ['h-56', 'h-64', 'h-72', 'h-60', 'h-80', 'h-68']

export default function ProductCardSkeleton({ index = 0 }) {
  const height = HEIGHTS[index % HEIGHTS.length]

  return (
    <div className="mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-white/50 ring-1 ring-cocoa/10 shadow-soft sm:mb-6">
      <div className={`w-full animate-pulse bg-gradient-to-br from-cream-deep to-blush-light/60 ${height}`} />
      <div className="flex flex-col gap-2 p-3 sm:p-4">
        <div className="h-4 w-3/4 animate-pulse rounded-full bg-cream-deep" />
        <div className="flex items-center justify-between">
          <div className="h-4 w-1/3 animate-pulse rounded-full bg-cream-deep" />
          <div className="h-3 w-10 animate-pulse rounded-full bg-cream-deep" />
        </div>
        <div className="h-5 w-24 animate-pulse rounded-tag bg-cream-deep" />
      </div>
    </div>
  )
}
