"use client"

import React, { useState } from "react";
import { ArrowRight, Upload, CheckCircle, Loader2 } from "lucide-react";

function JoinForm() {
  // 1. State for form data
  const [formData, setFormData] = useState({
    name: "",
    professionalStatus: "",
    residentialAddress: "",
    institutionalAddress: "",
    personalEmail: "",
    institutionalEmail: "",
    personalContact: "",
    institutionalContact: "",
    alternateContact: "",
    photo: null,
  });

  // 2. State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Text Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle File Input
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        photo: e.target.files[0],
      }));
    }
  };

  // Handle Form Submission (Dummy API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    console.log("Submitting Form Data:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after success (optional)
      setFormData({
        name: "",
        professionalStatus: "",
        residentialAddress: "",
        institutionalAddress: "",
        personalEmail: "",
        institutionalEmail: "",
        personalContact: "",
        institutionalContact: "",
        alternateContact: "",
        photo: null,
      });

      // Clear success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-emerald-900 p-6 text-white text-center">
            <h3 className="text-2xl font-bold">Registration Form</h3>
            <p className="text-emerald-200 text-sm">
              Fill in your details to become a member
            </p>
          </div>
          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name Individual / Institution
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Professional Status
                  </label>
                  <input
                    name="professionalStatus"
                    value={formData.professionalStatus}
                    onChange={handleChange}
                    required
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Residential Mailing Address
                  </label>
                  <input
                    name="residentialAddress"
                    value={formData.residentialAddress}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institutional Address
                  </label>
                  <input
                    name="institutionalAddress"
                    value={formData.institutionalAddress}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Personal Email ID
                  </label>
                  <input
                    name="personalEmail"
                    value={formData.personalEmail}
                    onChange={handleChange}
                    required
                    type="email"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institutional Email ID
                  </label>
                  <input
                    name="institutionalEmail"
                    value={formData.institutionalEmail}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Personal Contact Number
                  </label>
                  <input
                    name="personalContact"
                    value={formData.personalContact}
                    onChange={handleChange}
                    required
                    type="tel"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institutional Contact Number
                  </label>
                  <input
                    name="institutionalContact"
                    value={formData.institutionalContact}
                    onChange={handleChange}
                    type="tel"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Alternate Contact Number
                  </label>
                  <input
                    name="alternateContact"
                    value={formData.alternateContact}
                    onChange={handleChange}
                    type="tel"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Photo
                </label>
                {/* 3. Fixed File Input: Hidden input + Label trigger */}
                <input
                  type="file"
                  id="photo-upload"
                  className="hidden"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="photo-upload"
                  className={`border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:border-amber-500 transition cursor-pointer bg-gray-50 ${
                    formData.photo ? "border-amber-500 bg-amber-50" : ""
                  }`}
                >
                  {formData.photo ? (
                    <>
                      <CheckCircle size={24} className="mb-2 text-amber-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {formData.photo.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        Click to change
                      </span>
                    </>
                  ) : (
                    <>
                      <Upload size={24} className="mb-2" />
                      <span className="text-xs">
                        Click to upload image (JPG/PNG)
                      </span>
                    </>
                  )}
                </label>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-amber-500 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition shadow-lg flex justify-center items-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />{" "}
                      Submitting...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle size={20} /> Submitted Successfully!
                    </>
                  ) : (
                    <>
                      Submit Now <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinForm;
