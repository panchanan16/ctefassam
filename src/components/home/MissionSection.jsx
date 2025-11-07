'use client'

const MissionSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            An Untiring Mission For Promoting
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Professional Development Of Teachers
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mt-6 font-light">
            Established In The Year 2001 October
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Teacher presenting"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                  Council for Teacher Education Foundation was established in the year 2001 October. 
                  <span className="font-semibold text-gray-900"> Dr. Gulab Chaurasia</span>, the Founder President of 
                  Council for Teacher Education Foundation (established in 1985 in Bhopal) nominated 
                  <span className="font-semibold text-gray-900"> Prof. Nilima Bhagabati</span> who was in her service 
                  in the Department of Education, Gauhati University, Assam as Chairman and 
                  <span className="font-semibold text-gray-900"> Dr. Suchitra Kakaty</span>, HoD, Department of 
                  Education, Pragjyotish College, Guwahati as Secretary cum Treasurer.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  The first executive body was formed with Dr. Nirmala Sarma, Dr. Bandana Nabis Das, 
                  Dr. Sunita Agarwalla, Dr. Phunu Das Sarma, Dr. L R Saikia, Dr. Gayatree Goswamee 
                  and Dr. RN Bhattacharjee - this was the beginning of CTEF-Assam with a small 
                  Executive body to plan, execute and implement the objectives of CTEF-Assam.
                </p>
              </div>

              {/* Read More Button */}
              <div className="mt-8">
                <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#adcb53] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <span className="relative z-10">Read More</span>
                  <svg 
                    className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-[#a5c150] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>            
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default MissionSection;