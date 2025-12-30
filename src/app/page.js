import {
  Phone, Mail, Facebook, Twitter, Linkedin, Instagram, CheckCircle2
} from 'lucide-react';
import ExecutiveCommittee from '@/components/ExecutiveCommitee/ExecutiveMembers';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import GalleryHome from '@/components/home/Gallery';
import JoinForm from '@/components/JoinForm/JoinForm';
import HomeSlider from '@/components/HomeSlider/HomeSlider';
import ExecutiveCommitee from '@/components/ExecutiveCommitee/ExecutiveCommitee';

const CTEFAssam = () => {
  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden">

      {/* ================= TOP BAR ================= */}
      <div className="bg-emerald-950 text-white text-xs py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-amber-400" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-amber-400" /> info@ctefassam.org</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-amber-400 transition"><Facebook size={14} /></a>
            <a href="#" className="hover:text-amber-400 transition"><Twitter size={14} /></a>
            <a href="#" className="hover:text-amber-400 transition"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-amber-400 transition"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      <Header />

      {/* ================= HERO SECTION ================= */}
      <header className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 bg-slate-50 overflow-hidden">
        {/* Decorative Background Blob */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-50 rounded-bl-[200px] -z-10 hidden lg:block"></div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber-500 text-2xl">✦</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-emerald-950 mb-4 leading-tight">
              Advancing Teacher Education<br />
              as Envisioned <br />
              <span className="text-amber-500">in NEP 2020</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
              CTEF Assam promotes quality teacher preparation through continuous professional development, academic collaboration, and evidence-based best practices aligned with NEP 2020.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-900 text-white px-8 py-3 rounded font-semibold hover:bg-emerald-800 transition shadow-lg">
                Discover More
              </button>
              <button className="border-2 border-emerald-900 text-emerald-900 px-8 py-3 rounded font-semibold hover:bg-emerald-50 transition">
                Join Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <HomeSlider />
        </div>

        {/* Stats Strip - Floating */}
        <div className="container mx-auto w-screen lg:w-[50vw] px-4 relative mt-12 lg:-mt-8 mr-0 z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-amber-500 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center border-r-3 border-amber-500 last:border-0">
              <h3 className="text-3xl font-bold text-emerald-900">500+</h3>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Active Members</p>
            </div>
            <div className="text-center border-r-3 border-amber-500 last:border-0">
              <h3 className="text-3xl font-bold text-emerald-900">50+</h3>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Institutions</p>
            </div>
            <div className="text-center border-r-3 border-amber-500 last:border-0">
              <h3 className="text-3xl font-bold text-emerald-900">40+</h3>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Events</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-900">20+</h3>
              <p className="text-xs text-gray-500 font-medium uppercase mt-1">Districts</p>
            </div>
          </div>
        </div>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
            {/* About Image with Frame */}
            <div className="lg:w-1/3 relative">
              <div className="relative p-4 border-2 border-dashed border-emerald-900 rounded-lg">
                <div className="absolute inset-0 bg-emerald-900/5 translate-x-4 translate-y-4 rounded-lg -z-10"></div>
                <img
                  src="/home/chairman.jpg"
                  alt="Chairman"
                  className="w-full h-auto rounded shadow-lg"
                />
                {/* Name Tag Overlay */}
                {/* <div className="absolute bottom-8 left-8 bg-emerald-900 text-white p-4 rounded shadow-lg max-w-xs">
                                    <p className="font-bold text-lg">Dr. Nilima Bhagabati</p>
                                    <p className="text-xs text-amber-400">Chairperson, CTEF Assam</p>
                                </div> */}
              </div>
            </div>

            {/* About Text */}
            <div className="lg:w-1/2">
              <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 relative inline-block">
                About CTEF
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-amber-500"></span>
              </h4>
              <h2 className="text-3xl font-bold text-emerald-950 mb-6 mt-2">
                Empowering Educators Since Inception
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Council for Teacher Education Foundation (CTEF) Assam Chapter was established with a vision to revitalize the teaching community in the region. We focus on modern pedagogies, digital literacy, and holistic development of educators.
              </p>
              <div className="space-y-3">
                {['Professional Development Workshops', 'National & International Seminars', 'Educational Policy Advocacy'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-amber-100 p-1 rounded-full text-amber-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-emerald-50 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h4 className="text-amber-600 font-bold text-sm uppercase mb-2">Our Goal</h4>
              <h2 className="text-3xl font-bold text-emerald-950">Mission of CTEF</h2>
            </div>
            <div className="hidden md:block w-32 h-1 bg-gray-200 mb-2">
              <div className="w-16 h-full bg-amber-500"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-amber-500">
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "To develop a global network of teachers committed to excellence in education and to provide a platform for sharing innovative ideas and practices. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              {/* <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-emerald-900">Dr. Sarah Ahmed</h5>
                  <p className="text-xs text-gray-500">Secretary, CTEF</p>
                </div>
              </div> */}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80" className="rounded-lg shadow-md h-40 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80" className="rounded-lg shadow-md h-40 w-full object-cover translate-y-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <GalleryHome />

      {/* ================= MEMBERSHIP ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-amber-500">Membership</h2>
            <p className="text-emerald-900 mt-2">Choose the plan that suits you best</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Standard */}
            <div className="bg-white p-8 rounded-xl shadow border border-gray-100 hover:border-emerald-500 transition relative">
              <h3 className="font-bold text-gray-500 uppercase tracking-wider text-sm">Individual</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-emerald-900">₹800</span>
                <span className="text-gray-400 text-sm">/year</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Access to workshops</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Newsletter subscription</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> ID Card</li>
              </ul>
              <button className="w-full border border-emerald-900 text-emerald-900 py-2 rounded hover:bg-emerald-50">Choose Plan</button>
            </div>

            {/* Premium */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-amber-400 relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
              <h3 className="font-bold text-amber-500 uppercase tracking-wider text-sm">Life Time</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-emerald-900">₹2,000</span>
                <span className="text-gray-400 text-sm">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500" /> All Individual benefits</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Voting rights</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Conference discounts</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Digital Certificate</li>
              </ul>
              <button className="w-full bg-emerald-900 text-white py-2 rounded hover:bg-emerald-800 shadow-lg">Choose Plan</button>
            </div>

            {/* Institution */}
            <div className="bg-white p-8 rounded-xl shadow border border-gray-100 hover:border-emerald-500 transition">
              <h3 className="font-bold text-gray-500 uppercase tracking-wider text-sm">Institutional</h3>
              <div className="my-4">
                <span className="text-4xl font-bold text-emerald-900">₹5,000</span>
                <span className="text-gray-400 text-sm">/year</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> up to 10 members</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Branding on events</li>
                <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Recruitment support</li>
              </ul>
              <button className="w-full border border-emerald-900 text-emerald-900 py-2 rounded hover:bg-emerald-50">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REGISTRATION FORM ================= */}
      <JoinForm />

      {/* ================= EXECUTIVE COMMITTEE ================= */}
      <ExecutiveCommitee />

      <ExecutiveCommittee />
      <Footer />
    </div>
  );
};

export default CTEFAssam;