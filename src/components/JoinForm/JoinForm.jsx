import { ArrowRight, Upload } from 'lucide-react'

function JoinForm() {
  return (
     <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-emerald-900 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">Registration Form</h3>
              <p className="text-emerald-200 text-sm">Fill in your details to become a member</p>
            </div>
            <div className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name Individual / Institution</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="Dr. John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Proffessional Status</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Residential Mailing Address</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="john@example.com" />
                  </div>
                   <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Institutional Address</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pesonal Email ID</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Institutional Email ID</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Personal Contact Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="+91 00000 00000" />
                  </div>
                   <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Institutional Contact Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="+91 00000 00000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Alternate Contact Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-amber-500" placeholder="+91 00000 00000" />
                  </div>
                  
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Photo</label>
                  <div htmlFor="photo-upload" className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:border-amber-500 transition cursor-pointer bg-gray-50">
                    <Upload size={24} className="mb-2" />
                    <span className="text-xs">Click to upload image (JPG/PNG)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700 font-bold">Total Amount:</span>
                    <span className="text-2xl font-bold text-emerald-900">₹ 1,000</span>
                  </div>
                  <button type="button" className="w-full bg-amber-500 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition shadow-lg flex justify-center items-center gap-2">
                    Submit Now <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  ) 
}

export default JoinForm