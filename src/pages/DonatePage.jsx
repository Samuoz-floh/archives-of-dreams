import React from "react";
import {
  Shirt,
  Footprints,
  Utensils,
  Gamepad2,
  FileText,
  GraduationCap,
  BookOpen,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import "./DonatePage.css";

function DonatePage() {
  const needs = [
    {
      icon: Shirt,
      title: "School Uniforms",
      description:
        "Help provide children with school uniforms so they can attend school prepared and with confidence.",
    },
    {
      icon: Footprints,
      title: "Shoes",
      description:
        "Support children with suitable shoes for their school days and everyday activities.",
    },
    {
      icon: Utensils,
      title: "Food",
      description:
        "Help support children's wellbeing by contributing toward food and essential nourishment.",
    },
    {
      icon: Gamepad2,
      title: "Play Materials",
      description:
        "Provide materials that encourage children to play, explore, create and learn.",
    },
    {
      icon: FileText,
      title: "Stationery",
      description:
        "Help provide essential learning materials that children can use throughout their education.",
    },
    {
      icon: GraduationCap,
      title: "Tuition Fees",
      description:
        "Help support a child's tuition fees and provide continued access to education and learning.",
    },
    {
      icon: BookOpen,
      title: "Full Fees",
      description:
        "Support the full school fees required to help a child continue their education and participate fully in school.",
    },
  ];

  return (
    <main className="donate-page">

      {/* HERO */}
      <section className="donate-page-hero">
        <div className="container">
          <div className="donate-page-hero-content">

            <span className="donate-page-label">
              SUPPORT OUR CHILDREN
            </span>

            <h1>
              Give a child
              <span>something to dream about.</span>
            </h1>

            <p>
              Your support can help create a caring learning
              environment where children have access to important
              school, education and everyday needs.
            </p>

            <div className="donate-page-hero-actions">

              <a
                href="#how-to-help"
                className="donate-page-primary-button"
              >
                See How You Can Help
                <ArrowRight size={18} />
              </a>

              <a
                href="/#contact"
                className="donate-page-secondary-button"
              >
                Contact the School
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="donate-page-intro">
        <div className="container">

          <div className="donate-page-intro-grid">

            <div>
              <span className="donate-page-section-label">
                WHY SUPPORT MATTERS
              </span>

              <h2>
                Small acts of support can
                <span> make a meaningful difference.</span>
              </h2>
            </div>

            <div>
              <p>
                Children need more than a classroom to thrive.
                Access to essential school supplies, food,
                clothing, educational support and opportunities
                for play can support their learning experience.
              </p>

              <p>
                By supporting Archives of Dreams Education Center,
                you can contribute toward needs that help children
                learn, grow and participate in school life.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* AREAS OF NEED */}
      <section
        className="donate-page-needs"
        id="how-to-help"
      >
        <div className="container">

          <div className="donate-page-section-header">

            <span className="donate-page-section-label">
              AREAS OF NEED
            </span>

            <h2>
              You can help provide
              <span> what children need.</span>
            </h2>

            <p>
              Support can be directed toward important items,
              educational costs and resources that contribute
              to children's school experience and wellbeing.
            </p>

          </div>

          <div className="donate-page-needs-grid">

            {needs.map((need) => {
              const Icon = need.icon;

              return (
                <article
                  className="donate-page-need-card"
                  key={need.title}
                >

                  <div className="donate-page-need-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{need.title}</h3>

                  <p>{need.description}</p>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* SUPPORT MESSAGE */}
      <section className="donate-page-message">
        <div className="container">

          <div className="donate-page-message-card">

            <div className="donate-page-message-icon">
              <HeartHandshake size={30} />
            </div>

            <div className="donate-page-message-content">

              <span>
                EVERY CONTRIBUTION MATTERS
              </span>

              <h2>
                Help create opportunities for children to learn,
                grow and dream.
              </h2>

              <p>
                Whether through school supplies, food, play
                materials, tuition fees, full fees or other
                support, your contribution can become part of
                a child's learning journey.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="donate-page-cta">
        <div className="container">

          <div className="donate-page-cta-inner">

            <div>
              <h2>
                Would you like to support the children?
              </h2>

              <p>
                Contact Archives of Dreams Education Center
                to learn how you can contribute.
              </p>
            </div>

            <a
              href="/#contact"
              className="donate-page-cta-button"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default DonatePage;