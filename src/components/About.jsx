import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";
import "./About.css";

function About() {
  return (
    <section
      className="about section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container">

        {/* SECTION INTRO */}
        <div className="about-heading">

          <div className="about-heading-text">
            <span className="section-label">
              ABOUT OUR SCHOOL
            </span>

            <h2 id="about-heading">
              Where every child's
              <span> dream can begin.</span>
            </h2>

            <p>
              Archives of Dreams Education Center is a caring
              learning environment dedicated to supporting
              children as they learn, grow and discover their
              potential.
            </p>
          </div>

          <Link
            to="/about"
            className="about-heading-link"
          >
            Learn More About Us
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>


        {/* ABOUT CONTENT */}
        <div className="about-grid">

          {/* LEFT FEATURE */}
          <div className="about-feature">

            <div
              className="about-feature-icon"
              aria-hidden="true"
            >
              <Heart size={26} />
            </div>

            <h3>
              Education is the key.
            </h3>

            <p>
              We believe that children thrive when they are
              surrounded by care, encouragement and meaningful
              learning opportunities.
            </p>

            <Link
              to="/programs"
              className="about-feature-link"
            >
              Explore Our Programs
              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </Link>

          </div>


          {/* VALUES */}
          <div className="about-values">

            <div className="about-value-card">

              <div
                className="about-value-icon"
                aria-hidden="true"
              >
                <Heart size={21} />
              </div>

              <div>
                <h3>Care</h3>

                <p>
                  Creating a nurturing environment where
                  children can feel supported and valued.
                </p>
              </div>

            </div>


            <div className="about-value-card">

              <div
                className="about-value-icon"
                aria-hidden="true"
              >
                <BookOpen size={21} />
              </div>

              <div>
                <h3>Learning</h3>

                <p>
                  Encouraging children to develop knowledge,
                  curiosity and confidence.
                </p>
              </div>

            </div>


            <div className="about-value-card">

              <div
                className="about-value-icon"
                aria-hidden="true"
              >
                <Users size={21} />
              </div>

              <div>
                <h3>Community</h3>

                <p>
                  Working together to support children's
                  growth and development.
                </p>
              </div>

            </div>


            <div className="about-value-card">

              <div
                className="about-value-icon"
                aria-hidden="true"
              >
                <Sparkles size={21} />
              </div>

              <div>
                <h3>Potential</h3>

                <p>
                  Helping every child discover their abilities
                  and build confidence for the future.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM CTA */}
        <div className="about-cta">

          <div>
            <strong>
              Give your child a place to learn and grow.
            </strong>

            <span>
              Discover the learning journey at Archives of
              Dreams Education Center.
            </span>
          </div>

          <Link
            to="/admissions"
            className="about-cta-button"
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

export default About;