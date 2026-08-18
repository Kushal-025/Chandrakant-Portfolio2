import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X, Home, Briefcase, Mail, Phone } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '1. Profile & Skills', path: '/', icon: <Home size={16} /> },
    { name: '2. Work Experience', path: '/experience', icon: <Briefcase size={16} /> },
    { name: '3. Contact & Inquiries', path: '/contact', icon: <Mail size={16} /> },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[94%] sm:w-[92%] max-w-5xl z-50 transition-all duration-300">
      <nav
        className={`flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-[#0b0f19]/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40'
            : 'bg-white/95 border border-slate-200 backdrop-blur-xl shadow-lg shadow-slate-300/30'
        }`}
      >
        {/* Brand Name */}
        <NavLink
          to="/"
          className="text-base sm:text-lg font-bold tracking-tight flex items-center gap-1 transition hover:scale-105 shrink-0"
        >
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Chandra Kant
          </span>
          <span className={isDark ? 'text-white' : 'text-slate-900'}>Parmar</span>
        </NavLink>

        {/* Desktop 3-Page Navigation */}
        <ul className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold shadow-md shadow-orange-500/25'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="tel:7990101267"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition"
          >
            <Phone size={13} /> 7990101267
          </a>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition hover:rotate-45 cursor-pointer ${
              isDark
                ? 'bg-slate-900 border-white/10 text-yellow-400 hover:bg-slate-800'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition cursor-pointer ${
              isDark ? 'text-slate-300 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden mt-2 p-4 rounded-2xl border transition-all duration-300 ${
            isDark
              ? 'bg-[#0b0f19]/95 border-white/10 backdrop-blur-2xl shadow-2xl'
              : 'bg-white/95 border-slate-200 backdrop-blur-2xl shadow-xl'
          }`}
        >
          <ul className="flex flex-col gap-2 text-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? 'bg-amber-600 text-white font-semibold'
                        : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`
                  }
                >
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10">
              <a
                href="tel:7990101267"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30"
              >
                <Phone size={14} /> Call 7990101267
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
