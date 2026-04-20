import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MousePointer2, Gamepad2, Blocks } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Track.css';

const JuniorTrack = () => {
  useScrollReveal();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="track-page">
      {/* ── Hero ───────────────────────────────────── */}
      <section className="track-hero">
        <div className="container track-hero__inner">
          <p className="label label--blue reveal">For Schools</p>
          <h1 className="track-hero__title reveal reveal--delay-1">
            Teen AI Builders
          </h1>
          <p className="track-hero__sub reveal reveal--delay-2">
            Students build a fully deployed AI-powered web application from scratch over 12 weeks. The application is an escape room game that runs live on the internet at a URL they can share with anyone.
          </p>
          <div className="reveal reveal--delay-3" style={{marginTop: '1rem'}}>
            <Link to="/contact" className="btn btn--blue btn--lg">Bring to Your School</Link>
          </div>
        </div>
      </section>

      {/* ── Roadmap ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label reveal">12-Week Timetable</p>
            <h2 className="reveal reveal--delay-1" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
              One Slot Per Week
            </h2>
          </div>

          <div className="roadmap-grid">
            {/* Step 1: Logic */}
            <div className="roadmap-card reveal">
              <span className="roadmap-card__num">01</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">HTML & CSS</h3>
                <p className="roadmap-card__desc">
                  Students write every line of code to build the visual foundation of their web application, understanding structure and styling.
                </p>
              </div>
            </div>

            {/* Step 2: Data */}
            <div className="roadmap-card reveal reveal--delay-1">
              <span className="roadmap-card__num">02</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">JavaScript</h3>
                <p className="roadmap-card__desc">
                  Introduce logic and interactivity. Students learn how to make their escape room game responsive to user actions.
                </p>
              </div>
            </div>

            {/* Step 3: AI */}
            <div className="roadmap-card reveal reveal--delay-2">
              <span className="roadmap-card__num">03</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">AI API Integration</h3>
                <p className="roadmap-card__desc">
                  Integrate an AI model that generates a different puzzle every time the game is played, making it truly unique.
                </p>
              </div>
            </div>

            {/* Step 4: n8n */}
            <div className="roadmap-card reveal reveal--delay-3">
              <span className="roadmap-card__num">04</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Deployment</h3>
                <p className="roadmap-card__desc">
                  Students deploy their application themselves, getting a live URL they can share with anyone in the world.
                </p>
              </div>
            </div>

            {/* Step 5: Result */}
            <div className="roadmap-card reveal reveal--delay-4">
              <span className="roadmap-card__num">05</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">AI Builder Certificate</h3>
                <p className="roadmap-card__desc">
                  Elevate Academy certification on completion of the 12-week program, recognizing their skills as an AI Builder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Details ───────────────────────────────── */}
      <section className="section bg-gray">
        <div className="container">
          <div className="course-grid">
            <div className="course-card course-card--light reveal">
              <h3 className="course-card__title">Teen Students</h3>
              <p className="course-card__desc">Tailored for teen students with no prior prerequisites required.</p>
            </div>
            <div className="course-card course-card--light reveal reveal--delay-1">
              <h3 className="course-card__title">90 Min / Week</h3>
              <p className="course-card__desc">A focused weekly session designed to fit into any school timetable seamlessly.</p>
            </div>
            <div className="course-card course-card--light reveal reveal--delay-2">
              <h3 className="course-card__title">Escape Room Game</h3>
              <p className="course-card__desc">A fun, engaging project that teaches complex AI and web concepts through play.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JuniorTrack;
