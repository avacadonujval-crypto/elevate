import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, BrainCircuit, Blocks, Palette, Layers } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Courses.css';

const Courses = () => {
  useScrollReveal();
  useEffect(() => window.scrollTo(0, 0), []);

  const juniorCourses = [
    {
      title: "Visual Logic & Algorithms",
      desc: "Learn how to think like a computer without writing syntax. Map out algorithms and solve visual puzzles.",
      icon: <Blocks size={20} color="black" />,
      tags: ["Logic", "No-code", "Ages 8-12"]
    },
    {
      title: "HTML/CSS World Building",
      desc: "Design your first websites. Understand digital grid formats, styling basics, and responsive web design.",
      icon: <Palette size={20} color="black" />,
      tags: ["HTML", "CSS", "Design"]
    },
    {
      title: "Interactive JS Quests",
      desc: "Bring static pages to life. Introduce variables, functions, and DOM manipulation through game design.",
      icon: <Code2 size={20} color="black" />,
      tags: ["JavaScript", "DOM", "Games"]
    }
  ];

  const proCourses = [
    {
      title: "React Architecture Mastery",
      desc: "Master large-scale frontend development. Learn hooks, Redux/Zustand, routing, and performance optimization.",
      icon: <Layers size={20} color="white" />,
      tags: ["React", "State", "Enterprise"]
    },
    {
      title: "Full-Stack Node & SQL",
      desc: "Build robust REST APIs. Deep dive into Express, relational database design with PostgreSQL, and security.",
      icon: <Database size={20} color="white" />,
      tags: ["Node.js", "SQL", "Backend"]
    },
    {
      title: "AI Integration & Workflows",
      desc: "Integrate LLMs into applications. Learn RAG architectures, prompt engineering, and automated webhooks.",
      icon: <BrainCircuit size={20} color="white" />,
      tags: ["AI", "OpenAI", "Automation"]
    }
  ];

  return (
    <div className="courses-page">
      {/* ── Hero ───────────────────────────────────── */}
      <section className="courses-hero">
        <div className="container courses-hero__inner">
          <p className="label label--blue reveal">Our Curriculum</p>
          <h1 className="courses-hero__title reveal reveal--delay-1">
            Browse our curated courses.
          </h1>
          <p className="courses-hero__sub reveal reveal--delay-2">
            A meticulous collection of tracks ranging from gamified youth logic to enterprise-grade artificial intelligence engineering.
          </p>
        </div>
      </section>

      {/* ── Professional Catalog ───────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div className="courses-sec-header reveal">
            <h2 className="courses-sec-title">The Professional Catalog</h2>
            <p className="courses-sec-desc">For adults and ambitious learners wanting to enter the tech industry.</p>
          </div>
          
          <div className="course-grid">
            {proCourses.map((c, i) => (
              <div key={i} className={`course-card course-card--dark reveal reveal--delay-${i+1}`}>
                <div className="course-card__top">
                  <div className="squircle squircle--md squircle--blue">
                    {c.icon}
                  </div>
                  <div className="course-card__tags">
                    {c.tags.map(t => <span key={t} className="tag tag--dark">{t}</span>)}
                  </div>
                </div>
                <div className="course-card__body">
                  <h3 className="course-card__title course-card__title--white">{c.title}</h3>
                  <p className="course-card__desc course-card__desc--muted">{c.desc}</p>
                </div>
                <div className="course-card__footer">
                  <Link to="/contact" className="course-link course-link--white">
                    Apply for Course <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Junior Catalog ─────────────────────────── */}
      <section className="section bg-gray">
        <div className="container">
          <div className="courses-sec-header reveal">
            <h2 className="courses-sec-title">The Junior Catalog</h2>
            <p className="courses-sec-desc">For the next generation of builders starting their digital journey.</p>
          </div>
          
          <div className="course-grid">
            {juniorCourses.map((c, i) => (
              <div key={i} className={`course-card course-card--light reveal reveal--delay-${i+1}`}>
                <div className="course-card__top">
                  <div className="squircle squircle--md squircle--gray">
                    {c.icon}
                  </div>
                  <div className="course-card__tags">
                    {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="course-card__body">
                  <h3 className="course-card__title">{c.title}</h3>
                  <p className="course-card__desc">{c.desc}</p>
                </div>
                <div className="course-card__footer">
                  <Link to="/contact" className="course-link">
                    Enroll Student <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Courses;
