import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer({ isDark }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative z-10 pt-14 pb-10 border-t ${
      isDark ? 'border-white/10 bg-[#02050e]' : 'border-slate-200 bg-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Chandra Kant Parmar
              </span>
            </h3>
            <p className={`text-sm max-w-md leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Electrical Maintenance Specialist | Industrial Operations & Safety | Quality Inspection | Data Entry Operator
            </p>
            <div className={`flex flex-wrap items-center gap-4 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-amber-400" />
                <span>Anjar, Kutch - 370110, Gujarat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone size={14} className="text-amber-400" />
                <span>Contact: 7990101267</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className={`hover:text-amber-400 transition ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                1. Profile & Skills
              </Link>
              <Link to="/experience" className={`hover:text-amber-400 transition ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                2. Work Experience
              </Link>
              <Link to="/contact" className={`hover:text-amber-400 transition ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                3. Contact & Inquiries
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Certifications & Qualifications
            </h4>
            <div className={`text-xs space-y-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-400" />
                <span>AITT (NSQF) Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-amber-400" />
                <span>Diploma in Computer Application (DCA)</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isDark ? 'border-white/5 text-slate-500' : 'border-slate-200 text-slate-500'
        }`}>
          <div>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-300">Chandra Kant Parmar</span>. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-medium hover:text-amber-400 transition cursor-pointer"
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
