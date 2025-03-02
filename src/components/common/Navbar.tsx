"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img from "../../../public/images/image";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Why Prepco?", href: "#why-prepco" },
  { name: "What You Get", href: "#benefits" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Invest", href: "#invest" },
  { name: "FAQs", href: "#faqs" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const sectionId = target.getAttribute("href")?.substring(1);
        const section = document.getElementById(sectionId!);
        if (section) {
          window.scrollTo({ top: section.offsetTop - 70, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-lg rounded-bl-3xl rounded-br-3xl ${scrolled ? "bg-white/90 shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image src={img.logo} alt="logo"/>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-100/70 border border-gray-500 rounded-full px-4 py-1">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                {index > 0 && <div className="h-6 w-px bg-gray-500" />}
                <Link href={item.href} onClick={() => setActiveItem(item.href.substring(1))} className="px-4 py-2">
                  <motion.div className={`relative text-sm font-medium rounded-full transition-colors px-6 py-1 ${activeItem === item.href.substring(1) ? "text-white" : "text-gray-700 hover:text-teal-600"}`} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    {activeItem === item.href.substring(1) && (
                      <motion.div className="absolute inset-0 bg-teal-600 rounded-full -z-10" layoutId="activeBackground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                    )}
                    {item.name}
                  </motion.div>
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="relative z-10 w-10 h-10 flex items-center justify-center text-gray-700 hover:text-teal-600 focus:outline-none" aria-label="Toggle menu">
              <div className="relative w-6 h-5">
                <motion.span className="absolute h-0.5 w-6 bg-current rounded-full" animate={{ top: isOpen ? "50%" : "0%", rotate: isOpen ? "45deg" : "0deg", translateY: isOpen ? "-50%" : "0%" }} transition={{ duration: 0.3 }} />
                <motion.span className="absolute top-1/2 h-0.5 w-6 bg-current rounded-full" animate={{ opacity: isOpen ? 0 : 1, translateY: "-50%" }} transition={{ duration: 0.3 }} />
                <motion.span className="absolute h-0.5 w-6 bg-current rounded-full" animate={{ bottom: isOpen ? "50%" : "0%", rotate: isOpen ? "-45deg" : "0deg", translateY: isOpen ? "50%" : "0%" }} transition={{ duration: 0.3 }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="md:hidden fixed inset-0 z-0 bg-white pt-20" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100vh" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link href={item.href} onClick={() => { setIsOpen(false); setActiveItem(item.href.substring(1)); }} className="block text-xl font-medium text-gray-700 hover:text-teal-600 py-2">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
