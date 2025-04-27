"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import CTAButton from "../common/Ctabutton";

// Define interfaces for type safety
interface BonusServiceOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  value: string;
}

const BonusServiceComponent: React.FC = () => {
  // Centralized bonus service options
  const bonusServiceOptions: BonusServiceOption[] = useMemo(() => [
    {
      id: "dermatology",
      title: "Dermatology",
      description: "Expert skincare advice to address your concerns.",
      icon: "👨‍⚕️",
      value: "₹1500"
    },
    {
      id: "dental",
      title: "Dental", 
      description: "Online check-ups and personalized dental care tips.",
      icon: "🦷",
      value: "₹1500"
    },
    {
      id: "physio-discount",
      title: "Physiotherapy",
      description: "Get 25% off on online physiotherapy for pain relief and recovery.",
      icon: "💆",
      value: "₹1500"
    },
    {
      id: "nutrition",
      title: "Nutrition",
      description: "Personalized nutrition consultations for better health.",
      icon: "🥗",
      value: "₹1500"
    }
  ], []);

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [progressValue, setProgressValue] = useState<number>(0);

  // Handler to select a service
  const handleServiceSelect = useCallback((id: string) => {
    setSelectedService(id);
    setProgressValue(0);
    
    // Use requestAnimationFrame for smoother animations
    requestAnimationFrame(() => {
      setTimeout(() => setProgressValue(100), 100);
    });
  }, []);

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
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* "More = Free" Banner */}
          <div className="text-center mb-4">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full ">
              <p className="text-lg sm:text-xl font-bold text-white">
                {"Ohhh, wait, there's more. More = Free"}
              </p>
            </div>
          </div>
          
          {/* Center Box */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 rounded-2xl blur-xl opacity-70"></div>
            
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
                        <div className="text-4xl">
                          {getSelectedService?.icon || "🎁"}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <h4 className="text-xl font-bold text-emerald-400">
                        {getSelectedService?.title || "Select Your Bonus"}
                      </h4>
                      <p className="text-gray-300 text-sm mt-1">
                        {getSelectedService?.description || "Click an option to choose your free service"}
                      </p>
                      {getSelectedService && (
                        <p className="text-emerald-500 font-bold mt-2">
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
                          relative p-3 rounded-lg transition-all duration-300 overflow-hidden
                          flex flex-col items-center text-center
                          ${selectedService === option.id 
                            ? 'bg-gradient-to-b from-emerald-700 to-emerald-900 border-2 border-emerald-400 shadow-lg shadow-emerald-500/20' 
                            : 'bg-gray-800 hover:bg-gray-700 border border-gray-600'}
                        `}
                      >
                        <div className={`
                          text-2xl mb-1
                          ${selectedService === option.id ? 'scale-110 transition-transform duration-300' : ''}
                        `}>{option.icon}</div>
                        <div className="text-white text-sm font-medium">{option.title}</div>
                        <div className="text-emerald-400 text-xs mt-1">{option.value}</div>
                        
                        {selectedService === option.id && (
                          <div className="absolute -right-1 -top-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
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
  );
};

export default BonusServiceComponent;