"use client";

import React, { useRef, useState, useEffect } from "react";
import CTAButton from "../common/Ctabutton";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface VideoItem {
  id: number;
  src: string;
  thumbnail: string;
  title: string;
}

const videos: VideoItem[] = [
  { id: 1, src: "/videos/expert1.mp4", thumbnail: "/thumbnails/thumb1.jpg", title: "Expert Fitness Tips" },
  { id: 2, src: "/videos/expert2.mp4", thumbnail: "/thumbnails/thumb2.jpg", title: "Nutrition Guidance" },
  { id: 3, src: "/videos/expert3.mp4", thumbnail: "/thumbnails/thumb3.jpg", title: "Mental Wellness" },
];

const VideoBlock: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<{ swiper: SwiperClass } | null>(null);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [, setActiveIndex] = useState<number>(0);

  const togglePlay = (index: number): void => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (isPlaying !== null && isPlaying !== index) {
      const currentVideo = videoRefs.current[isPlaying];
      if (currentVideo) currentVideo.pause();
    }

    if (video.paused) {
      video.play();
      setIsPlaying(index);
    } else {
      video.pause();
      setIsPlaying(null);
    }
  };

  const handleSlideChange = (swiper: SwiperClass): void => {
    setActiveIndex(swiper.realIndex);
    if (isPlaying !== null) {
      const video = videoRefs.current[isPlaying];
      if (video) {
        video.pause();
        setIsPlaying(null);
      }
    }
  };

useEffect(() => {
  const currentVideos = videoRefs.current;

  return () => {
    currentVideos.forEach(video => {
      if (video) video.pause();
    });
  };
}, []);


  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug px-2">
            Get the right{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
              guidance and advice
            </span>{" "}
            from our experts
          </h2>

          <div className="w-full relative rounded-lg overflow-hidden shadow-xl border border-emerald-600/30">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              loop={true}
              onSlideChange={handleSlideChange}
              className="aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5.5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={video.id}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={video.src}
                      poster={video.thumbnail}
                      className="w-full h-full object-cover rounded-lg"
                      onClick={() => togglePlay(index)}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => togglePlay(index)}
                    >
                      <div className={`
                        h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full 
                        bg-gradient-to-r from-emerald-600 to-teal-500 
                        flex items-center justify-center 
                        shadow-lg shadow-emerald-500/30
                        transform transition-all duration-300
                        ${isPlaying === index ? 'scale-90' : 'scale-100 hover:scale-110'}
                        ${isPlaying === index ? '' : 'animate-pulse'}
                      `}>
                        {isPlaying === index ? (
                          <Pause className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        ) : (
                          <Play className="h-6 w-6 sm:h-7 sm:w-7 text-white ml-1" />
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Arrows */}
              <div className="swiper-button-prev !w-8 !h-8 sm:!w-10 sm:!h-10 !flex items-center justify-center !bg-gradient-to-r from-emerald-600/80 to-teal-500/80 backdrop-blur-sm !rounded-full !shadow-lg !shadow-emerald-900/30 !transition-all !duration-300 hover:!scale-110 hover:!bg-emerald-500">
                <ChevronLeft className="!w-5 !h-5 sm:!w-6 sm:!h-6 !text-white" />
              </div>
              <div className="swiper-button-next !w-8 !h-8 sm:!w-10 sm:!h-10 !flex items-center justify-center !bg-gradient-to-r from-emerald-600/80 to-teal-500/80 backdrop-blur-sm !rounded-full !shadow-lg !shadow-emerald-900/30 !transition-all !duration-300 hover:!scale-110 hover:!bg-emerald-500">
                <ChevronRight className="!w-5 !h-5 sm:!w-6 sm:!h-6 !text-white" />
              </div>
            </Swiper>
          </div>

          <div className="pt-4">
            <CTAButton title="Learn From Experts Now" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse"></div>
            <p className="text-xs sm:text-sm font-medium text-gray-400">
              Expert sessions filling up fast
            </p>
          </div>
        </div>
      </div>

      {/* Swiper bullet styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #10b981; /* Tailwind emerald-500 */
        }
      `}</style>
    </section>
  );
};

export default VideoBlock;
