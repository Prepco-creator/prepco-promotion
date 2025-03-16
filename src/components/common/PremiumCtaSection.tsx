import React from 'react';

const PremiumCtaSection: React.FC = () => {
  return (
    <div className="py-12">
      {/* Premium No Hidden Fees Banner */}
      <div className="relative max-w-4xl mx-auto mb-16 overflow-hidden">
        {/* Background with animated gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 opacity-80"></div>
        
        {/* Animated light beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-full w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_white_0%,_transparent_20%)] opacity-30 animate-pulse"></div>
        </div>
        
        {/* Border with glowing effect */}
        <div className="absolute inset-[3px] bg-gray-900 rounded-xl z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 px-8 py-10 rounded-xl bg-opacity-80 text-center flex flex-col items-center">
          <div className="mb-2">
            <span className="inline-block px-4 py-1 bg-gray-800 bg-opacity-70 rounded-full text-sm font-semibold text-emerald-300 border border-emerald-500/30">
              TRANSPARENCY PROMISE
            </span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
  That&apos;s it.{" "}
  <span className="relative">
    <span className="absolute -inset-1 blur-sm bg-emerald-500/30"></span>
    <span className="relative text-emerald-300">No hidden fees</span>
  </span>
  , no contracts.
</h3>

          
          <p className="text-2xl font-bold text-white mb-6">
            Just <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-200">real results!</span>
          </p>
          
          {/* Premium seal */}
          <div className="absolute -right-6 -top-6 w-24 h-24 rotate-12">
            <div className="absolute inset-0 bg-emerald-500 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center">
              <div className="text-center">
                <span className="block text-xs font-bold text-emerald-300">100%</span>
                <span className="block text-xs font-bold text-emerald-300">GUARANTEED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium CTA Buttons Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CTA Button 1 - Primary */}
            <div className="relative group h-full">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Button container */}
              <div className="relative h-full flex flex-col bg-gray-900 rounded-lg p-6 border border-emerald-500/30">
                {/* Icon */}
                <div className="mb-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                {/* Time indicator */}
                <div className="mb-3">
                  <span className="bg-emerald-900/30 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    2 MINS SIGNUP
                  </span>
                </div>
                
                {/* Button Text */}
                <h4 className="text-lg font-bold text-white mb-2">Join in 2 Mins – Start Your Journey!</h4>
                
                {/* Action button */}
                <button className="mt-auto py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg text-white font-bold shadow-lg shadow-emerald-500/20 hover:from-emerald-600 hover:to-teal-500 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 w-1/4 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Join Now</span>
                </button>
              </div>
            </div>
            
            {/* CTA Button 2 - Secondary */}
            <div className="relative group h-full">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Button container */}
              <div className="relative h-full flex flex-col bg-gray-900 rounded-lg p-6 border border-cyan-500/30">
                {/* Icon */}
                <div className="mb-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                
                {/* Stress indicator */}
                <div className="mb-3">
                  <span className="bg-cyan-900/30 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    NO STRESS
                  </span>
                </div>
                
                {/* Button Text */}
                <h4 className="text-lg font-bold text-white mb-2">Simple, No-Stress Signup – Get Started!</h4>
                
                {/* Action button */}
                <button className="mt-auto py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg text-white font-bold shadow-lg shadow-cyan-500/20 hover:from-cyan-600 hover:to-blue-500 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 w-1/4 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Get Started</span>
                </button>
              </div>
            </div>
            
            {/* CTA Button 3 - Highlight */}
            <div className="relative group h-full">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-red-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Button container */}
              <div className="relative h-full flex flex-col bg-gray-900 rounded-lg p-6 border border-amber-500/30">
                {/* Icon */}
                <div className="mb-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-red-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Transform indicator */}
                <div className="mb-3">
                  <span className="bg-amber-900/30 text-amber-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                    30 DAYS
                  </span>
                </div>
                
                {/* Button Text */}
                <h4 className="text-lg font-bold text-white mb-2">One Click = 30 Days of Transformation!</h4>
                
                {/* Action button */}
                <button className="mt-auto py-3 px-4 bg-gradient-to-r from-amber-500 to-red-400 rounded-lg text-white font-bold shadow-lg shadow-amber-500/20 hover:from-amber-600 hover:to-red-500 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 w-1/4 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Transform Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCtaSection;