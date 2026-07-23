import { Flower2, Candy, Gift, Gem, Sparkles, PackageOpen } from 'lucide-react'

// Each item has its own placeholder image (swap for real transparent PNGs later)
// and a `layer` z-index used to stack it sensibly in the live preview.
export const customizationCategories = [
  {
    id: 'flowers',
    title: 'Crochet Flowers',
    icon: Flower2,
    layer: 20,
    items: [
      { id: 'flower-rose', name: 'Blush Rose', price: 149, image: 'https://picsum.photos/seed/item-flower-rose/200/200' },
      { id: 'flower-tulip', name: 'Ivory Tulip', price: 129, image: 'https://picsum.photos/seed/item-flower-tulip/200/200' },
      { id: 'flower-sunflower', name: 'Sunflower', price: 159, image: 'https://picsum.photos/seed/item-flower-sunflower/200/200' },
      { id: 'flower-daisy', name: 'Daisy', price: 99, image: 'https://picsum.photos/seed/item-flower-daisy/200/200' },
    ],
  },
  {
    id: 'chocolates',
    title: 'Chocolates',
    icon: Candy,
    layer: 30,
    items: [
      { id: 'choc-ferrero', name: 'Ferrero Rocher', price: 249, image: 'https://picsum.photos/seed/item-choc-ferrero/200/200' },
      { id: 'choc-kinderjoy', name: 'Kinder Joy', price: 99, image: 'https://picsum.photos/seed/item-choc-kinderjoy/200/200' },
      { id: 'choc-bar', name: 'Chocolate Bar', price: 79, image: 'https://picsum.photos/seed/item-choc-bar/200/200' },
    ],
  },
  {
    id: 'gifts',
    title: 'Gifts',
    icon: Gift,
    layer: 40,
    items: [
      { id: 'gift-photo', name: 'Polaroid Photo Charm', price: 89, image: 'https://picsum.photos/seed/item-gift-photo/200/200' },
      { id: 'gift-mug', name: 'Mini Mug', price: 199, image: 'https://picsum.photos/seed/item-gift-mug/200/200' },
      { id: 'gift-card', name: 'Handwritten Card', price: 49, image: 'https://picsum.photos/seed/item-gift-card/200/200' },
    ],
  },
  {
    id: 'jewellery',
    title: 'Jewellery',
    icon: Gem,
    layer: 50,
    items: [
      { id: 'jewel-jhumka', name: 'Crochet Jhumkas', price: 179, image: 'https://picsum.photos/seed/item-jewel-jhumka/200/200' },
      { id: 'jewel-nails', name: 'Press-On Nails', price: 149, image: 'https://picsum.photos/seed/item-jewel-nails/200/200' },
      { id: 'jewel-bracelet', name: 'Beaded Bracelet', price: 129, image: 'https://picsum.photos/seed/item-jewel-bracelet/200/200' },
    ],
  },
  {
    id: 'decorations',
    title: 'Decorations',
    icon: Sparkles,
    layer: 60,
    items: [
      { id: 'decor-fairylights', name: 'Fairy Lights', price: 149, image: 'https://picsum.photos/seed/item-decor-fairylights/200/200' },
      { id: 'decor-ribbon', name: 'Satin Ribbon', price: 39, image: 'https://picsum.photos/seed/item-decor-ribbon/200/200' },
      { id: 'decor-bow', name: 'Lace Bow', price: 59, image: 'https://picsum.photos/seed/item-decor-bow/200/200' },
    ],
  },
  {
    id: 'packaging',
    title: 'Packaging',
    icon: PackageOpen,
    layer: 10,
    items: [
      { id: 'pack-wrap', name: 'Wrapping Paper', price: 69, image: 'https://picsum.photos/seed/item-pack-wrap/200/200' },
      { id: 'pack-hamper', name: 'Hamper Box', price: 249, image: 'https://picsum.photos/seed/item-pack-hamper/200/200' },
      { id: 'pack-basket', name: 'Woven Basket', price: 299, image: 'https://picsum.photos/seed/item-pack-basket/200/200' },
    ],
  },
]

// Offer tiers, shown as coupon cards. User must manually apply one.
export const offerTiers = [
  { code: 'FLAT200', threshold: 1500, discount: 200 },
  { code: 'FLAT400', threshold: 2500, discount: 400 },
  { code: 'FLAT700', threshold: 4000, discount: 700 },
]
