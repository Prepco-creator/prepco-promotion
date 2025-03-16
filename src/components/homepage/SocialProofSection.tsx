'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';




interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialsComponent: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials: TestimonialProps[] = [
    {
      name: "Priya",
      location: "Bangalore",
      quote: "I lost 4 kgs & feel more energetic in just 30 days!",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Arjun",
      location: "Chennai",
      quote: "My sleep improved, and I feel less stressed than ever!",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Neha",
      location: "Mumbai",
      quote: "This plan made fitness EASY & fun. Totally worth it!",
      rating: 4.8,
      image: "/api/placeholder/80/80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i - rating < 1) {
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto w-full relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-10 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10 -z-10"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-2 rounded-full mb-4 shadow-lg shadow-emerald-500/20">
              <h2 className="text-white text-sm font-bold tracking-wide">TRANSFORMING LIVES</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight">
              Results That <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Speak</span> For Themselves
            </h1>
            <div className="flex items-center gap-3 mb-6 bg-white/5 backdrop-blur-sm rounded-full py-2 px-4 border border-white/10">
              <div className="flex">
                {renderStars(4.9)}
              </div>
              <span className="text-white font-bold">4.9</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-300">Based on 10,000+ reviews</span>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
         {/* Desktop View */}
<div className="hidden md:block relative h-96">
  {testimonials.map((testimonial, index) => {
    // Calculate position based on activeTestimonial
    const position = (index - activeTestimonial + testimonials.length) % testimonials.length;
    
    // Only render the 3 visible cards (left, center, right)
    if (position > 2) return null;
    
    // Calculate styling for each position
    let styling = {};
    const className = "absolute transform transition-all duration-500 ease-in-out";
    
    if (position === 0) {
      // Left card
      styling = {
        left: "calc(50% - 450px)",
        transform: "rotateY(-15deg) scale(0.85)",
        opacity: 0.7,
        zIndex: 10,
        transformOrigin: "right center"
      };
    } else if (position === 1) {
      // Center card
      styling = {
        left: "50%",
        transform: "rotateY(0deg) scale(1)",
        opacity: 1,
        zIndex: 30,
        marginLeft: "-225px"
      };
    } else if (position === 2) {
      // Right card
      styling = {
        left: "calc(50% + 450px)",
        transform: "rotateY(15deg) scale(0.85)",
        opacity: 0.7,
        zIndex: 10,
        marginLeft: "-450px",
        transformOrigin: "left center"
      };
    }
    
    return (
      <div 
        key={index} 
        className={className}
        style={{
          ...styling,
          maxWidth: "450px",
        }}
      >
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-white/10 backdrop-blur-md h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 mr-4 shadow-md shadow-emerald-500/20">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                <p className="text-emerald-400 font-medium text-sm">{testimonial.location}</p>
                <div className="flex mt-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
            <div className="bg-emerald-500/10 p-1 rounded-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
                <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="relative mb-6">
            <svg className="absolute top-0 left-0 text-emerald-500/30 w-10 h-10 -translate-x-3 -translate-y-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391C14.017 10.97 16.318 9 19.05 9h.929V2.383C19.232 2.185 17.678 2 16.17 2c-5.345 0-8.786 3.881-8.786 10.873V21h6.633z" />
              <path d="M23.078 21v-7.391C23.078 10.97 25.379 9 28.111 9h.93V2.383C28.293 2.185 26.739 2 25.231 2c-5.345 0-8.786 3.881-8.786 10.873V21h6.633z" />
            </svg>
            <p className="text-white text-xl font-medium pl-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></div>
              <span className="text-white text-sm">Verified Purchase</span>
            </div>
            <div className="text-emerald-400 text-sm font-medium">30-Day Program</div>
          </div>
        </div>
      </div>
    );
  })}
  
  {/* Navigation buttons */}
  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 mt-8">
    <button 
      onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
      className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 p-2 rounded-full transition-all"
      aria-label="Previous testimonial"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    <button 
      onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
      className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 p-2 rounded-full transition-all"
      aria-label="Next testimonial"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
</div>
{/* Mobile View */}
<div className="md:hidden">
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border border-white/10 backdrop-blur-md">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 mr-4 shadow-md shadow-emerald-500/20">
          <Image 
            src={testimonials[activeTestimonial].image} 
            alt={testimonials[activeTestimonial].name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-white font-bold">{testimonials[activeTestimonial].name}</h3>
          <p className="text-emerald-400 font-medium text-sm">{testimonials[activeTestimonial].location}</p>
          <div className="flex mt-1">
            {renderStars(testimonials[activeTestimonial].rating)}
          </div>
        </div>
      </div>
      <div className="bg-emerald-500/10 p-1 rounded-md">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500">
          <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
    <div className="relative mb-6">
      <svg className="absolute top-0 left-0 text-emerald-500/30 w-8 h-8 -translate-x-3 -translate-y-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391C14.017 10.97 16.318 9 19.05 9h.929V2.383C19.232 2.185 17.678 2 16.17 2c-5.345 0-8.786 3.881-8.786 10.873V21h6.633z" />
        <path d="M23.078 21v-7.391C23.078 10.97 25.379 9 28.111 9h.93V2.383C28.293 2.185 26.739 2 25.231 2c-5.345 0-8.786 3.881-8.786 10.873V21h6.633z" />
      </svg>
      <p className="text-white text-lg font-medium pl-6 leading-relaxed">&quot;{testimonials[activeTestimonial].quote}&quot;</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="h-3 w-3 rounded-full bg-emerald-500 mr-2"></div>
        <span className="text-white text-sm">Verified Purchase</span>
      </div>
      <div className="text-emerald-400 text-sm font-medium">30-Day Program</div>
    </div>
  </div>
  
  {/* Mobile Pagination */}
  <div className="flex justify-center mt-6 gap-2">
    {testimonials.map((_, index) => (
      <button 
        key={index} 
        onClick={() => setActiveTestimonial(index)}
        className={`w-2 h-2 rounded-full transition-all ${index === activeTestimonial ? 'bg-emerald-500 w-6' : 'bg-gray-600'}`}
        aria-label={`View testimonial ${index + 1}`}
      />
    ))}
  </div>
  
  {/* Additional mobile trust indicators */}
  <div className="mt-8 flex items-center justify-center gap-4">
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    </div>
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
      </svg>
    </div>
  </div>
</div>
</div>
</div>

</div>

</div>
  )}
  export default TestimonialsComponent;