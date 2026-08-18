import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, CheckCircle2, ShieldCheck, Cpu, ArrowRight, Wrench, Award, Activity, Gauge, Download, FileText, Briefcase, GraduationCap, UserCheck, Calendar } from 'lucide-react';

export default function HomePage({ isDark }) {
  const skills = [
    { title: 'Electrical Wiring', category: 'Electrical', level: 95, desc: 'Lighting, intercom, circuit layout, safety distribution' },
    { title: 'Electrical Maintenance', category: 'Maintenance', level: 94, desc: 'Troubleshooting electrical hazards, equipment repair & unit replacement' },
    { title: 'Troubleshooting', category: 'Technical', level: 92, desc: 'Diagnosing electrical hazards, operational abnormalities & breakdowns' },
    { title: 'Equipment Installation', category: 'Installation', level: 90, desc: 'Installing fixtures, alarm systems, apparatus & safety components' },
    { title: 'Safety Inspection', category: 'Safety', level: 98, desc: 'Enforcing safety guidelines, housekeeping & quality-control standards' },
    { title: 'Machine Operation', category: 'Operations', level: 93, desc: 'Operating manufacturing machinery & monitoring shift performance' },
    { title: 'Quality Inspection', category: 'Quality', level: 91, desc: 'Inspecting production output, defect identification & standard maintenance' },
    { title: 'Data Entry', category: 'Documentation', level: 88, desc: 'Accurate record keeping, digital documentation & operational data logging' }
  ];

  const experiences = [
    {
      company: 'WELSPUN INDIA PVT. LTD. - Anjar, Kutch, Gujarat',
      role: 'Electrical Engineer',
      period: 'April 2023 - November 2024 (1 yr 8 mos)',
      desc: 'Executed electrical wiring plans, installed electrical apparatus, safety components, and troubleshot circuit hazards.'
    },
    {
      company: 'MODENVEER SECURITY AGENCY - Khavda, Kutch, Gujarat',
      role: 'Data Entry Operator',
      period: 'August 2022 - March 2023 (8 mos)',
      desc: 'Entered, updated and maintained operational data, routine documentation, and digital record management.'
    },
    {
      company: 'WELSPUN INDIA PVT. LTD. - Anjar, Kutch, Gujarat',
      role: 'Machine Operator & Quality Inspector',
      period: 'February 2015 - December 2020 (5 yrs 11 mos)',
      desc: 'Operated production machinery, inspected products for defects, performed machine checks, and maintained shift records.'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Live Operational Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider animate-voltage-pulse">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span>Circuit Status: Active</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Chandra Kant Parmar
              </span>
            </h1>

            <p className={`text-sm sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Industrial professional with practical experience in electrical maintenance, machine operations, quality inspection, and data entry. Experienced in electrical wiring, equipment installation, troubleshooting, production support, and safety-focused industrial work.
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold ${
                isDark ? 'bg-white/5 border-amber-500/20 text-slate-300' : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                <MapPin size={13} className="text-amber-400 shrink-0" /> Anjar, Kutch - 370110, Gujarat
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold ${
                isDark ? 'bg-white/5 border-amber-500/20 text-slate-300' : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                <Phone size={13} className="text-amber-400 shrink-0" /> +91 7990101267
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Work Inquiries / Contact <ArrowRight size={16} />
              </Link>
              <a
                href="/chandra-kant-resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm border transition duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                  isDark ? 'border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400' : 'border-amber-400 bg-amber-50 text-amber-900 shadow-sm'
                }`}
              >
                View / Download Resume <Download size={16} />
              </a>
            </div>
          </div>

          {/* Right Profile Photo Container */}
          <div className="lg:col-span-5 flex justify-center items-center relative my-4 sm:my-0">
            <div className="absolute -inset-4 sm:-inset-6 rounded-full border-2 border-dashed border-amber-500/40 animate-gear-rotate pointer-events-none" />
            <div className="absolute -inset-1 sm:-inset-2 rounded-full border border-amber-400/20 animate-gear-reverse pointer-events-none" />

            <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 shadow-2xl shadow-orange-500/40 animate-voltage-pulse">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#030712] bg-[#0b0f19] relative group">
                <img
                  src="/chandra-kant-profile.jpg"
                  alt="Chandra Kant Parmar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Industrial Metrics */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className={`p-4 sm:p-6 rounded-2xl border electric-card ${isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-md'}`}>
            <Activity className="mx-auto text-amber-400 mb-1 sm:mb-2" size={22} />
            <h3 className="text-2xl sm:text-3xl font-black text-amber-400">8+ Years</h3>
            <p className={`text-[11px] sm:text-xs mt-1 font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Industrial Experience
            </p>
          </div>

          <div className={`p-4 sm:p-6 rounded-2xl border electric-card ${isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-md'}`}>
            <Gauge className="mx-auto text-orange-400 mb-1 sm:mb-2" size={22} />
            <h3 className="text-2xl sm:text-3xl font-black text-orange-400">Welspun</h3>
            <p className={`text-[11px] sm:text-xs mt-1 font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              India Pvt. Ltd. Engineer
            </p>
          </div>

          <div className={`p-4 sm:p-6 rounded-2xl border electric-card ${isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-md'}`}>
            <ShieldCheck className="mx-auto text-yellow-400 mb-1 sm:mb-2" size={22} />
            <h3 className="text-2xl sm:text-3xl font-black text-yellow-400">AITT</h3>
            <p className={`text-[11px] sm:text-xs mt-1 font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              (NSQF) Certified
            </p>
          </div>

          <div className={`p-4 sm:p-6 rounded-2xl border electric-card ${isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-md'}`}>
            <Cpu className="mx-auto text-amber-400 mb-1 sm:mb-2" size={22} />
            <h3 className="text-2xl sm:text-3xl font-black text-amber-400">DCA</h3>
            <p className={`text-[11px] sm:text-xs mt-1 font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Computer Diploma
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Skills */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Zap size={13} /> Industrial Competency
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Technical & Industrial Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`p-5 sm:p-6 rounded-2xl border electric-card ${
                isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Wrench className="text-amber-400 shrink-0" size={16} />
                  <h3 className="text-base sm:text-lg font-bold">{skill.title}</h3>
                </div>
                <span className="text-[11px] font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  {skill.level}% Efficiency
                </span>
              </div>

              <p className={`text-xs mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {skill.desc}
              </p>

              <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-1000 animate-spark"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* RESUME SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <FileText size={13} /> Resume Summary
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Curriculum Vitae / Resume
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl border electric-card flex flex-col justify-between ${
                isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Briefcase size={18} />
                </div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-base font-bold">{exp.role}</h3>
                <h4 className="text-xs font-semibold text-slate-400">{exp.company}</h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic & Personal Box */}
        <div className={`p-6 sm:p-8 rounded-3xl border ${isDark ? 'bg-[#0b0f19]/90 border-white/10' : 'bg-white border-slate-200 shadow-lg'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-amber-400 shrink-0" size={22} />
                <h3 className="text-xl sm:text-2xl font-bold">Academic & Training</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={15} />
                  <span><strong>10th Passed</strong> - West Bengal Board of Secondary Education</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={15} />
                  <span><strong>AITT (NSQF) Passed</strong> - National Council for Vocational Education</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={15} />
                  <span><strong>Diploma in Computer Application (DCA)</strong> - MS Office, MS Access, Visual Basic, Bangla Word</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
              <div className="flex items-center gap-2">
                <UserCheck className="text-amber-400 shrink-0" size={22} />
                <h3 className="text-xl sm:text-2xl font-bold">Personal Profile</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400">Date of Birth:</span>
                  <p className="font-bold">29/01/1997</p>
                </div>
                <div>
                  <span className="text-slate-400">Nationality:</span>
                  <p className="font-bold">Indian</p>
                </div>
                <div>
                  <span className="text-slate-400">Father's Name:</span>
                  <p className="font-bold">Rasik Lal Parmar</p>
                </div>
                <div>
                  <span className="text-slate-400">Languages:</span>
                  <p className="font-bold">English, Bengali, Hindi, Gujarati</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/chandra-kant-resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 transition hover:scale-105"
                >
                  Open Full Resume (PDF View) <Download size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
