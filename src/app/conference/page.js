"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, MapPin, Video, PlayCircle, 
  ArrowRight, ChevronLeft, ChevronRight, Users, 
  Sparkles, MonitorPlay, Handshake
} from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EventSlider from '@/components/EventSlider/EventSlider';

const EConference = () => {
  // ================= DATA FOR EVENTS (With Optional Fields) =================
  const upcomingEvents = [
    {
      id: 1,
      day: "15",
      month: "Oct",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "National Education Policy 2025: A Deep Dive",
      time: "10:00 AM - 01:00 PM IST",
      platform: "Zoom Platform",
      venue: "Convention Center, Guwahati (Hybrid)", // Optional Field present
      collaboration: "Ministry of Education", // Optional Field present
      type: "LIVE WEBINAR"
    },
    {
      id: 2,
      day: "22",
      month: "Nov",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Pedagogy & Digital Tools Workshop",
      time: "02:00 PM - 05:00 PM IST",
      platform: "Google Meet",
      // No Venue (Purely Online)
      collaboration: "Tech for Teach NGO", // Optional Field present
    },
    {
      id: 3,
      day: "05",
      month: "Dec",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Leadership in Education Summit",
      time: "09:00 AM - 04:00 PM IST",
      platform: "Zoom Platform",
      venue: "University Auditorium, Assam", // Optional Field present
      // No Collaboration field
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Inclusive Education Strategies",
      date: "Aug 2024",
      image: "https://images.unsplash.com/photo-1551818243-e8909af71fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      venue: "City Hall, Dispur",
      collaboration: "UNICEF India"
    },
    {
      id: 2,
      title: "Mental Health in Schools",
      date: "Jul 2024",
      image: "https://images.unsplash.com/photo-1505373872341-3d525d697193?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      // No venue, no collab
    },
    {
      id: 3,
      title: "Coding for Kids: A Guide",
      date: "Jun 2024",
      image: "https://images.unsplash.com/photo-1591115765325-37148f3160af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      collaboration: "IIT Guwahati"
    },
    {
      id: 4,
      title: "Arts in Curriculum",
      date: "May 2024",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      venue: "District Library"
    }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden">
      <Header />
      {/* ================= PAGE HEADER ================= */}
      <header className="bg-emerald-950 py-12 relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl translate-y-1/2"></div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 flex justify-center items-center gap-3">
              <MonitorPlay className="text-amber-500" /> E-Conferences
            </h1>
            <p className="text-emerald-200 text-sm max-w-xl mx-auto">
              Join our virtual sessions to connect, learn, and grow from the comfort of your home.
            </p>
         </div>
      </header>

      <EventSlider />

      {/* ================= SECTION 2: UPCOMING EVENTS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Schedule</span>
              <h2 className="text-3xl font-bold text-emerald-950 relative">
                Upcoming Events
                <Sparkles className="absolute -top-3 -right-6 text-amber-400 w-5 h-5 animate-pulse" />
              </h2>
            </div>            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-300 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                    <span className="block text-xl font-bold text-emerald-900">{event.day}</span>
                    <span className="block text-xs font-bold text-gray-500 uppercase">{event.month}</span>
                  </div>
                  {event.type && (
                    <div className="absolute bottom-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-tl-lg">
                      {event.type}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-700 transition">
                    {event.title}
                  </h3>
                  
                  {/* Event Details Section */}
                  <div className="space-y-3 text-sm text-gray-500 mb-6 bg-slate-50 p-4 rounded-lg">
                    {/* Time */}
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="text-emerald-500 mt-0.5 shrink-0" /> 
                      <span>{event.time}</span>
                    </div>
                    {/* Platform */}
                    <div className="flex items-start gap-2">
                      <Video size={16} className="text-emerald-500 mt-0.5 shrink-0" /> 
                      <span>{event.platform}</span>
                    </div>
                    
                    {/* CONDITIONAL: Venue */}
                    {event.venue && (
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="text-emerald-500 mt-0.5 shrink-0" /> 
                        <span className="font-medium text-emerald-900">{event.venue}</span>
                      </div>
                    )}

                    {/* CONDITIONAL: Collaboration */}
                    {event.collaboration && (
                      <div className="flex items-start gap-2">
                        <Handshake size={16} className="text-emerald-500 mt-0.5 shrink-0" /> 
                        <span className="italic text-gray-600">In collab with: {event.collaboration}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto">
                     <button className="w-full bg-emerald-900 text-white font-bold py-3 rounded-lg hover:bg-amber-500 transition shadow-md">
                       Register Now
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PAST EVENTS ================= */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-400 mb-2">Past Events Archive</h2>
            <div className="w-16 h-1 bg-gray-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {pastEvents.map((item) => (
               <div key={item.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-emerald-300 transition duration-300 group flex flex-col">
                  <div className="relative mb-4 overflow-hidden rounded-md bg-gray-100">
                     <img 
                       src={item.image}
                       alt="Past Event"
                       className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition grayscale group-hover:grayscale-0"
                     />
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/20">
                        <PlayCircle size={40} className="text-white drop-shadow-lg" />
                     </div>
                  </div>
                  
                  <div className="flex-grow">
                     <span className="text-[10px] font-bold text-amber-500 uppercase">Recorded • {item.date}</span>
                     <h4 className="font-bold text-gray-800 text-sm mt-1 mb-2 leading-snug group-hover:text-emerald-900">
                       {item.title}
                     </h4>
                     
                     {/* CONDITIONAL: Venue & Collab for Past Events (Smaller Text) */}
                     <div className="space-y-1 mt-2">
                        {item.venue && (
                          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                            <MapPin size={12} className="text-emerald-500" />
                            <span className="truncate">{item.venue}</span>
                          </div>
                        )}
                        {item.collaboration && (
                          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                            <Handshake size={12} className="text-emerald-500" />
                            <span className="truncate">{item.collaboration}</span>
                          </div>
                        )}
                     </div>
                  </div>

                  <button className="mt-4 w-full text-xs font-bold text-emerald-900 bg-emerald-50 py-2 rounded border border-transparent group-hover:border-emerald-200 hover:bg-white transition">
                     Watch Recording
                  </button>
               </div>
             ))}
          </div>

          <div className="mt-12 text-center">
             <button className="text-gray-500 text-sm font-semibold border-b border-gray-400 pb-1 hover:text-emerald-900 hover:border-emerald-900 transition">
                Load More Archives
             </button>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default EConference;