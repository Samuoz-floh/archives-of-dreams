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
  ArrowRight,
} from "lucide-react";
import "./Donation.css";

function Donation() {
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

  return (
    <section
      className="donation section"
      id="donate"
      aria-labelledby="donation-heading"
    >
      <div className="container">

        <div className="donation-wrapper">

          <div className="donation-content">

            <span className="section-label">
              SUPPORT A CHILD
            </span>

            <h2 id="donation-heading">
              Give a child the
              <span> tools to dream.</span>
            </h2>

            <p>
              Your support can help provide children with the
              resources they need to learn, play, grow, and
              pursue their dreams.
            </p>

            <a
              href="/#contact"
              className="donation-button"
            >
              Talk to the School
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>

          </div>


          <div className="donation-card">

            <div className="donation-card-header">

              <div
                className="donation-heart"
                aria-hidden="true"
              >
                <Heart size={22} />
              </div>

              <div>
                <h3>Ways You Can Help</h3>

                <p>
                  Every contribution can make a difference.
                </p>
              </div>

            </div>


            <div
              className="donation-list"
              aria-label="Ways to support the school"
            >

              {donationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="donation-item"
                    key={item.title}
                  >

                    <div
                      className="donation-item-icon"
                      aria-hidden="true"
                    >
                      <Icon size={21} />
                    </div>

                    <div>
                      <h4>{item.title}</h4>

                      <p>{item.text}</p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Donation;