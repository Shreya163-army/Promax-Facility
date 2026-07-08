import "./Clients.css";

import {
  FaBuilding,
  FaUniversity,
  FaIndustry,
  FaWarehouse,
  FaLaptopCode,
  FaLandmark,
} from "react-icons/fa";

function Clients() {
  const clients = [
    {
      icon: <FaLaptopCode />,
      name: "Dolby Technology India Pvt. Ltd.",
      location: "India",
    },

    {
      icon: <FaLandmark />,
      name: "The Nashik Merchants Bank Co-operative Ltd.",
      location: "Nashik",
    },

    {
      icon: <FaBuilding />,
      name: "MK Ghare Jewellers Pvt. Ltd.",
      location: "Maharashtra",
    },

    {
      icon: <FaLaptopCode />,
      name: "Sheeltron Digital Systems Pvt. Ltd.",
      location: "India",
    },

    {
      icon: <FaIndustry />,
      name: "Jassani India Pvt. Ltd.",
      location: "India",
    },

    {
      icon: <FaLaptopCode />,
      name: "Qodenext India Pvt. Ltd.",
      location: "India",
    },

    {
      icon: <FaLaptopCode />,
      name: "Wipro Infotech Ltd.",
      location: "India",
    },

    {
      icon: <FaBuilding />,
      name: "Silicon Valley CHS. Ltd.",
      location: "Mumbai",
    },

    {
      icon: <FaBuilding />,
      name: "Harmon Associates India Pvt. Ltd.",
      location: "India",
    },

    {
      icon: <FaIndustry />,
      name: "MPIL Steel Structures Pvt. Ltd.",
      location: "India",
    },

    {
      icon: <FaWarehouse />,
      name: "Clique Exports Pvt. Ltd.",
      location: "India",
    },

    {
      icon: <FaBuilding />,
      name: "Sitanshu Realtors Pvt. Ltd.",
      location: "Mumbai",
    },
  ];

  return (
    <section className="clients" id="clients">
      <div className="clients-header">
        <p className="section-tag">OUR CLIENTS</p>

        <div className="section-line"></div>

        <h2>Trusted By Leading Organizations</h2>

        <p>
          PROMAX Facility & Security Management Services Pvt. Ltd. proudly
          serves leading corporate organizations, financial institutions,
          residential communities, infrastructure companies, IT firms and
          industrial businesses across India with reliable security and facility
          management solutions.
        </p>
      </div>

      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <div className="client-icon">{client.icon}</div>

            <h3>{client.name}</h3>

            <span>{client.location}</span>
          </div>
        ))}
      </div>

      <div className="clients-bottom">
        <h3>100+</h3>

        <h4>Trusted Corporate Clients</h4>

        <p>
          Corporate Offices • Banks • IT Companies • Industries • Residential
          Communities • Infrastructure • Manufacturing • Retail Businesses
        </p>
      </div>
    </section>
  );
}

export default Clients;