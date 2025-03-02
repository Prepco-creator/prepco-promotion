"use client";
import React, { useState, useEffect } from 'react';

const PrepcoFooterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Show footer after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animate the pulse effect every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 transform transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-gradient-to-r from-teal-500 to-teal-400 p-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-col md:flex-row ">
          <div className="flex items-center space-x-3">
            <div className={`flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full ${isAnimating ? 'animate-pulse' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-lg">₹499 | 30-Day Wellness Plan</p>
              <p className="text-teal-100 text-sm">No strings attached</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <div className="bg-yellow-400 text-base md:text-xs font-bold px-2 py-1 rounded-md text-teal-800">
              75% OFF
            </div>
            <button 
              className="bg-white hover:bg-teal-50 transition-colors text-teal-600 font-bold py-2 px-6 rounded-full flex items-center group"
              onClick={() => console.log('CTA clicked')}
            >
              Join Prepco
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute -top-3 right-3 bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-teal-700"
        onClick={() => setIsVisible(false)}
      >
        ×
      </button>
    </div>
  );
};

export default PrepcoFooterCTA;