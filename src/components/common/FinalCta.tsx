"use client";

import React, { useState, useEffect, useCallback} from 'react';
import { X, ChevronUp } from 'lucide-react';
import CTAButton from './Ctabutton';

interface CTAState {
  visible: boolean;
  minimized: boolean;
  hasScrolledPastFirstSection: boolean;
}

const FinalPushCTA: React.FC = () => {
  const [state, setState] = useState<CTAState>({
    visible: false,
    minimized: false,
    hasScrolledPastFirstSection: false
  });
  
  const [timeRemaining, setTimeRemaining] = useState<string>('20:00');

  // Simplified timer calculation
  const calculateTimeRemaining = useCallback(() => {
    const endTime = new Date().getTime() + 20 * 60 * 1000;

    const now = new Date().getTime();
    const difference = endTime - now;

    if (difference > 0) {
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return '00:00';
  }, []);

  // Timer effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const remainingTime = calculateTimeRemaining();
      setTimeRemaining(remainingTime);

      if (remainingTime === '00:00') {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [calculateTimeRemaining]);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const firstSectionHeight = window.innerHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      const nearBottom = document.body.scrollHeight - scrollPosition < 300;

      setState(prevState => {
        const newState = { ...prevState };

        if (window.scrollY > firstSectionHeight && !newState.hasScrolledPastFirstSection) {
          newState.hasScrolledPastFirstSection = true;
          newState.visible = true;
        }

        if (nearBottom && newState.minimized) {
          newState.minimized = false;
        }

        return newState;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle minimize handler
  const toggleMinimize = useCallback(() => {
    setState(prev => ({ ...prev, minimized: !prev.minimized }));
  }, []);

  // Close CTA handler
  const closeCTA = useCallback(() => {
    setState(prev => ({ ...prev, visible: false }));
  }, []);

  // Render methods
  const renderTimer = () => (
    <div className="fixed bottom-4 right-4 z-50 bg-black/70 text-white px-4 py-2 rounded-lg">
      <div className="flex items-center">
        <span className="mr-2">⏰ Offer Ends In:</span>
        <span className="font-bold text-emerald-400">{timeRemaining}</span>
      </div>
    </div>
  );

  const renderToggleBar = () => (
    <div
      className="bg-gradient-to-r from-emerald-700 to-teal-700 h-12 flex items-center justify-center cursor-pointer relative"
      onClick={toggleMinimize}
    >
      <div className="flex items-center justify-between w-full px-4">
        <div className="text-xs text-emerald-200 font-semibold tracking-wider">
          {state.minimized ? 'UNLOCK YOUR POTENTIAL' : 'CLICK TO MINIMIZE'}
        </div>

        <div className="w-12 h-6 rounded-full bg-black/30 flex items-center justify-center">
          <ChevronUp 
            className={`text-white transition-transform duration-300 ${
              state.minimized ? '' : 'rotate-180'
            }`} 
          />
        </div>

        <div className="text-xs text-emerald-200 font-semibold tracking-wider">
          {state.minimized ? 'CLICK TO VIEW OFFER' : 'LIMITED TIME ONLY'}
        </div>
      </div>
    </div>
  );

  const renderCTAContent = () => (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-emerald-500/30 py-8 px-4 shadow-[0_-10px_30px_rgba(16,185,129,0.15)]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left w-full">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Only ₹499 for a{' '}
              <span className="text-emerald-400">Complete Health Reset</span> – Join Now!
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            
              <CTAButton title="Start My 30-Day Trial Now →" />
            </div>

            <div className="mt-4 text-gray-300 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span>Limited Spots Left:</span>
                <div className="w-32 h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[20%] h-full bg-gradient-to-r from-red-500 to-amber-500"></div>
                </div>
                <span className="text-amber-400 font-medium">80% Full</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCloseButton = () => (
    <button
      onClick={closeCTA}
      className={`fixed bottom-[calc(100%-30px)] lg:bottom-[calc(100%-40px)] right-4 z-50 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-red-500 ${
        state.visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <X className="text-white" size={16} />
    </button>
  );

  // Main render
  return (
    <>
      {renderTimer()}

      <div
        className={`fixed bottom-0 left-0 right-0 transition-all duration-500 ease-in-out z-50 ${
          !state.visible
            ? 'translate-y-full'
            : state.minimized
            ? 'translate-y-[calc(100%-48px)]'
            : 'translate-y-0'
        }`}
      >
        {renderToggleBar()}
        {renderCTAContent()}
      </div>

      {renderCloseButton()}
    </>
  );
};

export default FinalPushCTA;