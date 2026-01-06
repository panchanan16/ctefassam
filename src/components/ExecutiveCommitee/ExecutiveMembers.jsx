"use client";

import React, { useState } from "react";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import allMembers from '@/data.json'

const ExecutiveCommittee = ({title}) => {

  const [visibleCount, setVisibleCount] = useState(15);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  return (
    <section className={`py-20 bg-white relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 relative z-10">
              <span className="text-black">{title ? title.split(" ")[0] : "Executive"}</span> {title ? title.split(" ")[1] : "Members"}
            </h2>

            {/* Brush Stroke */}
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
            <Sparkles className="absolute -top-4 -right-8 text-amber-400 w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {allMembers.slice(0, visibleCount).map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex items-stretch gap-4 border border-gray-100 relative group"
            >
              {/* Green Vertical Bar */}
              <div className="w-1.5 bg-emerald-600 rounded-full shrink-0 group-hover:bg-amber-500 transition-colors"></div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-gray-900 font-bold text-lg leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                    LM: {member.lmno}
                  </span>
                </div>

                {/* Address */}
                <div className="flex gap-2 mt-3">
                  <MapPin size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-xs leading-relaxed">{member.address}</p>
                </div>

                {/* Contact Info Footer */}
                <div className="mt-4 pt-4 border-t border-gray-50 flex flex-wrap gap-y-2 gap-x-4">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Phone size={12} className="text-amber-500" />
                    <span className="text-[11px] font-medium">{member.contact}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Mail size={12} className="text-amber-500" />
                    <span className="text-[11px] font-medium truncate max-w-[150px]">
                      {member.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button Logic */}
        {visibleCount < allMembers.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="text-emerald-900 font-bold border-b-2 border-emerald-900 hover:text-amber-500 hover:border-amber-500 transition-all pb-1 uppercase tracking-widest text-sm"
            >
              View More Members
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExecutiveCommittee;