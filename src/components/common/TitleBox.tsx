import React from "react";

interface TitleBoxProps {
    title: string;
  }
  
  const TitleBox: React.FC<TitleBoxProps> = ({ title }) => {
    return (
    <div className="inline-block relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 blur-sm opacity-70 rounded-lg"></div>
      <div className="relative bg-gray-900 border border-emerald-500/30 rounded-lg px-6 py-2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
    </div>
  );
};

export default TitleBox;
