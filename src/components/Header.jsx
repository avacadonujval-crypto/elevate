import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Programs', to: '/about' },
    { label: 'Courses', to: '/courses' },
  ];

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        {/* Brand */}
        <Link to="/" className="header__brand">
          <span className="header__brand-mark squircle squircle--sm squircle--blue">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L13 5.5V10.5L8 14L3 10.5V5.5L8 2Z" fill="white"/>
            </svg>
          </span>
          <span className="header__brand-name">Elevate Academy</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav">
          <ul className="header__links">
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`header__link${pathname === to ? ' header__link--active' : ''}`}
                >
                  {label}
                  {pathname === to && <span className="header__link-dot" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <Link to="/contact" className="btn btn--blue">Enroll Now</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`header__burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile${menuOpen ? ' header__mobile--open' : ''}`}>
        <nav>
          <ul>
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className="header__mobile-link">{label}</Link>
              </li>
            ))}
            <li>
              <Link to="/about" className="btn btn--blue" style={{marginTop: '1rem', width: '100%', justifyContent: 'center'}}>
                Enroll Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
