import React from "react";
import {
  Shirt,
  Footprints,
  Utensils,
  Gamepad2,
  Pencil,
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
  ];

  return (
    <section className="donation section" id="donate">
      <div className="container">

        <div className="donation-wrapper">

          <div className="donation-content">

            <span className="section-label">
              SUPPORT A CHILD
            </span>

            <h2>
              Give a child the
              <span> tools to dream.</span>
            </h2>

            <p>
              Your support can help provide children with the
              everyday resources they need to learn, play, grow,
              and pursue their dreams.
            </p>

            <a
              href="/#contact"
              className="donation-button"
            >
              Talk to the School
              <ArrowRight size={18} />
            </a>

          </div>

          <div className="donation-card">

            <div className="donation-card-header">
              <div className="donation-heart">
                <Heart size={22} />
              </div>

              <div>
                <h3>Ways You Can Help</h3>
                <p>
                  Every contribution can make a difference.
                </p>
              </div>
            </div>

            <div className="donation-list">

              {donationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="donation-item"
                    key={item.title}
                  >
                    <div className="donation-item-icon">
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