/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF7F1',
          deep: '#F3ECE1',
        },
        cocoa: {
          DEFAULT: '#4A3B32',
          light: '#7A6659',
        },
        blush: {
          DEFAULT: '#D9AFAE',
          light: '#F0DEDD',
          dark: '#C08E8C',
        },
        sage: {
          DEFAULT: '#90A186',
          light: '#DCE4D6',
          dark: '#6E7F63',
        },
        gold: {
          DEFAULT: '#C9A66B',
          light: '#E4D2AA',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      borderRadius: {
        tag: '4px',
      },
      boxShadow: {
        soft: '0 8px 30px -12px rgba(74, 59, 50, 0.25)',
        tag: '0 6px 16px -6px rgba(74, 59, 50, 0.35)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        sway: 'sway 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
