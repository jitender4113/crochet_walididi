/**
 * A soft curved transition between two sections.
 * `fill` = background color of the section BELOW the curve.
 * `bgTop` = background color of the section ABOVE the curve (fills the
 *   divider's own background so there's no gap at the seam).
 */
export default function CurvedDivider({ fill = '#FBF7F1', bgTop = 'transparent', flip = false, className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      style={{ height: '60px', backgroundColor: bgTop }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-full w-full"
      >
        <path
          d="M0,40 C240,100 480,0 720,30 C960,60 1200,100 1440,40 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
