import Navbar from "@/components/common/Navbar";
import HeroSection from "../components/homepage/HeroSection";
import WhyPrepcoSection from "@/components/homepage/WhyPrepcoSection";
import SocialProofSection from "@/components/homepage/SocialProofSection";
import FomoAndFaqSection from "@/components/homepage/FomoAndFaqSection";
import PrepcoFooterCTA from "@/components/common/PrepcoFooterCTA";
import ScrollToTop from "@/components/common/ScrollToTop";


export default function Home() {
  return (
  <>
    <Navbar/>
    <HeroSection/>
    <WhyPrepcoSection/>
    <SocialProofSection/>
    <FomoAndFaqSection/>
    <ScrollToTop/>
    <PrepcoFooterCTA/>
  </>
  );
}
