"use client";
import React, { useEffect, useRef } from 'react';
import { images } from '../../../public/assets';
import Image from 'next/image';
import img from '../../../public/images/image';

const WhyPrepcoSection: React.FC = () => {
  const animatedCardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!animatedCardsRef.current) return;
    
    const cards = animatedCardsRef.current.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, 300 * index);
    });
    
    return () => {
      cards.forEach(card => {
        card.classList.remove('show');
      });
    };
  }, []);

  return (
    <div id='why-prepco' className="relative w-full overflow-hidden bg-teal-50 pt-16 pb-24">
      {/* Background shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl"></div>
      <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-teal-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-200/20 blur-3xl"></div>
      
      {/* Ornamental elements */}
      <div className="absolute top-40 left-10 w-8 h-8 rounded-full bg-teal-400/50 animate-pulse-slow"></div>
      <div className="absolute top-60 right-16 w-6 h-6 rounded-full bg-teal-500/40 animate-ping-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-10 h-10 rounded-full bg-teal-300/60 animate-bounce-gentle"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Why Prepco?</h2>
          <div className="relative mx-auto w-32 h-1 bg-teal-200 rounded-full mb-6">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-teal-500 rounded-full animate-underline"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 mb-4">
            What If Wellness Was Just a Click Away?
          </h3>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            We've bundled 10+ essential services so you don't have to choose. Experience it all for ₹499.
          </p>
        </div>
        
        {/* Hook card */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-teal-100 overflow-hidden mb-16 transform transition-all duration-500 hover:shadow-teal-200/50 hover:scale-[1.01]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-2/3">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Stop Searching. Start Healing.
                </h4>
                <p className="text-lg text-gray-700 mb-6">
                  From online yoga to stress relief and diet plans — everything you need, just ₹499 for 30 days.
                  We've combined 10+ essential health services into one seamless platform.
                </p>
                <div className="inline-flex items-center space-x-2 text-teal-500 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Get a taste of our full experience for just ₹499</span>
                </div>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 opacity-10 animate-ping-slow"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl md:text-4xl">
                    ₹499
                  </div>
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path d="M 50 0 A 50 50 0 0 1 100 50" fill="none" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="4" strokeDasharray="6 4" />
                    <path d="M 100 50 A 50 50 0 0 1 50 100" fill="none" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="4" strokeDasharray="6 4" />
                    <path d="M 50 100 A 50 50 0 0 1 0 50" fill="none" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="4" strokeDasharray="6 4" />
                    <path d="M 0 50 A 50 50 0 0 1 50 0" fill="none" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="4" strokeDasharray="6 4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* What You Get heading */}
        <h4 id='benefits' className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          What You Get:
        </h4>
        
        {/* Service cards - animated on scroll */}
        <div 
          ref={animatedCardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: "Online Fitness & Yoga Classes",
              description: "Live and on-demand classes for all fitness levels",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              ),
              image: img.yoga,
            },
            {
              title: "Personalized Diet & Nutrition Plan",
              description: "Custom meal plans based on your preferences",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              image: img.diet,
            },
            {
              title: "Stress Management & Relaxation Sessions",
              description: "Guided meditation and mindfulness practices",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              image: img.stress,
            },
            {
              title: "Exclusive Discounts on Healthcare Services",
              description: "Special rates with our partner providers",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              image: img.discount,
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="service-card opacity-0 translate-y-8 transition-all duration-700 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-teal-100 overflow-hidden transform hover:scale-105 hover:shadow-xl hover:border-teal-200"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>
              <div className="p-6 flex flex-col items-center">
                <Image
                  src={service.image} 
                  alt={service.title}
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-teal-600">
                  {service.icon}
                </div>
                <h5 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  {service.title}
                </h5>
                <p className="text-gray-600 text-center text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial Section */}
        {/* <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-teal-100">
          <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Customers Say
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6 relative">
              <div className="text-teal-500 text-4xl absolute -top-4 -left-2">"</div>
              <p className="text-gray-700 italic mb-4">Prepco transformed my approach to wellness. The convenience of having everything in one place is game-changing!</p>
              <div className="flex items-center">
                <img src="/api/placeholder/40/40" alt="Customer" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Aisha P.</p>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 relative">
              <div className="text-teal-500 text-4xl absolute -top-4 -left-2">"</div>
              <p className="text-gray-700 italic mb-4">The yoga classes and nutrition plans work perfectly together. I've never felt better, and all for just ₹499!</p>
              <div className="flex items-center">
                <img src="/api/placeholder/40/40" alt="Customer" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Rahul M.</p>
                  <p className="text-sm text-gray-500">Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* CTA button */}
        <div className="mt-16 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <button className="relative px-8 py-4 bg-gradient-to-br from-teal-500 to-teal-600 text-white text-xl font-bold rounded-lg transform transition-all duration-500 hover:shadow-xl hover:translate-y-[-2px] flex items-center">
              <span>Start Your Wellness Journey</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPrepcoSection;