"use client";

import React from "react";
import CTAButton from "../common/Ctabutton";
import { Play } from "lucide-react";

const VideoBlock: React.FC = () => {
  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Section Heading - Reduced font size */}
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Get the right{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
              guidance and advice
            </span>{" "}
            from our experts
          </h2>
          
          {/* Video Container - Reduced height */}
          <div className="w-full max-w-5xl relative rounded-lg overflow-hidden shadow-lg border border-emerald-600/30">
            {/* Placeholder for video with reduced aspect ratio */}
            <div className="aspect-[16/5.5] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              {/* Smaller Play button overlay */}
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <Play className="h-6 w-6 text-white fill-current" />
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-2">
            <CTAButton title="Learn From Experts Now" />
          </div>
          
          {/* Compact status indicator */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-xs font-medium text-gray-400">
              Expert sessions filling up fast
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;