import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="logo">
        <img src={logo} alt="Promax Facility Logo" />

        <div className="logo-text">
          <h2>PROMAX</h2>
        </div>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#why" onClick={() => setMenuOpen(false)}>Why Choose Us</a></li>
        <li><a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a></li>
        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
        <li><a href="#clients" onClick={() => setMenuOpen(false)}>Clients</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {/* Hamburger Menu */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;