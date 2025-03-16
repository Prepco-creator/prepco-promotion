"use client";
import React, { useState, useEffect } from 'react';

const WhatsIncludedSection: React.FC = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Effect to update the timer every second
  useEffect(() => {
    // Create timer
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        // Calculate new time
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        // Reset to 23:59:59 if countdown reaches zero
        if (newHours < 0) {
          return { hours: 23, minutes: 59, seconds: 59 };
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    // Clean up timer
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black py-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          {/* Premium Section Title */}
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-sm opacity-70 rounded-lg"></div>
            <div className="relative bg-gray-900 border border-emerald-500/30 rounded-lg px-6 py-2">
              <h2 className="text-xl font-bold text-white">What&apos;s Included?</h2>
            </div>
          </div>
          
          {/* Value Proposition Headline */}
          <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            <span className="text-emerald-400">10+ Premium Health Services</span> in One Plan
          </h3>
          
          {/* Price Comparison with Premium Styling */}
          <div className="bg-gradient-to-r from-emerald-900/40 to-gray-900 p-1 rounded-xl inline-flex items-center mb-8">
            <div className="bg-gray-900 rounded-lg px-6 py-3 flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <span className="text-gray-400 text-sm line-through">Worth ₹1,999</span>
                <div className="flex items-center">
                  <span className="text-white text-2xl font-bold">Now Just </span>
                  <span className="text-emerald-400 text-3xl font-extrabold ml-2">₹499!</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subheadline - Make Benefits Feel Like a Steal */}
          <p className="text-white text-xl text-center mb-10 max-w-2xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300 font-semibold">
              Make every rupee count with our all-inclusive package
            </span> – designed to transform your health without breaking the bank.
          </p>
        </div>
        
        {/* Benefits Grid with Premium Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Benefit Card 1 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 flex items-center justify-center rounded-full mr-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="text-lg font-bold text-white">Live Online Workouts & Yoga Classes</h4>
              </div>
              <p className="text-gray-300 mt-2">Train anytime, anywhere with expert-led sessions designed for all fitness levels</p>
              <div className="mt-auto pt-4">
                <div className="text-xs text-emerald-400 font-semibold bg-emerald-900/20 border border-emerald-500/20 rounded-full px-3 py-1 inline-block">
                  Value: ₹499
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefit Card 2 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 flex items-center justify-center rounded-full mr-4">
                  <span className="text-2xl">🥗</span>
                </div>
                <h4 className="text-lg font-bold text-white">Custom Diet Plan by Expert Nutritionists</h4>
              </div>
              <p className="text-gray-300 mt-2">No more fad diets! Get personalized nutrition guidance based on your body needs</p>
              <div className="mt-auto pt-4">
                <div className="text-xs text-emerald-400 font-semibold bg-emerald-900/20 border border-emerald-500/20 rounded-full px-3 py-1 inline-block">
                  Value: ₹699
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefit Card 3 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 flex items-center justify-center rounded-full mr-4">
                  <span className="text-2xl">🧘‍♂️</span>
                </div>
                <h4 className="text-lg font-bold text-white">Stress & Sleep Management Sessions</h4>
              </div>
              <p className="text-gray-300 mt-2">Feel refreshed every morning with techniques to optimize your rest and recovery</p>
              <div className="mt-auto pt-4">
                <div className="text-xs text-emerald-400 font-semibold bg-emerald-900/20 border border-emerald-500/20 rounded-full px-3 py-1 inline-block">
                  Value: ₹399
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefit Card 4 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 flex items-center justify-center rounded-full mr-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="text-lg font-bold text-white">Exclusive Discounts on Healthcare & Fitness</h4>
              </div>
              <p className="text-gray-300 mt-2">Save BIG on premium services and products from our network of partners</p>
              <div className="mt-auto pt-4">
                <div className="text-xs text-emerald-400 font-semibold bg-emerald-900/20 border border-emerald-500/20 rounded-full px-3 py-1 inline-block">
                  Value: ₹199
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefit Card 5 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 flex items-center justify-center rounded-full mr-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h4 className="text-lg font-bold text-white">Personalized Coaching & Support</h4>
              </div>
              <p className="text-gray-300 mt-2">You&apos;re never alone! Get guidance and motivation whenever you need it</p>
              <div className="mt-auto pt-4">
                <div className="text-xs text-emerald-400 font-semibold bg-emerald-900/20 border border-emerald-500/20 rounded-full px-3 py-1 inline-block">
                  Value: ₹799
                </div>
              </div>
            </div>
          </div>
          
          {/* Bonus Card - More Benefits */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">+5</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">More Premium Benefits</h4>
              <p className="text-gray-300">Unlock additional exclusive services when you join today!</p>
              <div className="mt-4">
                <div className="text-xs text-emerald-400 font-semibold bg-emerald-900/20 border border-emerald-500/20 rounded-full px-3 py-1 inline-block">
                  Added Value: ₹599
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Value Comparison - Visual Element */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h4 className="text-xl font-bold text-white mb-4">Total Value Breakdown:</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">All Premium Services</span>
                  <span className="text-white font-medium">₹1,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Limited-Time Discount</span>
                  <span className="text-emerald-400 font-medium">- ₹1,500</span>
                </div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-white font-bold">You Pay Only</span>
                  <span className="text-emerald-400 text-xl font-bold">₹499</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-emerald-500 md:flex-1">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <span className="text-white">75</span>
                  <span className="text-emerald-400">%</span>
                </div>
                <p className="text-lg text-white font-medium">SAVINGS</p>
                <p className="text-gray-400 text-sm">Limited time offer</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section with Premium Styling */}
        <div className="text-center">
          <div className="inline-block relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-md opacity-70 rounded-lg"></div>
            <div className="relative bg-gray-900/80 backdrop-blur border border-emerald-500/30 rounded-lg px-8 py-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Every benefit <span className="text-emerald-400">unlocked</span> for just ₹16 per day!
              </h3>
              <p className="text-gray-300 mb-6">
                That&apos;s less than your daily chai – but with life-changing results!
              </p>
            </div>
          </div>
          
          {/* CTA Buttons - Premium Style */}
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg shadow-emerald-500/20 border border-emerald-400/30 relative overflow-hidden group">
              <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
              <span>Unlock All 10+ Benefits – Enroll Now!</span>
            </button>
            
            <button className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg border border-emerald-400/30 relative overflow-hidden group">
              <div className="absolute inset-0 w-1/3 bg-white/10 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
              <span>₹1,999 Worth of Value for Just ₹499 – Grab It!</span>
            </button>
          </div>
          
          <div className="mt-8">
  <div className="inline-block relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-red-500 blur-sm opacity-70 rounded-lg"></div>
    <div className="relative bg-gray-900/80 backdrop-blur border border-amber-500/30 rounded-lg px-6 py-3 flex items-center">
      <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        <span className="text-amber-400 text-xl">⏰</span>
      </div>
      <div>
        <p className="text-white font-bold">Get Everything for ₹499 – Before It&apos;s Gone!</p>
        <p className="text-gray-300 text-sm">Offer valid for the next 24 hours only. Don&apos;t miss out!</p>
      </div>
    </div>
  </div>
</div>

{/* Countdown Timer */}
<div className="mt-6 flex justify-center">
      <div className="flex space-x-3">
        <div className="w-16 bg-gray-900 rounded-lg p-2 text-center border border-gray-800">
          <div className="text-2xl font-mono font-bold text-white">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-xs text-gray-400">Hours</div>
        </div>
        <div className="w-16 bg-gray-900 rounded-lg p-2 text-center border border-gray-800">
          <div className="text-2xl font-mono font-bold text-white">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-xs text-gray-400">Minutes</div>
        </div>
        <div className="w-16 bg-gray-900 rounded-lg p-2 text-center border border-gray-800">
          <div className="text-2xl font-mono font-bold text-white">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-xs text-gray-400">Seconds</div>
        </div>
      </div>
    </div>

{/* Final CTA Reminder */}
<div className="mt-8 text-center">
  <button className="bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 transition-all duration-300 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-red-500/20 relative overflow-hidden group">
    <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
    <span>Get Everything for ₹499 – Before It&apos;s Gone!</span>
  </button>
</div>

</div>
</div>
</div>
  )}
  export default WhatsIncludedSection;
