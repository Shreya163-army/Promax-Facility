import "./Contact.css";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaPaperPlane
} from "react-icons/fa";

function Contact() {
    return (
        <section className="contact" id="contact">

            <div className="contact-header">

                <p className="section-tag">
                    CONTACT US
                </p>

                <div className="section-line"></div>

                <h2>
                    Let's Talk About Your Security Needs
                </h2>

                <p>
                    Whether you require professional security personnel,
                    housekeeping, facility management or manpower services,
                    our team is ready to help.
                </p>

            </div>

            <div className="contact-container">

                {/* Center */}

                <div className="contact-info">

                    <div className="info-card">

                        <FaMapMarkerAlt className="info-icon" />

                        <div>
                            <h3>Office Address</h3>

                            <p>
                                Regd Office :- Office No-3/4, Jagardev Nagar, Kajupada, Borivali East, Mumbai-400066, Maharashtra. India.
                            </p>

                        </div>

                    </div>

                    <div className="info-card">

                        <FaPhoneAlt className="info-icon" />

                            <div>

                                <h3>Contact Our Team</h3>

                                <div className="contact-person">

                                    <strong>Vikas Patil</strong>
                                    <span> CEO </span>
                                    <p>+91 70587 42998</p>

                                </div>

                                <div className="contact-person">

                                    <strong>Vandana Thakur</strong>
                                    <span> Director </span>
                                    <p>+91 84849 55562</p>

                                </div>

                                <div className="contact-person">

                                    <strong>Mandar Sawant</strong>
                                    <span> Director </span>
                                    <p>+91 75060 72204</p>

                                </div>

                            </div>

                        </div>

                    <div className="info-card">

                        <FaEnvelope className="info-icon" />

                        <div>

                            <h3>Email</h3>

                            <p>info@promaxfacility.com</p>

                        </div>

                    </div>

                    <div className="info-card">

                        <FaClock className="info-icon" />

                        <div>

                            <h3>Working Hours</h3>

                            <p>Monday - Saturday</p>
                            <p>9:00 AM - 6:00 PM</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;