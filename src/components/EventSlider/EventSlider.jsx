"use client"

import React, { useEffect, useState } from "react";
import { Clock, MapPin, Video, PlayCircle, 
  ArrowRight, ChevronLeft, ChevronRight, 
  Calendar} from 'lucide-react'

function EventSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Digital Transformation in Education",
      date: "Oct 15, 2025",
      tag: "Featured",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1515168816992-d2272829ecb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "Global Teacher's Summit 2025",
      date: "Nov 22, 2025",
      tag: "International",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "AI Tools for Modern Classrooms",
      date: "Dec 05, 2025",
      tag: "Workshop",
    },
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-5xl mx-auto h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image with Gradient Overlay */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-2/3">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  {slide.title}
                </h2>
                <div className="flex items-center gap-4 text-emerald-100 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-amber-400" />{" "}
                    {slide.date}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-amber-500 transition opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-amber-500 transition opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === idx ? "bg-amber-500 w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventSlider;
