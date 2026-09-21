import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  BookOpen,
  Users,
  Award,
  Target,
  Eye,
  History,
  Building2,
  GraduationCap,
  HandHeart,
  ArrowRight,
} from "lucide-react";
import "./AboutPage.css";

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Care",
      text: "We seek to create a caring and supportive environment where every child is valued, respected, and encouraged.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      text: "We help learners discover their abilities, build good study habits, and develop a strong foundation for lifelong learning.",
    },
    {
      icon: Users,
      title: "Community",
      text: "We believe strong relationships between children, families, teachers, communities, and partners help create lasting change.",
    },
    {
      icon: Award,
      title: "Excellence",
      text: "We encourage learners to strive for excellence, develop patience, build character, and work toward their potential.",
    },
  ];

  const goals = [
    "Help each learner discover and reach their potential.",
    "Strive for excellence in learning and personal development.",
    "Build strong networks linking community needs with God-sent partners.",
    "Build good study habits among pupils.",
    "Develop patience and perseverance in achieving goals.",
    "Nurture God-fearing children and communities.",
    "Provide a platform through which missionaries can serve God and the community.",
  ];

  const achievements = [
    "Started in a single room with 10 learners and one teacher.",
    "Grown into a rented school building with 9 rooms.",
    "Currently serving 70 learners with 6 teachers.",
    "Paid two months of school rent for January and February.",
    "Painted and prepared the school environment for learning.",
    "Purchased 20 desks with a capacity of four learners each.",
    "Provided 40 plastic chairs for preschool learners.",
    "Purchased three large preschool tables.",
    "Provided office desks and a chair.",
    "Acquired some essential learning materials.",
  ];

  return (
    <main className="about-page">
      {/* HERO */}
      <section
        className="about-page-hero"
        aria-labelledby="about-page-hero-heading"
      >
        <div className="container">
          <span className="section-label">ABOUT US</span>

          <h1 id="about-page-hero-heading">
            Inspiring dreams.
            <span>Building futures.</span>
          </h1>

          <p>
            Archives of Dreams Education Centre exists to help children
            discover their potential, access basic education, develop
            character, and build hope for a better future.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section
        className="about-story section"
        aria-labelledby="mission-vision-heading"
      >
        <div className="container">
          <div className="about-section-heading">
            <span className="section-label">OUR FOUNDATION</span>

            <h2 id="mission-vision-heading">
              A vision built around
              <span> people and purpose.</span>
            </h2>

            <p>
              Archives of Dreams Education Centre was established to respond
              to real educational needs within the community and to create
              opportunities for children whose dreams and potential are at
              risk.
            </p>
          </div>

          <div className="about-values-grid">
            <article className="about-value-card">
              <div className="about-value-icon" aria-hidden="true">
                <Target size={26} />
              </div>

              <h3>Our Mission</h3>

              <p>
                To transform the community one soul at a time.
              </p>
            </article>

            <article className="about-value-card">
              <div className="about-value-icon" aria-hidden="true">
                <Eye size={26} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To nurture and grow a community through establishment of
                sustainable programs.
              </p>
            </article>

            <article className="about-value-card">
              <div className="about-value-icon" aria-hidden="true">
                <GraduationCap size={26} />
              </div>

              <h3>Our Purpose</h3>

              <p>
                To provide children with an opportunity to learn, discover
                their potential, develop confidence, and build a stronger
                future.
              </p>
            </article>

            <article className="about-value-card">
              <div className="about-value-icon" aria-hidden="true">
                <HandHeart size={26} />
              </div>

              <h3>Our Partnership</h3>

              <p>
                To provide a meaningful platform for individuals, churches,
                organisations, and willing partners to support children and
                community dreams.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section
        className="about-approach section"
        aria-labelledby="history-heading"
      >
        <div className="container">
          <div className="about-approach-card">
            <div className="about-approach-icon" aria-hidden="true">
              <History size={28} />
            </div>

            <div className="about-approach-content">
              <span className="section-label">OUR HISTORY</span>

              <h2 id="history-heading">
                A school born from
                <span> a community need.</span>
              </h2>

              <p>
                Archives of Dreams Education Centre was birthed in September
                2024 after an encounter with six families who were struggling
                to afford school fees and basic school requirements.
              </p>

              <p>
                Ten children had been at home for approximately eight months
                after being sent away from school in February. The founder
                attempted to support them but soon realised that available
                resources were not enough to provide a lasting solution.
                This led to the decision to establish a school that could
                provide continued access to education.
              </p>

              <p>
                The school obtained the necessary certificate for running a
                school and began operating from a rented room, where all
                subjects were taught. Despite the time they had spent away
                from school, the learners were able to catch up with their
                studies.
              </p>

              <p>
                In December 2024, another promising community school closed
                indefinitely. The opportunity to use the available space
                became a significant step in the development of Archives of
                Dreams Education Centre.
              </p>

              <p>
                By January 8, the school had brought together the ten learners
                who had been receiving free education and also welcomed other
                learners who were stranded without access to school.
              </p>

              <p>
                Today, the school is serving 70 learners whose families face
                significant financial challenges. The school continues to
                work toward becoming a sustainable source of education,
                opportunity, hope, and community transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY BACKGROUND */}
      <section
        className="about-story section"
        aria-labelledby="community-heading"
      >
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-heading">
              <span className="section-label">OUR COMMUNITY</span>

              <h2 id="community-heading">
                Responding to
                <span> real needs.</span>
              </h2>
            </div>

            <div className="about-story-content">
              <p>
                The Huruma and Mathare communities have dense populations,
                with many families living in very limited spaces and facing
                significant economic challenges.
              </p>

              <p>
                Many children are of school-going age, while some families
                struggle to meet school requirements even when accessing
                government schools. Teenage pregnancies and other social and
                economic challenges can also affect children's educational
                opportunities.
              </p>

              <p>
                Government schools may not always accommodate every learner
                who needs a place. Community-based schools therefore play an
                important role in helping bridge the education gap.
              </p>

              <p>
                Archives of Dreams Education Centre is committed to being
                part of that response by providing education while working
                with families, teachers, partners, churches, and organisations
                that share a concern for children and the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section
        className="about-values section"
        aria-labelledby="goals-heading"
      >
        <div className="container">
          <div className="about-section-heading">
            <span className="section-label">OUR GOALS</span>

            <h2 id="goals-heading">
              What we are working
              <span> to achieve.</span>
            </h2>

            <p>
              Our goals guide the development of learners, families, the
              school, and the wider community.
            </p>
          </div>

          <div className="about-values-grid">
            {goals.map((goal, index) => (
              <article className="about-value-card" key={goal}>
                <div className="about-value-icon" aria-hidden="true">
                  <Target size={24} />
                </div>

                <h3>Goal {index + 1}</h3>

                <p>{goal}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section
        className="about-approach section"
        aria-labelledby="achievements-heading"
      >
        <div className="container">
          <div className="about-approach-card">
            <div className="about-approach-icon" aria-hidden="true">
              <Building2 size={28} />
            </div>

            <div className="about-approach-content">
              <span className="section-label">ACHIEVEMENTS</span>

              <h2 id="achievements-heading">
                Growing from a small beginning
                <span> toward a stronger future.</span>
              </h2>

              <p>
                Since its beginning, the school has made meaningful progress
                through the support of its community and partners.
              </p>

              <div className="about-achievements-list">
                {achievements.map((achievement) => (
                  <div
                    className="about-achievement-item"
                    key={achievement}
                  >
                    <span
                      className="about-achievement-marker"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT NEEDS */}
      <section
        className="about-story section"
        aria-labelledby="challenges-heading"
      >
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-heading">
              <span className="section-label">CURRENT NEEDS</span>

              <h2 id="challenges-heading">
                Help us keep the
                <span> dream moving.</span>
              </h2>
            </div>

            <div className="about-story-content">
              <p>
                The school continues to face important operational needs as
                it grows. These include rent, teacher compensation, additional
                desks, learning materials, games materials, office shelves,
                and a unified school uniform.
              </p>

              <p>
                The school also needs improved electricity access to support
                smooth morning learning and additional sanitation facilities
                as the number of learners grows.
              </p>

              <p>
                The management welcomes individuals, churches, organisations,
                and other partners who are willing to walk with the school and
                help provide children with hope and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="about-values section"
        aria-labelledby="values-heading"
      >
        <div className="container">
          <div className="about-section-heading">
            <span className="section-label">WHAT WE VALUE</span>

            <h2 id="values-heading">
              The principles that
              <span> guide us.</span>
            </h2>

            <p>
              Our work is built around values that support children,
              families, teachers, and the wider community.
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

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section
        className="about-approach section"
        aria-labelledby="partnership-heading"
      >
        <div className="container">
          <div className="about-approach-card">
            <div className="about-approach-icon" aria-hidden="true">
              <HandHeart size={28} />
            </div>

            <div className="about-approach-content">
              <span className="section-label">PARTNERSHIP</span>

              <h2 id="partnership-heading">
                There is a place for every
                <span> helping hand.</span>
              </h2>

              <p>
                Archives of Dreams Education Centre was established to create
                a platform through which willing individuals, churches,
                organisations, and other partners can support children whose
                dreams and potential are at risk.
              </p>

              <p>
                The school hopes to establish a church in the neighbourhood
                and continue developing sustainable programs that serve the
                wider community.
              </p>

              <p>
                Supporters who wish to walk more closely with the school may
                also receive specific stories about learners and families who
                need support.
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
              <span className="section-label">JOIN OUR JOURNEY</span>

              <h2 id="about-page-cta-heading">
                Help us transform
                <span> one soul at a time.</span>
              </h2>

              <p>
                Contact Archives of Dreams Education Centre to learn more
                about the school, its learners, and opportunities to support
                the community.
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