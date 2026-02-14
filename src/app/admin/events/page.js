// components/admin/EventManager.jsx
"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, X, Pencil, Trash2, Calendar, MapPin, Globe, Users } from 'lucide-react';

export default function EventManager() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    venue: '',
    platform: '',
    collaboration: '',
    image: null
  });

  // 1. Fetch Events
  const fetchEvents = async () => {
    try {
      const res = await axios.get('/api/events');
      setEvents(res.data.data || []);
    } catch (err) {
      console.error("Failed to load events", err);
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  // 2. Create or Update using postForm/patchForm
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editId) {
        // Axios handles the file serialization automatically with patchForm
        await axios.patchForm(`/api/events/${editId}`, formData);
        alert("🎉 Event updated successfully!");
      } else {
        // postForm converts the formData object to multipart/form-data automatically
        await axios.postForm('/api/events', formData);
        alert("🚀 Event created successfully!");
      }
      closeAndReset();
      fetchEvents();
    } catch (err) {
      alert(err.response?.data?.error || "An error occurred during submission");
    } finally {
      setLoading(false);
    }
  };

  // 3. Delete Event
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await axios.delete(`/api/events/${id}`);
      alert("✅ Event deleted!");
      fetchEvents();
    } catch (err) {
      alert("Failed to delete event");
    }
  };

  // Helpers
  const closeAndReset = () => {
    setEditId(null);
    setFormData({ title: '', date: '', time: '', venue: '', platform: '', collaboration: '', image: null });
    setShowModal(false);
  };

  const openEdit = (event) => {
    setEditId(event.id);
    setFormData({ ...event, image: null }); // Don't try to pre-fill file input
    setShowModal(true);
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Event Manager</h2>
        <button onClick={() => { closeAndReset(); setShowModal(true); }} className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-md">
          <Plus size={20} /> Create Event
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">Event</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">Details</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-slate-50/50">
                <td className="px-6 py-4 flex items-center gap-4">
                  <img src={event.image} className="w-12 h-12 rounded-lg object-cover bg-slate-100" />
                  <span className="font-medium text-slate-800 max-w-xs">{event.title}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-slate-600 flex flex-wrap gap-x-4">
                    <span className="flex items-center gap-1"><Calendar size={14}/> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={14}/> {event.venue}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => openEdit(event)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Pencil size={18} /></button>
                    <button onClick={() => handleDelete(event.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{editId ? 'Update Event' : 'Create New Event'}</h3>
              <button onClick={closeAndReset} className="text-slate-400 hover:text-slate-600"><X /></button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
              <div className="col-span-2">
                <label className="text-sm font-medium mb-1 block text-slate-700">Event Title</label>
                <input required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-slate-700">Date</label>
                <input className="w-full p-3 border rounded-lg" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} placeholder="e.g. Oct 24, 2026" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-slate-700">Time</label>
                <input className="w-full p-3 border rounded-lg" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-slate-700">Venue</label>
                <input className="w-full p-3 border rounded-lg" value={formData.venue} onChange={(e) => setFormData({...formData, venue: e.target.value})} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block text-slate-700">Platform</label>
                <input className="w-full p-3 border rounded-lg" value={formData.platform} onChange={(e) => setFormData({...formData, platform: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium mb-1 block text-slate-700">Collaboration</label>
                <input className="w-full p-3 border rounded-lg" value={formData.collaboration} onChange={(e) => setFormData({...formData, collaboration: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium mb-1 block text-slate-700">Event Image</label>
                <input type="file" className="w-full p-3 border rounded-lg bg-slate-50" onChange={(e) => setFormData({...formData, image: e.target.files[0]})} />
              </div>
              <button disabled={loading} className="col-span-2 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition disabled:bg-indigo-300">
                {loading ? "Please wait..." : editId ? "Update Event Info" : "Publish Event"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}