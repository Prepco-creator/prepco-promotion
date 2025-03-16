'use client';
import React, { useState, useEffect } from 'react';

const PremiumOfferComponent: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  
  const [spotsTaken] = useState(4000);
  const totalSpots = 5000;
  const spotRemaining = totalSpots - spotsTaken;
  const percentageTaken = Math.floor((spotsTaken / totalSpots) * 100);
  
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(countdownInterval);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTimeUnit = (unit: number): string => {
    return unit < 10 ? `0${unit}` : `${unit}`;
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20 relative">
          {/* Top Banner */}
          <div className="relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white font-bold px-6 py-2 rounded-bl-lg text-sm md:text-base z-10 shadow-lg">
              75% OFF
            </div>
            
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold z-10">
              PREMIUM OFFER
            </div>
            
            <div className="bg-gradient-to-r from-emerald-900/40 via-emerald-600/20 to-emerald-900/40 px-8 py-16 md:py-20 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="block">LIMITED-TIME OFFER</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center min-w-40">
                  <div className="text-emerald-400 text-xl font-bold mb-1">SPECIAL PRICE</div>
                  <div className="text-white text-3xl font-bold">₹499</div>
                  <div className="text-gray-400 line-through text-sm">₹1,999</div>
                </div>
                
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center min-w-40">
                  <div className="text-emerald-400 text-xl font-bold mb-1">SPOTS LEFT</div>
                  <div className="text-white text-3xl font-bold">{spotRemaining}</div>
                  <div className="text-gray-400 text-sm">out of {totalSpots}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="p-6 md:p-10">
            {/* Countdown Timer */}
            <div className="mb-10">
              <h2 className="text-center text-xl md:text-2xl text-white font-medium mb-4">
                Offer expires in:
              </h2>
              <div className="flex justify-center gap-2 md:gap-4">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-3 md:p-4 w-20 md:w-28 text-center border border-gray-700">
                  <span className="text-white text-2xl md:text-4xl font-bold">{formatTimeUnit(timeLeft.hours)}</span>
                  <p className="text-gray-400 text-xs mt-1">Hours</p>
                </div>
                <div className="text-white text-2xl md:text-4xl font-bold flex items-center">:</div>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-3 md:p-4 w-20 md:w-28 text-center border border-gray-700">
                  <span className="text-white text-2xl md:text-4xl font-bold">{formatTimeUnit(timeLeft.minutes)}</span>
                  <p className="text-gray-400 text-xs mt-1">Minutes</p>
                </div>
                <div className="text-white text-2xl md:text-4xl font-bold flex items-center">:</div>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-3 md:p-4 w-20 md:w-28 text-center border border-gray-700">
                  <span className="text-white text-2xl md:text-4xl font-bold">{formatTimeUnit(timeLeft.seconds)}</span>
                  <p className="text-gray-400 text-xs mt-1">Seconds</p>
                </div>
              </div>
            </div>
            
            {/* Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-emerald-400 text-lg font-bold mb-4">LIMITED SPOTS</h3>
                <p className="text-white text-xl mb-4">Only 5,000 Available – 80% Already Taken!</p>
                <div className="mb-2 flex justify-between">
                  <span className="text-gray-400 text-sm">Filling Fast</span>
                  <span className="text-emerald-400 text-sm">{spotsTaken}+ joined</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2.5 rounded-full" 
                    style={{ width: `${percentageTaken}%` }}
                  ></div>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-gray-300 text-sm">Running out fast!</span>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-emerald-400 text-lg font-bold mb-4">SPECIAL LAUNCH PRICE</h3>
                <div className="text-white text-xl mb-2">₹499 <span className="text-gray-400 line-through ml-2">₹1,999</span></div>
                <p className="text-gray-300 mb-4">Save 75% – This deal won&#39;t last long!</p>

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
            <div className="space-y-4">
            <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg shadow-emerald-500/20 border border-emerald-400/30 relative overflow-hidden group">
                  <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>  Only a Few Spots Left – Grab Yours Now!</span>
                </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 border border-gray-700 hover:border-gray-600">
                  Flash Deal: ₹499 Today – Act Fast!
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-xl text-lg transition-all duration-300 border border-gray-700 hover:border-gray-600">
                  Save 75% – Offer Ending Soon!
                </button>
              </div>
            </div>
            
            {/* Bottom Banner */}
            <div className="mt-8 bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 text-center">
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