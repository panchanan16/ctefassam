
"use client"

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Facebook, Twitter, Instagram, Linkedin,
  ArrowRight, Play, Calendar, MapPin, ChevronLeft, ChevronRight,
  Quote, Newspaper, Image as ImageIcon, Video
} from 'lucide-react';

/* --- Data & Assets --- */
const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?auto=format&fit=crop&q=80&w=2000",
    title: "A Vision for Tomorrow",
    subtitle: "Building a sustainable future for our families."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=2000",
    title: "Voice of the Community",
    subtitle: "Real conversations, real solutions."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541872703-74c5963631df?auto=format&fit=crop&q=80&w=2000",
    title: "Integrity in Action",
    subtitle: "Leadership you can trust."
  }
];

const JOURNEY_DATA = [
  { 
    year: "2015", 
    title: "Grassroots Beginning", 
    desc: "Started as a community organizer, launching the 'Green Streets' initiative to clean up local parks and improve neighborhood safety. It wasn't about politics then; it was about pride in where we live.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  },
  { 
    year: "2018", 
    title: "City Council Victory", 
    desc: "Elected to City Council with a record-breaking voter turnout. Spearheaded the education reform bill that allocated 20% more budget to public schools without raising taxes.",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    year: "2021", 
    title: "State Representative", 
    desc: "Took the fight to the state level. Passed crucial healthcare legislation ensuring affordable access for seniors and veterans. Served as Chair of the Infrastructure Committee.",
    image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    year: "2025", 
    title: "The Senate Run", 
    desc: "Now running for Senate to bring common-sense leadership to the national stage. Our focus is clear: Economy, Environment, and Equity for every citizen.",
    image: "https://images.unsplash.com/photo-1540910419868-474947cebacb?auto=format&fit=crop&w=800&q=80"
  }
];

const PRESS_NEWS = [
  { category: "Policy", date: "Oct 24", title: "Plan for Green Energy Jobs Released", summary: "A comprehensive roadmap to create 50k jobs." },
  { category: "Opinion", date: "Oct 20", title: "Why We Need Education Reform Now", summary: "Op-Ed published in The Daily Times." },
  { category: "Campaign", date: "Oct 15", title: "Record Fundraising Quarter Announced", summary: "Grassroots donations drive momentum." },
];

/* --- Components --- */

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16 max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6 tracking-tight">{title}</h2>
    <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
    {subtitle && <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
);

export default function PoliticianWebsiteLight() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeYear, setActiveYear] = useState(JOURNEY_DATA[0]);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Auto-play Hero Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* --- Navbar (Light & Sticky) --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white p-2 rounded-lg font-bold">RK</div>
            <span className="text-2xl font-bold text-emerald-950 tracking-tight">KAY<span className="text-orange-500">.</span>GOV</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-emerald-900">
            {['Journey', 'News', 'Videos', 'Photos'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-500 transition-colors">{item}</a>
            ))}
            <button className="px-6 py-2.5 bg-emerald-950 text-white rounded-full font-bold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20">
              Donate Today
            </button>
          </div>
          
           <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-emerald-950">
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Hero Slider --- */}
      <header className="relative h-[85vh] min-h-[600px] overflow-hidden pt-20">
        {HERO_SLIDES.map((slide, idx) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Image */}
            <img src={slide.image} alt="Hero" className="w-full h-full object-cover" />
            
            {/* Overlay Gradient (Light version uses white fade) */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/40 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center container mx-auto px-6">
              <div className="max-w-2xl text-white mt-12">
                <div className="inline-block px-3 py-1 bg-orange-500 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
                  Campaign 2025
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-emerald-50 mb-8 font-light max-w-lg">
                  {slide.subtitle}
                </p>
                <button className="px-8 py-4 bg-white text-emerald-950 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-xl">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? 'w-12 bg-orange-500' : 'w-4 bg-white/50'}`}
            />
          ))}
        </div>
      </header>

      {/* --- Interactive My Journey Section --- */}
      <section id="journey" className="py-24 bg-emerald-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="My Journey" 
            subtitle="From local community organizer to national leader. Explore the timeline of service." 
          />
          
          <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
            {/* Left: Year Selector */}
            <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-4 lg:pb-0 w-full">
              {JOURNEY_DATA.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item)}
                  className={`text-left px-8 py-6 rounded-2xl transition-all duration-300 border-l-4 flex-shrink-0 lg:flex-shrink w-64 lg:w-full group ${
                    activeYear.year === item.year 
                      ? 'bg-white shadow-xl border-orange-500 translate-x-2' 
                      : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  <span className={`block text-3xl font-bold mb-1 ${activeYear.year === item.year ? 'text-orange-500' : 'text-slate-400 group-hover:text-emerald-700'}`}>
                    {item.year}
                  </span>
                  <span className={`text-sm font-semibold uppercase tracking-wider ${activeYear.year === item.year ? 'text-emerald-950' : 'text-slate-400'}`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Content Display */}
            <div className="lg:w-2/3 relative min-h-[400px] w-full">
              <div className="bg-white p-2 rounded-[2rem] shadow-2xl rotate-1 lg:rotate-2 transition-transform duration-500">
                <div className="relative overflow-hidden rounded-[1.8rem] aspect-video">
                  <img 
                    src={activeYear.image} 
                    alt={activeYear.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-3">{activeYear.title}</h3>
                      <p className="text-emerald-100 text-lg leading-relaxed">{activeYear.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Press & News Section --- */}
      <section id="news" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Latest Updates</span>
              <h2 className="text-4xl font-bold text-emerald-950 mt-2">Press & News</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-emerald-700 font-bold hover:gap-4 transition-all">
              View All News <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRESS_NEWS.map((news, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-emerald-50 rounded-2xl p-8 h-full border border-emerald-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-white text-emerald-800 text-xs font-bold rounded-full shadow-sm">
                      {news.category}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950 mb-3 group-hover:text-orange-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {news.summary}
                  </p>
                  <div className="flex items-center text-emerald-700 font-bold text-sm">
                    Read Story <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Video Gallery Section --- */}
      <section id="videos" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background blobs for visual interest */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/50 rounded-full blur-[100px] -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/30 rounded-full blur-[100px] -ml-20 -mb-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
              <Video className="text-white fill-current" size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-4">Campaign Voices</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Watch our latest rallies, town halls, and interviews.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Large Video */}
            <div className="relative rounded-3xl overflow-hidden group aspect-video bg-black shadow-2xl border border-slate-700">
              <img src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Main Video" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-emerald-950 mb-6 hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" className="ml-1"/>
                </button>
                <h3 className="text-2xl font-bold">Keynote: The Future of Our City</h3>
                <p className="text-slate-300 mt-2">Live from Central Park • 45 min</p>
              </div>
            </div>

            {/* Secondary Videos Grid */}
            <div className="grid grid-rows-2 gap-8">
               {[1, 2].map((i) => (
                 <div key={i} className="flex gap-4 bg-slate-800/50 p-4 rounded-2xl hover:bg-slate-800 transition-colors border border-slate-700/50 cursor-pointer group">
                   <div className="relative w-40 rounded-xl overflow-hidden flex-shrink-0 bg-black">
                      <img src={`https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=400&q=80`} className="w-full h-full object-cover opacity-80" alt="Thumb" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"><Play size={12} fill="currentColor" /></div>
                      </div>
                   </div>
                   <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-lg leading-tight mb-2 group-hover:text-orange-400 transition-colors">Debate Night Highlights</h4>
                      <p className="text-slate-400 text-sm">Oct 12 • 5 min watch</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Photo Gallery (Masonry) --- */}
      <section id="photos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="On The Trail" subtitle="Snapshots from our journey across the state." />
          
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {[
              { h: "h-64", img: "https://images.unsplash.com/photo-1541872703-74c5963631df?w=600" },
              { h: "h-96", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600" },
              { h: "h-64", img: "https://images.unsplash.com/photo-1529101091760-6149d4c81b22?w=600" },
              { h: "h-80", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600" },
              { h: "h-64", img: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=600" },
              { h: "h-72", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600" },
            ].map((photo, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden break-inside-avoid shadow-md hover:shadow-xl transition-all duration-300">
                <img src={photo.img} alt="Gallery" className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/20 transition-colors"></div>
                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ImageIcon size={20} className="text-emerald-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer (Simple & Clean) --- */}
      <footer className="bg-emerald-950 text-white py-16 border-t-8 border-orange-500">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">KAY<span className="text-orange-500">.</span>GOV</h2>
            <p className="text-emerald-200/60 max-w-sm mb-8">
              We are dedicated to building a transparent, inclusive government that works for everyone, not just the privileged few.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
            </div>
          </div>
          <div>
             <h4 className="font-bold text-lg mb-6 text-orange-400">Campaign</h4>
             <ul className="space-y-3 text-emerald-100/70">
               <li><a href="#" className="hover:text-white">Our Story</a></li>
               <li><a href="#" className="hover:text-white">The Platform</a></li>
               <li><a href="#" className="hover:text-white">Volunteer</a></li>
             </ul>
          </div>
          <div>
             <h4 className="font-bold text-lg mb-6 text-orange-400">Contact</h4>
             <ul className="space-y-3 text-emerald-100/70">
               <li>press@kay.gov</li>
               <li>(555) 123-4567</li>
               <li>Washington, DC</li>
             </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
    {icon}
  </a>
);