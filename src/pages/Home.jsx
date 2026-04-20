import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import QuoteBanner from '../components/QuoteBanner';
import useScrollReveal from '../hooks/useScrollReveal';
import './Home.css';

const Home = () => {
  useScrollReveal();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="home">

      {/* ── Hero Split ─────────────────────────────── */}
      <section className="hero">
        {/* Left Panel — Light */}
        <div className="hero__panel hero__panel--light">
          <div className="hero__panel-inner">
            <p className="label reveal">For Schools</p>
            <h1 className="hero__title reveal reveal--delay-1">
              Teen AI<br />Builders
            </h1>
            <p className="hero__desc reveal reveal--delay-2">
              Students build a fully deployed AI-powered web application from scratch over 12 weeks. An escape room game that runs live on the internet.
            </p>
            <div className="hero__tags reveal reveal--delay-3">
              <span className="tag">Teen Track</span>
              <span className="tag">90 Min / Week</span>
              <span className="tag">AI Builder Certificate</span>
            </div>
            <Link to="/junior-track" className="hero__link reveal reveal--delay-4">
              Explore Teen AI Builders <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Panel — Dark */}
        <div className="hero__panel hero__panel--dark">
          {/* Code BG pattern */}
          <div className="hero__code-bg" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="hero__code-line" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
          <div className="hero__panel-inner">
            <span className="tag tag--dark reveal">Flagship Programme · 6 Months</span>
            <h2 className="hero__title hero__title--white reveal reveal--delay-1">
              AI Agentic<br />Engineering Bootcamp
            </h2>
            <p className="hero__desc hero__desc--muted reveal reveal--delay-2">
              Become an AI Orchestrator. The role companies will pay a premium for. Master the art of building and coordinating AI agents.
            </p>
            <div className="hero__tags reveal reveal--delay-3">
              <span className="tag tag--dark">64 Live Hours</span>
              <span className="tag tag--dark">Elevate Academy Certification</span>
            </div>
            <div className="hero__dark-actions reveal reveal--delay-4">
              <Link to="/pro-track" className="btn btn--blue">Contact for Pricing</Link>
              <Link to="/courses" className="btn btn--outline-white">View Curriculum</Link>
            </div>
            <Link to="/pro-track" className="hero__link hero__link--white reveal reveal--delay-5">
              Access Bootcamp Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote ─────────────────────────────────── */}
      <QuoteBanner
        quote={`"Empowering the next generation of digital architects and AI pioneers through rigorous, editorial-grade instruction."`}
        accent="digital architects"
        author="The Elevate Philosophy"
      />

      {/* ── Core Values ───────────────────────────── */}
      <section className="section values">
        <div className="container">
          <p className="label reveal">Core Values</p>
          <h2 className="values__title reveal reveal--delay-1">
            Crafting an Intellectual Atelier<br />for Modern Development
          </h2>

          <div className="values__grid">
            {/* Top row */}
            <div className="values__card values__card--light reveal">
              <div className="squircle squircle--md squircle--gray values__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 6V14L10 18L17 14V6L10 2Z" stroke="#0D0D0D" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h3 className="values__card-title">Architectural Foundation</h3>
              <p className="values__card-body">
                We don't just teach code — we teach system design. Every student learns to think like an engineer before they write a single line.
              </p>
            </div>

            <div className="values__card values__card--dark reveal reveal--delay-1">
              <div className="squircle squircle--md squircle--blue values__icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="white"/>
                </svg>
              </div>
              <span className="label label--blue" style={{color: 'rgba(130,140,255,1)'}}>AI-First Methodology</span>
              <h3 className="values__card-title values__card-title--white">
                AI is not an afterthought. It's integrated into our full-stack curriculum, from retrieval and workflow to LLM integrations.
              </h3>
            </div>

            {/* Bottom row — 3 smaller cards */}
            <div className="values__card values__card--sm reveal reveal--delay-2">
              <div className="squircle squircle--sm squircle--gray values__icon--sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="6" r="3" stroke="#0D0D0D" strokeWidth="1.5"/>
                  <path d="M2 14C2 11.24 4.686 9 8 9C11.314 9 14 11.24 14 14" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h4 className="values__card-sm-title">Expert Curators</h4>
              <p className="values__card-sm-body">Instruction led from industry veterans hand-picked to produce system clarity.</p>
            </div>

            <div className="values__card values__card--sm reveal reveal--delay-3">
              <div className="squircle squircle--sm squircle--gray values__icon--sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" stroke="#0D0D0D" strokeWidth="1.5"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" stroke="#0D0D0D" strokeWidth="1.5"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" stroke="#0D0D0D" strokeWidth="1.5"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" stroke="#0D0D0D" strokeWidth="1.5"/>
                </svg>
              </div>
              <h4 className="values__card-sm-title">Editorial Quality</h4>
              <p className="values__card-sm-body">Every module is designed to ensure precision and mastered through deliberate practise.</p>
            </div>

            <div className="values__card values__card--sm reveal reveal--delay-4">
              <div className="squircle squircle--sm squircle--gray values__icon--sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L10 6H14L11 9L12 13L8 11L4 13L5 9L2 6H6L8 2Z" stroke="#0D0D0D" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <h4 className="values__card-sm-title">Elite Network</h4>
              <p className="values__card-sm-body">Join over 5,000 learners who have transitioned into professional technology roles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────────── */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div className="home-cta__image-col">
            <div className="home-cta__image-card">
              <div className="home-cta__image-placeholder">
                <div className="home-cta__person-icon">
                  <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                    <circle cx="30" cy="22" r="16" fill="rgba(255,255,255,0.15)"/>
                    <path d="M4 75C4 57.327 15.74 43 30 43C44.26 43 56 57.327 56 75" stroke="rgba(255,255,255,0.15)" strokeWidth="4" fill="none"/>
                  </svg>
                </div>
              </div>
              <div className="home-cta__testimonial">
                <p className="home-cta__testimonial-text">
                  "The transition from basic logic to AI engineering felt seamless and liberating."
                </p>
                <span className="home-cta__testimonial-author">— Aditi Sharma, Full-Stack Engineer</span>
              </div>
            </div>
          </div>

          <div className="home-cta__text reveal">
            <h2 className="home-cta__title">
              Ready to redefine<br />your digital presence?
            </h2>
            <p className="home-cta__sub reveal reveal--delay-1">
              Join over 5,000 students who have transitioned into professional engineering roles through our curated learning paths.
            </p>
            <div className="home-cta__actions reveal reveal--delay-2">
              <Link to="/junior-track" className="btn btn--blue btn--lg">
                Explore Junior Track <ArrowRight size={16} />
              </Link>
              <Link to="/pro-track" className="btn btn--outline-dark btn--lg">
                Pro Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
