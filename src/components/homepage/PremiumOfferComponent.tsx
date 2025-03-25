'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PremiumOfferComponent: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 20,
    seconds: 0,
  });

  const [spotsTaken] = useState(4000);
  const totalSpots = 5000;
  const spotRemaining = totalSpots - spotsTaken;
  const percentageTaken = Math.floor((spotsTaken / totalSpots) * 100);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          clearInterval(countdownInterval);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTimeUnit = (unit : number) => (unit < 10 ? `0${unit}` : `${unit}`);


  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-3">
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20 relative">
          {/* Top Banner */}
          <div className="relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white font-bold px-6 py-2 rounded-bl-lg text-sm md:text-base z-10 shadow-lg">
              75% OFF
            </div>
            
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
              PREMIUM OFFER
            </div>
            
            <div className="bg-gradient-to-r from-emerald-900/40 via-emerald-600/20 to-emerald-900/40 px-6 py-8 md:py-3 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-5 md:mt-0">
                <span className="block">LIMITED-TIME OFFER</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-4">
                <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl border border-gray-700 text-center min-w-32">
                  <div className="text-emerald-400 text-lg font-bold mb-1">SPECIAL PRICE</div>
                  <div className="text-white text-2xl font-bold">₹499</div>
                  <div className="text-gray-400 line-through text-sm">₹1,999</div>
                </div>
                
                <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl border border-gray-700 text-center min-w-32">
                  <div className="text-emerald-400 text-lg font-bold mb-1">SPOTS LEFT</div>
                  <div className="text-white text-2xl font-bold">{spotRemaining}</div>
                  <div className="text-gray-400 text-sm">out of {totalSpots}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="p-4 md:p-6">
            {/* Countdown Timer */}
            <div className="mb-6">
              <h2 className="text-center text-lg md:text-xl text-white font-medium mb-3">
                Offer expires in:
              </h2>
              <div className="flex justify-center gap-2 md:gap-3">
             
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-2 md:p-3 w-16 md:w-20 text-center border border-gray-700">
                  <span className="text-white text-xl md:text-2xl font-bold">{formatTimeUnit(timeLeft.minutes)}</span>
                  <p className="text-gray-400 text-xs mt-1">Minutes</p>
                </div>
                <div className="text-white text-xl md:text-2xl font-bold flex items-center">:</div>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-2 md:p-3 w-16 md:w-20 text-center border border-gray-700">
                  <span className="text-white text-xl md:text-2xl font-bold">{formatTimeUnit(timeLeft.seconds)}</span>
                  <p className="text-gray-400 text-xs mt-1">Seconds</p>
                </div>
              </div>
            </div>
            
            {/* Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                <h3 className="text-emerald-400 text-lg font-bold mb-2">LIMITED SPOTS</h3>
                <p className="text-white text-lg mb-3">Only 5,000 Available – 80% Already Taken!</p>
                <div className="mb-1 flex justify-between">
                  <span className="text-gray-400 text-sm">Filling Fast</span>
                  <span className="text-emerald-400 text-sm">{spotsTaken}+ joined</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2.5 rounded-full" 
                    style={{ width: `${percentageTaken}%` }}
                  ></div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-gray-300 text-sm">Running out fast!</span>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                <h3 className="text-emerald-400 text-lg font-bold mb-2">SPECIAL LAUNCH PRICE</h3>
                <div className="text-white text-lg mb-2">₹499 <span className="text-gray-400 line-through ml-2">₹1,999</span></div>
                <p className="text-gray-300 mb-3">Save 75% – This deal won&#39;t last long!</p>

                <div className="flex flex-wrap gap-2">
                  <div className="bg-gray-700 px-3 py-1 rounded-full text-white text-sm">
                    <span className="text-emerald-400 mr-1">✓</span> 100% risk-free
                  </div>
                  <div className="bg-gray-700 px-3 py-1 rounded-full text-white text-sm">
                    <span className="text-emerald-400 mr-1">✓</span> No hidden fees
                  </div>
                  <div className="bg-gray-700 px-3 py-1 rounded-full text-white text-sm">
                    <span className="text-emerald-400 mr-1">✓</span> Cancel anytime
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-3">
              <Link href="https://com.rpy.club/cop/TQW6fMn6QA" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg shadow-emerald-500/20 border border-emerald-400/30 relative overflow-hidden group">
                  <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Grab yours NOW! – Only {spotRemaining} spots remaining</span>
                </button>
              </Link>
              
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                <div className="inline-flex items-center bg-gray-800/80 text-gray-300 rounded-full px-4 py-2 text-sm border border-gray-700">
                  <span className="text-amber-400 mr-2">⚡</span>
                  Flash Deal: ₹499 Today – Act Fast!
                </div>
                <div className="inline-flex items-center bg-gray-800/80 text-gray-300 rounded-full px-4 py-2 text-sm border border-gray-700">
                  <span className="text-green-400 mr-2">💰</span>
                  Save 75% – Offer Ending Soon!
                </div>
              </div>
            </div>
            
            {/* Bottom Banner */}
            <div className="mt-4 bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl border border-gray-700 text-center">
              <div className="text-emerald-400 text-sm font-bold animate-pulse">
                Grab yours NOW! – Only {spotRemaining} spots remaining
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumOfferComponent;