"use client";
import React, { useState, useEffect } from 'react';

const FinalPushCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [hasScrolledPastFirstSection, setHasScrolledPastFirstSection] = useState(false);

  // Detect when user scrolls past the first section
  useEffect(() => {
    const handleScroll = () => {
      // Estimate the height of the first section (adjust this value as needed)
      const firstSectionHeight = window.innerHeight; // Assuming first section is viewport height
      
      // Check if user has scrolled past first section
      if (window.scrollY > firstSectionHeight && !hasScrolledPastFirstSection) {
        setHasScrolledPastFirstSection(true);
        setVisible(true);
      }
      
      // Auto-show again if user reaches bottom of page and it was minimized
      const scrollPosition = window.scrollY + window.innerHeight;
      const nearBottom = document.body.scrollHeight - scrollPosition < 300;
      
      if (nearBottom && minimized) {
        setMinimized(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledPastFirstSection, minimized]);

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <>
      {/* Main CTA Panel */}
      <div 
        className={`fixed bottom-0 left-0 right-0 transition-all duration-500 ease-in-out z-50 ${
          !visible ? 'translate-y-full' : 
          minimized ? 'translate-y-[calc(100%-48px)]' : 'translate-y-0'
        }`}
      >
        {/* Top glow effect */}
        <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        
        {/* Toggle bar - always visible when component is shown */}
        <div 
          className="bg-gradient-to-r from-emerald-700 to-teal-700 h-12 flex items-center justify-center cursor-pointer relative"
          onClick={toggleMinimize}
        >
          <div className="absolute left-4 text-xs text-emerald-200 font-semibold tracking-wider">
            {minimized ? "UNLOCK YOUR POTENTIAL" : "CLICK TO MINIMIZE"}
          </div>
          
          <div className="w-12 h-6 rounded-full bg-black/30 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`text-white transition-transform duration-300 ${minimized ? 'rotate-180' : ''}`}
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </div>
          
          <div className="absolute right-4 text-xs text-emerald-200 font-semibold tracking-wider">
            {minimized ? "CLICK TO VIEW OFFER" : "LIMITED TIME ONLY"}
          </div>
        </div>
        
        {/* Main content */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-emerald-500/30 py-8 px-4 shadow-[0_-10px_30px_rgba(16,185,129,0.15)]">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
              {/* Decorative element */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-transparent hidden lg:block"></div>
              
              {/* Headline Section */}
              <div className="text-center lg:text-left lg:pl-6 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-lg opacity-20 rounded-lg"></div>
                <div className="relative">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-2 flex flex-col lg:flex-row lg:items-center gap-2">
                    <span className="text-emerald-400">Your Healthiest Life</span>
                    <span className="text-white flex items-center">
                      Starts NOW!
                      <span className="inline-block ml-2 animate-pulse">
                        <span className="text-amber-400 text-2xl">✨</span>
                      </span>
                    </span>
                  </h2>
                  <div className="h-px w-20 bg-gradient-to-r from-emerald-400 to-transparent my-3 mx-auto lg:mx-0"></div>
                  <p className="text-gray-300 text-lg mb-2">
                    <span className="font-medium">1 Plan. 30 Days.</span> Complete Transformation.
                  </p>
                  <p className="text-xl">
                    <span className="text-white font-medium">All for just </span>
                    <span className="text-emerald-400 font-bold text-2xl">₹499</span>
                    <span className="text-white font-medium"> – No Extra Costs, No Hidden Fees.</span>
                  </p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg shadow-emerald-500/20 border border-emerald-400/30 relative overflow-hidden group whitespace-nowrap">
                  <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Your Healthiest Life Starts Now – Take Action!</span>
                </button>
                
                <button className="bg-gradient-to-r from-amber-600 to-red-500 hover:from-amber-700 hover:to-red-600 transition-all duration-300 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg shadow-amber-500/20 border border-amber-400/30 relative overflow-hidden group hidden lg:block whitespace-nowrap">
                  <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Join Now & See the Difference – Risk-Free!</span>
                </button>
              </div>
            </div>
            
            {/* Extra appeal section */}
            <div className="mt-6 pt-4 border-t border-gray-800/50 flex flex-wrap justify-center lg:justify-between items-center text-sm text-gray-400">
              <div className="flex items-center mb-4 lg:mb-0">
                <span className="text-emerald-400 mr-2">✓</span> 10+ Premium Services
                <span className="mx-3">|</span>
                <span className="text-emerald-400 mr-2">✓</span> 24/7 Expert Support
                <span className="mx-3">|</span>
                <span className="text-emerald-400 mr-2">✓</span> 100% Money-Back Guarantee
              </div>
              <div className="flex items-center gap-4">
                <span>Limited Slots Available:</span>
                <div className="w-32 h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[20%] h-full bg-gradient-to-r from-red-500 to-amber-500"></div>
                </div>
                <span className="text-amber-400 font-medium">80% Full</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile sticky button - only shown when main CTA is minimized */}
      <div className={`lg:hidden fixed bottom-20 right-4 z-50 transition-opacity duration-300 ${minimized ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setMinimized(false)}
          className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-teal-500/30 flex items-center gap-2 animate-pulse"
        >
          <span>One Click. 30 Days of Change!</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      
      {/* Close button */}
      <button 
        onClick={() => setVisible(false)} 
        className={`fixed bottom-[calc(100%-18px)] lg:bottom-[calc(100%-40px)] right-4 z-50 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-red-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </>
  );
};

export default FinalPushCTA;