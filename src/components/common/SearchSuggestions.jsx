import { motion } from 'framer-motion'

/**
 * SearchSuggestions — a small dropdown/list of matching products shown
 * while the person types in the Navbar search bar. Reused by both the
 * desktop dropdown and the mobile expandable search panel.
 */
export default function SearchSuggestions({ results, query, onSelect, className = '' }) {
  if (!query.trim()) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={`overflow-hidden rounded-2xl border border-cocoa/10 bg-cream shadow-soft ${className}`}
    >
      {results.length > 0 ? (
        <ul className="max-h-80 overflow-y-auto py-2">
          {results.map((product) => (
            <li key={product.id}>
              <button
                type="button"
                onClick={() => onSelect(product)}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors duration-200 hover:bg-blush-light/50"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-11 w-11 shrink-0 rounded-lg object-cover ring-1 ring-cocoa/10"
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-cocoa">
                    {product.name}
                  </span>
                  <span className="block truncate text-xs text-cocoa-light">
                    {product.category}
                  </span>
                </span>
                <span className="shrink-0 text-sm font-semibold text-cocoa">
                  ₹{product.price}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="px-4 py-6 text-center text-sm text-cocoa-light">
          No pieces found for &ldquo;{query}&rdquo;
        </p>
      )}
    </motion.div>
  )
}
