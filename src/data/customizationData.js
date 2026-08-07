import { Flower2, Candy, Gift, Gem, Sparkles, PackageOpen } from 'lucide-react'

import rose from "../assets/bouquet_image/flowers/rose.png";
import tulip from "../assets/bouquet_image/flowers/tulip.png";
import sunflower from "../assets/bouquet_image/flowers/sunflower.png";
import daisy from "../assets/bouquet_image/flowers/daisy.png";
import lily from "../assets/bouquet_image/flowers/lily.png";
import peony from "../assets/bouquet_image/flowers/peony.png";
import lavender from "../assets/bouquet_image/flowers/lavender.png";
import carnation from "../assets/bouquet_image/flowers/carnation.png";
import babyBreath from "../assets/bouquet_image/flowers/babyBreath.png";
import lotus from "../assets/bouquet_image/flowers/lotus.png";
import forgetMeNot from "../assets/bouquet_image/flowers/forgetMeNot.png";
import cherryBlossom from "../assets/bouquet_image/flowers/cherryBlossom.png";
import orchid from "../assets/bouquet_image/flowers/orchid.png";
import marigold from "../assets/bouquet_image/flowers/marigold.png";


import ferreroRocher from "../assets/bouquet_image/chocolates/ferreoRocher.png";
import kinderJoy from "../assets/bouquet_image/chocolates/kinderJoy.png";
import dairyMilk from "../assets/bouquet_image/chocolates/dairyMilk.png";
import fiveStar from "../assets/bouquet_image/chocolates/5star.png";
import bournville from "../assets/bouquet_image/chocolates/bournville.png";
import cadburyCelebrations from "../assets/bouquet_image/chocolates/cadburyCelebrations.png";
import hersheysKisses from "../assets/bouquet_image/chocolates/harsheysKisses.png";
import kitkat from "../assets/bouquet_image/chocolates/kitkat.png";
import snickers from "../assets/bouquet_image/chocolates/snickers.png";

import polaroid from "../assets/bouquet_image/gifts/polaroid.png";
import miniDiary from "../assets/bouquet_image/gifts/miniDiary.png";
import handwrittenCard from "../assets/bouquet_image/gifts/handwrittenCard.png";
import greetingCard from "../assets/bouquet_image/gifts/greetingCard.png";
import loveCoupons from "../assets/bouquet_image/gifts/loveCoupons.png";
import perfume from "../assets/bouquet_image/gifts/perfume.png";
import spotify from "../assets/bouquet_image/gifts/spotify.png";
import teddyBear from "../assets/bouquet_image/gifts/teddyBear.png";

import crochetEarings from "../assets/bouquet_image/jwellery/crochetEarings.png";
import nails from "../assets/bouquet_image/jwellery/nails.png";
import bracelet from "../assets/bouquet_image/jwellery/bracelet.png";
import anklet from "../assets/bouquet_image/jwellery/anklet.png";
import earrings from "../assets/bouquet_image/jwellery/earrings.png";
import fairyLights from "../assets/bouquet_image/jwellery/fairyLights.png";
import hairCLip from "../assets/bouquet_image/jwellery/hairCLip.png";
import hairClow from "../assets/bouquet_image/jwellery/hairClow.png";
import necklace from "../assets/bouquet_image/jwellery/necklace.png";
import ring from "../assets/bouquet_image/jwellery/ring.png";
import scrunchie from "../assets/bouquet_image/jwellery/scrunchie.png";

import ribbon from "../assets/bouquet_image/packaging/ribbon.png";
import koreanWrap from "../assets/bouquet_image/packaging/koreanWrap.png";
import luxuryBox from "../assets/bouquet_image/packaging/luxuryBox.png";
import giftBag from "../assets/bouquet_image/packaging/gitBag.png";
import mattWrap from "../assets/bouquet_image/packaging/mattWrap.png";

