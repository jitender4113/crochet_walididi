export const whyHandmade = [
  { icon: 'Heart', title: 'Handmade with Love', desc: 'Every piece is looped by hand, never mass produced on a machine.' },
  { icon: 'Sparkles', title: 'Unique Designs', desc: 'No two creations are ever perfectly identical — each carries its own charm.' },
  { icon: 'Gift', title: 'Custom Orders', desc: 'Colors, sizes and little details, made just the way you imagined them.' },
  { icon: 'Leaf', title: 'Eco Friendly', desc: 'Thoughtful materials and mindful making, gentle on the world around us.' },
  { icon: 'Hourglass', title: 'Made with Patience', desc: 'Hours of quiet, careful stitching go into every single order.' },
  { icon: 'Award', title: 'Premium Quality Yarn', desc: 'Only soft, durable, skin-friendly yarn makes it into our creations.' },
]

export const stats = [
  { label: 'Happy Customers', value: 500, suffix: '+' },
  { label: 'Handmade Products', value: 1000, suffix: '+' },
  { label: 'Average Rating', value: 4.9, suffix: '', decimals: 1 },
  { label: 'Handmade', value: 100, suffix: '%' },
]

export const faqs = [
  {
    q: 'How long does shipping take?',
    a: 'Most orders ship within 2-4 business days and arrive within 5-8 business days, depending on your location.',
  },
  {
    q: 'Can I place a custom order?',
    a: 'Absolutely! Share your colour palette, size and occasion with us, and we\u2019ll craft something just for you.',
  },
  {
    q: 'What is the usual delivery time?',
    a: 'Ready-to-ship pieces are delivered within a week. Custom orders may take 1-2 weeks depending on complexity.',
  },
  {
    q: 'Do you offer gift packaging?',
    a: 'Yes, every order arrives in premium, gift-ready packaging at no extra cost — perfect for surprises.',
  },
  {
    q: 'What is your return policy?',
    a: 'Since each piece is handmade to order, we accept returns only for damaged or defective items within 3 days of delivery.',
  },
  {
    q: 'How do I care for my crochet piece?',
    a: 'Hand wash gently in cold water, avoid wringing, and lay flat to dry to keep your piece looking beautiful for years.',
  },
]

const reviewNames = [
  'Ananya Sharma', 'Priya Verma', 'Riya Kapoor', 'Meera Nair', 'Kavya Iyer',
  'Sneha Gupta', 'Ishita Singh', 'Aarav Mehta', 'Rohan Das', 'Simran Kaur',
  'Divya Rao', 'Neha Joshi', 'Tanvi Malhotra', 'Pooja Reddy', 'Aditi Bose',
]

const reviewTexts = [
  'The bouquet looked even prettier than the pictures.',
  'My girlfriend absolutely loved it.',
  'Best handmade gift I\u2019ve ever purchased.',
  'Packaging was beautiful.',
  'Every stitch was perfect.',
  'Highly recommended.',
  'Worth every rupee.',
  'I\u2019ll definitely order again.',
  'The quality exceeded my expectations.',
  'My daughter loved the crochet toy.',
  'Perfect birthday surprise.',
  'Very premium finishing.',
  'Excellent customer support.',
  'Beautiful handmade work.',
  'So much love in every detail.',
]

export const reviews = reviewNames.map((name, i) => ({
  id: i + 1,
  name,
  text: reviewTexts[i],
  avatar: `https://i.pravatar.cc/150?img=${i + 5}`,
  rating: 5,
}))
