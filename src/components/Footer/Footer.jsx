import "./Footer.css";
import logo from "../../assets/images/logo.png";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaArrowUp
} from "react-icons/fa";

function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* COMPANY */}

                <div className="footer-column">

                    <div className="footer-logo">

                        <img src={logo} alt="PROMAX Facility" />

                        <div>
                            <h3>PROMAX FACILITY</h3>
                            <span>Your Safety, Our Priority</span>
                        </div>

                    </div>

                    <p>
                        PROMAX Facility provides professional Security Guards,
                        Housekeeping, Pest Control, Manpower Supply and complete
                        Facility Management solutions across commercial,
                        residential and industrial sectors.
                    </p>

                </div>

                {/* QUICK LINKS */}

                <div className="footer-column">

                    <h4>Quick Links</h4>

                    <ul>

                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#leadership">Leadership</a></li>
                        <li><a href="#clients">Clients</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>

                </div>

                {/* SERVICES */}

                <div className="footer-column">

                    <h4>Services</h4>

                    <ul>

                        <li>Security Services</li>
                        <li>Housekeeping</li>
                        <li>Pest Control</li>
                        <li>Manpower Supply</li>
                        <li>Facility Management</li>

                    </ul>

                </div>

                {/* CONTACT */}

                <div className="footer-column">

                    <h4>Contact</h4>

                    <p><FaPhoneAlt /> Vikas Patil (CEO)</p>
                    <a href="tel:+917058742998">+91 70587 42998</a>

                    <p><FaPhoneAlt /> Vandana Thakur (Director)</p>
                    <a href="tel:+918484955562">+91 84849 55562</a>

                    <p><FaPhoneAlt /> Mandar Sawant (Director)</p>
                    <a href="tel:+917506072204">+91 75060 72204</a>

                    <p><FaEnvelope /> <a href="mailto:promaxfacility9@gmail.com">
                        promaxfacility9@gmail.com
                    </a></p>

                    <p>
                        <FaMapMarkerAlt />
                        Borivali East, Mumbai, Maharashtra
                    </p>

                </div>

            </div>

            {/* FOOTER BOTTOM */}

            <div className="footer-bottom">

                <p>
                    © 2026 PROMAX Facility. All Rights Reserved.
                </p>

                <p>
                    Designed & Developed by
                    <strong> Shirke Technologies</strong>
                </p>

            </div>

            {/* BACK TO TOP */}

            <button
                className="scroll-top"
                onClick={scrollTop}
            >
                <FaArrowUp />
            </button>

        </footer>
    );
}

export default Footer;