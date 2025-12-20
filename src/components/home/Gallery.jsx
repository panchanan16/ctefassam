"use client";

import { Sparkles, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const GalleryHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Women's Conclave 2025",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      date: "Nov 24, 2025",
    },
    {
      id: 2,
      title: "Team Building Session",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      date: "Oct 15, 2025",
    },
    {
      id: 3,
      title: "Award Ceremony",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      date: "Sep 20, 2025",
    },
    {
      id: 4,
      title: "Leadership Workshop",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
      date: "Aug 10, 2025",
    },
    {
      id: 5,
      title: "Tech Innovation Summit",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      date: "Jul 18, 2025",
    },
    {
      id: 6,
      title: "Annual Team Retreat",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
      date: "Jun 05, 2025",
    },
    {
      id: 7,
      title: "Milestone Celebration",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
      date: "May 12, 2025",
    },
    {
      id: 8,
      title: "Design Thinking Session",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      date: "Apr 22, 2025",
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            {/* Main Title */}
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-500 relative z-10">
                <span className="text-black">Our</span> Gallery
              </h2>

              {/* Brush Stroke Underline Effect (SVG) */}
              <div className="absolute -bottom-3 left-0 w-full h-3 text-amber-500/80 -z-0">
                <svg
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.00025 6.99997C33.6669 2.16664 105.6 -4.80003 198 4.99998"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Sparkle Icon Top Right */}
              <Sparkles className="absolute -top-4 -right-8 text-amber-400 w-6 h-6 animate-pulse" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-video shadow-md cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80")
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-end pb-4 px-3">
                  <h3 className="text-white text-sm font-bold text-center mb-1">
                    {item.title}
                  </h3>
                  <p className="text-amber-400 text-xs font-medium mb-2">
                    {item.date}
                  </p>
                  <span className="text-white text-xs uppercase font-bold tracking-widest border border-white px-3 py-1">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href={"/gallery"}
            className="text-emerald-900 font-bold border-b border-emerald-900 hover:text-amber-500 hover:border-amber-500 transition"
          >
            View All
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div
            className="relative max-w-5xl w-full animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white/95 backdrop-blur-sm rounded-b-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-amber-500 font-semibold">
                {selectedImage.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryHome;