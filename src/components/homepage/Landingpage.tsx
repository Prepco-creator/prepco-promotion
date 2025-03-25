import React from 'react'
import HeroSection from './HeroSection'
import WhyPrepcoSection from './WhyPrepcoSection'
import WhatsIncludedSection from './WellnessHookSection'
import HowItWorksSection from './HowItWorksSection'
import PremiumOfferComponent from './PremiumOfferComponent'
import FAQSection from './FomoAndFaqSection'
import FinalPushCTA from '../common/FinalCta'


export default function Landingpage() {
  return (
    <div className="lg:px-4">
        <HeroSection/>
    <WhyPrepcoSection/>
    <WhatsIncludedSection/>
    <HowItWorksSection/>
    <PremiumOfferComponent/>
    {/* <TestimonialsComponent/> */}
    <FAQSection/>
    <FinalPushCTA/>

    </div>
  )
}
