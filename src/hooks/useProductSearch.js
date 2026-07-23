import { useMemo } from 'react'
import { products, productFilterCategories } from '../data/productsData'

// slug -> label lookup (e.g. 'hair-accessories' -> 'Hair Accessories'),
// so typing "hair" also matches products via their subCategory.
const subCategoryLabels = productFilterCategories.reduce((acc, c) => {
  acc[c.slug] = c.label
  return acc
}, {})

/**
 * Matches products by name, broad category, or fine-grained subCategory
 * (slug or label) — case-insensitive substring match.
 */
export function searchProducts(query, limit = 6) {
  const q = query.trim().toLowerCase()
  if (!q) return []

  return products
    .filter((product) => {
      const categoryLabel = subCategoryLabels[product.subCategory] || ''
      return (
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.subCategory?.toLowerCase().includes(q) ||
        categoryLabel.toLowerCase().includes(q)
      )
    })
    .slice(0, limit)
}

/**
 * Live product search hook — used by the Navbar's search bars to power
 * the "type to see suggestions" experience.
 */
export function useProductSearch(query, limit = 6) {
  return useMemo(() => searchProducts(query, limit), [query, limit])
}
