"use client"

import { Mail } from "lucide-react"

function ExecutiveCommitee() {
  const members = [
    {
        name: "Nilima Bhagawati",
        photo: "/executive/nilima.jpg",
        designation: "PRESIDENT",
        ph: "+91 9000000000",
        location: "Dispur, Guwahati, Assam"
    }
  ]
  return (
     <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-950 inline-block border-b-4 border-amber-400 pb-2">
              Executive <span className="text-amber-500">Committee</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {members.map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition z-10"></div>
                  <img
                    src={`${item.photo}`}
                    alt="Member"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-emerald-900">{item.name}</h3>
                  <p className="text-amber-500 font-bold text-xs uppercase mb-4">{item.designation}</p>
                  <div className="flex justify-center space-x-2 text-gray-400 text-xs">
                    <div className="flex items-center gap-1"><Mail size={12} />{item.ph}</div>
                  </div>
                  <hr className="my-4 border-gray-100" />
                  <div className="text-xs text-gray-500 px-4">
                    {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="text-emerald-900 font-bold border-b border-emerald-900 hover:text-amber-500 hover:border-amber-500 transition">View All Members</button>
          </div>
        </div>
      </section>
  )
}

export default ExecutiveCommitee