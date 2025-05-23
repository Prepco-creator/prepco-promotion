import React from 'react'
import HeroSection from './HeroSection'
// import WhyPrepcoSection from './WhyPrepcoSection'
import WhatsIncludedSection from './WellnessHookSection'
// import HowItWorksSection from './HowItWorksSection'
import PremiumOfferComponent from './PremiumOfferComponent'
import FAQSection from './FomoAndFaqSection'
import FinalPushCTA from '../common/FinalCta'
import VideoBlock from './VideoBlock'
// import BonusServiceComponent from './BonusServiceComponent'
import CombinedWellnessComponent from './CombinedWellnessComponent'


export default function Landingpage() {
  return (
    <div className="lg:px-4 overflow-x-hidden">
        <HeroSection/>
            {/* <BonusServiceComponent/>
    <WhyPrepcoSection/> */}
    <CombinedWellnessComponent/>
    <WhatsIncludedSection/>
    {/* <HowItWorksSection/> */}
    <VideoBlock/>

    <PremiumOfferComponent/>
    {/* <TestimonialsComponent/> */}
    <FAQSection/>
    <FinalPushCTA/>

    </div>
  )
}
