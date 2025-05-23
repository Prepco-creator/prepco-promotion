"use client";

import React, { useState, useEffect } from 'react';

import CTAButton from '../common/Ctabutton';
// import { CheckCircle, Play } from "lucide-react";

// const benefits = [
//   "Health assessment",
//   "Wellness plan",
//   "Nutrition guidance",
//   "Fitness consultation",
//   "Mental wellness",
// ];




const WhyPrepcoSection: React.FC = () => {
  // Strongly typed state
  const [selectedService, ] = useState<string | null>(null);
  const [animateItems, setAnimateItems] = useState<boolean>(false);
  
  // Handle dermatology selection and animation
  useEffect(() => {
    if (selectedService === "dermatology") {
      // Add a slight delay before starting the animation
      const timer = setTimeout(() => {
        setAnimateItems(true);
        
        // Auto-scroll to benefits list
        const benefitsList = document.getElementById('benefits-list');
        if (benefitsList) {
          benefitsList.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [selectedService]);
  
  
  return (
    <div className="bg-black lg:py-6">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 gap-10 items-center">
          {/* Left Side - Wellness Journey Content */}
          <div className="space-y-6">
          
            <h3 className="text-2xl font-bold text-white">
              A complete, personalized wellness journey to help you feel your best!
            </h3>
            
            <div id="benefits-list" className="space-y-4">
             
              {[
                { 
                  number: "1", 
                  title: "Online Fitness Program (1 Month)", 
                  description: "Tailored fitness routines to boost strength, endurance, and confidence." 
                },
                { 
                  number: "2", 
                  title: "Online Yoga Classes (1 Month)", 
                  description: "Yoga sessions to improve flexibility, mindfulness, and relaxation." 
                },
                { 
                  number: "3", 
                  title: "Personalized Nutrition & Diet Plan (1 Month)", 
                  description: "A custom diet plan to support your health and fitness goals." 
                },
                { 
                  number: "4", 
                  title: "Weekly Stress Management Sessions", 
                  description: "Learn techniques to manage stress and stay balanced." 
                },
                { 
                  number: "5", 
                  title: "Weekly Muscle Relaxing Stretching with Physio", 
                  description: "Stretching sessions to release muscle tension and improve flexibility." 
                },
                { 
                  number: "6", 
                  title: "Self-Grooming Tips & Guidance", 
                  description: "Expert tips on skincare, hair care, and grooming for your best self." 
                }
              ].map((benefit, index) => (
                <div 
                  key={benefit.number} 
                  className={`
                    flex items-start rounded-lg p-4 border-l-4 border-emerald-500 shadow-lg
                    transition-all duration-700 ease-in-out
                    ${animateItems 
                      ? 'bg-gradient-to-r from-gray-800 to-gray-900' 
                      : 'bg-gray-800'}
                    ${animateItems && 'transform-gpu'}
                  `}
                  style={{
                    transitionDelay: animateItems ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <span className="text-emerald-400 mr-3 text-lg mt-0.5">{benefit.number}</span>
                  <div>
                    <p className="text-white font-semibold">{benefit.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* <div className="relative flex justify-center items-center h-full">
     
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 opacity-30 rounded-xl lg:blur-md"></div>

    
      <div className="relative flex flex-col bg-gray-900 border border-gray-700 p-6 rounded-xl h-5/6 w-full lg:p-8">
    
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-bold px-4 py-1 border border-amber-400/30 rounded-lg shadow-lg rotate-3 text-white">
          75% OFF
        </div>


        <div className="flex flex-col items-center justify-center flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-xl"></div>
          <div className="relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-600 to-emerald-500 border border-emerald-400/50 rounded-full shadow-lg shadow-emerald-500/20">
            <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
          </div>
          <p className="mt-4 text-sm text-center text-gray-400">
            Watch how our program transforms lives
          </p>
        </div>

    
        <div className="mt-4 p-3 bg-gray-800/80 rounded-lg">
          <h3 className="text-sm font-medium text-white mb-2">
            What You&apos;ll Get:
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="flex justify-center items-center w-4 h-4 bg-emerald-500 rounded-full mr-2">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-200 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div> */}
        </div>
        
        <div className="pt-10 text-center">
          <p className="text-2xl font-bold text-white mb-6">
            This isn&apos;t just a plan. It&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">your transformation.</span>
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Ready to feel the difference?
          </p>
        </div>
        
        <div className="mt-6">
          <CTAButton title="🟢 Join Now & Start Your Transformation!" />
        </div>
      </div>
    </div>
  );
};

export default WhyPrepcoSection;