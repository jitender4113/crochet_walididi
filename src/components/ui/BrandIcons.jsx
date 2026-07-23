export function PinterestIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.75 17.25 12 8.5m0 0c1.8 0 3.25 1.12 3.25 2.9 0 2.1-1.2 3.85-2.95 3.85-.6 0-1.15-.32-1.35-.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.45-1.27A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.9 8.6c.15-.35.3-.36.45-.36h.4c.13 0 .3-.02.45.35.17.4.55 1.35.6 1.45.05.1.08.22.02.35-.06.13-.1.2-.2.32-.1.12-.2.26-.3.35-.1.1-.2.2-.1.4.1.2.5.9 1.1 1.45.75.7 1.35.9 1.55 1 .2.1.32.08.44-.05.13-.13.5-.58.63-.78.13-.2.26-.16.43-.1.17.07 1.1.53 1.3.63.2.1.33.15.38.23.05.1.05.55-.13 1.05-.18.5-1 .95-1.4 1-.4.05-.8.08-2.3-.5-1.55-.6-2.5-2.1-2.6-2.2-.1-.13-.85-1.1-.85-2.1 0-1 .5-1.5.68-1.7Z"
        fill="currentColor"
      />
    </svg>
  )
}
