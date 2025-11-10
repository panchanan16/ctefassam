"use client";

import React, { useState } from "react";

const TeamMembers = () => {
  // Initial members data - you can replace with your actual data
  const allMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      description:
        "Please insert your details here for more information about the team",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Emily Davis",
      description:
        "Please insert your details here for more information about the team",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Michael Brown",
      description:
        "Please insert your details here for more information about the team",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      id: 4,
      name: "James Wilson",
      description:
        "Please insert your details here for more information about the team",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
    {
      id: 5,
      name: "Jessica Martinez",
      description:
        "Please insert your details here for more information about the team",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    },
    {
      id: 6,
      name: "David Anderson",
      description:
        "Please insert your details here for more information about the team",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    },
    {
      id: 7,
      name: "Sophia Taylor",
      description:
        "Please insert your details here for more information about the team",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    },
    {
      id: 8,
      name: "Robert Thomas",
      description:
        "Please insert your details here for more information about the team",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewMore = () => {
    if (isExpanded) {
      setVisibleCount(4);
      setIsExpanded(false);
      // Smooth scroll to top of section
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setVisibleCount(allMembers.length);
      setIsExpanded(true);
    }
  };

  const visibleMembers = allMembers.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-gray-900 mb-4">
            OUR MEMBERS
          </h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {visibleMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform"
            >
              {/* Image Container */}
              <div className="aspect-[4/4] overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {allMembers.length > 4 && (
          <div className="flex justify-center">            
            <button onClick={handleViewMore} className="group relative inline-flex items-center gap-2 px-8 py-3 bg-[#adcb53] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="relative z-10">View More</span>
              <svg
                className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <div className="absolute inset-0 bg-[#a5c150] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        )}

        {/* Decorative Bottom Line */}
        <div className="mt-16">
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-teal-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
