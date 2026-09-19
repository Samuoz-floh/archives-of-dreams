import React from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  BookOpen,
  GraduationCap,
  Scissors,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import "./ProgramsPage.css";

import child5 from "../assets/child5.jpeg";
import child6 from "../assets/child6.jpeg";

function ProgramsPage() {
  const programs = [
    {
      number: "01",
      icon: Baby,
      title: "Baby Care",
      subtitle: "A gentle beginning",
      description:
        "A caring and nurturing environment for young children as they begin their early learning journey.",
      points: [
        "Safe and caring environment",
        "Early learning experiences",
        "Encouragement and support",
      ],
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Pre-School",
      subtitle: "Building strong foundations",
      description:
        "A learning environment where children can develop curiosity, creativity, confidence and essential early skills.",
      points: [
        "Early childhood learning",
        "Curiosity and creativity",
        "Confidence and social development",
      ],
    },
    {
      number: "03",
      icon: GraduationCap,
      title: "Primary",
      subtitle: "Growing knowledge and confidence",
      description:
        "Supporting children as they build knowledge, develop their abilities and prepare for the next stages of learning.",
      points: [
        "Knowledge and understanding",
        "Development of abilities",
        "Confidence for the future",
      ],
    },
    {
      number: "04",
      icon: Scissors,
      title: "Skill Development Programs",
      subtitle: "Building practical skills",
      description:
        "Practical skills training designed to help learners develop useful abilities and explore opportunities for personal and professional growth.",
      points: [
        "Sewing Skills",
        "Hair Dressing",
        "Hair Cutting",
        "Cooking",
        "Beading",
      ],
    },
  ];

  return (
    <main className="programs-page">
      <section className="programs-page-hero">
        <div className="container">
          <div className="programs-page-hero-content">
            <span className="programs-page-label">
              OUR PROGRAMS
            </span>

            <h1>
              Learning that grows
              <span>with every child.</span>
            </h1>

            <p>
              Discover learning opportunities designed to support
              children at different stages of their educational
              journey and develop practical skills for the future.
            </p>
          </div>
        </div>
      </section>

      <section className="programs-page-intro">
        <div className="container">
          <div className="programs-page-intro-grid">
            <div>
              <span className="programs-page-section-label">
                SUPPORTING EVERY STAGE
              </span>

              <h2>
                A learning journey built
                <span> around the child.</span>
              </h2>
            </div>

            <div>
              <p>
                Archives of Dreams Education Center provides
                learning opportunities across Baby Care,
                Pre-School, Primary education and Skill
                Development Programs.
              </p>

              <p>
                Each program provides an opportunity for learning,
                growth, discovery and the development of useful
                skills for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-page-list">
        <div className="container">
          <div className="programs-page-list-header">
            <span className="programs-page-section-label">
              WHAT WE OFFER
            </span>

            <h2>
              Explore our
              <span> programs.</span>
            </h2>
          </div>

          <div className="programs-page-grid">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  className="programs-page-card"
                  key={program.title}
                >
                  <div className="programs-page-card-top">
                    <div
                      className="programs-page-icon"
                      aria-hidden="true"
                    >
                      <Icon size={30} />
                    </div>

                    <span className="programs-page-number">
                      {program.number}
                    </span>
                  </div>

                  <span className="programs-page-subtitle">
                    {program.subtitle}
                  </span>

                  <h3>{program.title}</h3>

                  <p className="programs-page-description">
                    {program.description}
                  </p>

                  <div className="programs-page-points">
                    {program.points.map((point) => (
                      <div
                        className="programs-page-point"
                        key={point}
                      >
                        <span
                          className="programs-page-check"
                          aria-hidden="true"
                        >
                          ✓
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="baby-care-gallery-section"
        aria-labelledby="baby-care-gallery-heading"
      >
        <div className="container">
          <div className="baby-care-gallery-header">
            <span className="programs-page-section-label">
              BABY CARE PROGRAM
            </span>

            <h2 id="baby-care-gallery-heading">
              Learning through
              <span> care and play.</span>
            </h2>

            <p>
              Our Baby Care program provides a caring environment
              where young children can learn, play and grow.
            </p>
          </div>

          <div className="baby-care-gallery">
            <figure className="baby-care-photo">
              <div className="baby-care-photo-image">
                <img
                  src={child5}
                  alt="Baby Care program activity at Archives of Dreams Education Center"
                  loading="lazy"
                />
              </div>

              <figcaption>
                <strong>Baby Care Activities</strong>
                <span>
                  Children participating in supervised indoor play
                  and learning activities.
                </span>
              </figcaption>
            </figure>

            <figure className="baby-care-photo">
              <div className="baby-care-photo-image">
                <img
                  src={child6}
                  alt="Children learning through play in the Baby Care program"
                  loading="lazy"
                />
              </div>

              <figcaption>
                <strong>Learning Through Play</strong>
                <span>
                  Children enjoying interactive play in the Baby Care
                  environment.
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="programs-page-message">
        <div className="container">
          <div className="programs-page-message-card">
            <div
              className="programs-page-message-icon"
              aria-hidden="true"
            >
              <HeartHandshake size={30} />
            </div>

            <div className="programs-page-message-content">
              <span>EDUCATION IS THE KEY.</span>

              <h2>
                Every child deserves the opportunity
                to learn, grow and dream.
              </h2>

              <p>
                We believe that a supportive learning environment
                can help children develop their abilities and
                approach the future with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-page-cta">
        <div className="container">
          <div className="programs-page-cta-inner">
            <div>
              <h2>Ready to begin the journey?</h2>

              <p>
                Learn more about admissions at Archives of
                Dreams Education Center.
              </p>
            </div>

            <Link
              to="/admissions"
              className="programs-page-cta-button"
            >
              Explore Admissions
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProgramsPage;