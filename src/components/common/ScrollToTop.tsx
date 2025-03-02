"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid"; // Heroicons for the arrow

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-20 z-50 right-6 p-3 bg-teal-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-teal-500 focus:outline-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <ArrowUpIcon className="h-6 w-6" />
    </motion.button>
  );
};

export default ScrollToTop;
