import "./Leadership.css";

import vikas from "../../assets/images/vikas.jpeg";     // Placeholder for now
import vandana from "../../assets/images/vandana.jpeg";
import mandar from "../../assets/images/mandar.jpeg";

import {
  FaUserTie,
  FaArrowRight
} from "react-icons/fa";

function Leadership() {

  const leaders = [
    {
      image: vikas,
      name: "Vikas Patil",
      designation: "CEO",
      description:
        "Leading the organization's vision, growth and operational excellence across all business functions.",
    },
    {
      image: vandana,
      name: "Vandana Thakur",
      designation: "Director",
      description:
        "Driving organizational development and delivering customer-focused facility management solutions.",
    },
    {
      image: mandar,
      name: "Mandar Sawant",
      designation: "Director",
      description:
        "Former Indian Army Special Forces officer with over 20 years of experience in security operations, risk management and corporate leadership.",
    },
  ];

  return (
    <section className="leadership" id="leadership">

      <div className="leadership-header">

        <p className="section-tag">
          OUR LEADERSHIP
        </p>

        <div className="section-line"></div>

        <h2>
          Meet Our Leadership Team
        </h2>

        <p className="leadership-subtitle">
          Our leadership team brings decades of experience in
          security, operations and facility management, ensuring
          trusted and professional services for every client.
        </p>

      </div>

      <div className="leadership-grid">

        {leaders.map((leader, index) => (

          <div className="leader-card" key={index}>

            <img
              src={leader.image}
              alt={leader.name}
              className="leader-image"
            />

            <div className="leader-content">

              <FaUserTie className="leader-icon" />

              <h3>{leader.name}</h3>

              <span>{leader.designation}</span>

              <p>{leader.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Leadership;