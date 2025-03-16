// WhyPrepcoSection.tsx
"use client";
import React, { useState, useEffect } from 'react';

const WhyPrepcoSection: React.FC = () => {
  // Testimonial data array
  const testimonials = [
    {
      quote: "I never thought I could change my life in just 30 days. This plan made it possible!",
      name: "Priya",
      result: "lost 8kg in 30 days"
    },
    {
      quote: "Following this program gave me more energy and confidence than I've had in years.",
      name: "Rahul",
      result: "dropped 2 sizes in 30 days"
    },
    {
      quote: "The meal plans were so easy to follow. I've finally found a healthy lifestyle I can stick with!",
      name: "Anjali",
      result: "lost 6kg and improved cholesterol"
    },
    {
      quote: "From struggling to walk up stairs to running 5K - this program changed everything for me.",
      name: "Vikram",
      result: "improved fitness by 70%"
    }
  ];

  // Before & After pairs data
  const transformationPairs = [
    {
      id: 1,
      beforeLabel: "BEFORE",
      afterLabel: "AFTER",
      beforeBg: "from-gray-500 to-gray-700",
      afterBg: "from-emerald-500 to-emerald-700"
    },
    {
      id: 2,
      beforeLabel: "DAY 1",
      afterLabel: "DAY 30",
      beforeBg: "from-gray-600 to-gray-800",
      afterBg: "from-teal-500 to-teal-700"
    },
    {
      id: 3,
      beforeLabel: "START",
      afterLabel: "FINISH",
      beforeBg: "from-gray-700 to-gray-900",
      afterBg: "from-cyan-500 to-cyan-700"
    }
  ];

  // State for current indices
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [currentTransformationIndex, setCurrentTransformationIndex] = useState(0);

  // Auto-rotate content
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Rotate testimonials every 5 seconds

    const transformationInterval = setInterval(() => {
      setCurrentTransformationIndex(prevIndex => 
        prevIndex === transformationPairs.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Rotate transformations every 7 seconds (staggered timing)

    // Cleanup on unmount
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(transformationInterval);
    };
  }, [testimonials.length, transformationPairs.length]);

  const currentTestimonial = testimonials[currentTestimonialIndex];
  const currentTransformation = transformationPairs[currentTransformationIndex];

  return (
    <div className="bg-black py-16 lg:py-20 ">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Emotional Content */}
          <div className="space-y-6">
            {/* Section Title with Premium Styling */}
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-sm opacity-70 rounded-lg"></div>
              <div className="relative bg-gray-900 border border-emerald-500/30 rounded-lg px-6 py-2">
                <h2 className="text-xl font-bold text-white">Why This Plan?</h2>
              </div>
            </div>
            
            {/* Emotional Headline */}
            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              Struggling with your health? <span className="text-emerald-400">We get it.</span>
            </h3>
            
            {/* Pain Points - Styled for Premium Look */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700">
              <p className="text-gray-300 text-lg mb-4">
                Diets don&apos;t stick. Gyms feel intimidating. Wellness plans cost a fortune.
              </p>
              <p className="text-2xl font-bold text-white">
                Not anymore!
              </p>
            </div>
            
            {/* Benefits Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                With <span className="text-emerald-400">Prepco&apos;s 30-Day Plan</span>, you get:
              </h4>
              
              {/* Premium-styled Benefits List */}
              <div className="space-y-3">
                <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 border-l-4 border-emerald-500 shadow-lg">
                  <span className="text-emerald-400 mr-3 text-lg mt-0.5">✅</span>
                  <div>
                    <p className="text-white font-semibold">A structured, step-by-step fitness & wellness program</p>
                    <p className="text-gray-400 text-sm mt-1">Tailored to your body and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 border-l-4 border-emerald-500 shadow-lg">
                  <span className="text-emerald-400 mr-3 text-lg mt-0.5">✅</span>
                  <div>
                    <p className="text-white font-semibold">Zero guesswork – We take care of everything</p>
                    <p className="text-gray-400 text-sm mt-1">Just follow the plan and see results</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 border-l-4 border-emerald-500 shadow-lg">
                  <span className="text-emerald-400 mr-3 text-lg mt-0.5">✅</span>
                  <div>
                    <p className="text-white font-semibold">A complete health solution, cheaper than your daily chai!</p>
                    <p className="text-gray-400 text-sm mt-1">Invest in yourself for just ₹16 per day</p>
                  </div>
                </div>
              </div>
            </div>
            
          
          </div>
          
          {/* Right Side - Visual Content */}
          <div className="relative">
            {/* Premium Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 rounded-2xl blur-xl opacity-70"></div>
            
            {/* Premium Image Container */}
            <div className="relative grid grid-cols-2 gap-3 p-4 bg-gray-900 rounded-xl border border-gray-700">
              {/* Before & After Transformation - Now with auto-rotation */}
              <div className="space-y-3">
                <div className="relative h-48 overflow-hidden rounded-lg transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${currentTransformation.beforeBg} flex items-center justify-center transition-all duration-700`}>
                      <span className="text-gray-300 text-sm font-medium">{currentTransformation.beforeLabel}</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-gray-900 flex items-center justify-center">
                    <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${currentTransformation.afterBg} flex items-center justify-center transition-all duration-700`}>
                      <span className="text-white text-sm font-medium">{currentTransformation.afterLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emotional Testimonial - Now with auto-rotation */}
              <div className="space-y-3">
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-4">
                      <span className="text-white text-2xl font-bold">&quot;</span>
                    </div>
                    <div className="h-16 flex items-center">
                      <p className="text-white text-center text-sm transition-opacity duration-500">
                        {currentTestimonial.quote}
                      </p>
                    </div>
                    <p className="text-emerald-400 text-center text-xs mt-4 transition-opacity duration-500">
                      - {currentTestimonial.name}, {currentTestimonial.result}
                    </p>
                  </div>
                </div>
                
                {/* Emotional Stats */}
                <div className="relative h-32 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
                    <div className="grid grid-cols-3 gap-2 w-full">
                      <div className="text-center">
                        <p className="text-emerald-400 text-2xl font-bold">94%</p>
                        <p className="text-gray-300 text-xs">Complete the plan</p>
                      </div>
                      <div className="text-center">
                        <p className="text-emerald-400 text-2xl font-bold">30+</p>
                        <p className="text-gray-300 text-xs">Days of support</p>
                      </div>
                      <div className="text-center">
                        <p className="text-emerald-400 text-2xl font-bold">100%</p>
                        <p className="text-gray-300 text-xs">Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
          {/* Emotional Call to Action */}
          <div className="pt-6 text-center">
              <p className="text-2xl font-bold text-white mb-6">
                This isn&apos;t just a plan. It&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">your transformation.</span>
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Ready to feel the difference?
              </p>
              
            
            </div>
          {/* CTA Buttons - Premium Style */}
          <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg shadow-emerald-500/20 border border-emerald-400/30 relative overflow-hidden group">
                  <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Take the First Step – Join for ₹499!</span>
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gray-800 hover:bg-gray-700 border border-emerald-500/30 transition-colors duration-300 text-white font-medium py-3 px-4 rounded-lg">
                    Ditch the Excuses – Start Now!
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 border border-emerald-500/30 transition-colors duration-300 text-white font-medium py-3 px-4 rounded-lg">
                    Your 30-Day Health Fix Starts Here!
                  </button>
                </div>
              </div>
      </div>
    </div>
  );
};

export default WhyPrepcoSection;