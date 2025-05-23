"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import CTAButton from "../common/Ctabutton";

// Define interfaces for type safety
interface BonusServiceOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  value: string;
}

const CombinedWellnessComponent: React.FC = () => {
  // Refs for scrolling
  const wellnessJourneySectionRef = useRef<HTMLDivElement>(null);
  
  // Centralized bonus service options with updated titles and order
  const bonusServiceOptions: BonusServiceOption[] = useMemo(() => [
    {
      id: "dental",
      title: "Dental Consultation", 
      description: "Online check-ups and personalized dental care tips.",
      icon: "🦷",
      value: "₹1500"
    },
    {
      id: "physio-discount",
      title: "Physiotherapy Consultation",
      description: "Get 25% off on online physiotherapy for pain relief and recovery.",
      icon: "💆",
      value: "₹1500"
    },
    {
      id: "dermatology",
      title: "Dermatology Consultation",
      description: "Expert skincare advice to address your concerns.",
      icon: "👨‍⚕️",
      value: "₹1500"
    },
    {
      id: "general-doctor",
      title: "General Doctor Consultation",
      description: "Personalized medical consultations for better health.",
      icon: "🥗",
      value: "₹1500"
    }
  ], []);

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [journeyCardActive, setJourneyCardActive] = useState<boolean>(false);
  const [isCardTransitioning, setIsCardTransitioning] = useState<boolean>(false);
  
  // Handler to select a service
  const handleServiceSelect = useCallback((id: string) => {
    if (selectedService === id) return; // Don't process if same card selected
    
    // Set transitioning state for color effects
    setIsCardTransitioning(true);
    
    // First reset progress value for animation effect
    setProgressValue(0);
    
    // Apply smooth color transition effect
    setTimeout(() => {
      setSelectedService(id);
      
      // Use requestAnimationFrame for smoother animations
      requestAnimationFrame(() => {
        setTimeout(() => setProgressValue(100), 100);
      });
      
      // Scroll to wellness journey section
      if (wellnessJourneySectionRef.current) {
        wellnessJourneySectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        
        // Activate cards with delayed animation
        setTimeout(() => {
          setJourneyCardActive(true);
          // End transition phase
          setIsCardTransitioning(false);
        }, 800);
      }
    }, 200); // Short delay for transition effect
  }, [selectedService]);

  // Effect with proper cleanup
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 500);
    return () => clearTimeout(timer);
  }, []);

  // Find selected service helper function
  const getSelectedService = useMemo(() => 
    bonusServiceOptions.find(o => o.id === selectedService), 
    [selectedService, bonusServiceOptions]
  );

  return (
    <>
      {/* Bonus Service Section */}
      <section className="py-8 bg-black mt-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Center Box */}
            <div className="relative">
              <div className={`absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 rounded-2xl blur-xl opacity-70 transition-all duration-700 ${isCardTransitioning ? 'opacity-30' : 'opacity-70'}`}></div>
              
              <div className="relative p-4 sm:p-6 bg-gray-900 rounded-xl border border-gray-700">
                {/* Heading */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Choose any one service worth <span className="text-emerald-400">Rs 1500</span>, for <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">FREE</span>
                  </h2>
                  <p className="text-gray-300 mt-2">
                    Share this bonus with a friend or family member
                  </p>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Side - Progress Circle */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center">
                      <div className="relative h-32 w-32 sm:h-40 sm:w-40">
                        <svg className="absolute -rotate-90" viewBox="0 0 100 100" width="100%" height="100%">
                          <circle 
                            cx="50" cy="50" r="40" 
                            fill="none" 
                            stroke="#2D3748" 
                            strokeWidth="8"
                          />
                          <circle 
                            cx="50" cy="50" r="40" 
                            fill="none" 
                            stroke="#10B981" 
                            strokeWidth="8"
                            strokeDasharray="251.2"
                            strokeDashoffset={251.2 - (251.2 * progressValue) / 100} 
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-4xl transition-all duration-500">
                            {getSelectedService?.icon || "🎁"}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <h4 className="text-xl font-bold text-emerald-400 transition-all duration-500">
                          {getSelectedService?.title || "Select Your Bonus"}
                        </h4>
                        <p className="text-gray-300 text-sm mt-1 transition-all duration-500">
                          {getSelectedService?.description || "Click an option to choose your free service"}
                        </p>
                        {getSelectedService && (
                          <p className="text-emerald-500 font-bold mt-2 transition-all duration-500">
                            Value: {getSelectedService.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Service Options Grid */}
                  <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-2 gap-3">
                      {bonusServiceOptions.map((option) => (
                        <button 
                          key={option.id}
                          onClick={() => handleServiceSelect(option.id)}
                          className={`
                            relative p-3 rounded-lg transition-all duration-500 overflow-hidden
                            flex flex-col items-center text-center
                            ${selectedService === option.id 
                              ? 'bg-gradient-to-b from-emerald-700 to-emerald-900 border-2 border-emerald-400 shadow-lg shadow-emerald-500/20' 
                              : 'bg-gray-800 hover:bg-gray-700 border border-gray-600'}
                          `}
                        >
                          <div className={`
                            text-2xl mb-1 transition-transform duration-500
                            ${selectedService === option.id ? 'scale-110' : ''}
                          `}>{option.icon}</div>
                          <div className="text-white text-xs sm:text-sm font-medium">{option.title}</div>
                          <div className="text-emerald-400 text-xs mt-1">{option.value}</div>
                          
                          {selectedService === option.id && (
                            <div className="absolute -right-1 -top-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-6 flex justify-center">
                      <CTAButton title={selectedService ? "Claim Your Free Bonus" : "Select a Service"} />
                    </div>
                  </div>
                </div>
                
                {/* Bonus Info Section */}
                <div className="mt-6 relative overflow-hidden rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                    <p className="text-sm">
                      Limited time offer - Add this free bonus service to your health plan now!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Journey Section */}
      <div className="bg-black py-12" ref={wellnessJourneySectionRef}>
        <div className="container mx-auto px-4 pt-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-10 items-center">
              {/* Wellness Journey Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  A complete, personalized wellness journey to help you feel your best!
                </h3>
                
                <div className="space-y-4">
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
                        transition-all duration-1000 ease-in-out
                        ${journeyCardActive 
                          ? 'bg-gradient-to-r from-gray-800 to-gray-900 opacity-100' 
                          : 'bg-gray-800/40 opacity-70'}
                        ${isCardTransitioning ? 'scale-98 opacity-90' : ''}
                        `}
                      style={{
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <span className={`
                        mr-3 text-lg mt-0.5 transition-colors duration-1000
                        ${journeyCardActive ? 'text-emerald-400' : 'text-gray-500'}
                      `}>{benefit.number}</span>
                      <div>
                        <p className={`
                          font-semibold transition-colors duration-1000
                          ${journeyCardActive ? 'text-white' : 'text-gray-400'}
                        `}>{benefit.title}</p>
                        <p className={`
                          text-sm mt-1 transition-colors duration-1000
                          ${journeyCardActive ? 'text-gray-400' : 'text-gray-500'}
                        `}>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
      </div>
    </>
  );
};

export default CombinedWellnessComponent;