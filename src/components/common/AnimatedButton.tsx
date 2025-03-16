import React from 'react';

interface AnimatedButtonProps {
  title: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ title }) => {
  return (
    <div className="relative group inline-block">
      <button className="relative z-10 bg-gradient-to-r from-[#018380] to-[#016360] text-white font-bold py-4 px-8 rounded-lg transition-all text-lg overflow-hidden">
        {title}
      </button>
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#018380] animate-light-beam"></div>
    </div>
  );
};
export default AnimatedButton;