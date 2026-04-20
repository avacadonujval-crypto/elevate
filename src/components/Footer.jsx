import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <div className="footer__brand">
        <span className="footer__brand-name">Elevate Academy</span>
        <p className="footer__desc">Curated knowledge. Career-defining growth.</p>
      </div>

      <nav className="footer__links">
        <Link to="/">Home</Link>
        <Link to="/about">Programs</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Enroll</Link>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </nav>

      <p className="footer__copy">
        © {new Date().getFullYear()} Elevate Academy. Curated Knowledge.
      </p>
    </div>
  </footer>
);

export default Footer;
