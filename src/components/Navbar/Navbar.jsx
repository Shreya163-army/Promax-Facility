import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img src={logo} alt="Promax Facility Logo" />

        <div className="logo-text">
          <h2>PROMAX FACILITY</h2>
          <span>YOUR SAFETY, OUR PRIORITY</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="quote-btn">
        Get a Quote
      </a>

    </header>
  );
}

export default Navbar;