"use client";

import React, { useState } from "react";

const EventsNews = () => {
  const [activeEventTab, setActiveEventTab] = useState("upcoming");

  const upcomingEvents = [
    {
      id: 1,
      title: "Women's conclave 2025, Nalbari",
      date: "Nov 22, 2025",
      venue: "Phanidhar Dutta Seminar Hall, Guwahati, Assam",
      description:
        "The Women's Conclave, themed 'Viksit Bharat 2047, Strengthening Nari Shakti,' is a platform to celebrate women's achievements and empower their leadership in nation-building across education, governance, entrepreneurship, STEM, agriculture, and social development.",
    },
    {
      id: 1,
      title: "Women's conclave 2025, Nalbari",
      date: "Nov 22, 2025",
      venue: "Phanidhar Dutta Seminar Hall, Guwahati, Assam",
      description:
        "The Women's Conclave, themed 'Viksit Bharat 2047, Strengthening Nari Shakti,' is a platform to celebrate women's achievements and empower their leadership in nation-building across education, governance, entrepreneurship, STEM, agriculture, and social development.",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Women's conclave 2025",
      date: "Nov 22, 2025",
      venue: "Phanidhar Dutta Seminar, Guwahati, Assam",
      description:
        "The Women's Conclave, themed 'Viksit Bharat 2047, Strengthening Nari Shakti,' is a platform to celebrate women's achievements and empower their leadership in nation-building across education, governance, entrepreneurship, STEM, agriculture, and social development.",
    },
  ];

  const latestNews = [
    {
      id: 1,
      title: "women's conclave 2025",
      description:
        "The Women's Conclave, themed 'Viksit Bharat 2047, Strengthening Nari Shakti,' is a platform to celebrate women's achievements and empower their leadership in nation-building across education, governance, entrepreneurship, STEM, agriculture, and social development.",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-[#0a3d2e] to-[#1a5c47]">
      <style jsx>{`
        /* Custom Scrollbar Styling */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(49, 105, 78, 0.1);
          border-radius: 10px;
          margin: 8px 0;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #31694e 0%, #49926e 100%);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #49926e 0%, #31694e 100%);
          box-shadow: 0 0 10px rgba(49, 105, 78, 0.5);
        }

        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #31694e rgba(49, 105, 78, 0.1);
        }

        /* Smooth scrolling */
        .custom-scrollbar {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Events Section */}
          <div className="p-6 md:p-2">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-wide">
              EVENTS
            </h2>

            {/* Event Tabs */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={() => setActiveEventTab("upcoming")}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeEventTab === "upcoming"
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Upcoming Event
              </button>
              <button
                onClick={() => setActiveEventTab("past")}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeEventTab === "past"
                    ? "bg-white text-gray-900 shadow-lg"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Past Event
              </button>
            </div>

            {/* Events Content */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-2">
                {(activeEventTab === "upcoming"
                  ? upcomingEvents
                  : pastEvents
                ).map((event) => (
                  <div
                    key={event.id}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 capitalize">
                      {event.title}
                    </h3>
                    <div>
                      <p className="text-gray-600 font-medium mb-3 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {event.date}
                      </p>
                      {event.venue && (
                        <p className="text-gray-600 font-medium mb-3 flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z"
                            />
                          </svg>

                          {event.venue}
                        </p>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="p-6 md:p-2">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-wide">
              NEWS
            </h2>

            {/* News Tab */}
            <div className="flex mb-6">
              <div className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium shadow-lg">
                Latest News
              </div>
            </div>

            {/* News Content */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-2">
                {latestNews.map((news) => (
                  <div
                    key={news.id}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 capitalize">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-4">
                      {news.description}
                    </p>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-5 py-2.5 rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group shadow-md hover:shadow-lg">
                      <span className="text-sm font-medium">Read More</span>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                        <svg
                          className="w-3 h-3 text-gray-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-12">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default EventsNews;
