"use client";
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import {
  Target, Eye, Heart, Users, CheckCircle2,
  ArrowRight, Sparkles,
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden">
      <Header />
      {/* ================= PAGE HEADER ================= */}
      {/* Consistent with the site theme - clear title with breadcrumb feel */}
      <header className="bg-emerald-950 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-emerald-200 text-sm md:text-base max-w-2xl mx-auto">
            Get to know the people and the purpose behind the Council for Teacher Education Foundation, Assam Chapter.
          </p>
        </div>
      </header>

      {/* ================= SECTION 1: ABOUT PARAGRAPH + PHOTO ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Image Side - utilizing the 'dashed border' motif from home page */}
            <div className="lg:w-1/2 relative order-2 lg:order-1">
              <div className="relative p-5 border-2 border-dashed border-emerald-200 rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-emerald-50 rounded-2xl -rotate-2 -z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="CTEF Team Meeting"
                  className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[4/3]"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-xl shadow-xl hidden md:block">
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-xs uppercase tracking-wider font-medium">Years of Service</p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Who We Are</span>
                <div className="h-px w-12 bg-amber-500"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6 leading-tight">
                Dedicated to <span className="text-amber-500 relative inline-block">
                  Excellence
                  {/* Brush stroke SVG under text */}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> in Teacher Education
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                The Council for Teacher Education Foundation (CTEF) Assam Chapter is a premier professional organization committed to the qualitative improvement of teacher education. We act as a bridge between policy makers, teacher educators, and the teaching community.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Since our inception, we have been working tirelessly to organize seminars, workshops, and training programs that empower educators with modern pedagogical skills and digital literacy, ensuring they are prepared for the classrooms of tomorrow.
              </p>
              <button className="flex items-center gap-2 text-emerald-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition">
                Read Our History <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2 & 3: MISSION & VISION ================= */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

            {/* Mission */}
            <div className="bg-emerald-800/50 border border-emerald-700 p-8 md:p-10 rounded-2xl hover:bg-emerald-800 transition duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-emerald-100 leading-relaxed text-lg">
                To facilitate and promote quality teacher education through active collaboration, research, and professional development programs. We aim to create an ecosystem where educators are empowered to transform society through knowledge.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-emerald-800/50 border border-emerald-700 p-8 md:p-10 rounded-2xl hover:bg-emerald-800 transition duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Eye size={32} className="text-emerald-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-emerald-100 leading-relaxed text-lg">
                To be a global leader in shaping educational policies and practices that foster innovation, inclusivity, and excellence in teaching, ensuring every learner has access to a world-class educator.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CORE VALUES ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold tracking-widest text-sm uppercase">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mt-2">Core Values</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', icon: CheckCircle2, desc: 'We uphold the highest standards of honesty and strong moral principles in all our actions.' },
              { title: 'Innovation', icon: Sparkles, desc: 'We constantly seek new ways to improve teaching methodologies and embrace technology.' },
              { title: 'Collaboration', icon: Users, desc: 'We believe in the power of working together with institutions and communities.' },
              { title: 'Inclusivity', icon: Heart, desc: 'We strive to create an educational environment that respects and welcomes diversity.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border-b-4 border-transparent hover:border-amber-500 hover:shadow-xl transition duration-300 group">
                <div className="mb-6 inline-block p-3 bg-emerald-50 rounded-lg group-hover:bg-emerald-900 transition duration-300">
                  <value.icon size={28} className="text-emerald-600 group-hover:text-amber-400 transition duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: OUR MEMBERS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          {/* Header specific to the 'Executive Committee' style requested */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 relative inline-block">
              Our Members
              <Sparkles className="absolute -top-4 -right-8 text-amber-400 w-6 h-6 animate-pulse" />
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Meet the dedicated professionals leading the charge for better education in Assam.
            </p>
          </div>

          {/* Using the Specific 'Green Vertical Bar' Card Style Requested previously */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Dr. B. K. Das", role: "Chairman", desc: "Former Dean, State Engineering College" },
              { name: "Prof. S. Hazarika", role: "Secretary", desc: "HOD Computer Science, Tech University" },
              { name: "Dr. Nilima Bhagabati", role: "Advisor", desc: "Senior Educationist" },
              { name: "Dr. A. K. Sharma", role: "Treasurer", desc: "Professor, Guwahati University" },
              { name: "Mrs. R. Devi", role: "Executive Member", desc: "Principal, City College" },
              { name: "Mr. P. Gogoi", role: "Coordinator", desc: "District Education Officer" },
              { name: "Dr. S. Barua", role: "Member", desc: "Lecturer, DIET" },
              { name: "Prof. M. Ahmed", role: "Member", desc: "Research Scholar" },
              { name: "Dr. J. Kalita", role: "Member", desc: "Asst. Professor" }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 flex items-stretch gap-4 border border-gray-100 group"
              >
                {/* Green Vertical Bar */}
                <div className="w-1.5 bg-emerald-600 rounded-full shrink-0 group-hover:bg-amber-500 transition-colors"></div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-gray-900 font-bold text-lg leading-tight group-hover:text-emerald-900 transition">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium text-xs uppercase mt-1 tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-full border border-emerald-900 text-emerald-900 font-bold hover:bg-emerald-900 hover:text-white transition duration-300">
              View Full Member Directory
            </button>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default AboutUs;