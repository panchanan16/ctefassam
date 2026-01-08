"use client";

import React, { useState, useEffect } from 'react';
import {
  Calendar, Clock, MapPin, Video, PlayCircle,
  ArrowRight, ChevronLeft, ChevronRight, Users,
  Sparkles, MonitorPlay, Handshake,
  Calendar1
} from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EventSlider from '@/components/EventSlider/EventSlider';

const EConference = () => {
  // ================= DATA FOR EVENTS (With Optional Fields) =================
  const upcomingEvents = [
    {
      id: 1,
      date: "7 January, 2026",
      image: "/events/reclaiming_roots.jpg",
      title: "National Webinar on Reclaiming Our Roots: Exploring India's Intellectual Tradition & Why it Matters",
      time: "06:30 PM - 07:30 PM",
      platform: "Zoom Platform",
    },
  ];


  const newPastdata = [
    {
      id: "a",
      date: "22nd November, 2025",
      image: "/events/women_conclave.jpeg",
      title: "Women conclave 2025",
      time: "8:30AM",
      platform: "",
      venue: "Phanidhar Dutta Seminar Hall, Gauhati University",
      collaboration: "Depeartment of Education, Guwahati University, Bharatiya Sikhsha Mandal, Mahila Ayam, UAP and Rashtra Sevika Samiti",
    },
    {
      id: 0,
      date: "14th December, 2025",
      image: "/events/beyond_numbers.jpeg",
      title: "International Webinar on Beyond Numbers: Measuring Progress Towards Gender Equity and Inclusivity",
      time: "6.30 P.M to 8.30 P.M",
      platform: "Zoom Meeting",
      venue: "",
      collaboration: "",
    },
    {
      id: 1,
      date: "",
      image: "/events/album10.jpg",
      title: "3rd day of Tea garden children Motivational programme in Jorhat district",
      time: "",
      platform: "",
      venue: "Jorhat",
      collaboration: "",
    },
    {
      id: 2,
      date: "",
      image: "/events/album11.jpg",
      title: "5th day of Tea garden children habit programme in Jorhat district",
      time: "",
      platform: "",
      venue: "Jorhat",
      collaboration: "",
    },
    {
      id: 3,
      date: "",
      image: "/events/album15.jpg",
      title: "9th day happy schooling programme in 3 Tea gardens in Upper Assam",
      time: "",
      platform: "",
      venue: "Upper Assam",
      collaboration: "",
    },
    {
      id: 4,
      date: "",
      image: "/events/album16.jpg",
      title: "10th day happy schooling programme in 3 Tea gardens at Jorhat",
      time: "",
      platform: "",
      venue: "Jorhat",
      collaboration: "",
    },
    {
      id: 5,
      date: "",
      image: "/events/album17.jpg",
      title: "13th day happy schooling programme in 3 Tea gardens at Jorhat",
      time: "",
      platform: "",
      venue: "Jorhat",
      collaboration: "",
    },
    {
      id: 6,
      date: "5th September 2021",
      image: "/events/album47.jpg",
      title: "60th Teachers Day Celebrated in Sibsagar on 05-09-2021",
      time: "",
      platform: "",
      venue: "Sivasagar",
      collaboration: "",
    },
    {
      id: 7,
      date: "10th June 2021",
      image: "/events/album36.jpg",
      title: "A Special Talk On Understanding and Reaching Adolescents",
      time: "11:00 A.M",
      platform: "Google Meet",
      venue: "",
      collaboration: "IQAC, Dhemaji Commerce College",
    },
    {
      id: 8,
      date: "20th November 2021",
      image: "/events/album56.jpg",
      title: "An Interaction on New Education Policy, 2020(NEP)_ Impact on Secondary Education",
      time: "11:30 A.M",
      platform: "",
      venue: "Gohpur HS School",
      collaboration: "Gohpur HS School",
    },
    {
      id: 9,
      date: "22nd October 2022",
      image: "/events/album85.jpg",
      title: "Awareness Program On NEP 2020 Organised By Reba Kanta Baruah Public High School in Collaboration CTEF Jorhat on 22-10-2022",
      time: "",
      platform: "",
      venue: "Reba Kanta Baruah Public High School",
      collaboration: "CTEF Jorhat",
    },
    {
      id: 10,
      date: "19th October 2022",
      image: "/events/album81.jpg",
      title: "Awareness Programme For Teachers of All Schools",
      time: "",
      platform: "",
      venue: "Cinnamara Higher Secondary School",
      collaboration: "CTEF Jorhat",
    },
    {
      id: 11,
      date: "16th November 2008",
      image: "/events/album5.jpg",
      title: "Blending Education, Science and Spirituality For a Better World at Srimanta Sankardev Kalakhetra, Guwahati 16-11-2008",
      time: "",
      platform: "",
      venue: "Srimanta Sankardev Kalakhetra",
      collaboration: "",
    },
    {
      id: 12,
      date: "30th September 2021",
      image: "/events/album50.jpg",
      title: "Conservation and Protection of environment for sustainability Interaction with Forest Man Padmasree Jadav Payeng on 30-09-2021",
      time: "",
      platform: "",
      venue: "Bhupen Hazarika Auditorium, B. Borooah College",
      collaboration: "B. Borooah College, Guwahati and Gratia Technology Pvt Ltd",
    },
    {
      id: 13,
      date: "18th January 2022",
      image: "/events/album58.jpg",
      title: "CTEF 3rd. Edition Newsletter released on 18-01-2022 at 12 noon",
      time: "12:00 P.M",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 14,
      date: "21st November 2020",
      image: "/events/album26.jpg",
      title: "CTEF Annual International E-Conference on Axomiya Pratidin Newspaper, 21 Nov,2020",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 15,
      date: "",
      image: "/events/album51.jpg",
      title: "CTEF Assam Chapter organised a program for 9th",
      time: "12:45 P.M",
      platform: "",
      venue: "Cinnamara Higher Secondary School",
      collaboration: "",
    },
    {
      id: 16,
      date: "30th May 2022",
      image: "/events/album74.jpg",
      title: "CTEF Assam in collaboration with Assam Womens U",
      time: "7:00 P.M",
      platform: "Zoom Meeting",
      venue: "",
      collaboration: "Assam Women’s University and Gratia Technology Pvt Ltd",
    },
    {
      id: 17,
      date: "31st May 2022",
      image: "/events/album75.jpg",
      title: "CTEF Assam Organises National Webinar on Guru-Shishya Parampara in Bharatiya Shiksha Reflection in NEP-2020 held on 31-05-2022",
      time: "7:00 P.M",
      platform: "Zoom Meetings",
      venue: "",
      collaboration: "Gratia Technology Pvt Ltd",
    },
    {
      id: 18,
      date: "31st January 2022",
      image: "/events/album59.jpg",
      title: "CTEF ASSAM ORGANISES VIRTUAL INTERACTIVE SESSIO",
      time: "7:00 P.M",
      platform: "Zoom Meetings",
      venue: "",
      collaboration: "Gratia Technology Pvt Ltd",
    },
    {
      id: 19,
      date: "27th June 2022",
      image: "/events/album76.jpg",
      title: "CTEF- Assam organized Youth conclave on the theme 'Nation First-Calling the Youths' Held On 27-06-2022",
      time: "",
      platform: "",
      venue: "Seminar Hall, Gauhati University",
      collaboration: "Gauhati University, NSS Cell, Guwahati",
    },
    {
      id: 20,
      date: "5th September 2022",
      image: "/events/album77.jpg",
      title: "CTEF ASSAM TO HONOUR & FELICITATE BEST TEACHER OF NALBARI DISTRICT IN SCHOOL EDUCATION HELD ON 05-09-2022",
      time: "",
      platform: "",
      venue: "Nalbari College; Nalbari, Assam",
      collaboration: "Nalbari College, Nalbari",
    },
    {
      id: 21,
      date: "",
      image: "/events/album17.jpg",
      title: "CTEF Assam Webinar Decoding Reform Perform Transform School and Higher Education Posted in Assam Tribune Newspaper",
      time: "",
      platform: "",
      venue: "",
      collaboration: "Gratia Technology Pvt Ltd",
    },
    {
      id: 22,
      date: "2004",
      image: "/events/album3.jpg",
      title: "CTEF Goodwill Mission To Bangladesh 2004",
      time: "",
      platform: "",
      venue: "Bangladesh",
      collaboration: "",
    },
    {
      id: 23,
      date: "29th March 2022",
      image: "/events/album72.jpg",
      title: "CTEF Jorhat Chapter in collaboration with Cinnamara Girls High School Organised  Capacity Building Workshop for school Teachers on 29-03-2022",
      time: "",
      platform: "",
      venue: "Cinnamara Girl’s High School",
      collaboration: "Cinnamara Girl’s High School",
    },
    {
      id: 24,
      date: "21st February 2022",
      image: "/events/album63.jpg",
      title: "CTEF Jorhat Chapter in collaboration with Tarajan High School,Jorhat to celebrate International Mother Language Day held on 21-02-2022",
      time: "",
      platform: "",
      venue: "Tarajan High School",
      collaboration: "Tarajan High School",
    },
    {
      id: 25,
      date: "9th March 2022",
      image: "/events/album65.jpg",
      title: "CTEF Jorhat District Chapter in collaboration with Chinamara Higher Secondary school organised Training Program for Gunotsav on 09-03-2022",
      time: "11:00 A.M",
      platform: "",
      venue: "Chinamara Higher Secondary School",
      collaboration: "",
    },
    {
      id: 26,
      date: "25th June 2021",
      image: "/events/album42.jpg",
      title: "CTEF Webinar On Decoding Reform Perform Transform School and Higher Education To Be Held On 25-06-2021",
      time: "3:00 P.M",
      platform: "",
      venue: "",
      collaboration: "Gratia Technology Pvt. Ltd",
    },
    {
      id: 27,
      date: "",
      image: "/events/album28.jpg",
      title: "CTEF-Assam Adjudged Best Chapter in India",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 28,
      date: "28th June 2023",
      image: "/events/album89.jpg",
      title: "District level activity of CTEF District Chapter Activity organised in collaboration with Cinnamara Higher Secondary School Jorhat on 28-06-2023",
      time: "12:30 P.M",
      platform: "",
      venue: "",
      collaboration: "Cinnamara Higher Secondary School",
    },
    {
      id: 29,
      date: "28th October 2020",
      image: "/events/album25.jpg",
      title: "District level Workshop on Foldscope and Blueprint of Question paper on 28-10-2020",
      time: "9 A.M",
      platform: "",
      venue: "Govt. College of Teacher Education, Kokrajhar",
      collaboration: "Office of the Inspector of Schools, KDC, Kokrajhar and Kokrajhar District Academic Council",
    },
    {
      id: 30,
      date: "",
      image: "/events/album8.jpg",
      title: "Educational Preparatory Program for school children during Covid-19",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 31,
      date: "",
      image: "/events/album23.jpg",
      title: "Happiness and Psychological Well- being with th",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 32,
      date: "4th June 2020",
      image: "/events/album28.jpg",
      title: "Happy Hours of Effective Learning By School Children at Darrang District on 04-06-2020",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 33,
      date: "5th June 2020",
      image: "/events/album13.jpg",
      title: "Happy Learning Hours Tea Garden School Children Observing World Environment Day 05-06-2020",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 34,
      date: "8th June 2020",
      image: "/events/album14.jpg",
      title: "Happy learning prog of school children in Deha Tea estate on 8 June 2020",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 35,
      date: "20th January 2020",
      image: "/events/album1.jpg",
      title: "Interactive Session - Son Being Teacher - with Swami Nikhileswaranand Maharaj of Ram Krishna Mission 20-01-2020",
      time: "12 P.M",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 36,
      date: "",
      image: "/events/album41.jpg",
      title: "International Teachers Development Programme on Project Based Learning held on 05-05-2021 To 20-05-2021",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 37,
      date: "27th June 2023",
      image: "/events/album88.jpg",
      title: "International Webinar On Instituting School Education Commission Bharat An Insight For Way Forward Organised By CTEF Assam On 27-06-2023",
      time: "7 P.M",
      platform: "Google Meet",
      venue: "",
      collaboration: "",
    },
    {
      id: 38,
      date: "17th February 2022",
      image: "/events/album62.jpg",
      title: "Jorhat District Activity organised in collaboration with Chinamara Higher Secondary School,Jorhat on 17-02-2022",
      time: "",
      platform: "",
      venue: "",
      collaboration: "Chinamara Higher Secondary School, Jorhat",
    },
    {
      id: 39,
      date: "",
      image: "/events/album68.jpg",
      title: "Lecture on A Guide To Project-Based Education -",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 40,
      date: "26th March 2022",
      image: "/events/album70.jpg",
      title: "Live Webinar on Understanding Emotional Intelligence organised by CTEF-Assam Chapter in Collaboration with Gratia Technology Pvt. Ltd. on 26-03-2022",
      time: "7 P.M",
      platform: "Zoom Meetings",
      venue: "",
      collaboration: "Gratia Technology Pvt. Ltd.",
    },
    {
      id: 41,
      date: "15th October 2022",
      image: "/events/album82.jpg",
      title: "Motivational Speech Programme on The Occasion o",
      time: "1 P.M",
      platform: "",
      venue: "",
      collaboration: "CTEF Barpeta",
    },
    {
      id: 42,
      date: "12th August 2021",
      image: "/events/album46.jpg",
      title: "Nation Webinar on Open Book Examination System in India_ Relevance in School and Higher Education held on 12-08-2021",
      time: "6 P.M",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 43,
      date: "",
      image: "/events/album22.jpg",
      title: "National Education Policy (NEP) 2020 in collaboration with Khora Higher Secondary School, Bihpuria, North Lakhimpur",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 44,
      date: "21st October 2020",
      image: "/events/album24.jpg",
      title: "National Education Policy 2020_ Understanding New Challenges was conducted by CTEF,  Assam Chapter,Barpeta Zone on 21st October 2020",
      time: "",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 45,
      date: "17th July 2023",
      image: "/events/album92.jpg",
      title: "National Webinar on Blending Indian Knowledge System(IKS) and Education in NEP 2020 The Way Forward Organised By CTEF Assam held on 17-07-2023",
      time: "7 P.M",
      platform: "Google Meet",
      venue: "",
      collaboration: "",
    },
    {
      id: 46,
      date: "30th December 2021",
      image: "/events/album57.jpg",
      title: "National Webinar On Mainstraming Gender & Zero Rejection Held On 30-12-2021",
      time: "7 P.M",
      platform: "",
      venue: "",
      collaboration: "",
    },
    {
      id: 47,
      date: "31st July 2021",
      image: "/events/album44.jpg",
      title: "National Webinar On Online Teaching Learning_ Tools & Techniques held on 31-07-2021",
      time: "6 P.M",
      platform: "Zoom Meeting",
      venue: "",
      collaboration: "",
    },
    {
      id: 48,
      date: "26th June 2023",
      image: "/events/album87.jpg",
      title: "National Webinar On Transformational National Education Policy 2020 Opportunities Unlocked in Higher Education Organised By CTEF Assam on 26-06-2023",
      time: "7 P.M",
      platform: "Google Meet",
      venue: "",
      collaboration: "",
    },
    {
      id: 49,
      date: "22nd May 2021",
      image: "/events/album33.jpg",
      title: "Online Orientation Programme On Cyber Security Awareness For Students Organised By CTEF Assam Chapter, Lakhimpur District",
      time: "",
      platform: "",
      venue: "",
      collaboration: "Panindra Vidyalaya and Kakoi High School, North Lakhimpur, Assam",
    },
    {
      id: 50,
      date: "22nd May 2021",
      image: "/events/album34.jpg",
      title: "Online Orientation Programme On Parental Role On Cyber Security Organised By CTEF Assam Chapter, Lakhimpur District",
      time: "",
      platform: "",
      venue: "",
      collaboration: "Panindra Vidyalaya and Kakoi High School, North Lakhimpur, Assam",
    },
    {
      id: 51,
      date: "25th September2021",
      image: "/events/album53.jpg",
      title: "Padmashree Jadav Payeng(Forest Man of India) On Conservation Prevention and Safe  Guarding Forests for Sustainable Environment held on 25-09-2021",
      time: "",
      platform: "",
      venue: "",
      collaboration: "B. Borooah College, Guwahati",
    },
    {
      id: 52,
      date: "25th May 2021",
      image: "/events/album31.jpg",
      title: "Positive Thinking in Covid Period Organized By Council For Teacher Education Foundation(CTEF) Assam Chapter(Nagaon District) On 25-05-2021",
      time: "",
      platform: "Google Meet",
      venue: "",
      collaboration: "",
    },

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
            <MonitorPlay className="text-amber-500" /> Our Events
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
                <div className="relative h-62 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                    <span className="block text-xl font-bold text-emerald-900">{event.day}</span>
                    <span className="block text-xs font-bold text-gray-500 uppercase">{event.month}</span>
                  </div>
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

                  {/* <div className="mt-auto">
                     <button className="w-full bg-emerald-900 text-white font-bold py-3 rounded-lg hover:bg-amber-500 transition shadow-md">
                       Register Now
                     </button>
                  </div> */}
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
            {newPastdata.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-300 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-700 transition">
                    {event.title}
                  </h3>

                  {/* Event Details Section */}
                  <div className="space-y-3 text-sm text-gray-500 mb-6 bg-slate-50 p-4 rounded-lg">
                    {/* Date */}
                    {
                      event.date && (
                        <div className="flex items-start gap-2">
                          <Calendar1 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span>{event.date}</span>
                        </div>
                      )
                    }
                    {/* Time */}
                    {
                      event.time && (
                        <div className="flex items-start gap-2">
                          <Clock size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span>{event.time}</span>
                        </div>
                      )
                    }

                    {/* Platform */}
                    {
                      event.platform && (
                        <div className="flex items-start gap-2">
                          <Video size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span>{event.platform}</span>
                        </div>
                      )
                    }

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

                  {/* <div className="mt-auto">
                     <button className="w-full bg-emerald-900 text-white font-bold py-3 rounded-lg hover:bg-amber-500 transition shadow-md">
                       Register Now
                     </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <button className="text-gray-500 text-sm font-semibold border-b border-gray-400 pb-1 hover:text-emerald-900 hover:border-emerald-900 transition">
              Load More Archives
            </button>
          </div> */}
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default EConference;