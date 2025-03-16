import React from 'react';
import PremiumCtaSection from '../common/PremiumCtaSection';

const HowItWorksSection: React.FC = () => {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          {/* Premium Section Title */}
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-sm opacity-70 rounded-lg"></div>
            <div className="relative bg-gray-900 border border-emerald-500/30 rounded-lg px-6 py-2">
              <h2 className="text-xl font-bold text-white">How It Works?</h2>
            </div>
          </div>
          
          {/* Value Proposition Headline */}
          <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            <span className="text-emerald-400">Simple Steps</span> to Get Started
          </h3>
          
          {/* Subheadline */}
          <p className="text-white text-xl text-center mb-10 max-w-2xl">
            Joining is <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300 font-semibold">
              super easy
            </span> – No complicated setups!
          </p>
        </div>
        
        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-8 relative">
            {/* Step Number with Glow Effect */}
            <div className="w-20 h-20 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-full border border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400 text-2xl font-bold">1</span>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">Click <span className="text-emerald-400">Join Now</span> & sign up in under 2 minutes</h4>
                <p className="text-gray-300">Quick and easy registration process, no complicated forms to fill out</p>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="hidden md:block absolute top-20 left-10 w-0.5 h-full bg-gradient-to-b from-emerald-500 to-transparent -z-10"></div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center mb-8 relative">
            {/* Step Number with Glow Effect */}
            <div className="w-20 h-20 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-full border border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400 text-2xl font-bold">2</span>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">Get access to your <span className="text-emerald-400">exclusive 30-day wellness program</span></h4>
                <p className="text-gray-300">Immediate access to all features and benefits of our premium wellness program</p>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="hidden md:block absolute top-20 left-10 w-0.5 h-full bg-gradient-to-b from-emerald-500 to-transparent -z-10"></div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center mb-8 relative">
            {/* Step Number with Glow Effect */}
            <div className="w-20 h-20 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-full border border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400 text-2xl font-bold">3</span>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">Consultation with a <span className="text-emerald-400">doctor</span></h4>
                <p className="text-gray-300">Get personalized insights and guidance from qualified medical professionals</p>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="hidden md:block absolute top-20 left-10 w-0.5 h-full bg-gradient-to-b from-emerald-500 to-transparent -z-10"></div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row items-center mb-8 relative">
            {/* Step Number with Glow Effect */}
            <div className="w-20 h-20 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-full border border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400 text-2xl font-bold">4</span>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2"><span className="text-emerald-400">Customised 30-day wellness plan</span> curated for you</h4>
                <p className="text-gray-300">Receive a personalized plan tailored to your unique health needs and goals</p>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="hidden md:block absolute top-20 left-10 w-0.5 h-full bg-gradient-to-b from-emerald-500 to-transparent -z-10"></div>
          </div>
          
          {/* Step 5 */}
          <div className="flex flex-col md:flex-row items-center mb-8 relative">
            {/* Step Number with Glow Effect */}
            <div className="w-20 h-20 relative flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0 bg-gray-900 rounded-full border border-emerald-500/50 flex items-center justify-center">
                <span className="text-emerald-400 text-2xl font-bold">5</span>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">Stay on track with <span className="text-emerald-400">guidance from top experts</span></h4>
                <p className="text-gray-300">Ongoing support and motivation from our team of health and wellness professionals</p>
              </div>
            </div>
          </div>
        </div>
        
     <PremiumCtaSection/>
      </div>
    </div>
  );
};

export default HowItWorksSection;