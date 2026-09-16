import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-label">
            ARCHIVES OF DREAMS EDUCATION CENTER
          </span>

          <h1>
            Inspiring Dreams.
            <span>Building Futures.</span>
          </h1>

          <p className="hero-description">
            A caring and nurturing learning environment where every child
            is encouraged to learn, grow, discover their potential and
            build a bright future.
          </p>

          <div className="hero-actions">

            <Link
              to="/admissions"
              className="hero-primary-button"
            >
              Explore Admissions
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="hero-secondary-button"
            >
              Discover Our School
            </Link>

          </div>

          <div className="hero-highlights">

            <div className="hero-highlight">
              <div className="hero-highlight-icon">
                <HeartHandshake size={20} />
              </div>

              <div>
                <strong>Caring</strong>
                <span>Learning environment</span>
              </div>
            </div>

            <div className="hero-highlight">
              <div className="hero-highlight-icon">
                <BookOpen size={20} />
              </div>

              <div>
                <strong>Learning</strong>
                <span>Growing every day</span>
              </div>
            </div>

            <div className="hero-highlight">
              <div className="hero-highlight-icon">
                <GraduationCap size={20} />
              </div>

              <div>
                <strong>Future</strong>
                <span>Building potential</span>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-image-card">

            <div className="hero-image-placeholder">

              <img
                src={`${import.meta.env.BASE_URL}school-hero.jpg`}
                alt="Children and teachers at Archives of Dreams Education Center"
                className="hero-school-image"
              />

              <div className="hero-image-overlay">

                <div className="hero-image-overlay-content">
                  <strong>Every Child</strong>
                  <span>Can Dream.</span>
                  <small>Education is the key.</small>
                </div>

              </div>

            </div>

            <div className="hero-decoration hero-decoration-one"></div>
            <div className="hero-decoration hero-decoration-two"></div>

          </div>

          <div className="hero-floating-card">

            <div className="hero-floating-icon">
              <HeartHandshake size={22} />
            </div>

            <div>
              <strong>A place to grow</strong>
              <span>Learn • Grow • Dream</span>
            </div>

          </div>

        </div>

      </div>

      <div className="hero-bottom-shape"></div>
    </section>
  );
}

export default Hero;