import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import QuoteBanner from '../components/QuoteBanner';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  useScrollReveal();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="about">

      {/* ── Philosophy Hero ─────────────────────── */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <p className="label reveal">Our Philosophy</p>
            <h1 className="about-hero__title reveal reveal--delay-1">
              Architects of the<br />next digital renaissance.
            </h1>
            <p className="about-hero__sub reveal reveal--delay-2">
              We bridge the gap between abstract code and creative execution, fostering a generation of technical artisans.
            </p>
          </div>
          <div className="about-hero__device reveal reveal--delay-1">
            <div className="about-hero__monitor">
              <div className="about-hero__monitor-screen">
                <div className="monitor-code">
                  {['const architect = () => {', '  const mind = new Creative();', '  mind.build(future);', '  return excellence;', '};'].map((line, i) => (
                    <div key={i} className="monitor-code__line" style={{ animationDelay: `${i * 0.3}s` }}>
                      <span className="monitor-code__num">{i + 1}</span>
                      <span className="monitor-code__text">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ───────────────────────────────── */}
      <QuoteBanner
        quote={`"Education is the most powerful tool which you can use to change the world."`}
        accent="most powerful tool"
        author="— Nelson Mandela"
      />

      {/* ── Curriculum Tracks ───────────────────── */}
      <section className="section tracks">
        <div className="container">
          <p className="label reveal">Curriculum Tracks</p>
          <h2 className="tracks__title reveal reveal--delay-1">
            From Syntax to Synthesis
          </h2>

          <div className="tracks__grid">
            {/* Junior track */}
            <div className="track-card track-card--light reveal">
              <p className="label label--blue">The Junior Track</p>
              <h3 className="track-card__title">Gamified Exploration</h3>
              <p className="track-card__body">
                For the new generation, we've taken high-end programming concepts and turned them into quests, where every line of code is a real tool in a digital world.
              </p>
              <ul className="track-card__features">
                <li>
                  <span className="squircle squircle--sm squircle--blue-light">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#1400FF" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  Quest-based learning modules
                </li>
                <li>
                  <span className="squircle squircle--sm squircle--blue-light">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#1400FF" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  Visual design & system foundation
                </li>
              </ul>
            </div>

            {/* Professional track */}
            <div className="track-card track-card--light reveal reveal--delay-1">
              <p className="label">Professional Track</p>
              <h3 className="track-card__title">Technical Mastery</h3>
              <p className="track-card__body">
                A rigorous, high-end curriculum designed for the ambitious professional. We move beyond syntax, diving into the architecture of modern engineering, preparing you for the frontier of AI-led operations.
              </p>
              <ul className="track-card__features">
                <li>
                  <span className="squircle squircle--sm squircle--gray">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  Advanced AI implementations
                </li>
                <li>
                  <span className="squircle squircle--sm squircle--gray">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  Full-stack architecture specialisation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Curriculum Snapshots ─────────────────── */}
      <section className="section snapshots">
        <div className="container">
          <p className="label reveal">Curriculum Snapshots</p>
          <h2 className="snapshots__title reveal reveal--delay-1">
            From Syntax to Synthesis
          </h2>

          <div className="snapshots__grid">
            {/* Big dark card */}
            <div className="snap-card snap-card--dark reveal">
              <div className="snap-card__tags">
                <span className="tag tag--dark">HTML/CSS PRO</span>
                <span className="tag tag--dark">Typography</span>
                <span className="tag tag--dark">Grid Systems</span>
              </div>
              <h3 className="snap-card__title snap-card__title--white">Core Foundations</h3>
              <p className="snap-card__body snap-card__body--muted">
                Starts with inline, JavaScript and TypeScript. We don't just teach you how to write code, we teach you how to think like an architect.
              </p>
            </div>

            {/* Right column: 3 stacked cards */}
            <div className="snapshots__right">
              <div className="snap-card snap-card--light reveal reveal--delay-1">
                <div className="snap-card__top">
                  <h3 className="snap-card__title">AI Engineering</h3>
                  <span className="squircle squircle--sm squircle--gray">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L9 5H13L10 8L11 12L7 9.5L3 12L4 8L1 5H5L7 1Z" fill="#0D0D0D"/>
                    </svg>
                  </span>
                </div>
                <p className="snap-card__body">Harnessing LMs and neural systems.</p>
              </div>

              <div className="snap-card snap-card--blue reveal reveal--delay-2">
                <div className="squircle squircle--md squircle--white snap-card__icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 15V9L9 3L15 9V15H11V11H7V15H3Z" fill="#1400FF"/>
                  </svg>
                </div>
                <h4 className="snap-card__sm-title snap-card__sm-title--white">Node/API Flows</h4>
              </div>

              <div className="snap-card snap-card--light reveal reveal--delay-3">
                <div className="squircle squircle--md squircle--gray snap-card__icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="10" rx="2" stroke="#0D0D0D" strokeWidth="1.5" fill="none"/>
                    <path d="M6 16H12" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 12V16" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="snap-card__sm-title">System Design</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs CTA ─────────────────────────── */}
      <section className="about-cta">
        <div className="container about-cta__inner reveal">
          <h2 className="about-cta__title">Ready to master the craft?</h2>
          <div className="about-cta__actions">
            <Link to="/contact" className="btn btn--white btn--lg">Enroll Junior Track</Link>
            <Link to="/contact" className="btn btn--outline-white btn--lg">Free Seminar Tickets</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
