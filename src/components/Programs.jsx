import React from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  BookOpen,
  GraduationCap,
  Scissors,
  CookingPot,
  ArrowRight,
} from "lucide-react";
import "./Programs.css";

function Programs() {
  const programs = [
    {
      icon: Baby,
      title: "Baby Care",
      description:
        "A caring and nurturing environment where young children can feel safe, supported and encouraged as they begin their learning journey.",
    },
    {
      icon: BookOpen,
      title: "Pre-School",
      description:
        "A foundation for early learning where children can develop curiosity, creativity, confidence and essential learning skills.",
    },
    {
      icon: GraduationCap,
      title: "Primary",
      description:
        "Supporting children as they build knowledge, develop their abilities and grow in confidence through meaningful learning.",
    },
    {
      icon: Scissors,
      title: "Skill Development Programs",
      description:
        "Practical skills training designed to help learners develop useful abilities in sewing, hair dressing, hair cutting, cooking and beading.",
    },
  ];

  const skillPrograms = [
    "Sewing Skills",
    "Hair Dressing",
    "Hair Cutting",
    "Cooking",
    "Beading",
  ];

  return (
    <section
      className="programs section"
      id="programs"
      aria-labelledby="programs-heading"
    >
      <div className="container">
        <div className="programs-heading">
          <div className="programs-heading-text">
            <span className="section-label">OUR PROGRAMS</span>

            <h2 id="programs-heading">
              Learning that grows
              <span> with every child.</span>
            </h2>

            <p>
              Our programs support children at different stages
              of their learning journey, from early childhood
              through primary education, while also providing
              practical skill development opportunities.
            </p>
          </div>

          <Link
            to="/programs"
            className="programs-heading-link"
          >
            View All Programs
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <article
                className="program-card"
                key={program.title}
              >
                <div className="program-card-top">
                  <div
                    className="program-icon"
                    aria-hidden="true"
                  >
                    <Icon size={28} />
                  </div>

                  <span
                    className="program-number"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <Link
                  to="/programs"
                  className="program-card-link"
                >
                  Learn More
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="programs-bottom">
          <div
            className="programs-bottom-icon"
            aria-hidden="true"
          >
            <CookingPot size={25} />
          </div>

          <div>
            <strong>Skill Development Programs</strong>

            <span>
              {skillPrograms.join(" • ")}
            </span>
          </div>

          <Link
            to="/admissions"
            className="programs-bottom-button"
          >
            Explore Admissions
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Programs;
