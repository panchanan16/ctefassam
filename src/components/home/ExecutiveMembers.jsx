"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const ExecutiveCommittee = () => {
  const members = [
    {
      name: "Dr. B. K. Das",
      role: "Chairman",
      desc: "Former Dean, State Engineering College",
    },
    {
      name: "Prof. S. Hazarika",
      role: "Secretary",
      desc: "HOD Computer Science, Tech University",
    },
    {
      name: "Dr. B. K. Das",
      role: "Chairman",
      desc: "Former Dean, State Engineering College",
    },
    {
      name: "Dr. B. K. Das",
      role: "Chairman",
      desc: "Former Dean, State Engineering College",
    },
    {
      name: "Prof. S. Hazarika",
      role: "Secretary",
      desc: "HOD Computer Science, Tech University",
    },
    {
      name: "Dr. B. K. Das",
      role: "Chairman",
      desc: "Former Dean, State Engineering College",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Main Title */}
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 relative z-10">
              <span className="text-black">Executive</span> Committee
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

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex items-stretch gap-4 border border-gray-100"
            >
              {/* Green Vertical Bar */}
              <div className="w-1.5 bg-emerald-600 rounded-full shrink-0"></div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-gray-900 font-bold text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium text-xs uppercase mt-1 tracking-wide">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs mt-2">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-emerald-900 font-bold border-b border-emerald-900 hover:text-amber-500 hover:border-amber-500 transition">
            View All Members
          </button>
        </div>        
      </div>
    </section>
  );
};

export default ExecutiveCommittee;
