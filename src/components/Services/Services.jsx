import "./Services.css";

import {
  FaShieldAlt,
  FaBroom,
  FaBug,
  FaUsers,
  FaBuilding,
  FaLock,
} from "react-icons/fa";

function Services() {

  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Security Services",
      description:
        "Professional and trained security personnel providing reliable protection for commercial, residential and industrial properties.",
    },

    {
      icon: <FaBroom />,
      title: "Housekeeping Services",
      description:
        "Professional housekeeping solutions designed to maintain clean, hygienic and well-managed workplaces and facilities.",
    },

    {
      icon: <FaBug />,
      title: "Pest Control",
      description:
        "Effective pest management solutions that help maintain safe, hygienic and pest-free commercial and residential environments.",
    },

    {
      icon: <FaUsers />,
      title: "Manpower Supply",
      description:
        "Reliable and trained manpower solutions tailored to meet the operational requirements of businesses and organizations.",
    },

    {
      icon: <FaBuilding />,
      title: "Facility Management",
      description:
        "Complete facility management solutions focused on maintaining secure, efficient and professionally managed properties.",
    },

    {
      icon: <FaLock />,
      title: "Corporate Security",
      description:
        "Professional security solutions designed to protect employees, business assets and corporate facilities.",
    },
  ];


  return (

    <section className="services" id="services">


      {/* ==========================================
          SERVICES HEADER
      ========================================== */}

      <div className="services-header">

        <p className="services-tag">
          OUR SERVICES
        </p>

        <div className="services-line"></div>

        <h2>
          Complete Security &amp;
          <br />
          Facility Solutions
        </h2>

        <p className="services-description">
          We provide professional security and facility management
          services designed to create safe, clean and efficiently
          managed environments for businesses and communities.
        </p>

      </div>


      {/* ==========================================
          SERVICES GRID
      ========================================== */}

      <div className="services-grid">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={index}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Services;