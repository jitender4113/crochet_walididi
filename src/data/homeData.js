import allCat from "../assets/category/all_cat.png";
import bouquetFlowerCat from "../assets/category/bouquet&flower_Cat.png";
import bagsCat from "../assets/category/bags_cat.png";
import hairCat from "../assets/category/hair_cat.png";
import keychainCat from "../assets/category/keychain_cat.png";
import dressCat from "../assets/category/dress_cat.png";

export const categories = [
  
  {
    id: "bouquets",
    name: "Bouquets & Flowers",
    tagline: "Blooms that never wilt",
    image: bouquetFlowerCat,
  },
  {
    id: "bags",
    name: "Crochet Bags",
    tagline: "Handmade totes & slings",
    image: bagsCat,
  },
  {
    id: "hair-accessories",
    name: "Hair Accessories",
    tagline: "Hair clips, ties, gajra, parandas",
    image: hairCat,
  },
  {
    id: "keychains",
    name: "Keychains",
    tagline: "Cute handmade charms",
    image: keychainCat,
  },
  {
    id: "fashion",
    name: "Dresses",
    tagline: "Crochet Tops & Dresses",
    image: dressCat,
  },
];
export const trending = [
  { id: 1, name: 'Lavender Wildflower Jar', price: 999, image: 'https://picsum.photos/seed/trend-1/500/500' },
  { id: 2, name: 'Mini Amigurumi Bear', price: 649, image: 'https://picsum.photos/seed/trend-2/500/500' },
  { id: 3, name: 'Sage Scallop Cardigan', price: 2899, image: 'https://picsum.photos/seed/trend-3/500/500' },
  { id: 4, name: 'Dried-Look Sunflower Stem', price: 449, image: 'https://picsum.photos/seed/trend-4/500/500' },
  { id: 5, name: 'Blush Bow Scrunchie Duo', price: 399, image: 'https://picsum.photos/seed/trend-5/500/500' },
  { id: 6, name: 'Cream Cable Phone Pouch', price: 899, image: 'https://picsum.photos/seed/trend-6/500/500' },
]

import journey1 from '../assets/journey/journey1.png'
import journey2 from '../assets/journey/journey2.png'
import journey3 from '../assets/journey/journey3.png'
import journey4 from '../assets/journey/journey4.png'


export const processSteps = [
  {
    id: 1,
    title: 'Dream It',
    text: 'Explore our collection or share your own idea to create something truly unique.',
    image: journey1,
  },
  {
    id: 2,
    title: 'We Create It',
    text: 'Every piece is carefully handcrafted with premium yarn, one stitch at a time.',
    image: journey2,
  },
  {
    id: 3,
    title: 'We Wrap It',
    text: 'Your crochet creation is beautifully packaged, making it perfect for gifting.',
    image: journey3,
  },
  {
    id: 4,
    title: 'You Treasure It',
    text: 'Delivered with care, ready to become a keepsake you will cherish for years.',
    image: journey4,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya',
    location: 'Delhi',
    rating: 5,
    text: 'The bouquet looked even more beautiful than the pictures. Everyone loved it!',
  },
  {
    id: 2,
    name: 'Anjali',
    location: 'Jaipur',
    rating: 5,
    text: 'Amazing quality and beautiful packaging. It made the perfect birthday gift.',
  },
  {
    id: 3,
    name: 'Riya',
    location: 'Chandigarh',
    rating: 5,
    text: 'The attention to detail is incredible. I will definitely order again.',
  },
]

import post1 from '../assets/gallery/post1.png'
import post2 from '../assets/gallery/post2.jpg'
import post3 from '../assets/gallery/post3.jpg'

export const instagramPosts = [
  {
    id: 1,
    image: post1,
    link: 'https://www.instagram.com/p/DbV4uYzkjg1/?img_index=1',
  },
  {
    id: 2,
    image: post2,
    link: 'https://www.instagram.com/p/DYG1qL7EdeX/?img_index=1',
  },
  {
    id: 3,
    image: post3,
    link: 'https://www.instagram.com/p/DYEgj-eEap2/?img_index=1',
  },
]

export const navLinks = [
  { label: 'New In', href: '#' },
  { label: 'Bouquets & Flowers', href: '#' },
  { label: 'Accessories', href: '#' },
  { label: 'Fashion', href: '#' },
  { label: 'Cute Creations', href: '#' },
  { label: 'Our Story', href: '#' },
]
