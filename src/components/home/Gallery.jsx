"use client";

import { Sparkles, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const GalleryHome = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "An Interactive Programmme On NEP-2020 Effective Implementation and Challenges To Overcome in School Education",
      image:
        "/gallery/gallery1.jpg",
      date: "April 04, 2022",
    },
    {
      id: 2,
      title: "Happy Hours of Effective Learning By School Children at Darrang",
      image:
        "/gallery/album12.jpg",
      date: "April 06, 2020",
    },
    {
      id: 3,
      title: "13th day happy schooling programme in 3 Tea gardens at Jorhat",
      image:
        "/gallery/album17.jpg",
      date: "June 08, 2020",
    },
    {
      id: 4,
      title: "Press Conference For The 34th CTEF Annual International E Conference",
      image:
        "/gallery/album27.jpg",
      date: "19th and 20th December 2020",
    },
    {
      id: 5,
      title: "Jorhat District Activity organised in collaboration with Chinamara Higher Secondary School, Jorhat",
      image:
        "/gallery/album62.jpg",
      date: "Feb 17, 2022",
    },
    {
      id: 6,
      title: "CTEF Jorhat District Chapter in collaboration with Gorumora High school, Jorhat organised an awareness program for teachers on Project Based Learning",
      image:
        "/gallery/album64.jpg",
      date: "Feb 23, 2022",
    },
    {
      id: 7,
      title: "Workshop on Taxonomy of Educational objectives organised by CTEF Assam ,Kamrup (R) at Ulubari H.S school",
      image:
        "/gallery/album73.jpg",
      date: "April 29, 2022",
    },
    {
      id: 8,
      title: "Workshop on Guidance and Counselling of Teachers organised by Malowali High School, Jorhat held on 24-09-2022",
      image:
        "/gallery/album79.jpg",
      date: "Sep 24, 2022",
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