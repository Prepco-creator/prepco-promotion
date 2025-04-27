"use client";

import React from "react";
import CTAButton from "../common/Ctabutton";
import { CheckCircle } from "lucide-react";

const features = [
  "100% risk-free",
  "No extra charges",
  "Just ₹16 per day!",
  "Transform Your Health",
  "Limited Slots Left!",
];

const HeroSection: React.FC = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center">
        {/* Content - Now Centered */}
        <div className="space-y-6 max-w-2xl">
          {/* Premium Offer Badge */}
         
          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            UNGA HEALTH KU ORU{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
              TRAIL PATHUDLAAMA
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-base">
            India's 1st 30-day trial plan for health
          </p>

          {/* Warning Message */}
          <p className="text-yellow-400 text-base font-medium">
            Warning - Do not register if you don't want to have a healthy life
          </p>

          {/* Ready message */}
          <p className="text-gray-300 text-lg">
            Are you ready for this
          </p>

          {/* CTA Button - Preserved as requested */}
          <div className="pt-2">
            <CTAButton title="Start My Trial Now" />
          </div>

          {/* Limited Time Offer - Preserved as requested */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-xs font-medium text-gray-400">
              Limited time offer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;