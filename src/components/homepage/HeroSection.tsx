"use client";
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createBubble = () => {
      if (!bubbleRef.current) return;
      
      const bubble = document.createElement('div');
      const size = Math.random() * 80 + 20;
      const position = Math.random() * 100;
      
      bubble.className = 'absolute rounded-full bg-teal-400/20 backdrop-blur-sm z-0 animate-float';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${position}%`;
      bubble.style.bottom = '-100px';
      bubble.style.animationDuration = `${Math.random() * 5 + 8}s`;
      
      bubbleRef.current.appendChild(bubble);
      
      setTimeout(() => {
        bubble.remove();
      }, 13000);
    };
    
    const interval = setInterval(createBubble, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200 min-h-[600px]">
      {/* Animated bubbles container */}
      <div ref={bubbleRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-teal-300/30 blur-3xl"></div>
      <div className="absolute top-40 right-20 w-60 h-60 rounded-full bg-cyan-300/30 blur-2xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl"></div>
      
      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            className="fill-teal-400/30 animate-wave" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            className="fill-teal-500/20 animate-wave-slow" 
            fillOpacity="1" 
            d="M0,288L48,266.7C96,245,192,203,288,181.3C384,160,480,160,576,170.7C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center">
        {/* Glowing price tag */}
       
        
        {/* Content card with animation */}
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-teal-100 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-teal-200/50">
          <div className="relative p-8 md:p-12">
            {/* Decorative circle */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 opacity-20"></div>
            
            <h1 className="relative text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 leading-tight mb-6">
              Test Drive Your Healthiest Life for ₹499
            </h1>
            
            
            <p className="text-xl md:text-2xl text-teal-700 mb-10">
              Try 6 curated wellness services + exclusive discounts. 
              <span className="font-bold">No strings attached.</span>
            </p>
            <div className='flex  flex-wrap items-center gap-3.5'>
            {/* Button that morphs on hover */}
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <button className="relative px-10 py-4 bg-gradient-to-br from-teal-500 to-teal-600 text-white text-lg font-bold rounded-lg transform transition-all duration-500 hover:shadow-[0_10px_25px_-5px_rgba(20,184,166,0.4)] hover:translate-y-[-2px] flex items-center">
                <span>Claim Your Offer</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="inline-flex items-center mt-4 sm:mt-0 ">
              <div className="relative flex items-center bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-2 border border-teal-200 shadow-md">
                <div className="flex items-center mr-3">
                  <span className="line-through text-teal-500 text-xl">₹1,999</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-md px-3 py-1 shadow-sm">
                  <span className="font-bold text-2xl">₹499</span>
                </div>
                <div className="absolute -top-5 -right-4 bg-yellow-400 text-yellow-800 text-lg font-bold rounded-full py-1 px-2 shadow-md border border-yellow-500 animate-pulse-slow">
                  75% OFF
                </div>
              </div>
            </div>
            </div>
            
            {/* Floating illustrations */}
            <div className="absolute  top-20 sm:top-12 right-4  w-16 h-16 md:w-24 md:h-24 rounded-full bg-teal-100 flex items-center justify-center animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-14 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            
            <div className="absolute bottom-8 right-24 w-12 h-12 md:w-16 md:h-16 rounded-full bg-cyan-100 flex items-center justify-center animate-float-delayed">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          
          {/* Bottom wave pattern */}
          <div className="h-12 bg-gradient-to-r from-teal-500 to-teal-400 relative overflow-hidden">
            <div className="absolute inset-0">
              <svg viewBox="0 0 120 28" className="w-full h-full">
                <defs>
                  <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
                </defs>
                <use xlinkHref="#wave" className="wave fill-white/20" />
                <use xlinkHref="#wave" className="wave fill-white/10" x="50" y="0" />
                <use xlinkHref="#wave" className="wave fill-white/5" x="25" y="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

