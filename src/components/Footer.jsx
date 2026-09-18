import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="footer"
      aria-label="Archives of Dreams Education Center footer"
    >
      <div className="container">

        {/* FOOTER MAIN CONTENT */}
        <div className="footer-grid">

          {/* SCHOOL BRAND */}
          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
              aria-label="Archives of Dreams Education Center home"
            >

              <img
                src={`${import.meta.env.BASE_URL}school-logo.png`}
                alt="Archives of Dreams Education Center logo"
                className="footer-logo-image"
              />

              <div>
                <strong>Archives of Dreams</strong>
                <span>Education Center</span>
              </div>

            </Link>

            <p className="footer-tagline">
              Education is the key.
            </p>

            <p className="footer-description">
              A caring learning environment where every child's dream can begin.
            </p>

          </div>


          {/* QUICK LINKS */}
          <nav
            className="footer-column"
            aria-label="Quick links"
          >
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/donate">Donate</Link>
            <a href="/#contact">Contact Us</a>
          </nav>


          {/* PROGRAMS */}
          <nav
            className="footer-column"
            aria-label="School programs"
          >
            <h3>Our Programs</h3>

            <Link to="/programs">Baby Care</Link>
            <Link to="/programs">Pre-School</Link>
            <Link to="/programs">Primary</Link>
            <Link to="/programs">
              Skill Development Programs
            </Link>
            <Link to="/admissions">Admissions</Link>
          </nav>


          {/* CONTACT INFORMATION */}
          <div className="footer-column footer-contact">

            <h3>Contact Us</h3>


            {/* DIRECTOR */}
            <div className="footer-contact-item">

              <Phone
                size={18}
                aria-hidden="true"
              />

              <div>
                <strong>Director</strong>

                <span>Esther Kukah</span>

                <a href="tel:+254711329337">
                  +254 711 329 337
                </a>

                <a href="mailto:everlynesther1@gmail.com">
                  everlynesther1@gmail.com
                </a>
              </div>

            </div>


            {/* BOARD CHAIRPERSON */}
            <div className="footer-contact-item">

              <Phone
                size={18}
                aria-hidden="true"
              />

              <div>
                <strong>Board Chairperson</strong>

                <span>Stephen B Omachi</span>

                <a href="tel:+254727236785">
                  +254 727 236 785
                </a>

                <a href="mailto:omachistephen@gmail.com">
                  omachistephen@gmail.com
                </a>
              </div>

            </div>


            {/* SCHOOL EMAIL */}
            <div className="footer-contact-item">

              <Mail
                size={18}
                aria-hidden="true"
              />

              <div>
                <strong>School Email</strong>

                <span>
                  New school email coming soon
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* SUPPORT SECTION */}
        <div className="footer-support">

          <div>
            <strong>
              Help us support children's dreams.
            </strong>

            <span>
              Your support can provide uniforms, shoes, food,
              play materials and stationery.
            </span>
          </div>

          <Link to="/donate">
            Support the Children
            <ArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Archives of Dreams
            Education Center. All rights reserved.
          </p>

          <p>
            Education is the key.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;