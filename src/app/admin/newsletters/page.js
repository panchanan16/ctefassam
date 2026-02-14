// components/admin/NewsletterManager.jsx
"use client";
import { useState } from 'react';
import { Plus, X, Pencil, Trash2, FileText, ExternalLink, Calendar } from 'lucide-react';

export default function NewsletterManager() {
  const [showModal, setShowModal] = useState(false);

  // Sample state based on your provided structure
  const [newsletters, setNewsletters] = useState([
    {
      id: 6,
      title: "CTEF Assam Chapter, 01 June 2021",
      date: "Jun 01, 2021",
      coverImage: "/news_letters/nl_6.jpg",
      fileUrl: "#",
    },
  ]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to remove this newsletter issue?")) {
      setNewsletters(newsletters.filter((nl) => nl.id !== id));
    }
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-800">Newsletters</h2>
          <p className="text-slate-500">Publish and archive your periodic updates and journals</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md transition-all active:scale-95"
        >
          <Plus size={20} /> Upload New Issue
        </button>
      </div>

      {/* Newsletter Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">Cover</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">Issue Title</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">Release Date</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">File</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {newsletters.map((nl) => (
              <tr key={nl.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="w-12 h-16 bg-slate-100 border border-slate-200 rounded overflow-hidden flex-shrink-0 shadow-sm">
                    <img src={nl.coverImage} alt="" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-slate-700 block">{nl.title}</span>
                  <span className="text-xs text-slate-400">ID: #{nl.id}</span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-slate-400" />
                    {nl.date}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a 
                    href={nl.fileUrl} 
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 underline-offset-4"
                  >
                    <FileText size={16} /> View PDF
                  </a>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Edit">
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(nl.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {newsletters.length === 0 && (
          <div className="p-12 text-center text-slate-400 italic">
            No newsletters uploaded yet.
          </div>
        )}
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Upload Newsletter</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600"><X /></button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Issue Title</label>
                <input className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. CTEF Assam Chapter" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Display Date</label>
                <input className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Jun 01, 2021" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Cover Image (JPG/PNG)</label>
                <input className="w-full p-3 border border-slate-200 rounded-lg bg-slate-50 text-sm" type="file" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Newsletter File (PDF)</label>
                <input className="w-full p-3 border border-slate-200 rounded-lg bg-slate-50 text-sm" type="file" />
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 mt-4 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition">
                Upload & Publish
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}