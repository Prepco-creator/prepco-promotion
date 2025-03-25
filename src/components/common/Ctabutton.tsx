import React from "react";
import Link from "next/link";

// Define the type for props
interface CTAButtonProps {
  title: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ title }) => {
  return (
    <Link href="https://com.rpy.club/cop/TQW6fMn6QA" target="_blank" rel="noopener noreferrer">
      <button className="bg-gradient-to-r border cursor-pointer border-emerald-400/30 rounded-lg shadow-emerald-500/20 shadow-lg text-lg text-white w-full duration-300 font-bold from-emerald-600 group hover:from-emerald-700 hover:to-teal-600 overflow-hidden px-8 py-4 relative to-teal-500 transition-all">
        <div className="bg-white/20 w-1/3 absolute duration-700 group-hover:translate-x-96 inset-0 skew-x-12 transition-transform"></div>
        <span>{title}</span>
      </button>
    </Link>
  );
};

export default CTAButton;
