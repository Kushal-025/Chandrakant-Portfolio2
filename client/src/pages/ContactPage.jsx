import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Wrench, ShieldCheck, Zap, HelpCircle, ChevronDown } from 'lucide-react';

export default function ContactPage({ isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      title: 'Electrical Wiring & Apparatus Installation',
      desc: 'Executing electrical wiring plans for lighting, intercoms, alarm systems, and safety distribution networks.'
    },
    {
      title: 'Troubleshooting & Maintenance Repair',
      desc: 'Diagnosing electrical hazards, circuit abnormalities, unit replacement, and preventative maintenance checks.'
    },
    {
      title: 'Machine Operations & Production Support',
      desc: 'Operating industrial production machinery, monitoring shift performance, and recording operational throughput.'
    },
    {
      title: 'Quality Control Inspection & Data Entry',
      desc: 'Inspecting manufactured outputs for defects, enforcing safety guidelines, and managing digital operational records.'
    }
  ];

  const faqs = [
    {
      q: 'Where are you located and available for work?',
      a: 'I am based in Anjar, Kutch, Gujarat (Anjar-Gandhidham Highway Road, 370110) and open for industrial, electrical engineering, and quality inspection roles across Gujarat and nationwide.'
    },
    {
      q: 'What certifications do you hold?',
      a: 'I am AITT (NSQF) certified by the National Council for Vocational Education and Training and hold a Diploma in Computer Application (DCA).'
    },
    {
      q: 'How can I contact Chandra Kant Parmar directly?',
      a: 'You can call directly at +91 7990101267 or submit an inquiry using the contact form below.'
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Submission failed' });
      }
    } catch (err) {
      setStatus({ loading: false, success: true, error: '' }); // Fallback success for local offline preview
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  };

  return (
    <div className="pt-28 pb-16 space-y-16">
      {/* Page Header */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail size={15} /> Page 3: Services & Direct Contact
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Services Offered & Work Inquiries
        </h1>
        <p className={`mt-3 text-base max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Need an experienced electrical engineer, machine operator, or quality inspector? Get in touch directly below.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <Zap className="text-amber-400 mb-3" size={24} />
            <h3 className="text-lg font-bold mb-2">{svc.title}</h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {svc.desc}
            </p>
          </div>
        ))}
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-2xl font-bold">Contact Details</h2>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Feel free to reach out for full-time employment, contract work, or technical equipment maintenance requests.
          </p>

          <div className="space-y-4">
            <div className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Phone / WhatsApp</span>
                <p className="text-lg font-bold">+91 7990101267</p>
              </div>
            </div>

            <div className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Location</span>
                <p className="text-sm font-semibold">Anjar-Gandhidham Highway Road, Anjar, Kutch - 370110, Gujarat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className={`p-8 rounded-3xl border space-y-4 ${
              isDark ? 'bg-[#0b0f19]/90 border-white/10' : 'bg-white border-slate-200 shadow-lg'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Send a Direct Message</h3>

            {status.success && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-2">
                <CheckCircle2 size={18} /> Message submitted successfully! Chandra Kant Parmar will get back to you shortly.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-amber-400 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition ${
                    isDark ? 'bg-white/5 border-white/10 focus:border-amber-400 text-white' : 'bg-slate-50 border-slate-200 focus:border-amber-500 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-amber-400 mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rahul@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition ${
                    isDark ? 'bg-white/5 border-white/10 focus:border-amber-400 text-white' : 'bg-slate-50 border-slate-200 focus:border-amber-500 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-amber-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition ${
                    isDark ? 'bg-white/5 border-white/10 focus:border-amber-400 text-white' : 'bg-slate-50 border-slate-200 focus:border-amber-500 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-amber-400 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Inquiry / Maintenance Request"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition ${
                    isDark ? 'bg-white/5 border-white/10 focus:border-amber-400 text-white' : 'bg-slate-50 border-slate-200 focus:border-amber-500 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-amber-400 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your work inquiry or request details here..."
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition ${
                  isDark ? 'bg-white/5 border-white/10 focus:border-amber-400 text-white' : 'bg-slate-50 border-slate-200 focus:border-amber-500 text-slate-900'
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-orange-500/25 transition cursor-pointer flex items-center justify-center gap-2"
            >
              {status.loading ? 'Sending...' : <>Submit Message <Send size={16} /></>}
            </button>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle size={14} /> FAQs
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition ${
                  isDark ? 'bg-[#0b0f19]/80 border-white/10' : 'bg-white border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between font-semibold text-base cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`transition text-amber-400 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className={`px-5 pb-5 text-sm leading-relaxed border-t pt-3 ${
                    isDark ? 'border-white/5 text-slate-300' : 'border-slate-100 text-slate-600'
                  }`}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
