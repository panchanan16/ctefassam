import React from "react";

const AboutUsSection = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* About Us Section */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1985 by Dr. Gulab Chaurasia, the Council for Teacher
                Education Foundation (CTEF) is a global professional
                organization dedicated to advancing teacher excellence and
                professionalism. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Dolore voluptatum animi veniam tempora!
                Recusandae pariatur, veritatis exercitationem minima ratione
                neque voluptatibus ex officia repellat repudiandae eaque!
                Cupiditate similique, quae rem tenetur quia tempore perspiciatis
                ipsum explicabo adipisci. Sint, reiciendis labore?
              </p>
            </div>

            {/* Founder Card */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition duration-300">
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                  alt="Dr. Gulab Chaurasia"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-1">
                  Dr. Gulab Chaurasia
                </h3>
                <p className="text-gray-500 text-sm">
                  Founder, National President of CTEF
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-[#f6f9ee] rounded-xl p-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Mission Image */}
            <div className="order-2 md:order-1">
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-80">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mission Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-light text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                CTEF empowers educators through continuous training and
                development across 25 national and 3 international chapters —
                shaping better teachers for a better future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
