import { useState } from "react";

export default function Popup() {
  const [open, setOpen] = useState(true);

  if (!open) return null; // don’t render when closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-2xl border border-cyan-400/20 max-w-md w-full mx-4 transform transition-all duration-300 ease-out animate-popup hover:border-cyan-400/40 hover:shadow-cyan-500/25">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/40 transition-all duration-200 z-10 group"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-x text-white group-hover:text-cyan-400 transition-colors duration-200">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 pt-12">
          <h2 className="text-2xl font-bold text-white mb-4 text-center font-helvetica-neue">
            🚀 Recruitments Open!
          </h2>
          <p className="text-gray-200 text-center mb-6 leading-relaxed font-helvetica-neue">
            Join the best tech club at SRMIST. Be a part of breaking barriers between industry standards and academic skills.
          </p>
          <div className="text-center">
            <a
              href="https://lu.ma/q6w482ik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#31C4BF] hover:bg-cyan-500 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 border border-cyan-400/20 hover:border-cyan-400/40"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-transparent blur-2xl opacity-60 -z-10"></div>
      </div>
    </div>
  );
}
