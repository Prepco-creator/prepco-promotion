
"use client";
import React, { useState, useEffect } from 'react';
import { Clock, Coffee,  Calendar, CheckCircle,  ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import img from '../../../public/images/image';


const FomoAndFaqSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [countdown, setCountdown] = useState({ days: 3, hours: 7, minutes: 23, seconds: 45 });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const [animate, setAnimate] = useState(false);
  
  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger animation when scrolled into view
      const fomoSection = document.getElementById('fomo-section');
      if (fomoSection) {
        const rect = fomoSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // FAQs
  const faqs = [
    {
      id: 1,
      question: "What happens after 30 days?",
      answer: "You can upgrade to a full subscription or cancel anytime. We'll send you a reminder 3 days before your trial ends with options to continue your wellness journey."
    },
    {
      id: 2,
      question: "Can I really cancel anytime?",
      answer: "Yes! No hidden fees or lock-ins. We believe in our service so much that we don't need to trap you with complicated cancellation processes. Just a few clicks and you're done."
    },
    {
      id: 3,
      question: "Is this available outside Chennai?",
      answer: "Virtual services are nationwide; physical services are Chennai-only (for now!). We're rapidly expanding to other major cities and will notify you when we arrive in your area."
    }
  ];

  // Floating health bubble component

  
  const FloatingBubble = () => { 
    const size = Math.random() * 40 + 20;
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.15 + 0.05;

    return (
      <div
        className="absolute rounded-full bg-gradient-to-br from-teal-400 to-teal-200"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${initialX}%`,
          top: `${initialY}%`,
          opacity: opacity,
          animation: `floatBubble ${duration}s infinite ease-in-out`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  };
  
  // Glowing dot indicator
  const PulsingDot = () => (
    <span className="inline-block h-3 w-3 bg-red-500 rounded-full animate-pulse-fast mr-2"></span>
  );

  // Countdown timer display
  const CountdownTimer = () => (
    <div className="flex justify-center space-x-4 mt-6">
      <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg text-center min-w-16">
        <div className="text-3xl font-bold text-teal-700">{countdown.days}</div>
        <div className="text-sm text-gray-600">Days</div>
      </div>
      <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg text-center min-w-16">
        <div className="text-3xl font-bold text-teal-700">{countdown.hours}</div>
        <div className="text-sm text-gray-600">Hours</div>
      </div>
      <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg text-center min-w-16">
        <div className="text-3xl font-bold text-teal-700">{countdown.minutes}</div>
        <div className="text-sm text-gray-600">Minutes</div>
      </div>
      <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg text-center min-w-16">
        <div className="text-3xl font-bold text-teal-700">{countdown.seconds}</div>
        <div className="text-sm text-gray-600">Seconds</div>
      </div>
    </div>
  );

  return (
    <>
      {/* FOMO & Urgency Section */}
      <section id="fomo-section" className="relative py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-teal-50 to-white overflow-hidden">
          {/* Animated gradient shapes */}
          <div 
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-teal-200 to-cyan-100 opacity-20 blur-3xl"
            style={{ 
              top: '10%', 
              right: '5%', 
              transform: `translate(${scrollY * -0.05}px, ${scrollY * 0.02}px) rotate(${scrollY * -0.02}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full bg-gradient-to-l from-teal-300 to-green-100 opacity-15 blur-2xl"
            style={{ 
              bottom: '20%', 
              left: '10%', 
              transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.04}px) rotate(${scrollY * 0.01}deg)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          
          {/* Floating bubbles */}
          {[...Array(12)].map((_, index) => (
            <FloatingBubble key={`bubble-${index}`}/>
          ))}
        </div>
        
        <div id='invest' className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-8 ${animate ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">Invest in Your Health — Cheaper Than a Coffee a Day</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden ${animate ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{animationDelay: '0.4s'}}>
              {/* Corner ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-1 transform rotate-45 translate-x-8 translate-y-4 shadow-md font-bold">
                Limited Offer!
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <PulsingDot />
                    <h3 className="text-2xl font-bold text-red-500">Only 5000 Spots Available!</h3>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-teal-600 mr-2" />
                    <p className="text-xl text-gray-700">30 Days of Complete Wellness</p>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <Coffee className="h-5 w-5 text-teal-600 mr-2" />
                    <p className="text-lg text-gray-700">Just ₹16 per day</p>
                  </div>
                  
                  <div className="mt-6 mb-8">
                    <div className="flex items-center">
                      <span className="text-4xl md:text-5xl font-bold text-teal-600">₹499</span>
                      <span className="ml-3 text-lg text-gray-500 line-through">₹1499</span>
                      <span className="ml-3 bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded">Save 67%</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 italic mb-6">Your future self will thank you.</p>
                  
                  <div className="relative inline-block group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                    <button className="relative px-6 py-4 bg-gradient-to-br from-teal-500 to-teal-600 text-white text-lg font-bold rounded-lg w-full md:w-auto transform transition-all duration-500 hover:shadow-xl hover:translate-y-[-2px] flex items-center justify-center">
                      <span>Claim My 30-Day Access</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="mb-3">
                    <div className="inline-flex items-center">
                      <Clock className="h-6 w-6 text-red-500 animate-pulse mr-2" />
                      <h4 className="text-xl font-bold text-gray-700">Offer Ends In:</h4>
                    </div>
                  </div>
                  
                  <CountdownTimer />
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center bg-teal-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
                      <p className="text-base text-gray-700">Personalized wellness plans</p>
                    </div>
                    <div className="flex items-center bg-teal-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
                      <p className="text-base text-gray-700">Access to premium health content</p>
                    </div>
                    <div className="flex items-center bg-teal-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
                      <p className="text-base text-gray-700">Virtual nutrition consultations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs & Objection Handling */}
      <section id="faqs" className="py-20 bg-cyan-50 relative">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <Image
              src={img.faq2}
              alt="FAQ Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* FAQ Section */}
          <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Frequently Asked Questions
            </h2>

            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-300 border-focus-none py-4">

                <button
                  className="flex justify-between items-center w-full text-lg font-medium text-teal-700 border-focus-none"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                >
                  {faq.question}
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-teal-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-teal-600" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      
      {/* Enhanced keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes floatBubble {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 20 - 10}px); }
          50% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 20 - 10}px); }
          75% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 20 - 10}px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s forwards;
        }
      `}</style>
    </>
  );
};

export default FomoAndFaqSection;
