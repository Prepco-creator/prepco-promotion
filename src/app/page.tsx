// import Navbar from "@/components/common/Navbar";
import WhyPrepcoSection from "@/components/homepage/WhyPrepcoSection";
// import SocialProofSection from "@/components/homepage/SocialProofSection";
// import FomoAndFaqSection from "@/components/homepage/FomoAndFaqSection";
// import PrepcoFooterCTA from "@/components/common/PrepcoFooterCTA";
// import ScrollToTop from "@/components/common/ScrollToTop";
// import WellnessHookSection from "@/components/homepage/WellnessHookSection";
// import TrustSection from "@/components/homepage/TrustSection";
import HeroSection from "@/components/homepage/HeroSection";
import WhatsIncludedSection from "@/components/homepage/WellnessHookSection";
import HowItWorksSection from "@/components/homepage/HowItWorksSection";
// import PremiumCtaSection from "@/components/common/PremiumCtaSection";
import PremiumOfferComponent from "@/components/homepage/PremiumOfferComponent";
import TestimonialsComponent from "@/components/homepage/SocialProofSection";
import PremiumCTASection from "@/components/common/CTA";
import FAQSection from "@/components/homepage/FomoAndFaqSection";
import FinalPushCTA from "@/components/common/FinalCta";



export default function Home() {
  return (
  <div className="lg:px-4">
    {/* <Navbar/> */}
    <HeroSection/>
    <WhyPrepcoSection/>
    <WhatsIncludedSection/>
    <HowItWorksSection/>
    <PremiumOfferComponent/>
    <TestimonialsComponent/>
    <PremiumCTASection/>
    <FAQSection/>
    <FinalPushCTA/>
    {/* <WellnessHookSection/>
    <TrustSection/>
    <SocialProofSection/>
    <FomoAndFaqSection/>
    <ScrollToTop/>
    <PrepcoFooterCTA/> */}
  </div>
  );
}
