import React, { useState } from "react";
import {
  Phone,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="contact-heading">
          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            We'd love to
            <span> hear from you.</span>
          </h2>

          <p>
            Whether you are a parent, guardian, partner, or
            someone who would like to support the children,
            please feel free to contact us.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            {/* School Contact */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>

              <div>
                <h3>School Email</h3>

                <a href="mailto:Archivesofdreamske@gmail.com">
                  Archivesofdreamske@gmail.com
                </a>

                <span>
                  General school enquiries
                </span>
              </div>
            </div>

            {/* Director Contact */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>

              <div>
                <h3>Director — Esther Kukah</h3>

                <a href="tel:+254711329337">
                  +254 711 329 337
                </a>

                <a href="mailto:everlynesther1@gmail.com">
                  everlynesther1@gmail.com
                </a>

                <span>
                  Director, Archives of Dreams Education Center
                </span>
              </div>
            </div>

            {/* Board Chairperson Contact */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>

              <div>
                <h3>
                  Board Chairperson — Stephen B Omachi
                </h3>

                <a href="tel:+254727236785">
                  +254 727 236 785
                </a>

                <a href="mailto:omachistephe@gmail.com">
                  omachistephen@gmail.com
                </a>

                <span>
                  Board Chairperson
                </span>
              </div>
            </div>

            <div className="contact-note">
              <strong>
                Archives of Dreams Education Center
              </strong>

              <p>
                Education is the key.
              </p>

              <span>
                We look forward to connecting with you.
              </span>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-card">

            {submitted ? (
              <div className="contact-success">

                <div className="contact-success-icon">
                  <CheckCircle size={34} />
                </div>

                <h3>
                  Thank you!
                </h3>

                <p>
                  Your message has been received.
                  Our school team will be in touch.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="contact-reset-button"
                >
                  Send another message
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                </div>

                <div className="contact-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="message">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="How can we help you?"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;