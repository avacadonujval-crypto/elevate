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
          <p className="label label--blue reveal">Flagship Programme for Adults</p>
          <h1 className="track-hero__title reveal reveal--delay-1">
            AI Agentic Engineering Bootcamp
          </h1>
          <p className="track-hero__sub reveal reveal--delay-2">
            Become an AI Orchestrator. Every student—from PHP, Java, Python, or Full Stack backgrounds—is a candidate to build and coordinate AI agents that solve any business problem.
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
              Building AI Orchestrators
            </h2>
          </div>

          <div className="roadmap-grid">
            {/* Step 1: Logic */}
            <div className="roadmap-card reveal">
              <span className="roadmap-card__num">01</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">PHP, Java & Python</h3>
                <p className="roadmap-card__desc">
                  Leveraging your existing knowledge in any programming language to transition into the next wave of engineering.
                </p>
              </div>
            </div>

            {/* Step 2: Data */}
            <div className="roadmap-card reveal reveal--delay-1">
              <span className="roadmap-card__num">02</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Full Stack Mastery</h3>
                <p className="roadmap-card__desc">
                  Comprehensive training on the modern stack, ensuring you can build complete, production-ready AI systems.
                </p>
              </div>
            </div>

            {/* Step 3: AI */}
            <div className="roadmap-card reveal reveal--delay-2">
              <span className="roadmap-card__num">03</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Advanced AI with n8n</h3>
                <p className="roadmap-card__desc">
                  Building complex, production-ready AI workflows using n8n and advanced Python logic for agentic systems.
                </p>
              </div>
            </div>

            {/* Step 4: n8n */}
            <div className="roadmap-card reveal reveal--delay-3">
              <span className="roadmap-card__num">04</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Professional Orchestration</h3>
                <p className="roadmap-card__desc">
                  Coordinating multiple AI agents to perform multi-step business tasks and automate enterprise processes.
                </p>
              </div>
            </div>

            {/* Step 5: Result */}
            <div className="roadmap-card reveal reveal--delay-4">
              <span className="roadmap-card__num">05</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Elevate Academy Certification</h3>
                <p className="roadmap-card__desc">
                  Official certification recognizing your mastery as an AI Orchestrator, ready for top-tier professional roles.
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
