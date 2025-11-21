"use client"

import React, { useState } from 'react';
import { Calendar, MapPin, Users, Handshake } from 'lucide-react';

const Conferences = () => {
  // Color theme
  const colors = {
    primary: '#31694E',
    secondary: '#658C58',
    accent: '#BBC863'
  };

  const [activeTab, setActiveTab] = useState('upcoming');

  // Conference data
  const upcomingConferences = [
    // {
    //   id: 1,
    //   coverPhoto: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    //   title: 'Global Tech Summit 2025',
    //   dateFrom: '2025-03-15',
    //   dateTo: '2025-03-17',
    //   organisedBy: 'Tech Innovators Association',
    //   venue: 'Convention Center, New York',
    //   collaborationWith: ['Microsoft']
    // },
  ];

  const recentConferences = [
    {
      id: 7,
      coverPhoto: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=800&h=500&fit=crop',
      title: 'Bi Annual ( Jan To June ) VOL 02 BEYOND CTEF - ASSAM NEWSLETTER   [25th June, 2021] STRESS MANAGEMENT FOR TOTAL WELLNESS',
      dateFrom: '2021-06-25',
      // dateTo: '2024-11-03',
      organisedBy: 'Council For Teacher Education Foundation(CTEF) Assam Chapter ',
    },
    {
      id: 8,
      coverPhoto: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=800&h=500&fit=crop',
      title: 'ONLINE TEACHING : A NEED BASED 21ST CENTURY SKILL',
      dateFrom: '2021-06-06',
      // dateTo: '2024-11-03',
      organisedBy: 'Council For Teacher Education Foundation(CTEF) Assam Chapter',
      // venue: 'Innovation Hub, Austin',
      collaborationWith: ['BHARATIYA SIKSHAN MANDAL AND NITI AAYOG']
    },
    {
      id: 9,
      coverPhoto: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=800&h=500&fit=crop',
      title: 'A Positive Approach To Life and Success: Building Life Skill and Maintaining Good Mental Health',
      dateFrom: '2020-08-21',
      // dateTo: '2024-11-03',
      organisedBy: 'Department of Education, Bapujee College, Sarukhetri',
      collaborationWith: ['Council For Teacher Education Foundation, Assam']
    },
    {
      id: 10,
      coverPhoto: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=800&h=500&fit=crop',
      title: 'Children With Autism ADHD and others: Understanding and Interventions',
      dateFrom: '2020-08-17',
      organisedBy: 'Council For Teacher Education Foundation Assam Chapter',
    },
    {
      id: 11,
      coverPhoto: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=800&h=500&fit=crop',
      title: 'National Webinar On Student Community in Higher Education: Wellness Approach & Career Building',
      dateFrom: '2020-08-11',
      organisedBy: 'Department of Education, Kumar Bhaskar Varma Sanskrit & Ancient Studies University, Nalbari & Council For Teacher Education Assam',
    },
    {
      id: 12,
      coverPhoto: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852?w=800&h=500&fit=crop',
      title: 'Mental Health Of Student Community During The Pandemic',
      dateFrom: '2020-07-04',
      organisedBy: 'Counselling Cell, Sren Das College, Hajo',
    },

  ];

  const formatDate = (dateFrom, dateTo) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const from = new Date(dateFrom).toLocaleDateString('en-US', options);

    if (dateTo) {
      const to = new Date(dateTo).toLocaleDateString('en-US', options);
      return `${from} - ${to}`;
    }
    return from;
  };

  const ConferenceCard = ({ conference, index }) => (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Cover Photo */}
      {conference.coverPhoto && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={conference.coverPhoto}
            alt={conference.title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(to top, ${colors.primary}, transparent)`
            }}
          ></div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3
          className="text-xl font-bold leading-tight"
          style={{ color: colors.primary }}
        >
          {conference.title}
        </h3>

        {/* Date */}
        {(conference.dateFrom || conference.dateTo) && (
          <div className="flex items-start gap-3">
            <Calendar
              size={20}
              className="flex-shrink-0 mt-0.5"
              style={{ color: colors.accent }}
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">Date</p>
              <p className="text-gray-600">
                {formatDate(conference.dateFrom, conference.dateTo)}
              </p>
            </div>
          </div>
        )}

        {/* Organised By */}
        {conference.organisedBy && (
          <div className="flex items-start gap-3">
            <Users
              size={20}
              className="flex-shrink-0 mt-0.5"
              style={{ color: colors.secondary }}
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">Organised By</p>
              <p className="text-gray-600">{conference.organisedBy}</p>
            </div>
          </div>
        )}

        {/* Venue */}
        {conference.venue && (
          <div className="flex items-start gap-3">
            <MapPin
              size={20}
              className="flex-shrink-0 mt-0.5"
              style={{ color: colors.primary }}
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">Venue</p>
              <p className="text-gray-600">{conference.venue}</p>
            </div>
          </div>
        )}

        {/* Collaboration With */}
        {conference.collaborationWith && conference.collaborationWith.length > 0 && (
          <div className="flex items-start gap-3">
            <Handshake
              size={20}
              className="flex-shrink-0 mt-0.5"
              style={{ color: colors.accent }}
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">In Collaboration With</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {conference.collaborationWith.map((partner, idx) => (
                  <p className="text-gray-600">{partner}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <section className="py-16 md:py-10 mt-16 px-4 md:px-8 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1
            className="text-4xl md:text-5xl"
          >
            Our Conferences
          </h1>
          <div
            className="w-20 h-1 mx-auto"
            style={{ backgroundColor: colors.accent }}
          ></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join us at our upcoming conferences or explore the highlights from our recent events. Connect with industry leaders, share knowledge, and be part of meaningful conversations.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="pb-16 md:pb-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg shadow-lg overflow-hidden border-2" style={{ borderColor: colors.primary }}>
            <button
              onClick={() => setActiveTab('upcoming')}
              className="px-8 py-4 text-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: activeTab === 'upcoming' ? colors.primary : 'white',
                color: activeTab === 'upcoming' ? 'white' : colors.primary
              }}
            >
              Upcoming Conferences
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className="px-8 py-4 text-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: activeTab === 'recent' ? colors.primary : 'white',
                color: activeTab === 'recent' ? 'white' : colors.primary
              }}
            >
              Recent Conferences
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {activeTab === 'upcoming' &&
            upcomingConferences.map((conference, index) => (
              <ConferenceCard key={conference.id} conference={conference} index={index} />
            ))
          }
          {activeTab === 'recent' &&
            recentConferences.map((conference, index) => (
              <ConferenceCard key={conference.id} conference={conference} index={index} />
            ))
          }
        </div>

        {/* Empty State */}
        {((activeTab === 'upcoming' && upcomingConferences.length === 0) ||
          (activeTab === 'recent' && recentConferences.length === 0)) && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No conferences found</p>
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
      `}</style>
    </div>
  );
};

export default Conferences;