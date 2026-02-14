"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, X, Upload, Pencil, Trash2, Calendar as CalendarIcon } from 'lucide-react';

export default function GalleryManager() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    photo: null
  });

  // 1. Fetch Items on Load
  const fetchItems = async () => {
    try {
      const res = await axios.get('/api/gallery');
      // Adjust based on your pagination response structure (e.g., res.data.data)
      setItems(res.data.data || res.data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  // 2. Handle Create or Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('date', formData.date);
    if (formData.photo) data.append('photo', formData.photo);

    try {
      if (editId) {
        await axios.patch(`/api/gallery/${editId}`, data);
        alert("Item updated successfully!");
      } else {
        await axios.post('/api/gallery', data);
        alert("Item created successfully!");
      }
      resetForm();
      fetchItems();
    } catch (err) {
      alert(err.response?.data?.error || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // 3. Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    
    try {
      await axios.delete(`/api/gallery/${id}`);
      alert("Deleted successfully!");
      fetchItems();
    } catch (err) {
      alert("Delete failed");
    }
  };

  // Helpers
  const resetForm = () => {
    setEditId(null);
    setFormData({ title: '', date: '', photo: null });
    setShowModal(false);
  };

  const openEditModal = (item) => {
    setEditId(item.id);
    setFormData({ title: item.title, date: new Date(item.date).toISOString().split('T')[0], photo: null });
    setShowModal(true);
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-800">Gallery</h2>
        <button 
          onClick={() => { resetForm(); setShowModal(true); }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={20} /> Add New Image
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="px-6 py-4">Preview</th>
              <th className="px-6 py-4">Title</th>
               <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <img src={item.photo} className="w-16 h-10 object-cover rounded" alt="" />
                </td>
                <td className="px-6 py-4 font-medium">{item.title}</td>
                <td className="px-6 py-4 font-medium">{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                  <button onClick={() => openEditModal(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-8">
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-bold">{editId ? 'Edit Item' : 'New Gallery Item'}</h3>
              <button onClick={resetForm}><X /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                placeholder="Title" 
                className="w-full p-3 border rounded-lg"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
              />
              <input 
                type="date" 
                className="w-full p-3 border rounded-lg"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
              <div className="border-2 border-dashed rounded-lg p-4">
                <input 
                  type="file" 
                  onChange={(e) => setFormData({...formData, photo: e.target.files[0]})}
                  className="text-sm"
                  required={!editId} // Only required for new items
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold disabled:bg-indigo-300"
              >
                {loading ? "Processing..." : editId ? "Update Item" : "Save Item"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}