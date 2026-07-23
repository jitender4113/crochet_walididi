import { builderItemLookup } from '../data/builderData'

const CUSTOM_BOUQUET_KEY = 'cwd_custom_bouquet'

/**
 * Turns the builder's raw selection map ({ itemId: quantity }) into a
 * flat, storage-friendly list of full item details plus the total.
 */
function buildCustomBouquet(selections, total) {
  const items = Object.entries(selections)
    .map(([itemId, quantity]) => {
      const item = builderItemLookup[itemId]
      if (!item || quantity <= 0) return null
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity,
        subtotal: item.price * quantity,
        categoryId: item.categoryId,
        categoryTitle: item.categoryTitle,
      }
    })
    .filter(Boolean)

  return { items, total, savedAt: new Date().toISOString() }
}

/**
 * Saves the current "Build Your Own Bouquet" selection to localStorage
 * so it can be picked up by the checkout page.
 */
export function saveCustomBouquet(selections, total) {
  const customBouquet = buildCustomBouquet(selections, total)
  try {
    localStorage.setItem(CUSTOM_BOUQUET_KEY, JSON.stringify(customBouquet))
  } catch {
    // ignore write errors (e.g. private browsing storage limits)
  }
  return customBouquet
}

/**
 * Reads the saved custom bouquet, if any. Returns null when there is
 * none saved, or when the saved value has no items.
 */
export function getCustomBouquet() {
  try {
    const raw = localStorage.getItem(CUSTOM_BOUQUET_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.items) || parsed.items.length === 0) return null
    return parsed
  } catch {
    return null
  }
}

/** Clears the saved custom bouquet (called after a successful order). */
export function clearCustomBouquet() {
  try {
    localStorage.removeItem(CUSTOM_BOUQUET_KEY)
  } catch {
    // ignore
  }
}
