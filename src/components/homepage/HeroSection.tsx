"use client";
import React, { useState, useRef } from "react";
import CTAButton from "../common/Ctabutton";
import { Pause, Play } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <section className="flex md:h-screen items-center justify-center bg-black mt-10 md:mt-0 -mx-2">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Content - Centered with more compact spacing */}
        <div className="space-y-4 max-w-2xl">
          {/* Main Headline - Only PATHUDLAAMA in gradient color as shown in image */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            <span className="block sm:inline">UNGA HEALTH KU ORU{" "}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
              TRIAL PATHUDLAAMA
            </span>
          </h1>

          {/* Subtext - Made Bold */}
          <p className="text-gray-300 text-sm sm:text-base font-bold pb-1">
            {"India's 1st 30-day trial plan for health"}
          </p>
          
          {/* Video Container with simple play/pause functionality */}
          <div className="w-full aspect-video sm:h-48 md:h-56 lg:h-64 rounded-lg relative overflow-hidden bg-gray-800">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/api/placeholder/640/360"
              onEnded={() => setIsPlaying(false)}
            >
              {/* Replace with your actual video source */}
              <source src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause Button Overlay - Always visible */}
           <button 
  onClick={togglePlay}
  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full 
    bg-gradient-to-r from-emerald-600 to-teal-500 
    shadow-lg shadow-emerald-500/30
    transition-all duration-300 flex items-center justify-center
    ${isPlaying ? 'scale-90' : 'scale-100 hover:scale-110'}
    ${isPlaying ? '' : 'animate-pulse'}
  `}
>
  {isPlaying ? (
    <Pause className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
  ) : (
    <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white ml-1" />
  )}
</button>

          </div>

          {/* Ready message */}
          <p className="text-gray-300 text-lg sm:text-xl mt-1">
            Are you ready for this
          </p>

          {/* CTA Button */}
          <div className="pt-1 sm:pt-2">
            <CTAButton title="Start My Trial Now" />
          </div>
        </div>
      </div>
      
  
    </section>
  );
};

export default HeroSection;