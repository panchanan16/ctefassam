"use client"

import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is full viewport height

      // Check if scrolled past hero section
      if (currentScrollY > heroHeight * 0.8) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isPastHero ? "bg-blue-900" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
              <img src="/logo.png" alt="logo" className="rounded-full p-1" />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white tracking-wider drop-shadow-lg">
              CTEF ASSAM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-5">
            {[
              { name: "Home", url: "" },
              { name: "About us", url: "about_us" },
              { name: "Photo Gallery", url: "gallery" },
              { name: "E-Conference", url: "conference" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={`/${item.url}`}
                  className="text-white text-lg font-medium hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex lg:hidden items-center space-x-3 lg:space-x-4">
            <button className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center border-2 border-white/50 transition-all duration-300 hover:scale-110 lg:hidden">
              <Menu className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;