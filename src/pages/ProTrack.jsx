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
          <p className="label label--blue reveal">Professional Track</p>
          <h1 className="track-hero__title reveal reveal--delay-1">
            Enterprise Full-Stack &<br />AI Engineering
          </h1>
          <p className="track-hero__sub reveal reveal--delay-2">
            A rigorous curriculum designed for the ambitious professional. We move beyond basic syntax into the architecture of modern engineering, preparing you for the frontier of AI and automation.
          </p>
          <div className="reveal reveal--delay-3" style={{marginTop: '1rem'}}>
            <Link to="/contact" className="btn btn--blue btn--lg">Apply for Professional Track</Link>
          </div>
        </div>
      </section>

      {/* ── Roadmap ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label reveal">Curriculum Roadmap</p>
            <h2 className="reveal reveal--delay-1" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
              Mastering the Stack
            </h2>
          </div>

          <div className="roadmap-grid">
            {/* Step 1 */}
            <div className="roadmap-card reveal">
              <span className="roadmap-card__num">01</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Frontend Architecture</h3>
                <p className="roadmap-card__desc">
                  Deep dive into React, state management, and modern CSS frameworks. We focus on building performant, responsive, and accessible interfaces that scale to enterprise demands.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="roadmap-card reveal reveal--delay-1">
              <span className="roadmap-card__num">02</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Backend Services & APIs</h3>
                <p className="roadmap-card__desc">
                  Constructing the engine. Students learn Node.js, database integration (SQL/NoSQL), and secure authentication patterns to build robust backend REST and GraphQL APIs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="roadmap-card reveal reveal--delay-2">
              <span className="roadmap-card__num">03</span>
              <div className="roadmap-card__content">
                <h3 className="roadmap-card__title">Generative AI Integration</h3>
                <p className="roadmap-card__desc">
                  Integrating the future. We cover integrating LLMs, managing vector databases, and automating complex workflows using tools like OpenAI/Anthropic APIs and n8n.
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
            <p className="label reveal">Real-World Execution</p>
            <h2 className="reveal reveal--delay-1" style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>
              Portfolio Projects
            </h2>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card reveal">
              <div className="project-card__visual" style={{ background: '#0A0A1A' }}>
                <div className="squircle squircle--lg squircle--blue">
                  <TerminalSquare size={24} color="white" />
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">AI Chatbot Portal</h3>
                <p className="project-card__desc">
                  A React/Node application integrating RAG (Retrieval-Augmented Generation) to create a conversational AI that can answer questions based on custom document uploads.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card reveal reveal--delay-1">
              <div className="project-card__visual" style={{ background: '#111827' }}>
                <div className="squircle squircle--lg squircle--white">
                  <LineChart size={24} color="black" />
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">SaaS Analytics Dashboard</h3>
                <p className="project-card__desc">
                  A secure, real-time data visualization dashboard featuring complex charting, user role management, and a robust PostgreSQL backend.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card reveal reveal--delay-2">
              <div className="project-card__visual" style={{ background: '#0F172A' }}>
                <div className="squircle squircle--lg squircle--gray">
                  <Workflow size={24} color="black" />
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">Automated Workflow Engine</h3>
                <p className="project-card__desc">
                  Designing a serverless architecture capable of listening to webhooks, processing data through an LLM, and dispatching actionable emails continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProTrack;
