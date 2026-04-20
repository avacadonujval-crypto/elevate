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
      title: "Teen AI Builders",
      desc: "Students build a fully deployed AI-powered web application from scratch over 12 weeks. The application is an escape room game that runs live on the internet.",
      icon: <Blocks size={20} color="black" />,
      tags: ["12 Weeks", "90 Min / Week", "AI Builder Certificate"]
    },
    {
      title: "AI Escape Room",
      desc: "An AI model generates a different puzzle every time it is played. Students write every line of code, understand it, and deploy it themselves.",
      icon: <Palette size={20} color="black" />,
      tags: ["HTML & CSS", "JavaScript", "AI API Integration"]
    },
    {
      title: "Live Deployment",
      desc: "Master the tools to host your code live on the web, making your project accessible to anyone with a browser at a shareable URL.",
      icon: <Code2 size={20} color="black" />,
      tags: ["Deployment", "Live URL", "Teen Track"]
    }
  ];

  const proCourses = [
    {
      title: "AI Agentic Engineering Bootcamp",
      desc: "Become an AI Orchestrator. Every student—PHP, Java, Python, or Full Stack—is a potential candidate to build and coordinate AI agents.",
      icon: <Layers size={20} color="white" />,
      tags: ["PHP/Java/Python", "Full Stack", "6 Months"]
    },
    {
      title: "Advanced AI with n8n",
      desc: "Master advanced AI workflows using n8n and Python. Build production-ready agentic systems that automate complex business tasks.",
      icon: <Database size={20} color="white" />,
      tags: ["n8n Workflows", "Python AI", "Professional"]
    },
    {
      title: "Capstone & Certification",
      desc: "4 months training + 2-month capstone. Elevate Academy certification upon successful completion of your AI orchestration project.",
      icon: <BrainCircuit size={20} color="white" />,
      tags: ["64 Live Hours", "Certification", "Adults Only"]
    }
  ];

  const corporateCourses = [
    {
      title: "Corporate AI Training",
      desc: "AI training tailored to your teams - from AI prompts that speed up daily work to AI workflows that compress entire processes.",
      icon: <Layers size={20} color="black" />,
      tags: ["HR/Finance", "Sales/Legal", "Operations"]
    },
    {
      title: "Customized Workflows",
      desc: "Customised to your function, your workflows, your documents. Available online or onsite.",
      icon: <Database size={20} color="black" />,
      tags: ["Customized", "Online/Onsite", "Tailored"]
    }
  ];

  return (
    <div className="courses-page">
      {/* ── Hero ───────────────────────────────────── */}
      <section className="courses-hero">
        <div className="container courses-hero__inner">
          <p className="label label--blue reveal">Our Curriculum</p>
          <h1 className="courses-hero__title reveal reveal--delay-1">
            Browse our AI-first programs.
          </h1>
          <p className="courses-hero__sub reveal reveal--delay-2">
            Exactly the content you need to master the agentic frontier, from Teen AI Builders to our flagship AI Agentic Engineering Bootcamp.
          </p>
        </div>
      </section>

      {/* ── Professional Catalog ───────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div className="courses-sec-header reveal">
            <h2 className="courses-sec-title">AI Agentic Engineering Bootcamp</h2>
            <p className="courses-sec-desc">Become an AI Orchestrator. The role companies will pay a premium for.</p>
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
                    Contact for Pricing <ArrowRight size={14} />
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
            <h2 className="courses-sec-title">Teen AI Builders</h2>
            <p className="courses-sec-desc">Students build a fully deployed AI-powered web application from scratch over 12 weeks.</p>
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
                    Bring to Your School <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate Catalog ─────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div className="courses-sec-header reveal">
            <h2 className="courses-sec-title">Corporate AI Training</h2>
            <p className="courses-sec-desc">AI training tailored to your teams—from prompts to workflows that compress processes.</p>
          </div>
          
          <div className="course-grid">
            {corporateCourses.map((c, i) => (
              <div key={i} className={`course-card course-card--light reveal reveal--delay-${i+1}`}>
                <div className="course-card__top">
                  <div className="squircle squircle--md squircle--blue">
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
                    Explore Corporate Training <ArrowRight size={14} />
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
