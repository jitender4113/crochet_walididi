import InstagramFamily from "../components/about/InstagramFamily";
import ContactHero from "../components/contact/ContactHero";
import ContactOptions from "../components/contact/ContactOptions";
import SocialMedia from "../components/contact/SocialMedia";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFAQ from "../components/contact/ContactFAQ";
import CustomerReviews from "../components/about/CustomerReviews";
import StatsCounter from "../components/about/StatsCounter";
import AboutHero from "../components/about/AboutHero";


export default function OurStory() {
  return (
    <>
    <AboutHero />
      <InstagramFamily />
      <ContactHero />
      <ContactOptions />
      <SocialMedia />
      <ContactInfo />
      <ContactFAQ />
      <CustomerReviews />
      <StatsCounter />
    </>
  );
}