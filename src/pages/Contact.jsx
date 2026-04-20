import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
  useScrollReveal();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="contact">

      {/* ── Header ──────────────────────────────── */}
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <div className="contact-hero__left">
            <p className="label reveal">Get in Touch</p>
            <h1 className="contact-hero__title reveal reveal--delay-1">
              Dialogue starts with <em className="contact-hero__accent">intention.</em>
            </h1>
            <p className="contact-hero__sub reveal reveal--delay-2">
              Whether you're seeking to refine your craft or have inquiries about our curriculum, our atelier is open for discourse.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Contact Grid ────────────────────── */}
      <section className="section contact-body">
        <div className="container contact-body__grid">

          {/* Left — info cards */}
          <div className="contact-info">
            {/* Email */}
            <div className="info-card reveal">
              <div className="squircle squircle--md squircle--blue info-card__icon">
                <Mail size={18} color="white" />
              </div>
              <p className="label info-card__label">Direct Inquiry</p>
              <p className="info-card__value">info@elevate.com</p>
            </div>

            {/* Phone */}
            <div className="info-card reveal reveal--delay-1">
              <div className="squircle squircle--md squircle--blue info-card__icon">
                <Phone size={18} color="white" />
              </div>
              <p className="label info-card__label">Telephone</p>
              <p className="info-card__value">+91 70222 99544</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap reveal reveal--delay-1">
            <h2 className="contact-form__title">Send a Message</h2>
            <form className="contact-form">
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label className="contact-form__label">Full Name</label>
                  <input type="text" placeholder="John Doe" className="contact-form__input" />
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="contact-form__input" />
                </div>
              </div>
              <div className="contact-form__field">
                <label className="contact-form__label">Subject of Inquiry</label>
                <select className="contact-form__input contact-form__select">
                  <option>General Information</option>
                  <option>Junior Track Enrollment</option>
                  <option>Professional Track</option>
                  <option>Certificate Inquiry</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="contact-form__field">
                <label className="contact-form__label">Message Body</label>
                <textarea
                  className="contact-form__input contact-form__textarea"
                  placeholder="Share your thoughts with us..."
                  rows={5}
                />
              </div>
              <div className="contact-form__footer">
                <p className="contact-form__privacy">
                  By submitting this form, you agree to our curated privacy standards.
                </p>
                <button type="submit" className="btn btn--blue btn--lg">
                  Dispatch Message <ArrowUpRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
