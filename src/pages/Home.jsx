import Hero from "../components/home/Hero";
import TrustBadges from "../components/home/TrustBadges";
import FeaturedCategories from "../components/home/FeaturedCategories";
import BestSellers from "../components/home/BestSellers";
import TrendingThisWeek from "../components/home/TrendingThisWeek";
import ProcessTimeline from "../components/home/ProcessTimeline";
import StatsStrip from "../components/home/StatsStrip";
import CurvedDivider from "../components/home/CurvedDivider";
import Testimonials from "../components/home/Testimonials";
import InstagramGallery from "../components/home/InstagramGallery";
import Newsletter from "../components/home/Newsletter";
import FooterCTA from "../components/home/FooterCTA";
import StitchDivider from "../components/ui/StitchDivider";
import CustomBouquetBanner from '../components/home/CustomBouquetBanner'
import DidiYeBanaDoge from '../components/home/DidiYeBanaDoge'
import { products } from '../data/productsData'

const hasTrending = products.some((product) => product.isTrending)

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <StitchDivider />
      <FeaturedCategories />
      <CustomBouquetBanner />
      <BestSellers />
      <StitchDivider color="#90A186" />
      <TrendingThisWeek />
      <DidiYeBanaDoge />
      <ProcessTimeline />
      <CurvedDivider fill="#4A3B32" bgTop="#FBF7F1" />
      <StatsStrip />
      <CurvedDivider fill="#FBF7F1" bgTop="#4A3B32" flip />
      <Testimonials />
      <InstagramGallery />
      {/* <Newsletter /> */}
      <FooterCTA />
      
    </>
  )
}
