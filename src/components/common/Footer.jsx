"use client";
import { Phone, MapPin, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8 border-t-4 border-amber-500">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              CTEF <span className="text-amber-500">ASSAM</span>
            </h3>
            <p className="text-emerald-200 text-sm leading-relaxed mb-6">
              Engineering the future teaching of Assam. A rigorous approach to
              teacher education and development.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white/10 p-2 rounded hover:bg-amber-500 transition"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded hover:bg-amber-500 transition"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded hover:bg-amber-500 transition"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-500">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-emerald-100/70">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  Executive Committee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-500">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-emerald-100/70">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="mt-1 shrink-0 text-amber-500" />{" "}
                Department of Education, Gauhati University, Guwahati-14
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-amber-500" /> +91 98640 66549
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-amber-500" />{" "}
                ctefassam@gmail.com
              </li>
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-500">
              Newsletter
            </h4>
            <p className="text-sm text-emerald-200 mb-4">
              Subscribe for latest updates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded bg-emerald-900/50 border border-emerald-800 focus:outline-none focus:border-amber-500 text-sm"
              />
              <button className="bg-amber-500 text-emerald-950 font-bold py-2 rounded hover:bg-amber-400 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-400">
          <p>
            &copy; {new Date().getFullYear()} CTEF Assam Chapter. All Rights
            Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
