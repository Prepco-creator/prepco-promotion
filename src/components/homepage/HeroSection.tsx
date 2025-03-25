"use client";

import React from "react";
import CTAButton from "../common/Ctabutton";
import { CheckCircle, Play } from "lucide-react";

const features = [
  "100% risk-free",
  "No extra charges",
  "Just ₹16 per day!",
  "Transform Your Health",
  "Limited Slots Left!",
];

const benefits = [
  "Health assessment",
  "Wellness plan",
  "Nutrition guidance",
  "Fitness consultation",
  "Mental wellness",
];

const HeroSection: React.FC = () => {
  return (
    <section className="flex min-h-screen items-center bg-black">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Premium Offer Badge */}
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full text-white">
            Premium Offer
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
              30-Day Wellness
            </span>{" "}
            Transformation
          </h1>

          {/* Pricing */}
          <div className="flex items-center gap-3">
            <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2 rounded-lg border border-emerald-400/30 text-white font-bold text-2xl">
              Just ₹499
            </div>
            <div className="px-2 py-1 text-gray-400 bg-gray-800 border border-gray-700 rounded-lg line-through text-sm">
              ₹1,999
            </div>
          </div>

          {/* Subtext */}
          <p className="text-gray-300 text-base">
            Fitness, Yoga, Nutrition & More – All in One Plan!
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-lg backdrop-blur-sm"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-gray-200 text-sm font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <CTAButton title="Start My Trial Now" />
          </div>

          {/* Limited Time Offer */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-xs font-medium text-gray-400">
              Limited time offer • Only 30 spots remaining
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center items-center h-full">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 opacity-30 rounded-xl lg:blur-md"></div>

          {/* Content Box */}
          <div className="relative flex flex-col bg-gray-900 border border-gray-700 p-6 rounded-xl h-5/6 w-full lg:p-8">
            {/* Discount Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-bold px-4 py-1 border border-amber-400/30 rounded-lg shadow-lg rotate-3 text-white">
              75% OFF
            </div>

            {/* Video Play Button */}
            <div className="flex flex-col items-center justify-center flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-xl"></div>
              <div className="relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-600 to-emerald-500 border border-emerald-400/50 rounded-full shadow-lg shadow-emerald-500/20">
                <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <p className="mt-4 text-sm text-center text-gray-400">
                Watch how our program transforms lives
              </p>
            </div>

            {/* What You’ll Get */}
            <div className="mt-4 p-3 bg-gray-800/80 rounded-lg">
              <h3 className="text-sm font-medium text-white mb-2">
                What You&apos;ll Get:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex justify-center items-center w-4 h-4 bg-emerald-500 rounded-full mr-2">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-200 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
