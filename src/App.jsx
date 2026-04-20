import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import JuniorTrack from './pages/JuniorTrack';
import ProTrack from './pages/ProTrack';
import './index.css';

const initReveal = () => {
  const els = document.querySelectorAll('.reveal:not(.is-visible)');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );
  els.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
};

const ScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Short delay lets the DOM paint before we observe
    const id = setTimeout(() => {
      const cleanup = initReveal();
      return cleanup;
    }, 50);
    return () => clearTimeout(id);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    // Signal CSS that JS is ready for progressive enhancement
    document.body.classList.add('js-ready');
  }, []);

  return (
    <Router>
      <ScrollManager />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/junior-track" element={<JuniorTrack />} />
            <Route path="/pro-track" element={<ProTrack />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

