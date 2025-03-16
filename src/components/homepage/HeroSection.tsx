//  HeroSection.tsx
import React from 'react';

const  HeroSection: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center h-screen py-6">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6">
            {/* Premium Badge */}
            <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full px-3 py-1">
              <p className="text-xs font-bold uppercase tracking-wider">Premium Offer</p>
            </div>
            
            {/* Main Headline - More Compact */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
              Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">Health</span> in 30 Days
            </h1>
            
            {/* Price Tag - More Compact */}
            <div className="flex items-center gap-3">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-emerald-500 blur-sm opacity-30 rounded-lg"></div>
                <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2 rounded-lg border border-emerald-400/30">
                  <p className="text-2xl font-bold text-white">Just ₹499</p>
                </div>
              </div>
              <div className="bg-gray-800 px-2 py-1 rounded-lg border border-gray-700">
                <p className="text-sm line-through text-gray-400">₹1,999</p>
              </div>
            </div>
            
            {/* Subtext - More Concise */}
            <p className="text-base text-gray-300">
              Access expert-led fitness, yoga, and nutrition coaching in one simple plan.
            </p>
            
            {/* Benefits - Horizontal Layout to Save Space */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center bg-gray-800/60 backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-700">
                <span className="text-emerald-400 mr-1">✅</span>
                <span className="text-gray-200 text-sm font-medium">100% risk-free</span>
              </div>
              <div className="flex items-center bg-gray-800/60 backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-700">
                <span className="text-emerald-400 mr-1">✅</span>
                <span className="text-gray-200 text-sm font-medium">No extra charges</span>
              </div>
              <div className="flex items-center bg-gray-800/60 backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-700">
                <span className="text-emerald-400 mr-1">✅</span>
                <span className="text-gray-200 text-sm font-medium">Just ₹16 per day!</span>
              </div>
            </div>
            
            {/* Super Prominent Primary CTA */}
            <div className="pt-2">
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg shadow-emerald-500/20 border border-emerald-400/30 relative overflow-hidden group">
                <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                <span>Get Fit for ₹499 – Join Now!</span>
              </button>
            </div>
            
            {/* Secondary CTAs in a Compact Row */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-gray-800 hover:bg-gray-700 border border-emerald-500/30 transition-colors duration-300 text-white font-medium py-2 px-3 rounded-lg text-sm lg:text-base">
                Transform Your Health
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 border border-emerald-500/30 transition-colors duration-300 text-white font-medium py-2 px-3 rounded-lg text-sm lg:text-base">
                Limited Slots Left!
              </button>
            </div>
            
            {/* Limited Time Badge - More Compact */}
            <div className="flex items-center justify-start gap-2">
              <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-gray-400 text-xs font-medium">Limited time offer • Only 30 spots remaining</p>
            </div>
          </div>
          
          {/* Right Content - Media Area */}
          <div className="relative h-full flex items-center justify-center">
            {/* Premium Border Effect */}
            <div className="absolute inset-0 lg:inset-6 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-xl opacity-30 blur lg:blur-md"></div>
            
            {/* Main Content Area */}
            <div className="relative bg-gradient-to-tr from-gray-900 to-gray-800 rounded-xl p-4 lg:p-6 border border-gray-700 w-full h-5/6 flex flex-col">
              {/* Discount Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-lg font-bold shadow-lg transform rotate-3 border border-amber-400/30 text-sm">
                75% OFF
              </div>
              
              {/* Video Button Area */}
              <div className="flex-1 flex flex-col items-center justify-center relative">
                {/* Circular Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-xl"></div>
                
                {/* Play Button */}
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-md"></div>
                  <div className="relative rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center border border-emerald-400/50 shadow-lg shadow-emerald-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 lg:h-10 lg:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Text */}
                <p className="text-gray-400 mt-4 text-center text-sm">Watch how our program transforms lives</p>
              </div>
              
              {/* What You'll Get */}
              <div className="mt-4 bg-gray-800/80 rounded-lg p-3">
                <h3 className="text-white text-sm font-medium mb-2">What You&apos;ll Get:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Health assessment",
                    "Wellness plan",
                    "Nutrition guidance",
                    "Fitness consultation",
                    "Mental wellness"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-emerald-500 rounded-full w-4 h-4 flex justify-center items-center mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-200 text-xs">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Proof */}
              <div className="mt-3 bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-6 h-6 rounded-full bg-gradient-to-r from-gray-${500 + i*100} to-gray-${400 + i*100} border-2 border-gray-800`}></div>
                    ))}
                  </div>
                  <p className="text-gray-300 text-xs"><span className="text-emerald-400 font-bold">2,500+</span> joined</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  HeroSection;