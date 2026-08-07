import { useMemo } from 'react'
import { products, productFilterCategories } from '../data/productsData'

// slug -> label lookup (e.g. 'hair-accessories' -> 'Hair Accessories'),
// so typing "hair" also matches products via their subCategory.
const subCategoryLabels = productFilterCategories.reduce((acc, c) => {
  acc[c.slug] = c.label
  return acc
}, {})

/**
 * Case-insensitive, partial-match test of a single product against a query.
 * Checks name, broad category, fine-grained subCategory (slug + label),
 * description, and keywords — shared by the Navbar's live suggestions and
 * the Products page search bar so both behave identically.
 */
export function matchesQuery(product, query) {
  const q = query.trim().toLowerCase()
  if (!q) return true

  const categoryLabel = subCategoryLabels[product.subCategory] || ''
  const keywords = product.keywords || []

  return (
    product.name.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q) ||
    product.subCategory?.toLowerCase().includes(q) ||
    categoryLabel.toLowerCase().includes(q) ||
    product.description?.toLowerCase().includes(q) ||
    keywords.some((keyword) => keyword.toLowerCase().includes(q))
  )
}

/**
 * Matches products by name, category, description, or keywords —
 * case-insensitive substring match. Returns up to `limit` results.
 */
export function searchProducts(query, limit = 6) {
  if (!query.trim()) return []
  return products.filter((product) => matchesQuery(product, query)).slice(0, limit)
}

/**
 * Live product search hook — used by the Navbar's search bars to power
 * the "type to see suggestions" experience.
 */
export function useProductSearch(query, limit = 6) {
  return useMemo(() => searchProducts(query, limit), [query, limit])
}
