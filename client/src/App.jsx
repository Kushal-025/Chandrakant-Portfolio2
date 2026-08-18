import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

// Pages
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function PageContainer({ isDark }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-page-slide">
      <Routes location={location}>
        <Route path="/" element={<HomePage isDark={isDark} />} />
        <Route path="/experience" element={<ExperiencePage isDark={isDark} />} />
        <Route path="/contact" element={<ContactPage isDark={isDark} />} />
        <Route path="*" element={<HomePage isDark={isDark} />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('ckp_theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('ckp_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className={`min-h-screen relative selection:bg-amber-500 selection:text-white transition-colors duration-500 flex flex-col justify-between ${
          isDark
            ? 'bg-[#030712] text-slate-100 bg-grid-pattern'
            : 'bg-[#f8fafc] text-slate-900 bg-grid-pattern-light'
        }`}
      >
        <ParticleBackground />
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main className="relative flex-grow">
          <PageContainer isDark={isDark} />
        </main>

        <Footer isDark={isDark} />
      </div>
    </BrowserRouter>
  );
}
