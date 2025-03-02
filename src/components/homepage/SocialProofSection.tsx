"use client";
import React, { useEffect, useState } from 'react';
import { Star, Shield, Award, CheckCircle, Activity, Heart, Zap } from 'lucide-react';

const SocialProofSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [animateStats, setAnimateStats] = useState(false);
  
  // const partners = [
  //   { id: 1, name: 'HealthFirst' },
  //   { id: 2, name: 'MediCare Plus' },
  //   { id: 3, name: 'WellnessHub' },
  //   { id: 4, name: 'FitLife' },
  //   { id: 5, name: 'NutriTech' },
  // ];

  // const testimonials = [
  //   {
  //     id: 1,
  //     text: "Prepco has transformed my approach to wellness completely!",
  //     author: "Dr. Sharma, Cardiologist",
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     text: "The curated services saved me time and improved my health metrics.",
  //     author: "Priya M., HR Director",
  //     rating: 5
  //   },
  //   {
  //     id: 3,
  //     text: "Best wellness investment I've made this year.",
  //     author: "Rahul K., Software Engineer",
  //     rating: 4.5
  //   }
  // ];

  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger stats animation when scrolled into view
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimateStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for counting up numbers
  const AnimatedCounter: React.FC<{ end: number; duration?: number; prefix?: string; suffix?: string }> = ({ 
    end, 
    duration = 2000, 
    prefix = '', 
    suffix = '' 
  }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!animateStats) return;
  
      let startTime: number;
      let animationFrame: number;
  
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
  
        setCount(Math.floor(percentage * end));
  
        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
  
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [animateStats, end, duration]);
  
    return <span>{prefix}{count.toFixed(end % 1 === 0 ? 0 : 1)}{suffix}</span>;
  };
  
  // Background particle component
  const BackgroundParticle = ({ index }: { index: number }) => {
    const size = Math.random() * 6 + 2;
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.2 + 0.05;

    return (
      <div
        className="absolute rounded-full bg-teal-400"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${initialX}%`,
          top: `${initialY}%`,
          opacity: opacity,
          animation: `floatParticle ${duration}s infinite ease-in-out`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  };

  // Health icon component with custom animations
  const HealthIcon = ({ index }: { index: number }) => {
    const icons = [
      <Heart key="heart" size={16} />,
      <Activity key="activity" size={16} />,
      <Zap key="zap" size={16} />,
      <CheckCircle key="check" size={16} />
    ];
    
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const duration = Math.random() * 25 + 20;
    const delay = Math.random() * 10;
    const size = Math.random() * 30 + 10;

    return (
      <div
        className="absolute text-teal-600"
        style={{
          left: `${initialX}%`,
          top: `${initialY}%`,
          opacity: 0.1,
          fontSize: `${size}px`,
          animation: `floatIcon ${duration}s infinite ease-in-out, pulseIcon ${Math.random() * 4 + 3}s infinite ease-in-out`,
          animationDelay: `${delay}s, ${delay + 1}s`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
      >
        {icons[index % icons.length]}
      </div>
    );
  };

  // Wave SVG component
  const WaveBackground = () => {
    return (
      <>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              className="fill-teal-50 opacity-30"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              className="fill-teal-100 opacity-20"
              style={{
                animation: 'waveAnimation 25s linear infinite',
                animationDelay: '-2s',
              }}
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-cyan-100 opacity-20"
              style={{
                animation: 'waveAnimation 20s linear infinite',
                animationDelay: '-5s',
              }}
            ></path>
          </svg>
        </div>
      </>
    );
  };

  return (
    <section id='success-stories' className="relative py-16 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-cyan-50 overflow-hidden">
        {/* Animated gradient shapes */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-teal-300 to-teal-100 opacity-10 blur-2xl"
          style={{ 
            top: '5%', 
            left: '10%', 
            transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.02}px) rotate(${scrollY * 0.02}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-full h-96 rounded-full bg-gradient-to-l from-cyan-300 to-blue-100 opacity-10 blur-3xl"
          style={{ 
            top: '20%', 
            right: '-20%', 
            transform: `translate(${scrollY * -0.07}px, ${scrollY * 0.03}px) rotate(${scrollY * -0.01}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-green-200 to-teal-100 opacity-15 blur-2xl"
          style={{ 
            bottom: '10%', 
            left: '30%', 
            transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.05}px) rotate(${scrollY * 0.03}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Animated wave SVG backgrounds */}
        <WaveBackground />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, index) => (
          <BackgroundParticle key={`particle-${index}`} index={index} />
        ))}
        
        {/* Floating health icons */}
        {[...Array(15)].map((_, index) => (
          <HealthIcon key={`icon-${index}`} index={index} />
        ))}
        
        {/* Animated mesh background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, teal 1px, transparent 0)',
            backgroundSize: '30px 30px',
            animation: 'meshAnimation 40s linear infinite',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-[96%]">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{animation: 'fadeInUp 1s forwards'}}>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4">Trusted by Thousands Getting Healthier</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">Join our community of health-conscious individuals and leading organizations who have made the smart choice for their wellness journey.</p>
        </div>

        {/* Stats Counter */}
        <div id="stats-section" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center transform transition-all duration-500 hover:scale-105 ${animateStats ? 'animate-fade-in-left' : 'opacity-0'}`} style={{animation: animateStats ? 'fadeInLeft 0.6s forwards' : 'none'}}>
            <div className="flex justify-center mb-4">
              <Star className="h-12 w-12 text-yellow-400 animate-pulse" />
            </div>
            <h3 className="text-4xl font-bold text-teal-600 mb-2">
              {animateStats ? <AnimatedCounter end={4.9} duration={2000} suffix="/5" /> : "0/5"}
            </h3>
            <p className="text-gray-600 text-lg md:text-xl">Average User Rating</p>
            <div className="flex justify-center mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={`h-5 w-5 text-yellow-400 fill-yellow-400 transition-all duration-300 ${animateStats ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${star * 200}ms` }} />
              ))}
            </div>
          </div>
          
          <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center transform transition-all duration-500 hover:scale-105 ${animateStats ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animation: animateStats ? 'fadeInUp 0.6s forwards' : 'none', animationDelay: '0.2s'}}>
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-teal-600" />
            </div>
            <h3 className="text-4xl font-bold text-teal-600 mb-2">
              {animateStats ? <AnimatedCounter end={100} duration={2000} suffix="%" /> : "0%"}
            </h3>
            <p className="text-gray-600 text-lg md:text-xl ">Trusted by Healthcare Experts</p>
            <p className="text-base text-gray-500 mt-3">Verified by medical professionals</p>
          </div>
          
          <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center transform transition-all duration-500 hover:scale-105 ${animateStats ? 'animate-fade-in-right' : 'opacity-0'}`} style={{animation: animateStats ? 'fadeInRight 0.6s forwards' : 'none', animationDelay: '0.4s'}}>
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-teal-600" />
            </div>
            <h3 className="text-4xl font-bold text-teal-600 mb-2">
              {animateStats ? <AnimatedCounter end={25} duration={2000} suffix="+" /> : "0+"}
            </h3>
            <p className="text-gray-600 text-lg md:text-xl ">Premium Wellness Partners</p>
            <p className="text-base text-gray-500 mt-3">Top-tier health & wellness brands</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <button className="relative px-8 py-4 bg-gradient-to-br from-teal-500 to-teal-600 text-white text-xl font-bold rounded-lg transform transition-all duration-500 hover:shadow-xl hover:translate-y-[-2px] flex items-center">
              <span>Join Thousands Getting Healthier</span>
              <CheckCircle className="ml-2 h-5 w-5 z-10" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced keyframe animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes floatParticle {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 20 - 10}px); }
          50% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 20 - 10}px); }
          75% { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 20 - 10}px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes floatIcon {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 20}deg); }
          66% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * -20}deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes pulseIcon {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes waveAnimation {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes meshAnimation {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-30px) translateY(-30px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default SocialProofSection;