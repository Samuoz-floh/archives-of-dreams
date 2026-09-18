import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  BookOpen,
  Users,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import "./AboutPage.css";

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Care",
      text: "We strive to create a caring and supportive environment where every child feels valued, respected, and encouraged.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      text: "We encourage curiosity, discovery, creativity, and a strong foundation for lifelong learning.",
    },
    {
      icon: Users,
      title: "Community",
      text: "We believe positive relationships between children, families, teachers, and the wider community help children thrive.",
    },
    {
      icon: Award,
      title: "Excellence",
      text: "We encourage children to develop confidence, character, creativity, and a desire to always do their best.",
    },
  ];

  return (
    <main className="about-page">

      {/* HERO */}
      <section
        className="about-page-hero"
        aria-labelledby="about-page-hero-heading"
      >
        <div className="container">

          <span className="section-label">
            ABOUT US
          </span>

          <h1 id="about-page-hero-heading">
            Where every child's
            <span> dream can begin.</span>
          </h1>

          <p>
            Archives of Dreams Education Center is a learning
            environment focused on helping children discover their
            abilities, develop confidence, and build strong
            foundations for the future.
          </p>

        </div>
      </section>


      {/* STORY */}
      <section
        className="about-story section"
        aria-labelledby="about-story-heading"
      >
        <div className="container">

          <div className="about-story-grid">

            <div className="about-story-heading">

              <span className="section-label">
                OUR STORY
              </span>

              <h2 id="about-story-heading">
                Education is the
                <span> key.</span>
              </h2>

            </div>

            <div className="about-story-content">

              <p>
                Every child has unique abilities, dreams, and
                potential. We believe education should provide
                children with the opportunity to discover those
                abilities and develop them in a supportive
                environment.
              </p>

              <p>
                At Archives of Dreams Education Center, our focus
                is on creating meaningful learning experiences that
                encourage children to explore, ask questions,
                develop confidence, and build positive values.
              </p>

              <p>
                From early childhood through primary education,
                alongside practical Skill Development Programs,
                we aim to provide opportunities that help learners
                build a strong foundation for the future.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* VALUES */}
      <section
        className="about-values section"
        aria-labelledby="about-values-heading"
      >
        <div className="container">

          <div className="about-section-heading">

            <span className="section-label">
              WHAT WE VALUE
            </span>

            <h2 id="about-values-heading">
              The principles that
              <span> guide us.</span>
            </h2>

            <p>
              Our approach is built around values that support
              children's development both inside and outside the
              classroom.
            </p>

          </div>

          <div className="about-values-grid">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  className="about-value-card"
                  key={value.title}
                >

                  <div
                    className="about-value-icon"
                    aria-hidden="true"
                  >
                    <Icon size={26} />
                  </div>

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* EDUCATIONAL APPROACH */}
      <section
        className="about-approach section"
        aria-labelledby="about-approach-heading"
      >
        <div className="container">

          <div className="about-approach-card">

            <div
              className="about-approach-icon"
              aria-hidden="true"
            >
              <Sparkles size={28} />
            </div>

            <div className="about-approach-content">

              <span className="section-label">
                OUR APPROACH
              </span>

              <h2 id="about-approach-heading">
                Helping children
                <span> discover their potential.</span>
              </h2>

              <p>
                We believe children learn best when they are
                supported, encouraged, and given opportunities to
                explore the world around them.
              </p>

              <p>
                Our learning environment aims to combine education,
                care, creativity, positive relationships, character
                development, and practical skill development.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section
        className="about-page-cta"
        aria-labelledby="about-page-cta-heading"
      >
        <div className="container">

          <div className="about-cta-card">

            <div>

              <span className="section-label">
                JOIN OUR JOURNEY
              </span>

              <h2 id="about-page-cta-heading">
                Let's build brighter
                <span> futures together.</span>
              </h2>

              <p>
                Have questions about Archives of Dreams Education
                Center? Our school team is ready to hear from you.
              </p>

            </div>

            <Link
              to="/#contact"
              className="about-cta-button"
            >
              Contact the School
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default AboutPage;