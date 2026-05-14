import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import lg1 from "../../assets/ui/lg1.png";

// Social icons
const SocialIcon = ({ path, label }) => (
  <a
    href="#"
    aria-label={label}
    className="hover:scale-110 transition-transform"
  >
    <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
      <svg
        className="w-4 h-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    </div>
  </a>
);

const SOCIAL = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "TikTok",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.95a8.27 8.27 0 004.83 1.54V7.05a4.85 4.85 0 01-1.07-.36z",
  },
  {
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Pinterest",
    path: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z",
  },
];

const LINKS = [
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  const [linksOpen, setLinksOpen] = useState(false);

  return (
    <footer id="footer" style={{ backgroundColor: "#DC2626" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* ── COL 1: Logo + Links dropdown ── */}
          <div className="flex flex-col items-start gap-6">
            {/* Circular white logo */}
            <div className="bg-white p-1.5 md:p-2 rounded-xl shadow-lg flex items-center justify-center">
              <img 
                src={lg1} 
                alt="PowerSports Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Links dropdown */}
            <div className="w-full max-w-[200px] md:max-w-[180px]">
              <button
                onClick={() => setLinksOpen(!linksOpen)}
                className="w-full flex items-center justify-between bg-white/10 border border-white/30 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <span>Links</span>
                <svg
                  className={`w-4 h-4 transition-transform ${linksOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {linksOpen && (
                <div className="mt-1 bg-white rounded-lg shadow-lg overflow-hidden absolute z-20 w-48">
                  {LINKS.map((l) => (
                    <Link
                      key={l.label}
                      to={l.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      onClick={() => setLinksOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── COL 2: Company ── */}
          <div className="sm:pt-2">
            <h4 className="text-white font-black text-lg mb-4">Company</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Working Hours ── */}
          <div className="sm:pt-2">
            <h4 className="text-white font-black text-lg mb-4">
              Working Hours
            </h4>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Lorem Ipsum Lorem Ipsum Lorem Lo
            </p>
            <p className="text-white/90 text-sm font-semibold">
              Mon - Fri: 8:00AM - 6:00PM
            </p>
          </div>

          {/* ── COL 4: Get in Touch ── */}
          <div className="sm:pt-2">
            <h4 className="text-white font-black text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Add: 11th Avenue BGC, Taguig</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>powerbath.ph@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>Phone: 0917 708 3801</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-2 flex-wrap">
              {SOCIAL.map((s) => (
                <SocialIcon key={s.label} path={s.path} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div className="border-t border-white/20 py-4 text-center px-4">
        <p className="text-white/70 text-xs md:text-sm">
          2025 PowerSports. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

