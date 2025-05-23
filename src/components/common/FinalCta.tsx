"use client";

import React, { useState, useEffect, useCallback } from 'react';

const FinalPushCTA: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>('20:00');

  // Calculate time remaining from a fixed end timestamp
  const calculateTimeRemaining = useCallback((endTime: number) => {
    const now = new Date().getTime();
    const difference = endTime - now;

    if (difference > 0) {
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return '00:00';
  }, []);

  useEffect(() => {
    // Check if end time exists in localStorage
    let endTime = localStorage.getItem('offerEndTime');
    if (!endTime) {
      const newEndTime = new Date().getTime() + 20 * 60 * 1000;
      localStorage.setItem('offerEndTime', newEndTime.toString());
      endTime = newEndTime.toString();
    }

    const endTimeNumber = parseInt(endTime, 10);

    const timerInterval = setInterval(() => {
      const remainingTime = calculateTimeRemaining(endTimeNumber);
      setTimeRemaining(remainingTime);

      if (remainingTime === '00:00') {
        clearInterval(timerInterval);
        localStorage.removeItem('offerEndTime');
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [calculateTimeRemaining]);

  return (
    <div className="fixed bottom-4 right-4 z-50 px-4 py-2 sm:px-5 sm:py-3 bg-black/90 border border-emerald-500 shadow-lg rounded-lg text-white backdrop-blur-md text-xs sm:text-sm md:text-base">
      <div className="flex items-center gap-2 font-semibold">
        <span className="text-white animate-pulse">⏰ Offer Ends In:</span>
        <span className="text-emerald-400 font-bold text-lg tracking-wider drop-shadow-md">
          {timeRemaining}
        </span>
      </div>
    </div>
  );
};

export default FinalPushCTA;
