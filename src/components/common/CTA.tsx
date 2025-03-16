import React from 'react';

type CTAButtonProps = {
  text: string;
  gradient?: string;
  className?: string;
  onClick?: () => void;
};

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  gradient = "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700", 
  className = "", 
  onClick 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full bg-gradient-to-r ${gradient} text-white font-bold py-4 px-6 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center justify-center space-x-2 ${className}`}
    >
      {text}
    </button>
  );
};

const PremiumCTASection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Primary CTA */}
        <CTAButton 
          text="Join 10,000+ Happy Users – Be the Next Success!" 
          gradient="from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
          className="border border-emerald-400 shadow-emerald-200/50"
        />
        
        {/* Secondary CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CTAButton 
            text="Get Results Like These – Start Now!" 
            gradient="from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            className="border border-blue-400 shadow-blue-200/50"
          />
          
          <CTAButton 
            text="Your Success Story Starts Here – Let's Go!" 
            gradient="from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
            className="border border-orange-400 shadow-orange-200/50"
          />
        </div>
        
        {/* Bonus CTA - Limited Time Offer - Using your existing color theme */}
        <div className="relative">
          <CTAButton 
            text="Limited Time Offer - Get Everything for ₹499!" 
            gradient="from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
            className="border border-orange-400 shadow-orange-200/50"
          />
          <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-md">
            24 HRS ONLY
          </div>
        </div>
      </div>
      
      {/* Trust Indicators */}
      <div className="mt-8 flex flex-col items-center">
        <div className="flex items-center space-x-2 text-gray-600 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Secure Payment</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">30-Day Money Back Guarantee</span>
        </div>
      </div>
    </div>
  );
};

export default PremiumCTASection;