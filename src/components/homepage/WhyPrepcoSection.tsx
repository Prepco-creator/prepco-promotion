"use client";

import React, { useState, useEffect } from 'react';

import CTAButton from '../common/Ctabutton';
import TitleBox from '../common/TitleBox';


// Define interfaces for type safety
interface AddOnOption {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const WhyPrepcoSection: React.FC = () => {
  // Strongly typed state
  const [selectedAddOn, setSelectedAddOn] = useState<string | null>(null);
  const [progressValue, setProgressValue] = useState<number>(0);

  // Centralized add-on options with type annotation
  const addOnOptions: AddOnOption[] = React.useMemo(() => [
    {
      id: "dermatology",
      title: "Virtual Dermatology Consultation",
      description: "Expert skincare advice to address your concerns.",
      icon: "👨‍⚕️"
    },
    {
      id: "dental",
      title: "Virtual Dental Consultation", 
      description: "Online check-ups and personalized dental care tips.",
      icon: "🦷"
    },
    {
      id: "physio-discount",
      title: "25% Off Online Physiotherapy Treatments",
      description: "Get 25% off on online physiotherapy for pain relief and recovery.",
      icon: "💆"
    },
    {
      id: "physio-consult",
      title: "Virtual Physio Consultation",
      description: "Personalized physiotherapy consultations to improve mobility and reduce pain.",
      icon: "🏋️"
    }
  ], []);

  // Memoized handler to prevent unnecessary re-renders
  const handleAddOnSelect = React.useCallback((id: string) => {
    setSelectedAddOn(id);
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

  // Find selected add-on helper function
  const getSelectedAddOn = React.useMemo(() => 
    addOnOptions.find(o => o.id === selectedAddOn), 
    [selectedAddOn, addOnOptions]
  );
  

  return (
    <div className="bg-black  lg:py-6 ">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Wellness Journey Content */}
          <div className="space-y-6">
            <TitleBox title='Why this Plan?'/>
            <h3 className="text-2xl font-bold text-white">
              A complete, personalized wellness journey to help you feel your best!
            </h3>
            
            <div className="space-y-4">
              {/* Benefits mapped from an array for better maintainability */}
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
              ].map((benefit) => (
                <div 
                  key={benefit.number} 
                  className="flex items-start bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 border-l-4 border-emerald-500 shadow-lg"
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
          
          {/* Right Side - Interactive Add-On Wheel */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 rounded-2xl blur-xl opacity-70"></div>
            
            <div className="relative p-6 bg-gray-900 rounded-xl border border-gray-700">
              <p className="text-white italic mb-6">
              &quot;Enhance your wellness with your choice of one add-on!&quot;
              </p>
              
              {/* Progress Circle */}
              <div className="relative w-full mx-auto mb-8 mt-4">
                <div className="flex flex-col items-center">
                  <div className="relative h-40 w-40">
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
                        {getSelectedAddOn?.icon || "🎁"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <h4 className="text-xl font-bold text-emerald-400">
                      {getSelectedAddOn?.title || "Select Your Add-On"}
                    </h4>
                    <p className="text-gray-300 text-sm mt-1">
                      {getSelectedAddOn?.description || "Click an option below to customize your plan"}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Interactive Add-On Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {addOnOptions.map((option) => (
                  <button 
                    key={option.id}
                    onClick={() => handleAddOnSelect(option.id)}
                    className={`
                      relative p-3 rounded-lg transition-all duration-300 overflow-hidden
                      flex flex-col items-center text-center
                      ${selectedAddOn === option.id 
                        ? 'bg-gradient-to-b from-emerald-700 to-emerald-900 border-2 border-emerald-400 shadow-lg shadow-emerald-500/20' 
                        : 'bg-gray-800 hover:bg-gray-700 border border-gray-600'}
                    `}
                  >
                    <div className={`
                      text-2xl mb-1
                      ${selectedAddOn === option.id ? 'scale-110 transition-transform duration-300' : ''}
                    `}>{option.icon}</div>
                    <div className="text-white text-sm font-medium">{option.title.split(' ')[0]}</div>
                    
                    {selectedAddOn === option.id && (
                      <div className="absolute -right-1 -top-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Interactive Stats Section */}
              <div className="mt-6 relative overflow-hidden rounded-lg">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-4">
                  <div className="flex justify-between items-center">
                    <div className="w-full">
                      <div className="mb-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-white">Plan Completion</span>
                          <span className="text-sm text-emerald-400">
                            {selectedAddOn ? '100%' : '83%'}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: selectedAddOn ? '100%' : '83%' }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-white">Potential Results</span>
                          <span className="text-sm text-emerald-400">
                            {selectedAddOn ? '97%' : '75%'}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: selectedAddOn ? '97%' : '75%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  );
};

export default WhyPrepcoSection;