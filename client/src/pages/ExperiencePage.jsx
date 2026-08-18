import React from 'react';
import { Briefcase, GraduationCap, UserCheck, Calendar, MapPin, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export default function ExperiencePage({ isDark }) {
  const experiences = [
    {
      company: 'WELSPUN INDIA PVT. LTD.',
      location: 'Anjar, Kutch, Gujarat',
      role: 'Electrical Engineer',
      period: 'April 2023 - November 2024',
      duration: '1 year 8 months',
      highlights: [
        'Executed electrical wiring plans for lighting, intercom and other electrical systems.',
        'Installed electrical apparatus, fixtures, alarm equipment and related components.',
        'Installed safety and distribution components and connected wiring in electrical circuits and networks.',
        'Troubleshot electrical hazards or malfunctions and repaired or replaced damaged units.',
        'Supported safe and reliable equipment operation through routine inspection and maintenance.'
      ]
    },
    {
      company: 'MODENVEER SECURITY AGENCY',
      location: 'Khavda, Kutch, Gujarat',
      role: 'Data Entry Operator',
      period: 'August 2022 - March 2023',
      duration: '8 months',
      highlights: [
        'Entered, updated and maintained operational data and records accurately.',
        'Prepared routine documentation and supported digital record management.',
        'Checked data for completeness and corrected basic entry errors.'
      ]
    },
    {
      company: 'WELSPUN INDIA PVT. LTD.',
      location: 'Anjar, Kutch, Gujarat',
      role: 'Machine Operator & Quality Inspector',
      period: 'February 2015 - December 2020',
      duration: '5 years 11 months',
      highlights: [
        'Operated production machinery and monitored machine performance during routine manufacturing operations.',
        'Inspected products and production output to identify defects and maintain required quality standards.',
        'Performed basic machine checks and reported abnormalities, breakdowns and production issues.',
        'Followed operating procedures, safety guidelines, housekeeping standards and quality-control practices.',
        'Maintained production and inspection records and supported smooth shift operations.'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-16 space-y-16">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Briefcase size={15} /> Page 2: Work History & Education
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Professional Work Experience
        </h1>
        <p className={`mt-3 text-base max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Detailed track record in electrical engineering, data management, quality inspection, and machine operations.
        </p>
      </section>

      {/* Work Experience Timeline */}
      <section className="max-w-4xl mx-auto px-6 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-8 rounded-3xl border relative transition hover:border-amber-500/40 ${
              isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {exp.location}
                </span>
                <h3 className="text-2xl font-bold mt-1">{exp.role}</h3>
                <h4 className="text-base font-semibold text-slate-300">{exp.company}</h4>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Calendar size={13} /> {exp.period}
                </span>
                <p className="text-xs text-slate-400 mt-1">Duration: {exp.duration}</p>
              </div>
            </div>

            <ul className="space-y-2.5">
              {exp.highlights.map((item, hIdx) => (
                <li key={hIdx} className={`flex items-start gap-3 text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Education & Computer Training */}
      <section className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <GraduationCap size={15} /> Academic & Technical Training
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200'}`}>
            <Award className="text-amber-400 mb-3" size={28} />
            <h3 className="text-xl font-bold">10th Passed & AITT (NSQF)</h3>
            <p className="text-xs text-amber-400 font-semibold mt-1">
              West Bengal Board of Secondary Education | National Council for Vocational Education and Training
            </p>
            <p className={`text-sm mt-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Completed 10th standard board examinations and passed All India Trade Test (AITT - NSQF Level Certification).
            </p>
          </div>

          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200'}`}>
            <ShieldCheck className="text-amber-400 mb-3" size={28} />
            <h3 className="text-xl font-bold">Diploma in Computer Application (DCA)</h3>
            <p className="text-xs text-amber-400 font-semibold mt-1">
              Pranabananda Computer Education Center, Bharat Sevashram Sangha
            </p>
            <p className={`text-sm mt-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Comprehensive training covering MS Word, MS Excel, MS PowerPoint, MS Access, Visual Basic, and Bangla Word.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Details Card */}
      <section className="max-w-4xl mx-auto px-6">
        <div className={`p-8 rounded-3xl border ${isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-md'}`}>
          <div className="flex items-center gap-2 mb-6">
            <UserCheck className="text-amber-400" size={22} />
            <h3 className="text-2xl font-bold">Personal Details</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Date of Birth</span>
              <p className="text-base font-bold mt-1">29/01/1997</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Nationality</span>
              <p className="text-base font-bold mt-1">Indian</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Father's Name</span>
              <p className="text-base font-bold mt-1">Rasik Lal Parmar</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Mother's Name</span>
              <p className="text-base font-bold mt-1">Taruna Parmar</p>
            </div>
            <div className="sm:col-span-2">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Languages Spoken</span>
              <p className="text-base font-bold mt-1">English, Bengali, Hindi, Gujarati</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
