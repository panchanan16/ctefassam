// import AboutUsSection from "@/components/about/AboutUs";
// import StatsSection from "@/components/home/Achivement";
// import Gallery from "@/components/home/Gallery";
// import CTEFHeroSection from "@/components/home/HeroSection";
// import MissionSection from "@/components/home/MissionSection";
// import EventsNews from "@/components/home/NewsEvent";
// import ExecutiveMembers from "@/components/home/ExecutiveMembers";
// import OurAllMembers from "@/components/home/ListOfMembers";

// export default function Home() {
//   return (
//     <div className="">
//       <CTEFHeroSection />
//       <AboutUsSection />
//       <StatsSection />
//       <MissionSection />
//       <ExecutiveMembers />
//       <ExecutiveMembers type="Dist" />
//       <OurAllMembers />
//       <EventsNews />
//       <Gallery />
//     </div>
//   );
// }


"use client";

import React, { useState } from 'react';
import {
  Phone, Mail, Facebook, Twitter, Linkedin, Instagram,
  Menu, X, Target, Lightbulb, Heart, MapPin, Calendar,
  ArrowRight, BookOpen, Send
} from 'lucide-react';

const CtefGlobalPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper for scrolling to section (optional interaction)
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden">

      {/* ================= TOP BAR ================= */}
      <div className="bg-blue-900 text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1"><Phone size={14} /> +91 123 456 7890</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@ctef.org</span>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="hover:text-amber-400"><Facebook size={14} /></a>
            <a href="#" className="hover:text-amber-400"><Twitter size={14} /></a>
            <a href="#" className="hover:text-amber-400"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-amber-400"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
              <img src='/logo.png' />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900 leading-tight">CTEF</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider">Council for Teacher Education</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 font-medium text-sm text-gray-700">
            <a href="#" className="text-blue-900 font-bold">Home</a>
            <a href="#" className="hover:text-blue-900">About</a>
            <a href="#" className="hover:text-blue-900">Chapters</a>
            <a href="#" className="hover:text-blue-900">Events</a>
            <a href="#" className="hover:text-blue-900">Gallery</a>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-4 flex flex-col space-y-4 shadow-lg absolute w-full left-0">
            <a href="#" className="block text-blue-900 font-bold">Home</a>
            <a href="#" className="block text-gray-600">About</a>
            <a href="#" className="block text-gray-600">Chapters</a>
            <a href="#" className="block text-gray-600">Events</a>
            <a href="#" className="block text-gray-600">Gallery</a>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-md w-full">Join Now</button>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <header className="relative py-12 md:py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-2">
            Empowering Teacher Education
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-amber-500 mb-8">
            Transforming Societies
          </h3>
          <div className='absolute right-0 top-80'>
            <img src="/home/circle.png" className='w-5/6' alt="background image" />
          </div>

          <div className='absolute left-30 top-10'>
            <img src="/home/circleleft.png" className='w-5/6' alt="background image" />
          </div>

          <div className="relative max-w-4xl mx-auto mt-8">
            {/* Main Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Teacher in classroom"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Floating Stats Card - Overlapping bottom */}
            <div className="hidden md:flex absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg py-6 px-10 w-[90%] justify-between items-center border border-gray-100">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">500+</p>
                <p className="text-sm text-gray-500 uppercase">Schools</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">1200+</p>
                <p className="text-sm text-gray-500 uppercase">Teachers</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">50+</p>
                <p className="text-sm text-gray-500 uppercase">Chapters</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">25+</p>
                <p className="text-sm text-gray-500 uppercase">States</p>
              </div>
            </div>
          </div>

          <div className="mt-16 md:hidden grid grid-cols-2 gap-4">
            {/* Mobile Stats */}
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-xl font-bold text-blue-900">500+</p>
              <p className="text-xs text-gray-500">Schools</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-xl font-bold text-blue-900">1200+</p>
              <p className="text-xs text-gray-500">Teachers</p>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-600 transition transform hover:-translate-y-1">
              Become a Member
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-amber-300 opacity-50 text-6xl">✦</div>
        <div className="absolute bottom-20 right-10 text-blue-300 opacity-50 text-6xl">✦</div>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h4 className="text-amber-500 font-bold uppercase tracking-widest mb-2">About CTEF</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                Defining Quality in Education <br /> Excellence Since Inception
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Council for Teacher Education Foundation (CTEF) is dedicated to raising the standards of teacher education across the globe. We believe that empowering educators is the key to building a knowledgeable and compassionate society. Through workshops, conferences, and policy advocacy, we strive to create an ecosystem of continuous learning.
              </p>
              <button className="text-blue-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition">
                Read More About Us &rarr;
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Conference meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 inline-block border-b-4 border-amber-500 pb-2">
              Mission & Vision CTEF
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-pink-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">OUR MISSION</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To facilitate and promote quality teacher education through active collaboration, research, and professional development programs worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-blue-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">OUR VISION</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be a global leader in shaping educational policies and practices that foster innovation, inclusivity, and excellence in teaching.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-green-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">OUR VALUES</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrity, collaboration, empathy, and a relentless commitment to the betterment of the educational community globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL CHAPTERS ================= */}
      <section className="py-20 bg-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-500 mb-2">Global Chapters Directory</h2>
            <p className="text-blue-900 font-medium">Our Presence Across The Globe & Within India</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <div className="text-center mb-8">
              <MapPin className="inline-block text-blue-500 mb-2" />
              <h3 className="text-xl font-bold text-blue-900">National & International Chapters</h3>
            </div>

            {/* Grid of Locations */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Punjab', 'Delhi', 'Tamil Nadu', 'Maharashtra', 'Assam', 'West Bengal', 'Gujarat', 'Kerala', 'Uttar Pradesh', 'Telangana', 'Bihar', 'Haryana', 'Karnataka', 'Rajasthan', 'Odisha', 'USA', 'UK', 'Australia'].map((place) => (
                <div key={place} className="bg-white py-3 px-4 rounded-lg shadow-sm flex items-center gap-2 hover:shadow-md transition cursor-pointer border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-sm font-medium text-gray-700 truncate">{place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= EVENTS & CONFERENCES ================= */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-4xl">✦</span>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">Events & Conferences</h2>
            <p className="text-gray-500">Join us for our upcoming international and national events.</p>

            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full">Upcoming Events</button>
              <button className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-200">Past Events</button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Event Card 1 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition group">
              <div className="bg-blue-50 md:w-32 flex flex-col items-center justify-center py-6 md:py-0 text-blue-900 border-r border-gray-100 group-hover:bg-blue-900 group-hover:text-white transition">
                <span className="text-3xl font-bold">15</span>
                <span className="text-sm font-medium uppercase">May</span>
                <span className="text-xs mt-1">2025</span>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">National Education Summit 2025</h3>
                <p className="text-gray-500 text-sm mb-4">Focusing on policy changes and implementation strategies for the new academic year.</p>
                <div className="flex gap-3">
                  <button className="bg-blue-900 text-white text-xs px-4 py-2 rounded hover:bg-blue-800">View Agenda</button>
                  <button className="border border-blue-900 text-blue-900 text-xs px-4 py-2 rounded hover:bg-blue-50">Register Now</button>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition group">
              <div className="bg-blue-50 md:w-32 flex flex-col items-center justify-center py-6 md:py-0 text-blue-900 border-r border-gray-100 group-hover:bg-blue-900 group-hover:text-white transition">
                <span className="text-3xl font-bold">22</span>
                <span className="text-sm font-medium uppercase">June</span>
                <span className="text-xs mt-1">2025</span>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Global Teachers Awards 2025</h3>
                <p className="text-gray-500 text-sm mb-4">Celebrating the most innovative and inspiring educators from around the world.</p>
                <div className="flex gap-3">
                  <button className="bg-blue-900 text-white text-xs px-4 py-2 rounded hover:bg-blue-800">Nominate</button>
                  <button className="border border-blue-900 text-blue-900 text-xs px-4 py-2 rounded hover:bg-blue-50">Read More</button>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition group">
              <div className="bg-blue-50 md:w-32 flex flex-col items-center justify-center py-6 md:py-0 text-blue-900 border-r border-gray-100 group-hover:bg-blue-900 group-hover:text-white transition">
                <span className="text-3xl font-bold">10</span>
                <span className="text-sm font-medium uppercase">Aug</span>
                <span className="text-xs mt-1">2025</span>
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Future of Pedagogy Workshop</h3>
                <p className="text-gray-500 text-sm mb-4">A hands-on workshop on integrating AI and technology in modern classrooms.</p>
                <div className="flex gap-3">
                  <button className="bg-blue-900 text-white text-xs px-4 py-2 rounded hover:bg-blue-800">Join Waitlist</button>
                  <button className="border border-blue-900 text-blue-900 text-xs px-4 py-2 rounded hover:bg-blue-50">Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PUBLICATIONS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-500 mb-2 underline decoration-blue-900 decoration-4 underline-offset-8">Publications</h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
              <button className="px-6 py-2 rounded-full bg-blue-900 text-white text-sm font-medium">Journals</button>
              <button className="px-6 py-2 rounded-full text-gray-600 text-sm font-medium hover:bg-gray-100">Books</button>
              <button className="px-6 py-2 rounded-full text-gray-600 text-sm font-medium hover:bg-gray-100">Research Papers</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Publication 1 */}
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <div className="bg-gray-200 h-48 w-full rounded mb-4 flex items-center justify-center text-gray-400">
                <BookOpen size={48} />
              </div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">Journal of Teacher Edu. Vol 12</h4>
              <p className="text-xs text-gray-500 mb-4">Author: Dr. A. Sharma | Date: Jan 2024</p>
              <button className="w-full border border-blue-900 text-blue-900 text-sm py-2 rounded hover:bg-blue-900 hover:text-white transition">Read Journal</button>
            </div>

            {/* Publication 2 */}
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <div className="bg-gray-200 h-48 w-full rounded mb-4 flex items-center justify-center text-gray-400">
                <BookOpen size={48} />
              </div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">Innovations in Classroom</h4>
              <p className="text-xs text-gray-500 mb-4">Author: CTEF Editorial Board | Date: Mar 2024</p>
              <button className="w-full border border-blue-900 text-blue-900 text-sm py-2 rounded hover:bg-blue-900 hover:text-white transition">Read Book</button>
            </div>

            {/* Publication 3 */}
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <div className="bg-gray-200 h-48 w-full rounded mb-4 flex items-center justify-center text-gray-400">
                <BookOpen size={48} />
              </div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">Annual Report 2023-24</h4>
              <p className="text-xs text-gray-500 mb-4">CTEF Official Report | Date: Dec 2023</p>
              <button className="w-full border border-blue-900 text-blue-900 text-sm py-2 rounded hover:bg-blue-900 hover:text-white transition">Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT US ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-500 text-center mb-12">Contact Us</h2>

          <div className="max-w-4xl mx-auto bg-white">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input type="text" placeholder="John Doe" className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                <input type="tel" placeholder="+91 000 000 0000" className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <input type="text" placeholder="Inquiry regarding membership" className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea rows="4" placeholder="Write your message here..." className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-50"></textarea>
              </div>

              <div className="md:col-span-2 mt-2">
                <button type="button" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition flex items-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Col 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-6">CTEF</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Empowering educators to create a better tomorrow. Join our global network of teachers and institutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-amber-500 transition"><Facebook size={16} /></a>
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-amber-500 transition"><Twitter size={16} /></a>
                <a href="#" className="bg-white/10 p-2 rounded hover:bg-amber-500 transition"><Linkedin size={16} /></a>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-amber-500">Quick Links</h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white hover:underline">Home</a></li>
                <li><a href="#" className="hover:text-white hover:underline">About Organization</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Global Chapters</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Membership</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Events</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-amber-500">Contact Info</h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li className="flex gap-2 items-start"><MapPin size={16} className="mt-1 shrink-0" /> 123 Education Lane, Knowledge City, New Delhi - 110001</li>
                <li className="flex gap-2 items-center"><Phone size={16} /> +91 987 654 3210</li>
                <li className="flex gap-2 items-center"><Mail size={16} /> support@ctef.org</li>
              </ul>
            </div>

            {/* Col 4 - Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-amber-500">Newsletter</h4>
              <p className="text-sm text-blue-200 mb-4">Subscribe to get the latest news and updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="w-full p-2 rounded-l bg-blue-900/50 border border-blue-800 focus:outline-none text-sm" />
                <button className="bg-amber-500 text-blue-900 font-bold px-4 rounded-r hover:bg-amber-400">Join</button>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-900 pt-8 text-center text-sm text-blue-300">
            <p>&copy; {new Date().getFullYear()} Council for Teacher Education Foundation (CTEF). All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CtefGlobalPage;
