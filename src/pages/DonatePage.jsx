import React from "react";
import {
  Shirt,
  Footprints,
  Utensils,
  Gamepad2,
  Pencil,
  GraduationCap,
  WalletCards,
  Heart,
  Smartphone,
  ArrowRight,
  Home,
  Users,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./DonatePage.css";

function DonatePage() {
  const donationItems = [
    {
      icon: Shirt,
      title: "School Uniforms",
      text: "Help provide school uniforms for children who need them.",
    },
    {
      icon: Footprints,
      title: "Shoes",
      text: "Support children with comfortable and suitable school shoes.",
    },
    {
      icon: Utensils,
      title: "Food",
      text: "Help provide nutritious food and support children's wellbeing.",
    },
    {
      icon: Gamepad2,
      title: "Play Materials",
      text: "Provide learning and play materials that encourage creativity.",
    },
    {
      icon: Pencil,
      title: "Stationery",
      text: "Help provide essential stationery and learning supplies.",
    },
    {
      icon: GraduationCap,
      title: "Tuition Fees",
      text: "Help support a child's tuition fees and access to education.",
    },
    {
      icon: WalletCards,
      title: "Full Fees",
      text: "Support the full school fees required to help a child continue their education.",
    },
  ];

  const urgentSupportItems = [
    {
      icon: Home,
      title: "School Rent",
      text: "Support the school with its ongoing rental costs so learning can continue in a stable environment.",
    },
    {
      icon: Users,
      title: "Teacher Compensation",
      text: "Help support the teachers who provide daily care, instruction, and guidance to the learners.",
    },
    {
      icon: Utensils,
      title: "Feeding Programme",
      text: "Help provide food and support the wellbeing of children throughout the school term.",
    },
    {
      icon: BookOpen,
      title: "Learning Materials",
      text: "Help provide textbooks and other learning resources needed by teachers and learners.",
    },
    {
      icon: Shirt,
      title: "School Uniforms",
      text: "Support the school's goal of developing and providing suitable uniforms for learners.",
    },
  ];

  return (
    <main className="donate-page">
      {/* =====================================================
          DONATE HERO
      ===================================================== */}
      <section
        className="donate-hero"
        aria-labelledby="donate-page-heading"
      >
        <div className="container">
          <div className="donate-hero-content">
            <span className="section-label">
              SUPPORT THE CHILDREN
            </span>

            <h1 id="donate-page-heading">
              Give a child the
              <span>opportunity to dream.</span>
            </h1>

            <p>
              Your support helps Archives of Dreams Education Center
              provide children with the education, care, learning
              materials, food, and other essential resources they
              need to learn, grow, and pursue their dreams.
            </p>

            <a
              href="#donation-payment"
              className="donate-primary-button"
            >
              Make a Donation
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          PAYMENT INFORMATION
      ===================================================== */}
      <section
        className="donate-payment-section"
        id="donation-payment"
        aria-labelledby="payment-heading"
      >
        <div className="container">
          <div className="donate-payment-grid">
            <div className="donate-payment-intro">
              <span className="section-label">
                HOW TO GIVE
              </span>

              <h2 id="payment-heading">
                Support the children
                <span>through M-PESA.</span>
              </h2>

              <p>
                You can support the work of Archives of Dreams
                Education Center using the M-PESA PayBill details
                below. Every contribution helps us respond to the
                needs of children and strengthen their access to
                education and essential support.
              </p>
            </div>

            <div className="mpesa-card">
              <div className="mpesa-card-header">
                <div
                  className="mpesa-icon"
                  aria-hidden="true"
                >
                  <Smartphone size={24} />
                </div>

                <div>
                  <span className="mpesa-label">
                    M-PESA
                  </span>

                  <h3>
                    Donation Payment Details
                  </h3>
                </div>
              </div>

              <div className="payment-detail">
                <span>PayBill Number</span>
                <strong>247247</strong>
              </div>

              <div className="payment-detail">
                <span>Account Number</span>
                <strong>0320185552726</strong>
              </div>

              <div className="payment-detail payment-detail-last">
                <span>Account Name</span>
                <strong>ARCHIVES OF DREAMS CBO</strong>
              </div>

              <div className="mpesa-instructions">
                <strong>How to donate</strong>

                <ol>
                  <li>
                    Open M-PESA on your phone.
                  </li>

                  <li>
                    Select Lipa na M-PESA.
                  </li>

                  <li>
                    Select PayBill.
                  </li>

                  <li>
                    Enter <strong>247247</strong> as the
                    Business Number.
                  </li>

                  <li>
                    Enter <strong>0320185552726</strong> as
                    the Account Number.
                  </li>

                  <li>
                    Enter the amount you wish to contribute
                    and confirm.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          URGENT SUPPORT PRIORITIES
      ===================================================== */}
      <section
        className="donate-support-section"
        aria-labelledby="urgent-support-heading"
      >
        <div className="container">
          <div className="donate-section-heading">
            <span className="section-label">
              CURRENT PRIORITIES
            </span>

            <h2 id="urgent-support-heading">
              Help meet the school's
              <span>urgent needs.</span>
            </h2>

            <p>
              The school has identified several important areas
              where support can help keep learning going and meet
              the basic needs of children.
            </p>
          </div>

          <div className="donate-support-grid">
            {urgentSupportItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="donate-support-card"
                  key={item.title}
                >
                  <div
                    className="donate-support-icon"
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          AREAS OF SUPPORT
      ===================================================== */}
      <section
        className="donate-support-section"
        aria-labelledby="support-heading"
      >
        <div className="container">
          <div className="donate-section-heading">
            <span className="section-label">
              WAYS TO HELP
            </span>

            <h2 id="support-heading">
              Your support can meet
              <span>real needs.</span>
            </h2>

            <p>
              Contributions can help provide children with the
              resources they need throughout their learning
              journey.
            </p>
          </div>

          <div className="donate-support-grid">
            {donationItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="donate-support-card"
                  key={item.title}
                >
                  <div
                    className="donate-support-icon"
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING CTA
      ===================================================== */}
      <section
        className="donate-cta"
        aria-labelledby="donate-cta-heading"
      >
        <div className="container">
          <div className="donate-cta-card">
            <div
              className="donate-cta-icon"
              aria-hidden="true"
            >
              <Heart size={26} />
            </div>

            <div className="donate-cta-content">
              <span className="section-label">
                MAKE A DIFFERENCE
              </span>

              <h2 id="donate-cta-heading">
                Every contribution can help
                <span>build a brighter future.</span>
              </h2>

              <p>
                Thank you for standing with Archives of Dreams
                Education Center and the children we serve.
              </p>
            </div>

            <Link
              to="/"
              className="donate-secondary-button"
            >
              Back to Home
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DonatePage;