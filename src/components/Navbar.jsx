import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
setMenuOpen(false);
};

const toggleMenu = () => {
setMenuOpen((open) => !open);
};

return (
<header className="navbar">
<div className="container navbar-inner">

    <Link
      to="/"
      className="navbar-brand"
      onClick={closeMenu}
      aria-label="Archives of Dreams Education Center home"
    >
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

    <nav
      className="navbar-links"
      aria-label="Main navigation"
    >
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
      onClick={toggleMenu}
      aria-label={
        menuOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      type="button"
    >
      {menuOpen ? (
        <X size={26} aria-hidden="true" />
      ) : (
        <Menu size={26} aria-hidden="true" />
      )}
    </button>

    {menuOpen && (
      <nav
        id="mobile-navigation"
        className="navbar-mobile-links"
        aria-label="Mobile navigation"
      >
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