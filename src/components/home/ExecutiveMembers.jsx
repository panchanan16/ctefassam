"use client";

import React, { useState } from "react";

const ExecutiveMembers = ({ type = "exec" }) => {
  const executiveMember = [
    {
      id: 1,
      name: "Prof. Nilima Bhagabati",
      designation: "Chairman",
      email: "nilimabhagabati@gmail.com",
      contact: "9864066459",
      address:
        "Flat No. 5A, Bhagirathi Apartment, Rong Mili Path (5th Bye-lane), Zoo Narengi Road, Guwahati-781021",
      image: "/executive/nilima.jpg",
    },
    {
      id: 2,
      name: "Dr. Archana Bhattacharjee",
      designation: "Vice-Chairman",
      email: "archanabhattacharjee183@gmail.com",
      contact: "7002729378",
      address: '"Niramoyee", Shanti-Path, PO-Borbheta, Jorhat-785001, Assam',
      image: "/executive/archana.jpg",
    },
    {
      id: 3,
      name: "Dr. Satyabrata Baruah",
      designation: "Treasurer",
      email: "satyabratabaruah92@gmail.com",
      contact: "9864776008",
      address:
        "Department of Education, B. Borooah College (Autonomous), Ulubari, Guwahati-781007",
      image: "/executive/Satyabrata.png",
    },
    {
      id: 4,
      name: "Jonali Mudoi",
      designation: "Joint Treasurer",
      email: "mudoijonali@gmail.com, jonalimudoi2016@gmail.com",
      contact: "9954165144",
      address: "Asso. Prof. Education, Nagoan Girls College, Nagoan",
      image: "",
    },
    {
      id: 5,
      name: "Dr. Gitanjalee Bhuyan",
      designation: "Secretary",
      email: "gitanjaleebhuyan@gmail.com",
      contact: "9864937666",
      address:
        "Associate Professor, Dept. of Education, Bapujee College, PO Sarthebari, Dist: Barpeta -781307",
      image: "/executive/geetanjali.jpg",
    },
  ];

  const districtMembers = [
    {
      id: 1,
      name: "Dr. Gitanjalee Bhuyan",
      address: "Barpeta",
      contact: "9864937666",
      email: "gitanjaleebhuyan@gmail.com",
      image: "/executive/geetanjali.jpg",
    },
    {
      id: 2,
      name: "Dr. Ataur Rahman",
      address: "Dhemaji",
      contact: "7002366242",
      email: "ataurdhemaji99@gmail.com",
      image: "/executive/ataur.png",
    },
    {
      id: 3,
      name: "Dr. Biman Arandhara",
      address: "Golaghat",
      contact: "9401803553",
      email: "bimanarandhara@gmail.com",
      image: "",
    },
    {
      id: 4,
      name: "Dr. Archana Bhattacharjee",
      address: "Jorhat",
      contact: "7002729378",
      email: "tara_siddhi_hung@yahoo.co.in",
      image: "/executive/archana.jpg",
    },
    {
      id: 5,
      name: "Pinku Moni Tamuly",
      address: "Jorhat",
      contact: "8638525761",
      email: "pinkumoni24442@gmail.com",
      image: "/executive/pinkimoni.jpg",
    },
    {
      id: 6,
      name: "Ms. Sangeeta Sarmah",
      address: "Kamrup (M)",
      contact: "9864195142",
      email: "sangeetasarma05@gmail.com",
      image: "/executive/sangeeta.jpg",
    },
    {
      id: 7,
      name: "Dr. Utpal Nath",
      address: "Morigaon",
      contact: "",
      email: "",
      image: "",
    },
    {
      id: 8,
      name: "Dr. Sabita Devi",
      address: "Nagaon",
      contact: "9401025325",
      email: "sabitamam@yahoo.co.in",
      image: "/executive/sabita.jpg",
    },
    {
      id: 9,
      name: "Dr. Tribeni Saikia",
      address: "Nagaon",
      contact: "9101276508",
      email: "saikia.tribeni76@gmail.com",
      image: "/executive/tribeni.jpg",
    },
  ];

  const allMembers = type === "exec" ? executiveMember : districtMembers;

  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const dummyImage =
    "https://raymetrics.com/wp-content/uploads/2016/08/dummy-prod-1.jpg";

  const handleViewMore = () => {
    if (isExpanded) {
      setVisibleCount(4);
      setIsExpanded(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setVisibleCount(allMembers.length);
      setIsExpanded(true);
    }
  };

  const visibleMembers = allMembers.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-gray-900 mb-4">
            {type === "exec"
              ? "Executive Committee of CTEF-Assam"
              : "CTEF Assam District Committee Coordinator"}
          </h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {visibleMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform bg-white"
            >
              <div className="aspect-[4/4] overflow-hidden bg-gray-100">
                <img
                  src={member.image || dummyImage}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2">
                  {member.name}
                </h3>

                <p className="text-sm font-medium text-teal-600 mb-3">
                  {member.designation}
                </p>

                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs sm:text-sm text-gray-600 hover:text-teal-600 transition-colors break-all"
                    >
                      {member.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.45l.7 2.32a2 2 0 01-.45 1.99L8.4 10.6a16 16 0 006 6l1.84-1.07a2 2 0 011.99-.45l2.32.7A2 2 0 0121 18.72V21a2 2 0 01-2 2h-.28C9.39 23 1 14.61 1 4.28V4a2 2 0 012-2z"
                      />
                    </svg>

                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs sm:text-sm text-gray-600 hover:text-teal-600 transition-colors break-all"
                    >
                      {member.contact}
                    </a>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {member.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allMembers.length > 4 && (
          <div className="flex justify-center">
            {!isExpanded ? (
              <button
                onClick={handleViewMore}
                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-[#adcb53] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10">
                  View More
                </span>
                <svg
                  className={`relative z-10 w-5 h-5 transform transition-transform duration-300 ${
                    isExpanded
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <div className="absolute inset-0 bg-[#a5c150] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            ) : null}
          </div>
        )}

        <div className="mt-16">
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-teal-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveMembers;