// Each item has its own placeholder image (swap for real transparent PNGs later)
// and a `layer` z-index used to stack it sensibly in the live preview.
export const customizationCategories = [
  {
  id: 'flowers',
  title: 'Crochet Flowers',
  icon: Flower2,
  layer: 20,
  items: [
    { id: 'flower-rose', name: 'Blush Rose', price: 149, image: rose },
    { id: 'flower-tulip', name: 'Ivory Tulip', price: 129, image: tulip },
    { id: 'flower-sunflower', name: 'Sunflower', price: 159, image: sunflower },
    { id: 'flower-daisy', name: 'Daisy', price: 99, image: daisy },
    { id: 'flower-lily', name: 'Lily', price: 149, image: lily },
    { id: 'flower-peony', name: 'Peony', price: 169, image: peony },
    { id: 'flower-lavender', name: 'Lavender', price: 139, image: lavender },
    { id: 'flower-carnation', name: 'Carnation', price: 129, image: carnation },
    { id: 'flower-babybreath', name: 'Baby Breath', price: 99, image: babyBreath },
    { id: 'flower-lotus', name: 'Lotus', price: 179, image: lotus },
    { id: 'flower-forgetmenot', name: 'Forget Me Not', price: 119, image: forgetMeNot },
    { id: 'flower-cherryblossom', name: 'Cherry Blossom', price: 169, image: cherryBlossom },
    { id: 'flower-orchid', name: 'Orchid', price: 189, image: orchid },
    { id: 'flower-marigold', name: 'Marigold', price: 109, image: marigold },
  ],
},
{
  id: 'crochet-accessories',
  title: 'Crochet Accessories',
  icon: Sparkles, // ya Scissors, Shirt, Palette bhi use kar sakta hai
  layer: 55,
  items: [
    { id: 'acc-crochet-earrings', name: 'Crochet Earrings', price: 179, image: crochetEarings },
    { id: 'acc-hair-clip', name: 'Hair Clip', price: 99, image: hairCLip },
    { id: 'acc-hair-claw', name: 'Hair Claw', price: 129, image: hairClow },
    { id: 'acc-scrunchie', name: 'Scrunchie', price: 89, image: scrunchie },
  ],
},
  {
    id: 'chocolates',
    title: 'Chocolates',
    icon: Candy,
    layer: 30,
    items: [
      { id: 'choc-ferrero', name: 'Ferrero Rocher', price: 249, image: ferreroRocher },
      { id: 'choc-kinderjoy', name: 'Kinder Joy', price: 99, image: kinderJoy },
      { id: 'choc-bar', name: 'Chocolate Bar', price: 79, image: dairyMilk },
      { id: 'choc-5star', name: '5 Star', price: 40, image: fiveStar },
    { id: 'choc-bournville', name: 'Bournville', price: 120, image: bournville },
    { id: 'choc-celebrations', name: 'Cadbury Celebrations', price: 299, image: cadburyCelebrations },
    { id: 'choc-kisses', name: "Hershey's Kisses", price: 199, image: hersheysKisses },
    { id: 'choc-kitkat', name: 'KitKat', price: 50, image: kitkat },
    { id: 'choc-snickers', name: 'Snickers', price: 60, image: snickers },
    ],
  },
  {
    id: 'gifts',
    title: 'Gifts',
    icon: Gift,
    layer: 40,
    items: [
      { id: 'gift-photo', name: 'Polaroid Photo Charm', price: 89, image: polaroid },
      { id: 'gift-mug', name: 'Mini Mug', price: 199, image: miniDiary },
      { id: 'gift-card', name: 'Handwritten Card', price: 49, image: handwrittenCard },
      { id: 'gift-greetingCard', name: 'Greeting Card', price: 79, image: greetingCard },
    { id: 'gift-loveCoupons', name: 'Love Coupons', price: 99, image: loveCoupons },
    { id: 'gift-perfume', name: 'Perfume', price: 399, image: perfume },
    { id: 'gift-spotify', name: 'Spotify Plaque', price: 249, image: spotify },
    { id: 'gift-teddyBear', name: 'Teddy Bear', price: 299, image: teddyBear },
    ],
  },
  {
  id: 'jewellery',
  title: 'Jewellery',
  icon: Gem,
  layer: 50,
  items: [
    { id: 'jewel-nails', name: 'Press-On Nails', price: 149, image: nails },
    { id: 'jewel-bracelet', name: 'Beaded Bracelet', price: 129, image: bracelet },
    { id: 'jewel-anklet', name: 'Anklet', price: 149, image: anklet },
    { id: 'jewel-earrings', name: 'Earrings', price: 199, image: earrings },
    { id: 'jewel-necklace', name: 'Necklace', price: 249, image: necklace },
    { id: 'jewel-ring', name: 'Ring', price: 149, image: ring },
  ],
},

  {
    id: 'decorations',
    title: 'Decorations',
    icon: Sparkles,
    layer: 60,
    items: [
      { id: 'decor-fairylights', name: 'Fairy Lights', price: 149, image: fairyLights },
      { id: 'decor-ribbon', name: 'Satin Ribbon', price: 39, image: ribbon },
    ],
  },
  {
    id: 'packaging',
    title: 'Packaging',
    icon: PackageOpen,
    layer: 10,
    items: [
      { id: 'pack-wrap', name: 'Wrapping Paper', price: 69, image: koreanWrap },
      { id: 'pack-hamper', name: 'Hamper Box', price: 249, image: luxuryBox },
      { id: 'pack-giftBag', name: 'Gift Bag', price: 199, image: giftBag },
    { id: 'pack-mattWrap', name: 'Matt Wrap', price: 89, image: mattWrap },
    ],
  },
]

// Offer tiers, shown as coupon cards. User must manually apply one.
export const offerTiers = [
  { code: 'FLAT200', threshold: 1500, discount: 200 },
  { code: 'FLAT400', threshold: 2500, discount: 400 },
  { code: 'FLAT700', threshold: 4000, discount: 700 },
]
