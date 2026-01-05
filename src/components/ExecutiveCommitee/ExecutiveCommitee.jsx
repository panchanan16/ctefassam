"use client";

import { Mail, MapPin, Phone } from "lucide-react";

function ExecutiveCommitee() {
  const members = [
    {
      name: "Prof. Nilima Bhagabati",
      photo: "/executive/nilima.jpg",
      designation: "CHAIRMAN",
      ph: "+91 9864066459",
      email: "nilimabhagabati@gmail.com",
      location:
        "Flat No. 5A, Bhagirathi Apartment, Rong Mili Path (5th Bye-lane), Zoo Narengi Road, Guwahati-781021",
    },
    {
      name: "Dr. Archana Bhattacharjee",
      photo: "/executive/archana.jpeg",
      designation: "VICE-CHAIRMAN",
      ph: "+91 7002729378",
      email: "archanabhattacharjee183@gmail.com",
      location: '"Niramoyee", Shanti-Path, PO-Borbheta, Jorhat-785001, Assam',
    },
    {
      name: "Tribeni Saikia",
      photo: "/executive/tribeni.jpeg",
      designation: "SECRETARY",
      ph: "+91 9101276508",  
      email: "saikia.tribeni76@gmail.com",
      location:
        "Nagaon, Assam",
    },
    {
      name: "Dr. Satyabrata Baruah",
      photo: "/executive/Satyabrata.png",
      designation: "TREASURER",
      ph: "+91 9864776008",
      email: "satyabratabaruah92@gmail.com",
      location:
        "Department of Education, B. Borooah College (Autonomous), Ulubari, Guwahati-781007",
    },
    {
      name: "Jonali Mudoi",
      photo: "/executive/jonali-mudoi.jpg",
      designation: "JOINT TREASURER",
      ph: "+91 9954165144",
      email: "mudoijonali@gmail.com",
      location: "Associate Professor, Education, Nagaon Girls College, Nagaon",
    },
    {
      name: "Dr. Gitanjalee Bhuyan",
      photo: "/executive/geetanjali.jpeg",
      designation: "SECRETARY",
      ph: "+91 9864937666",
      email: "gitanjaleebhuyan@gmail.com",
      location:
        "Associate Professor, Dept. of Education, Bapujee College, PO Sarthebari, Dist: Barpeta-781307",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-950 inline-block border-b-4 border-amber-400 pb-2">
            Our Core<span className="text-amber-500">Committee</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {members.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition z-10"></div>
                <img
                  src={`${item.photo}`}
                  alt="Member"
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-emerald-900">
                  {item.name}
                </h3>
                <p className="text-amber-500 font-bold text-xs uppercase mb-4">
                  {item.designation}
                </p>
                <div className="flex flex-col justify-center space-x-2 text-gray-400 text-xs">
                  <div className="flex items-center gap-1">
                    <Mail size={12} />
                    {item.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone size={12} />
                    {item.ph}
                  </div>
                </div>
                <hr className="my-4 border-gray-100" />
                <div className="flex gap-2 text-xs text-left text-gray-500 px-4">
                  <MapPin />
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="text-emerald-900 font-bold border-b border-emerald-900 hover:text-amber-500 hover:border-amber-500 transition">
            View All Members
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExecutiveCommitee;
