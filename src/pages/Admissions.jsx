import React from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Phone,
} from "lucide-react";
import "./Admissions.css";

function Admissions() {
  const programs = [
    {
      icon: Baby,
      title: "Baby Care",
      description:
        "A caring and nurturing environment for young children as they begin their learning journey.",
    },
    {
      icon: BookOpen,
      title: "Pre-School",
      description:
        "A supportive foundation where children can develop curiosity, confidence and early learning skills.",
    },
    {
      icon: GraduationCap,
      title: "Primary",
      description:
        "Supporting children as they develop knowledge, abilities and confidence through meaningful learning.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Make an Enquiry",
      description:
        "Contact the school to learn more about the available learning programs and admission process.",
    },
    {
      number: "02",
      title: "Discuss Your Child's Needs",
      description:
        "Share information about your child so the school can guide you toward the appropriate learning stage.",
    },
    {
      number: "03",
      title: "Complete the Admission Process",
      description:
        "Follow the school's guidance on the information and steps required to proceed with admission.",
    },
    {
      number: "04",
      title: "Begin the Learning Journey",
      description:
        "Prepare your child to begin learning, growing and discovering their potential at Archives of Dreams.",
    },
  ];

  return (
    <main className="admissions-page">

      {/* HERO */}
      <section className="admissions-hero">
        <div className="container">
          <div className="admissions-hero-content">
            <span className="admissions-label">
              ADMISSIONS
            </span>

            <h1>
              Give your child
              <span>a place to dream.</span>
            </h1>

            <p>
              Discover a caring learning environment where
              children are encouraged to learn, grow and build
              confidence for the future.
            </p>

            <div className="admissions-hero-actions">
              <a
                href="#admission-process"
                className="admissions-primary-button"
              >
                Admission Process
                <ArrowRight size={18} />
              </a>

              <a
                href="/#contact"
                className="admissions-secondary-button"
              >
                Contact the School
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="admissions-programs">
        <div className="container">

          <div className="admissions-section-header">
            <span className="admissions-section-label">
              LEARNING OPTIONS
            </span>

            <h2>
              Find the right
              <span> learning stage.</span>
            </h2>

            <p>
              Archives of Dreams Education Center provides
              learning opportunities across Baby Care,
              Pre-School and Primary education.
            </p>
          </div>

          <div className="admissions-program-grid">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  className="admissions-program-card"
                  key={program.title}
                >
                  <div className="admissions-program-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <Link
                    to="/programs"
                    className="admissions-program-link"
                  >
                    Learn More
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section
        className="admissions-process"
        id="admission-process"
      >
        <div className="container">

          <div className="admissions-section-header">
            <span className="admissions-section-label">
              HOW IT WORKS
            </span>

            <h2>
              A simple path to
              <span> getting started.</span>
            </h2>

            <p>
              Begin by contacting the school and learning about
              the admission process for your child.
            </p>
          </div>

          <div className="admissions-steps">
            {steps.map((step) => (
              <div
                className="admissions-step"
                key={step.number}
              >
                <div className="admissions-step-number">
                  {step.number}
                </div>

                <div className="admissions-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="admissions-contact">
        <div className="container">

          <div className="admissions-contact-card">

            <div className="admissions-contact-icon">
              <Phone size={28} />
            </div>

            <div className="admissions-contact-content">
              <span>HAVE QUESTIONS?</span>

              <h2>
                We are here to help you get started.
              </h2>

              <p>
                Contact the school to learn more about
                admissions and the learning opportunities
                available for your child.
              </p>
            </div>

            <a
              href="/#contact"
              className="admissions-contact-button"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="admissions-final">
        <div className="container">

          <div className="admissions-final-inner">

            <div>
              <span>EDUCATION IS THE KEY.</span>

              <h2>
                Every child's journey begins
                with an opportunity.
              </h2>
            </div>

            <Link
              to="/programs"
              className="admissions-final-button"
            >
              Explore Programs
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Admissions;