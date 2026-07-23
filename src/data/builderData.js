// Data for the "Build Your Own Bouquet" customizer.
// Each item has a unique id (used as the selection key), a name and a price in ₹.

export const builderCategories = [
  {
    id: 'flowers',
    emoji: '🌷',
    title: 'Crochet Flowers',
    description: 'Handpicked blooms that form the heart of your bouquet.',
    accent: 'blush',
    items: [
      { id: 'flower-tulip', name: 'Tulip', price: 149 },
      { id: 'flower-rose', name: 'Rose', price: 129 },
      { id: 'flower-sunflower', name: 'Sunflower', price: 179 },
      { id: 'flower-daisy', name: 'Daisy', price: 99 },
      { id: 'flower-lavender', name: 'Lavender', price: 119 },
      { id: 'flower-lily', name: 'Lily', price: 159 },
    ],
  },
  {
    id: 'chocolates',
    emoji: '🍫',
    title: 'Chocolates',
    description: 'A little sweetness tucked between the stems.',
    accent: 'gold',
    items: [
      { id: 'choco-dairymilk', name: 'Dairy Milk', price: 60 },
      { id: 'choco-silk', name: 'Silk', price: 90 },
      { id: 'choco-kitkat', name: 'KitKat', price: 50 },
      { id: 'choco-ferrero', name: 'Ferrero Rocher', price: 150 },
      { id: 'choco-kinderjoy', name: 'Kinder Joy', price: 70 },
    ],
  },
  {
    id: 'gifts',
    emoji: '🧸',
    title: 'Gifts',
    description: 'Little extras that make it feel personal.',
    accent: 'sage',
    items: [
      { id: 'gift-teddy', name: 'Teddy', price: 349 },
      { id: 'gift-photo', name: 'Photo', price: 199 },
      { id: 'gift-card', name: 'Greeting Card', price: 99 },
      { id: 'gift-message', name: 'Custom Message', price: 49 },
    ],
  },
  {
    id: 'beauty',
    emoji: '💅',
    title: 'Beauty',
    description: 'Beauty picks nestled right into the bouquet.',
    accent: 'blush',
    items: [
      { id: 'beauty-nailset', name: 'Nail Set', price: 249 },
      { id: 'beauty-lipstick', name: 'Lipstick', price: 199 },
      { id: 'beauty-perfume', name: 'Perfume', price: 299 },
    ],
  },
  {
    id: 'jewellery',
    emoji: '💍',
    title: 'Jewellery',
    description: 'Delicate pieces to make it extra special.',
    accent: 'gold',
    items: [
      { id: 'jewel-earrings', name: 'Earrings', price: 249 },
      { id: 'jewel-jhumkas', name: 'Jhumkas', price: 349 },
      { id: 'jewel-bracelet', name: 'Bracelet', price: 199 },
      { id: 'jewel-ring', name: 'Ring', price: 149 },
    ],
  },
  {
    id: 'decorations',
    emoji: '✨',
    title: 'Decorations',
    description: 'The finishing sparkle for your bouquet.',
    accent: 'sage',
    items: [
      { id: 'deco-fairylights', name: 'Fairy Lights', price: 199 },
      { id: 'deco-ribbon', name: 'Ribbon', price: 49 },
      { id: 'deco-pearlstring', name: 'Pearl String', price: 79 },
      { id: 'deco-nametag', name: 'Name Tag', price: 59 },
    ],
  },
  {
    id: 'packaging',
    emoji: '📦',
    title: 'Packaging',
    description: 'How your bouquet arrives at their doorstep.',
    accent: 'blush',
    items: [
      { id: 'pack-wrap', name: 'Bouquet Wrap', price: 99 },
      { id: 'pack-premiumwrap', name: 'Premium Wrap', price: 199 },
      { id: 'pack-hamperbox', name: 'Hamper Box', price: 349 },
      { id: 'pack-giftbox', name: 'Gift Box', price: 249 },
    ],
  },
]

// Flat lookup map: itemId -> { ...item, categoryId, categoryTitle }
export const builderItemLookup = builderCategories.reduce((acc, category) => {
  category.items.forEach((item) => {
    acc[item.id] = { ...item, categoryId: category.id, categoryTitle: category.title }
  })
  return acc
}, {})
