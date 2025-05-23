
import CTAButton from "@/components/common/Ctabutton"; 



const WhatsIncludedSection: React.FC = () => {
 
  return (
    <div className="bg-black py-8">
      <div className="container mx-auto px-8">
        {/* Value Comparison - Visual Element */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Price Breakdown Section */}
            <div className="mb-6 md:mb-0 md:mr-6">
              <h4 className="text-xl font-bold text-white mb-4">Total Value Breakdown:</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">All Premium Services</span>
                  <span className="text-white font-medium">₹5000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Limited-Time Discount</span>
                  <span className="text-emerald-400 font-medium">- ₹4,501</span>
                </div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex justify-between">
                  <span className="text-white font-bold">You Pay Only</span>
                  <span className="text-emerald-400 text-xl font-bold">₹499</span>
                </div>
              </div>
            </div>

            {/* Savings Highlight with Countdown Timer */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border-l-4 border-emerald-500 md:flex-1">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">
                  <span className="text-white">90</span>
                  <span className="text-emerald-400">%</span>
                </div>
                <p className="text-lg text-white font-medium">SAVINGS</p>
               

              
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          {/* Gradient Header Container */}
          <div className="inline-block relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-md opacity-70 rounded-lg"></div>
            <div className="relative bg-gray-900/80 backdrop-blur border border-emerald-500/30 rounded-lg px-8 py-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Every benefit <span className="text-emerald-400">unlocked</span> for just ₹16 per day!
              </h3>
              <p className="text-gray-300 mb-6">
                That&apos;s less than <span className="text-xl font-semibold">your daily chai</span> – but with life-changing results!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <CTAButton title="₹5000 Worth of Value for Just ₹499 – Grab It!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncludedSection;
