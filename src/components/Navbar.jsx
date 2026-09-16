import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "navbar-link active" : "navbar-link";

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* SCHOOL BRAND */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src="/school-logo.png"
            alt="Archives of Dreams Education Center logo"
            className="navbar-logo-image"
          />

          <div className="navbar-school-name">
            <span>Archives of Dreams</span>
            <small>Education Center</small>
          </div>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">

          <NavLink
            to="/"
            end
            className={navLinkClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/programs"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Programs
          </NavLink>

          <NavLink
            to="/admissions"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Admissions
          </NavLink>

          <NavLink
            to="/donate"
            className={navLinkClass}
            onClick={closeMenu}
          >
            Donate
          </NavLink>

          <a
            href="/#contact"
            className="navbar-link"
            onClick={closeMenu}
          >
            Contact Us
          </a>

        </nav>


        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>


        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav className="navbar-mobile-links">

            <NavLink
              to="/"
              end
              className={navLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/programs"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Programs
            </NavLink>

            <NavLink
              to="/admissions"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Admissions
            </NavLink>

            <NavLink
              to="/donate"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Donate
            </NavLink>

            <a
              href="/#contact"
              className="navbar-link"
              onClick={closeMenu}
            >
              Contact Us
            </a>

          </nav>
        )}

      </div>
    </header>
  );
}

export default Navbar;