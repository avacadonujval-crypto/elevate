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
          <p className="label label--blue reveal">Gamified Exploration</p>
          <h1 className="track-hero__title reveal reveal--delay-1">
            The Junior Guild
          </h1>
          <p className="track-hero__sub reveal reveal--delay-2">
            For the next generation, we've turned logic into a playground. Our gamified curriculum transforms programming concepts into immersive quests.
          </p>
          <div className="reveal reveal--delay-3" style={{marginTop: '1rem'}}>
            <Link to="/contact" className="btn btn--blue btn--lg">Enroll Junior Track</Link>
          </div>
        </div>
      </section>

      {/* ── Roadmap ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label reveal">Curriculum Roadmap</p>
            <h2 className="reveal reveal--delay-1" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
              Building the Foundation
            </h2>
          </div>

          <div className="roadmap-grid">
            {/* Step 1 */}
            <div className="roadmap-card reveal">
              <span className="roadmap-card__num">01</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Visual Logic & Sequencing</h3>
                <p className="roadmap-card__desc">
                  Before we write syntax, we learn how to think. Students map out algorithms and logically sequence actions without writing a single line of text code, building robust mental models.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="roadmap-card reveal reveal--delay-1">
              <span className="roadmap-card__num">02</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Designing Digital Worlds</h3>
                <p className="roadmap-card__desc">
                  Transitioning into code, students learn HTML and CSS. They focus on structuring digital environments, adding styling, and understanding the grid that makes up modern web interfaces.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="roadmap-card reveal reveal--delay-2">
              <span className="roadmap-card__num">03</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Interactive Quests</h3>
                <p className="roadmap-card__desc">
                  Bringing static worlds to life. Using vanilla JavaScript, students learn to control the DOM, handle events, and create simple gamified interactions like scoring and animations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────── */}
      <section className="section projects-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label reveal">Hands-on Learning</p>
            <h2 className="reveal reveal--delay-1" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
              Creative Projects
            </h2>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card reveal">
              <div className="project-card__visual">
                <div className="squircle squircle--lg squircle--white">
                  <MousePointer2 size={24} color="black" />
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">Pixel Art Studio</h3>
                <p className="project-card__desc">
                  A pure HTML/CSS drawing tool where students learn about CSS variables, grid layouts, and hover states to create 16-bit characters.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card reveal reveal--delay-1">
              <div className="project-card__visual">
                <div className="squircle squircle--lg squircle--blue">
                  <Blocks size={24} color="white" />
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">Virtual Pet Buddy</h3>
                <p className="project-card__desc">
                  Using basic JavaScript, students create an interactive pet that responds to clicks, tracks hunger states, and animates its moods.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card reveal reveal--delay-2">
              <div className="project-card__visual">
                <div className="squircle squircle--lg squircle--gray">
                  <Gamepad2 size={24} />
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">Logic Maze Explorer</h3>
                <p className="project-card__desc">
                  A visual maze game where students define step-by-step algorithms to help a character navigate obstacles, reinforcing control flows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JuniorTrack;
