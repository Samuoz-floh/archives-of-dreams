import React from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  BookOpen,
  GraduationCap,
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
  ];

  return (
    <section className="programs section" id="programs">
      <div className="container">

        {/* SECTION HEADING */}
        <div className="programs-heading">

          <div className="programs-heading-text">
            <span className="section-label">
              OUR PROGRAMS
            </span>

            <h2>
              Learning that grows
              <span> with every child.</span>
            </h2>

            <p>
              Our programs support children at different stages
              of their learning journey, from early childhood
              through primary education.
            </p>
          </div>

          <Link
            to="/programs"
            className="programs-heading-link"
          >
            View All Programs
            <ArrowRight size={18} />
          </Link>

        </div>


        {/* PROGRAM CARDS */}
        <div className="programs-grid">

          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                className="program-card"
                key={program.title}
              >

                <div className="program-card-top">

                  <div className="program-icon">
                    <Icon size={28} />
                  </div>

                  <span className="program-number">
                    {programs.indexOf(program) + 1}
                  </span>

                </div>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <Link
                  to="/programs"
                  className="program-card-link"
                >
                  Learn More
                  <ArrowRight size={17} />
                </Link>

              </article>
            );
          })}

        </div>


        {/* BOTTOM MESSAGE */}
        <div className="programs-bottom">

          <div className="programs-bottom-icon">
            <GraduationCap size={25} />
          </div>

          <div>
            <strong>
              Supporting children at every stage.
            </strong>

            <span>
              Explore our programs and discover the learning
              opportunities available at Archives of Dreams
              Education Center.
            </span>
          </div>

          <Link
            to="/admissions"
            className="programs-bottom-button"
          >
            Explore Admissions
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Programs;