"use client";
import React, { useState, useEffect, useCallback } from 'react';

import CTAButton from './Ctabutton'; 
import { 
  SparklesIcon, 
  UserIcon, 
  LayoutGridIcon, 
  CheckCircleIcon, 
  TimerIcon 
} from 'lucide-react';
import TitleBox from './TitleBox';

interface PremiumFeature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: {
    from: string;
    to: string;
  };
  accentColor: string;
}

const FEATURES: PremiumFeature[] = [
  {
    id: 0,
    icon: <SparklesIcon className="h-6 w-6 text-white" />,
    title: "Sign Up in 1 Click",
    description: "Instant access after payment",
    gradient: { from: "from-emerald-600", to: "to-teal-600" },
    accentColor: "emerald"
  },
  {
    id: 1,
    icon: <UserIcon className="h-6 w-6 text-white" />,
    title: "Doctor Consultation",
    description: "Get tailor made health plan",
    gradient: { from: "from-cyan-600", to: "to-blue-600" },
    accentColor: "cyan"
  },
  {
    id: 2,
    icon: <LayoutGridIcon className="h-6 w-6 text-white" />,
    title: "Expert-Led Sessions",
    description: "Workout, eat, and relax smarter",
    gradient: { from: "from-purple-600", to: "to-indigo-600" },
    accentColor: "purple"
  },
  {
    id: 3,
    icon: <CheckCircleIcon className="h-6 w-6 text-white" />,
    title: "See Results in 30 Days",
    description: "Feel healthier, guaranteed",
    gradient: { from: "from-amber-500", to: "to-red-500" },
    accentColor: "amber"
  }
];

const PremiumCtaSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(1200); // 20 minutes
  const [activeBox, setActiveBox] = useState<number>(0);

  // Memoized timer logic
  const updateTimer = useCallback(() => {
    setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
  }, []);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [updateTimer]);

  // Auto rotate boxes effect
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setActiveBox((prev) => (prev < FEATURES.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(rotateInterval);
  }, []);

  // Format timer as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative py-2 -mt-0 md:-mt-0">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex justify-center items-center mb-6">
          
          <TitleBox title='Get Ready for a personalised health and wellness journey '/>
        </div>

        {/* Premium CTA Boxes */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {FEATURES.map((feature) => (
              <div 
                key={feature.id}
                className={`relative group h-full cursor-pointer transform transition-all duration-500 
                  ${activeBox === feature.id ? 'scale-105 z-10' : 'scale-100 opacity-90'}`}
                onClick={() => setActiveBox(feature.id)}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient.from} ${feature.gradient.to} rounded-xl blur 
                  ${activeBox === feature.id ? 'opacity-100 animate-pulse' : 'opacity-70'} transition duration-500`}></div>
                
                {/* Feature Box */}
                <div className={`relative h-full flex flex-col bg-gray-900 rounded-lg p-6 border border-${feature.accentColor}-500/30`}>
                  {/* Icon */}
                  <div className={`mb-4 w-12 h-12 bg-gradient-to-br ${feature.gradient.from} ${feature.gradient.to} rounded-full 
                    flex items-center justify-center shadow-lg shadow-${feature.accentColor}-500/30 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  
                  {/* Feature Text */}
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className={`text-${feature.accentColor}-300 text-sm mb-4`}>{feature.description}</p>
                  
                  {/* Progress Indicator */}
                  <div className="w-full h-1 bg-gray-700 rounded-full mt-auto overflow-hidden">
                    <div className={`h-full bg-${feature.accentColor}-500 ${activeBox === feature.id ? 'animate-progress-fill' : 'w-0'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section with Timer */}
          <div className="mt-10 flex flex-col items-center">
            <div className="mb-4 flex items-center space-x-2">
              <TimerIcon className="h-5 w-5 text-red-500 animate-pulse" />
              <p className="text-white font-semibold">
                Limited Time Offer Ends In: <span className="text-red-400 font-mono">{formatTime()}</span>
              </p>
            </div>
            
            <CTAButton title="Unlock My 30-Day Plan" />
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default PremiumCtaSection;