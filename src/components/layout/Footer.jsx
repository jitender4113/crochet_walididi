import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, ArrowUp } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { PinterestIcon, WhatsAppIcon } from "../ui/BrandIcons";

// const quickLinks = [
//   { label: 'Home', to: '/' },
//   { label: 'Products', to: '/products' },
//   { label: 'About Us', to: '/about' },
//   { label: 'Contact', to: '/contact' },
// ]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Our Story', to: '/our-story' },
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/crochet_walididi/', Icon: Instagram },
  { label: 'Pinterest', href: 'https://pin.it/1KBcIisQZ', Icon: PinterestIcon },
  { label: 'WhatsApp', href: 'https://wa.me/9992175168', Icon: WhatsAppIcon },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-cocoa/10 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <span className="font-display text-xl font-semibold text-cocoa">
              Crochet Wali Didi
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-cocoa-light">
              Handmade with love, woven with memories — one stitch at a time, since day one.
            </p>

            <div className="mt-2 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cocoa/5 text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-semibold text-cocoa">Quick Links</span>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-cocoa-light transition-colors duration-300 hover:text-sage-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-semibold text-cocoa">Get in Touch</span>
            <a
              href="mailto:lokeshjatin2@gmail.com"
              className="flex items-center gap-2 text-sm text-cocoa-light transition-colors duration-300 hover:text-sage-dark"
            >
              <Mail size={15} strokeWidth={1.75} />
              lokeshjatin2@gmail.com
            </a>
            <a
              href="https://wa.me/9992175168"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cocoa-light transition-colors duration-300 hover:text-sage-dark"
            >
              <WhatsAppIcon size={15} />
              +91 9992175168
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cocoa/10 pt-6 text-xs text-cocoa-light sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Crochet Wali Didi. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors duration-300 hover:text-cocoa">Privacy Policy</a>
            <a href="#" className="transition-colors duration-300 hover:text-cocoa">Terms of Service</a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 rounded-full bg-cocoa/5 px-3 py-1.5 text-cocoa transition-colors duration-300 hover:bg-cocoa/10"
            >
              Back to Top
              <ArrowUp size={13} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
