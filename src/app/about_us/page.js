import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ReadMore from '@/components/readmore/ReadMore';
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
            Council for Teacher Education Foundation (CTEF), Assam Chapter works to promote excellence in teacher education by fostering innovation, professional development, and academic collaboration.
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
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Council for Teacher Education Foundation (CTEF) is a leading professional organization in India, accorded international status in 2009. Established in 1985 at Bhopal by the late Dr. Gulab Chaurasia—an eminent educationist, global teacher educator, and humanitarian—CTEF began with a small group of like-minded teachers and teacher educators. Through sustained efforts and visionary initiatives, the organization has evolved into a mature professional body with affiliated chapters in twenty-five states across India and three overseas countries.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                CTEF has a vast network of life members comprising teachers, educationists, academicians, teacher educators, educational administrators, policymakers, and researchers. The primary objective of the Foundation is to build professional competencies, enhance teaching skills, and foster a culture of professionalism among teachers through diverse training programmes, academic activities, and capacity-building initiatives. Its national and international chapters conduct teacher development programmes throughout the year.
              </p>
              <ReadMore />

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
              <p className="text-emerald-100 leading-relaxed text-lg mb-4">
                To facilitate and promote quality teacher education through active collaboration, research, and professional development programs.
              </p>
              <ul className="text-emerald-100 space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <p><span className='font-bold'>Enhance Teacher Competency</span> – Strengthen skills and professionalism through continuous capacity-building programmes.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <p><span className='font-bold'>Promote Innovative Pedagogy</span> – Encourage learner-centric, experiential, and multidisciplinary teaching approaches.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <p><span className='font-bold'>Leverage Technology</span> – Integrate digital literacy, e-learning, and technology-enabled teaching methods.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <p><span className='font-bold'>Foster Research & Leadership</span> – Support reflective teaching, critical thinking, and ethical educational leadership.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <p><span className='font-bold'>Champion Inclusivity & Equity</span> – Ensure gender equity and inclusive practices to address diverse learner needs.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-500">•</span>
                  <p><span className='font-bold'>Contribute to Nation-Building </span> – Empower teachers as agents of change for a Viksit Bharat @2047.</p>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-emerald-800/50 border border-emerald-700 p-8 md:p-10 rounded-2xl hover:bg-emerald-800 transition duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Eye size={32} className="text-emerald-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-emerald-100 leading-relaxed text-lg mb-4">
                To be a global leader in shaping educational policies and practices that foster innovation, inclusivity, and excellence.
              </p>
              <ul className="text-emerald-100 space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <p><span className='font-bold'>Excellence in Education </span>- Empower teachers to achieve professional and pedagogical excellence.</p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <p><span className='font-bold'>Innovation in Teaching </span>– Foster innovative, learner-centric, and experiential teaching approaches.</p>
                </li>

                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <p><span className='font-bold'>Technology Integration </span>– Promote technology-enabled and digital learning practices.</p>
                </li>

                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <p><span className='font-bold'>Inclusivity & Equity </span>– Ensure inclusive education and gender equity for all learners.</p>
                </li>

                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <p><span className='font-bold'>Ethical & Professional Leadership </span>– Develop ethical, reflective, and responsible educators</p>
                </li>

                <li className="flex items-start">
                  <span className="mr-2 text-white">•</span>
                  <p><span className='font-bold'>Nation-Building </span>– Contribute to Viksit Bharat @2047 through empowered teachers.</p>
                </li>

              </ul>
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
              { title: 'Professionalism & Continuous Learning', icon: CheckCircle2, desc: 'Uphold ethical standards and promote lifelong learning, research, and skill development' },
              { title: 'Innovation & Creativity', icon: Sparkles, desc: 'Encourage forward-thinking pedagogical practices and modern teaching methodologies' },
              { title: 'Collaboration & Inclusivity ', icon: Users, desc: 'Foster teamwork, partnerships, and equitable opportunities for all educators and learners.' },
              { title: 'Empowerment & Nation-Building', icon: Heart, desc: 'Enable teachers to be change agents contributing to a skilled, empowered, and socially responsible India' }
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