"use client";
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is this plan for?",
      answer: "Anyone looking to get fit, eat healthier, reduce stress, and feel better!"
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! No commitments, no hidden fees. You&apos;re in full control."
    },
    {
      question: "Do I need a gym?",
      answer: "Nope! You can follow this plan from home with no equipment."
    },
    {
      question: "What happens after 30 days?",
      answer: "You&apos;ll have the option to continue with our exclusive membership discounts!"
    }
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          {/* FAQ Section Title */}
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-sm opacity-70 rounded-lg"></div>
            <div className="relative bg-gray-900 border border-emerald-500/30 rounded-lg px-6 py-2">
              <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
          </div>
          
          {/* FAQ Headline */}
          <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            <span className="text-emerald-400">Eliminate Doubts</span> & Objections
          </h3>
          
          {/* FAQ Subheadline */}
          <p className="text-white text-xl text-center mb-10 max-w-2xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300 font-semibold">
              Get instant answers to your most important questions
            </span> – we&apos;ve got you covered.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className=" mx-auto mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h4 className="text-lg font-bold text-white flex items-center">
                      <div className="w-8 h-8 bg-emerald-500/20 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                        <span className="text-emerald-400 text-lg">Q</span>
                      </div>
                      {faq.question}
                    </h4>
                    <div className={`w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="p-6 pt-0 text-gray-300 border-t border-gray-800">
                      <div className="flex">
                        <div className="w-8 h-8 bg-emerald-500/10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                          <span className="text-emerald-400 text-lg">A</span>
                        </div>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-md opacity-70 rounded-lg"></div>
            <div className="relative bg-gray-900/80 backdrop-blur border border-emerald-500/30 rounded-lg px-8 py-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Still have <span className="text-emerald-400">questions?</span>
              </h3>
              <p className="text-gray-300 mb-6">
                We&apos;re here to help you make the right decision for your health journey.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
                <button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg shadow-emerald-500/20 border border-emerald-400/30 relative overflow-hidden group">
                  <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Get Instant Answers!</span>
                </button>
                
                <button className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg border border-emerald-400/30 relative overflow-hidden group">
                  <div className="absolute inset-0 w-1/3 bg-white/10 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
                  <span>Click Here to Chat!</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Final CTA Button */}
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 transition-all duration-300 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-amber-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 group-hover:translate-x-96 transition-transform duration-700"></div>
              <span>We&apos;ve Got You – See FAQs Now!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;