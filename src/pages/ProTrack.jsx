import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TerminalSquare, Workflow, LineChart } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Track.css';

const ProTrack = () => {
  useScrollReveal();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="track-page">
      {/* ── Hero ───────────────────────────────────── */}
      <section className="track-hero">
        <div className="container track-hero__inner">
          <p className="label label--blue reveal">Flagship Programme</p>
          <h1 className="track-hero__title reveal reveal--delay-1">
            AI Agentic Engineering Bootcamp
          </h1>
          <p className="track-hero__sub reveal reveal--delay-2">
            Become an AI Orchestrator. The role companies will pay a premium for. Every student—PHP, Java, Python, Full Stack—is a potential candidate for the future of AI.
          </p>
          <div className="reveal reveal--delay-3" style={{marginTop: '1rem'}}>
            <Link to="/contact" className="btn btn--blue btn--lg">Contact for Pricing</Link>
          </div>
        </div>
      </section>

      {/* ── Roadmap ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label reveal">The Opportunity</p>
            <h2 className="reveal reveal--delay-1" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
              Building the AI Orchestrators
            </h2>
          </div>

          <div className="roadmap-grid">
            {/* Step 1: Logic */}
            <div className="roadmap-card reveal">
              <span className="roadmap-card__num">01</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">6 Months Training</h3>
                <p className="roadmap-card__desc">
                  4 months of intensive technical training followed by a 2-month dedicated capstone project to solidify your engineering skills.
                </p>
              </div>
            </div>

            {/* Step 2: Data */}
            <div className="roadmap-card reveal reveal--delay-1">
              <span className="roadmap-card__num">02</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">64 Live Hours</h3>
                <p className="roadmap-card__desc">
                  3 days a week, live online sessions ensuring you have direct access to experts and real-time collaborative learning.
                </p>
              </div>
            </div>

            {/* Step 3: AI */}
            <div className="roadmap-card reveal reveal--delay-2">
              <span className="roadmap-card__num">03</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Agentic Coordination</h3>
                <p className="roadmap-card__desc">
                  Learn to build and coordinate AI agents that solve complex business problems, moving beyond simple prompts to autonomous systems.
                </p>
              </div>
            </div>

            {/* Step 4: n8n */}
            <div className="roadmap-card reveal reveal--delay-3">
              <span className="roadmap-card__num">04</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Target Audience</h3>
                <p className="roadmap-card__desc">
                  Designed for engineering students, graduates, and working professionals pivoting to AI from any programming background.
                </p>
              </div>
            </div>

            {/* Step 5: Result */}
            <div className="roadmap-card reveal reveal--delay-4">
              <span className="roadmap-card__num">05</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Elevate Academy Certification</h3>
                <p className="roadmap-card__desc">
                  Receive your official Elevate Academy certification upon successful completion of the capstone project, proving your expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Details ───────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div className="course-grid">
            <div className="course-card course-card--dark reveal">
              <h3 className="course-card__title course-card__title--white">Engineering Graduates</h3>
              <p className="course-card__desc course-card__desc--muted">Accelerate your career by mastering the most in-demand AI orchestration skills.</p>
            </div>
            <div className="course-card course-card--dark reveal reveal--delay-1">
              <h3 className="course-card__title course-card__title--white">Working Professionals</h3>
              <p className="course-card__desc course-card__desc--muted">Pivot to AI roles and lead the next wave of automation in your organization.</p>
            </div>
            <div className="course-card course-card--dark reveal reveal--delay-2">
              <h3 className="course-card__title course-card__title--white">Any Background</h3>
              <p className="course-card__desc course-card__desc--muted">Whether you know Python, Java, or PHP, you can become an AI Orchestrator.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProTrack;
