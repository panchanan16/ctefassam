"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Toggle Mobile Menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Check if link is active
  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white border-2 border-emerald-900 rounded-full flex items-center justify-center p-1 shadow-sm">
            {/* Placeholder for Logo Image */}
            <div className="w-full h-full bg-emerald-900 rounded-full">
              <img
                src="/logo.png"
                alt="CTEF Assam Logo"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-emerald-900 tracking-tight">
              CTEF <span className="text-amber-500">ASSAM</span>
            </h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
              Council for Teacher Education Foundation
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 font-medium text-sm text-gray-600">
          <Link
            href="/"
            className={`pb-1 transition-all ${
              isActive("/")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "hover:text-emerald-900 border-b-2 border-transparent hover:border-amber-500"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about_us"
            className={`pb-1 transition-all ${
              isActive("/about_us")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "hover:text-emerald-900 border-b-2 border-transparent hover:border-amber-500"
            }`}
          >
            About
          </Link>

          <Link
            href="/conference"
            className={`pb-1 transition-all ${
              isActive("/conference")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "hover:text-emerald-900 border-b-2 border-transparent hover:border-amber-500"
            }`}
          >
            Events
          </Link>
          <Link
            href="/news_letters"
            className={`pb-1 transition-all ${
              isActive("/news_letters")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "hover:text-emerald-900 border-b-2 border-transparent hover:border-amber-500"
            }`}
          >
            News Letters
          </Link>
          <Link
            href="/gallery"
            className={`pb-1 transition-all ${
              isActive("/gallery")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "hover:text-emerald-900 border-b-2 border-transparent hover:border-amber-500"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/join_us"
            className="bg-emerald-900 text-white px-6 py-2.5 rounded hover:bg-emerald-800 transition shadow-lg shadow-emerald-900/20"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-emerald-900" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col items-center space-y-4 animate-in slide-in-from-top-5">
          <Link
            href="/"
            className={`pb-1 transition-all ${
              isActive("/")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "text-gray-600 border-b-2 border-transparent hover:text-emerald-900 hover:border-amber-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about_us"
            className={`pb-1 transition-all ${
              isActive("/about_us")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "text-gray-600 border-b-2 border-transparent hover:text-emerald-900 hover:border-amber-500"
            }`}
          >
            About
          </Link>
          <Link
            href="/conference"
            className={`pb-1 transition-all ${
              isActive("/conference")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "text-gray-600 border-b-2 border-transparent hover:text-emerald-900 hover:border-amber-500"
            }`}
          >
            Events
          </Link>
          <Link
            href="/news_letters"
            className={`pb-1 transition-all ${
              isActive("/news_letters")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "text-gray-600 border-b-2 border-transparent hover:text-emerald-900 hover:border-amber-500"
            }`}
          >
            News Letters
          </Link>
          <Link
            href="/gallery"
            className={`pb-1 transition-all ${
              isActive("/gallery")
                ? "text-emerald-900 font-bold border-b-2 border-amber-500"
                : "text-gray-600 border-b-2 border-transparent hover:text-emerald-900 hover:border-amber-500"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/join_us"
            className="bg-emerald-900 text-white px-8 py-2 rounded hover:bg-emerald-800 transition"
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
