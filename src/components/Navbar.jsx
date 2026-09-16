import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img
            src={`${import.meta.env.BASE_URL}school-logo.png`}
            alt="Archives of Dreams Education Center logo"
            className="navbar-logo-image"
          />

          <div className="navbar-school-name">
            <span>Archives of Dreams</span>
            <small>Education Center</small>
          </div>
        </Link>

        <nav className="navbar-links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/programs" onClick={closeMenu}>
            Programs
          </Link>

          <Link to="/admissions" onClick={closeMenu}>
            Admissions
          </Link>

          <Link to="/donate" onClick={closeMenu}>
            Donate
          </Link>

          <Link to="/#contact" onClick={closeMenu}>
            Contact Us
          </Link>
        </nav>

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

        {menuOpen && (
          <nav className="navbar-mobile-links">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About
            </Link>

            <Link to="/programs" onClick={closeMenu}>
              Programs
            </Link>

            <Link to="/admissions" onClick={closeMenu}>
              Admissions
            </Link>

            <Link to="/donate" onClick={closeMenu}>
              Donate
            </Link>

            <Link to="/#contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </nav>
        )}

      </div>
    </header>
  );
}

export default Navbar;