import bouquet from "../images/categories/bouquet1.png";
import bags from "../images/categories/bags1.png";
import hair from "../images/categories/hair1.png";
import keychain from "../images/categories/keychain1.png";

export const categories = [
  {
    id: 'bouquets',
    name: 'Bouquets & Flowers',
    tagline: 'Blooms that never wilt',
    image: {bouquet},
  },
  {

  id: 'crochet-bags',

  name: 'Crochet Bags',

  tagline: 'Handmade totes & slings',

  image: {bags},

},
  {
    id: 'Hair accessories',
    name: 'Hair Accessories',
    tagline: 'Hair clips, ties, gajra, parandas',
    image: {hair},
  },
  {

  id: 'keychains',

  name: 'Keychains',

  tagline: 'Cute handmade charms',

  image: {keychain},

},
]

export const bestSellers = [
  { id: 1, name: 'Sunrise Peony Bouquet', price: 1899, rating: 4.9, image: 'https://picsum.photos/seed/best-1/500/600', badge: 'Bestseller' },
  { id: 2, name: 'Blush Rose Hair Clip Set', price: 549, rating: 4.8, image: 'https://picsum.photos/seed/best-2/500/600', badge: 'Bestseller' },
  { id: 3, name: 'Sage Granny-Square Tote', price: 1299, rating: 5.0, image: 'https://picsum.photos/seed/best-3/500/600', badge: "Didi's Pick" },
  { id: 4, name: 'Ivory Tulip Table Vase Set', price: 2199, rating: 4.9, image: 'https://picsum.photos/seed/best-4/500/600', badge: 'Bestseller' },
  { id: 5, name: 'Golden Thread Coaster Set', price: 799, rating: 4.7, image: 'https://picsum.photos/seed/best-5/500/600', badge: 'New' },
]

export const trending = [
  { id: 1, name: 'Lavender Wildflower Jar', price: 999, image: 'https://picsum.photos/seed/trend-1/500/500' },
  { id: 2, name: 'Mini Amigurumi Bear', price: 649, image: 'https://picsum.photos/seed/trend-2/500/500' },
  { id: 3, name: 'Sage Scallop Cardigan', price: 2899, image: 'https://picsum.photos/seed/trend-3/500/500' },
  { id: 4, name: 'Dried-Look Sunflower Stem', price: 449, image: 'https://picsum.photos/seed/trend-4/500/500' },
  { id: 5, name: 'Blush Bow Scrunchie Duo', price: 399, image: 'https://picsum.photos/seed/trend-5/500/500' },
  { id: 6, name: 'Cream Cable Phone Pouch', price: 899, image: 'https://picsum.photos/seed/trend-6/500/500' },
]

export const processSteps = [
  {
    id: 1,
    title: 'A Single Skein',
    text: 'Every piece begins as one hand-picked skein of yarn, chosen for its color and softness.',
    image: 'https://picsum.photos/seed/process-1/500/500',
  },
  {
    id: 2,
    title: 'The First Chain',
    text: "Didi casts the foundation chain by hand — no two chains are ever quite the same.",
    image: 'https://picsum.photos/seed/process-2/500/500',
  },
  {
    id: 3,
    title: 'Hours of Looping',
    text: 'A single bouquet takes 6-10 hours of looping, counting, and quiet patience.',
    image: 'https://picsum.photos/seed/process-3/500/500',
  },
  {
    id: 4,
    title: 'Woven With a Note',
    text: 'Each order is finished, steamed into shape, and packed with a handwritten note.',
    image: 'https://picsum.photos/seed/process-4/500/500',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Ananya R.',
    location: 'Mumbai',
    text: "I ordered the peony bouquet for my mother's birthday — she cried. It looks better than real flowers and it will outlast every one of them.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Kavya S.',
    location: 'Bengaluru',
    text: "The tote bag is sturdier than I expected and the granny-square pattern gets compliments everywhere I go. Worth every rupee.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Meher K.',
    location: 'Delhi',
    text: "You can tell real hands made this, not a machine. The handwritten thank-you note made it feel like a gift from a friend.",
    rating: 5,
  },
]

export const instagramPosts = [
  { id: 1, image: 'https://picsum.photos/seed/insta-1/400/400' },
  { id: 2, image: 'https://picsum.photos/seed/insta-2/400/400' },
  { id: 3, image: 'https://picsum.photos/seed/insta-3/400/400' },
  { id: 4, image: 'https://picsum.photos/seed/insta-4/400/400' },
  { id: 5, image: 'https://picsum.photos/seed/insta-5/400/400' },
  { id: 6, image: 'https://picsum.photos/seed/insta-6/400/400' },
]

export const navLinks = [
  { label: 'New In', href: '#' },
  { label: 'Bouquets & Flowers', href: '#' },
  { label: 'Accessories', href: '#' },
  { label: 'Fashion', href: '#' },
  { label: 'Cute Creations', href: '#' },
  { label: 'Our Story', href: '#' },
]
