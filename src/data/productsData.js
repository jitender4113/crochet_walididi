export const productFilterCategories = [
  { slug: 'all', label: 'All' },
  { slug: 'bouquets', label: 'Bouquets' },
  { slug: 'keychains', label: 'Keychains' },
  { slug: 'hair-accessories', label: 'Hair Accessories' },
  { slug: 'bags', label: 'Bags' },
  { slug: 'home-decor', label: 'Home Decor' },
  { slug: 'fashion', label: 'Fashion' },
  { slug: 'toys', label: 'Toys' },
]

// `category` = broad display label (used on ProductDetails, etc — unchanged).
// `subCategory` = fine-grained slug used for the ?category= URL filter above.
export const products = [
  { id: 1, name: 'Sunrise Peony Bouquet', price: 1899, category: 'Gifts & Bouquets', subCategory: 'bouquets', rating: 4.9, badge: 'Bestseller', image: 'https://picsum.photos/seed/prod-1/500/650', description: 'A hand-looped bouquet of peonies in soft sunrise tones, stitched stem by stem and finished with a kraft-paper wrap. A forever bloom that never wilts.' },
  { id: 2, name: 'Ivory Tulip Table Vase Set', price: 2199, category: 'Gifts & Bouquets', subCategory: 'bouquets', rating: 4.9, badge: 'Bestseller', image: 'https://picsum.photos/seed/prod-2/500/560', description: 'Ivory crochet tulips arranged in a matching woven vase — a centerpiece that brings quiet, handmade charm to any table.' },
  { id: 3, name: 'Lavender Wildflower Jar', price: 999, category: 'Gifts & Bouquets', subCategory: 'bouquets', rating: 4.7, image: 'https://picsum.photos/seed/prod-3/500/700', description: 'A little jar of lavender wildflowers, each petal crocheted by hand for a soft, everlasting touch of color.' },
  { id: 4, name: 'Dried-Look Sunflower Stem', price: 449, category: 'Gifts & Bouquets', subCategory: 'bouquets', rating: 4.6, image: 'https://picsum.photos/seed/prod-4/500/500', description: 'A single sunflower stem crocheted in warm mustard tones, styled to mimic the beauty of dried florals.' },
  { id: 5, name: 'Blush Rose Hair Clip Set', price: 549, category: 'Accessories', subCategory: 'hair-accessories', rating: 4.8, badge: 'Bestseller', image: 'https://picsum.photos/seed/prod-5/500/600', description: 'A set of dainty rose hair clips, crocheted in blush tones and finished with a secure metal clasp.' },
  { id: 6, name: 'Sage Granny-Square Tote', price: 1299, category: 'Accessories', subCategory: 'bags', rating: 5.0, badge: "Didi's Pick", image: 'https://picsum.photos/seed/prod-6/500/680', description: 'A sturdy granny-square tote in sage, lined and finished with sturdy handles — an everyday bag with handmade soul.' },
  { id: 7, name: 'Golden Thread Coaster Set', price: 799, category: 'Accessories', subCategory: 'home-decor', rating: 4.7, badge: 'New', image: 'https://picsum.photos/seed/prod-7/500/540', description: 'A set of four coasters crocheted in golden thread, adding warmth and texture to your coffee table.' },
  { id: 8, name: 'Cream Cable Phone Pouch', price: 899, category: 'Accessories', subCategory: 'bags', rating: 4.8, image: 'https://picsum.photos/seed/prod-8/500/620', description: 'A cozy cable-knit phone pouch in cream, soft-lined to keep your phone snug and scratch-free.' },
  { id: 9, name: 'Blush Bow Scrunchie Duo', price: 399, category: 'Accessories', subCategory: 'hair-accessories', rating: 4.6, image: 'https://picsum.photos/seed/prod-9/500/480', description: 'Two soft crochet scrunchies finished with delicate bows — gentle on hair, sweet on style.' },
  { id: 10, name: 'Sage Scallop Cardigan', price: 2899, category: 'Fashion', subCategory: 'fashion', rating: 4.9, badge: 'New', image: 'https://picsum.photos/seed/prod-10/500/720', description: 'A hand-crocheted cardigan with a scalloped hem in sage green, light enough for layering, warm enough to love.' },
  { id: 11, name: 'Cocoa Wrap Shrug', price: 2499, category: 'Fashion', subCategory: 'fashion', rating: 4.7, image: 'https://picsum.photos/seed/prod-11/500/640', description: 'A cozy wrap shrug in cocoa brown, crocheted with an open weave for effortless everyday layering.' },
  { id: 12, name: 'Blush Infinity Scarf', price: 1199, category: 'Fashion', subCategory: 'fashion', rating: 4.8, image: 'https://picsum.photos/seed/prod-12/500/560', description: 'A soft infinity scarf in blush pink, looped and finished by hand for cozy, versatile styling.' },
  { id: 13, name: 'Ivory Lace Crop Top', price: 1799, category: 'Fashion', subCategory: 'fashion', rating: 4.6, image: 'https://picsum.photos/seed/prod-13/500/700', description: 'A delicate lace-pattern crop top in ivory, hand-crocheted with an airy, feminine silhouette.' },
  { id: 14, name: 'Mini Amigurumi Bear', price: 649, category: 'Kids & Toys', subCategory: 'toys', rating: 4.9, badge: 'Bestseller', image: 'https://picsum.photos/seed/prod-14/500/600', description: 'A huggable mini amigurumi bear, stitched safe and snug with soft yarn — a sweet little friend for any age.' },
  { id: 15, name: 'Bunny Rattle Toy', price: 549, category: 'Kids & Toys', subCategory: 'toys', rating: 4.8, image: 'https://picsum.photos/seed/prod-15/500/520', description: "A gentle bunny rattle toy, crocheted with baby-safe yarn and a soft internal chime for tiny hands to explore." },
  { id: 16, name: 'Rainbow Stacking Blocks', price: 999, category: 'Kids & Toys', subCategory: 'toys', rating: 4.7, badge: 'New', image: 'https://picsum.photos/seed/prod-16/500/660', description: 'A set of soft crochet stacking blocks in rainbow colors, designed for gentle, screen-free playtime.' },
  { id: 17, name: 'Sunshine Duckling Plushie', price: 599, category: 'Kids & Toys', subCategory: 'toys', rating: 4.7, image: 'https://picsum.photos/seed/prod-17/500/580', description: 'A cheerful little duckling plushie in sunshine yellow, stitched with love for nap-time cuddles.' },
  { id: 18, name: 'Crochet Heart Keychain', price: 149, category: 'Accessories', subCategory: 'keychains', rating: 4.8, badge: 'New', image: 'https://picsum.photos/seed/prod-19/500/500', description: 'A tiny hand-looped heart keychain, finished with a sturdy clasp — a sweet little charm for your keys or bag.' },
  { id: 19, name: 'Crochet Bee Keychain', price: 179, category: 'Accessories', subCategory: 'keychains', rating: 4.7, image: 'https://picsum.photos/seed/prod-20/500/500', description: 'A cheerful striped bee charm, crocheted stitch by stitch and clipped onto a gold-tone keyring.' },
]
