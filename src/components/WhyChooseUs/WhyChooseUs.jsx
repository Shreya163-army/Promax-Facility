import "./WhyChooseUs.css";

import {
  FaShieldAlt,
  FaUserShield,
  FaClock,
  FaAward
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why" id="why">

      <div className="why-heading">

        <p className="section-tag">
          WHY CHOOSE PROMAX
        </p>

        <div className="section-line"></div>

        <h2>
          Why Businesses Trust
          <br />
          Promax Facility
        </h2>

        <p>
          We combine experienced professionals, modern security
          practices and customer-focused facility management
          solutions to deliver reliable services across
          commercial, residential and industrial sectors.
        </p>

      </div>

      <div className="why-grid">

        <div className="why-card">
          <FaShieldAlt className="why-icon" />

          <h3>Reliable Security</h3>

          <p>
            Highly trained security personnel ensuring complete
            protection for your business, employees and assets.
          </p>
        </div>

        <div className="why-card">
          <FaUserShield className="why-icon" />

          <h3>Experienced Team</h3>

          <p>
            Skilled professionals with years of experience in
            security, housekeeping and facility management.
          </p>
        </div>

        <div className="why-card">
          <FaClock className="why-icon" />

          <h3>24/7 Support</h3>

          <p>
            Round-the-clock assistance and rapid response to
            ensure uninterrupted safety and operations.
          </p>
        </div>

        <div className="why-card">
          <FaAward className="why-icon" />

          <h3>Quality Service</h3>

          <p>
            We are committed to delivering dependable,
            professional and customized facility solutions.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;