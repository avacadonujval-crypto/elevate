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
            From Syntax to Orchestration
          </h2>

          <div className="tracks__grid">
            {/* Junior track */}
            <div className="track-card track-card--light reveal">
              <p className="label label--blue">Teen AI Builders</p>
              <h3 className="track-card__title">Live Web Deployment</h3>
              <p className="track-card__body">
                For teen students, we bridge the gap between curiosity and creation. Build a fully deployed AI-powered application and understand every line of code you write.
              </p>
              <ul className="track-card__features">
                <li>
                  <span className="squircle squircle--sm squircle--blue-light">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#1400FF" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  Full-stack web development
                </li>
                <li>
                  <span className="squircle squircle--sm squircle--blue-light">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#1400FF" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  AI API Integration & Deployment
                </li>
              </ul>
            </div>

            {/* Professional track */}
            <div className="track-card track-card--light reveal reveal--delay-1">
              <p className="label">Flagship Programme</p>
              <h3 className="track-card__title">AI Agentic Engineering</h3>
              <p className="track-card__body">
                Become an AI Orchestrator. A 6-month intensive bootcamp designed for engineering students and professionals. Master the art of coordinating AI agents to solve real business problems.
              </p>
              <ul className="track-card__features">
                <li>
                  <span className="squircle squircle--sm squircle--gray">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  Agentic Orchestration & Workflows
                </li>
                <li>
                  <span className="squircle squircle--sm squircle--gray">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  64 Live Hours + 2-Month Capstone
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
            The Agentic Frontier
          </h2>

          <div className="snapshots__grid">
            {/* Big dark card */}
            <div className="snap-card snap-card--dark reveal">
              <div className="snap-card__tags">
                <span className="tag tag--dark">AI ORCHESTRATION</span>
                <span className="tag tag--dark">Python</span>
                <span className="tag tag--dark">Agentic Workflows</span>
              </div>
              <h3 className="snap-card__title snap-card__title--white">AI Orchestrator</h3>
              <p className="snap-card__body snap-card__body--muted">
                Move beyond simple prompts. Learn to build and coordinate specialized AI agents that can think, reason, and execute tasks across any business function.
              </p>
            </div>

            {/* Right column: 3 stacked cards */}
            <div className="snapshots__right">
              <div className="snap-card snap-card--light reveal reveal--delay-1">
                <div className="snap-card__top">
                  <h3 className="snap-card__title">Teen AI Builder</h3>
                  <span className="squircle squircle--sm squircle--gray">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L9 5H13L10 8L11 12L7 9.5L3 12L4 8L1 5H5L7 1Z" fill="#0D0D0D"/>
                    </svg>
                  </span>
                </div>
                <p className="snap-card__body">Building live, AI-powered apps from scratch.</p>
              </div>

              <div className="snap-card snap-card--blue reveal reveal--delay-2">
                <div className="squircle squircle--md squircle--white snap-card__icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 15V9L9 3L15 9V15H11V11H7V15H3Z" fill="#1400FF"/>
                  </svg>
                </div>
                <h4 className="snap-card__sm-title snap-card__sm-title--white">Live Deployment</h4>
              </div>

              <div className="snap-card snap-card--light reveal reveal--delay-3">
                <div className="squircle squircle--md squircle--gray snap-card__icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="10" rx="2" stroke="#0D0D0D" strokeWidth="1.5" fill="none"/>
                    <path d="M6 16H12" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 12V16" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="snap-card__sm-title">Elevate Academy Cert</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs CTA ─────────────────────────── */}
      <section className="about-cta">
        <div className="container about-cta__inner reveal">
          <h2 className="about-cta__title">Ready to build the future?</h2>
          <div className="about-cta__actions">
            <Link to="/contact" className="btn btn--white btn--lg">Enroll Now</Link>
            <Link to="/contact" className="btn btn--outline-white btn--lg">Corporate Training</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
