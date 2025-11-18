"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, MapPin, Phone, Loader } from 'lucide-react';

const AboutUs = () => {
  // Color theme
  const colors = {
    primary: '#31694E',
    secondary: '#658C58',
    accent: '#BBC863'
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Core values data
  const coreValues = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries and embracing new ideas',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and honesty',
      image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=400&h=300&fit=crop'
    },
    {
      title: 'Excellence',
      description: 'Delivering quality in everything we do',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve common goals',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
    },
    {
      title: 'Sustainability',
      description: 'Creating lasting positive impact',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
    }
  ];

  // Team members data (20 members total)
  const allMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      contact: '+1 234 567 8901',
      district: 'Manhattan',
      email: 'sarah.johnson@company.com'
    },
    {
      id: 2,
      name: 'Michael Chen',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      contact: '+1 234 567 8902',
      district: 'Brooklyn',
      email: 'michael.chen@company.com'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      contact: '+1 234 567 8903',
      district: 'Queens',
      email: 'emily.rodriguez@company.com'
    },
    {
      id: 4,
      name: 'David Kim',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      contact: '+1 234 567 8904',
      district: 'Bronx',
      email: 'david.kim@company.com'
    },
    {
      id: 5,
      name: 'Jessica Williams',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
      contact: '+1 234 567 8905',
      district: 'Staten Island',
      email: 'jessica.williams@company.com'
    },
    {
      id: 6,
      name: 'James Martinez',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
      contact: '+1 234 567 8906',
      district: 'Manhattan',
      email: 'james.martinez@company.com'
    },
    {
      id: 7,
      name: 'Amanda Taylor',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop',
      contact: '+1 234 567 8907',
      district: 'Brooklyn',
      email: 'amanda.taylor@company.com'
    },
    {
      id: 8,
      name: 'Robert Anderson',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      contact: '+1 234 567 8908',
      district: 'Queens',
      email: 'robert.anderson@company.com'
    },
    {
      id: 9,
      name: 'Lisa Thompson',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
      contact: '+1 234 567 8909',
      district: 'Bronx',
      email: 'lisa.thompson@company.com'
    },
    {
      id: 10,
      name: 'Christopher Lee',
      photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop',
      contact: '+1 234 567 8910',
      district: 'Staten Island',
      email: 'christopher.lee@company.com'
    },
    {
      id: 11,
      name: 'Michelle Garcia',
      photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop',
      contact: '+1 234 567 8911',
      district: 'Manhattan',
      email: 'michelle.garcia@company.com'
    },
    {
      id: 12,
      name: 'Daniel Brown',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop',
      contact: '+1 234 567 8912',
      district: 'Brooklyn',
      email: 'daniel.brown@company.com'
    },
    {
      id: 13,
      name: 'Rachel White',
      photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop',
      contact: '+1 234 567 8913',
      district: 'Queens',
      email: 'rachel.white@company.com'
    },
    {
      id: 14,
      name: 'Kevin Nguyen',
      photo: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?w=300&h=300&fit=crop',
      contact: '+1 234 567 8914',
      district: 'Bronx',
      email: 'kevin.nguyen@company.com'
    },
    {
      id: 15,
      name: 'Jennifer Davis',
      photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop',
      contact: '+1 234 567 8915',
      district: 'Staten Island',
      email: 'jennifer.davis@company.com'
    },
    {
      id: 16,
      name: 'Thomas Wilson',
      photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=300&h=300&fit=crop',
      contact: '+1 234 567 8916',
      district: 'Manhattan',
      email: 'thomas.wilson@company.com'
    },
    {
      id: 17,
      name: 'Angela Moore',
      photo: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop',
      contact: '+1 234 567 8917',
      district: 'Brooklyn',
      email: 'angela.moore@company.com'
    },
    {
      id: 18,
      name: 'Brian Jackson',
      photo: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=300&h=300&fit=crop',
      contact: '+1 234 567 8918',
      district: 'Queens',
      email: 'brian.jackson@company.com'
    },
    {
      id: 19,
      name: 'Nicole Martin',
      photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop',
      contact: '+1 234 567 8919',
      district: 'Bronx',
      email: 'nicole.martin@company.com'
    },
    {
      id: 20,
      name: 'Steven Harris',
      photo: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300&h=300&fit=crop',
      contact: '+1 234 567 8920',
      district: 'Staten Island',
      email: 'steven.harris@company.com'
    }
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coreValues.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coreValues.length) % coreValues.length);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleMembers((prev) => Math.min(prev + 10, allMembers.length));
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* About Us Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className="space-y-6 animate-fade-in"
            style={{
              opacity: Math.min(1, 1 - scrollY / 500),
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <h1 className="text-4xl md:text-5xl">
              About Us
            </h1>
            <div className="w-20 h-1 bg-[#BBC863]"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a passionate team dedicated to transforming ideas into reality. With over a decade of experience in the industry, we've built a reputation for excellence, innovation, and unwavering commitment to our clients' success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey began with a simple vision: to create meaningful solutions that make a difference. Today, we continue to push boundaries, embrace challenges, and deliver exceptional results that exceed expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every project we undertake is an opportunity to innovate, collaborate, and create lasting impact. We believe in the power of teamwork, creativity, and dedication to achieve extraordinary outcomes.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#BBC863] to-[#658C58] rounded-lg opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Our Team"
              className="relative rounded-lg shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-[#31694E]/5 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#658C58] to-[#31694E] rounded-lg opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
              alt="Our Mission"
              className="relative rounded-lg shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-[#658C58]"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower businesses and individuals through innovative solutions that drive growth, foster creativity, and create sustainable value for our communities and stakeholders.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to maintaining the highest standards of quality and integrity in everything we do, ensuring that our work not only meets but exceeds the expectations of those we serve.
            </p>            
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl">
              Our Vision
            </h2>
            <div className="w-20 h-1 bg-[#BBC863]"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the global leader in innovative solutions, recognized for our commitment to excellence, sustainability, and positive impact on society. We envision a future where technology and human creativity come together to solve the world's most pressing challenges.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision extends beyond business success. We aspire to create a legacy of meaningful change, inspiring future generations to think boldly, act responsibly, and contribute to a better world for all.
            </p>            
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#BBC863] to-[#658C58] rounded-lg opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
              alt="Our Vision"
              className="relative rounded-lg shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-br from-[#31694E]/5 to-[#658C58]/5 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-[#BBC863] mx-auto"></div>
        </div>

        {/* Slider for mobile and tablet */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {coreValues.map((value, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#31694E] mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#BBC863] text-[#31694E] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#BBC863] text-[#31694E] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {coreValues.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#31694E] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid for desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#31694E] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Members Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Our Team Members
          </h2>
          <div className="w-20 h-1 bg-[#658C58] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make our success possible
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allMembers.slice(0, visibleMembers).map((member, index) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.5s ease-out ${(index % 10) * 0.05}s both`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-[#31694E]">{member.name}</h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-[#BBC863]" />
                    <span>{member.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#658C58]" />
                    <span>{member.district}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={16} className="text-[#31694E] mt-0.5 flex-shrink-0" />
                    <span className="break-all">{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleMembers < allMembers.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="px-8 py-4 bg-[#31694E] hover:bg-[#658C58] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin" size={20} />
                  <span>Loading...</span>
                </>
              ) : (
                <span>View More Members</span>
              )}
            </button>
          </div>
        )}
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;