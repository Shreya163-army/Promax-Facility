import "./Clients.css";

import {
    FaBuilding,
    FaSchool,
    FaHospital,
    FaIndustry,
    FaUniversity,
    FaWarehouse
} from "react-icons/fa";

function Clients() {

    const clients = [

        {
            icon: <FaBuilding />,
            name: "Maharashtra State Data Centre",
            location: "Mantralaya"
        },

        {
            icon: <FaBuilding />,
            name: "Wipro Infotech Ltd.",
            location: "Powai"
        },

        {
            icon: <FaSchool />,
            name: "Ryan International School",
            location: "Multiple Locations"
        },

        {
            icon: <FaUniversity />,
            name: "Nalanda College",
            location: "Gorai"
        },

        {
            icon: <FaIndustry />,
            name: "DBM Geotechnics",
            location: "Mumbai"
        },

        {
            icon: <FaWarehouse />,
            name: "Sequel Logistics Pvt. Ltd.",
            location: "Mumbai"
        },

        {
            icon: <FaBuilding />,
            name: "QodeNext India Pvt. Ltd.",
            location: "Turbhe"
        },

        {
            icon: <FaHospital />,
            name: "Jagriti Hospital",
            location: "Goregaon"
        },

        {
            icon: <FaIndustry />,
            name: "Karvy Data Management",
            location: "Thane"
        },

        {
            icon: <FaBuilding />,
            name: "Marathon Infrastructure",
            location: "Panvel"
        },

        {
            icon: <FaBuilding />,
            name: "RN Group",
            location: "Ahmedabad"
        },

        {
            icon: <FaBuilding />,
            name: "Clique Exports Pvt. Ltd.",
            location: "Vasai"
        }

    ];

    return (

        <section className="clients" id="clients">

            <div className="clients-header">

                <p className="section-tag">
                    OUR CLIENTS
                </p>

                <div className="section-line"></div>

                <h2>
                    Trusted By Leading Organizations
                </h2>

                <p>
                    PROMAX Facility proudly serves government organizations,
                    educational institutions, commercial establishments,
                    industries and residential communities across Maharashtra.
                </p>

            </div>

            <div className="clients-grid">

                {clients.map((client, index) => (

                    <div className="client-card" key={index}>

                        <div className="client-icon">
                            {client.icon}
                        </div>

                        <h3>{client.name}</h3>

                        <span>{client.location}</span>

                    </div>

                ))}

            </div>

            <div className="clients-bottom">

                <h3>100+</h3>

                <h4>Trusted Clients</h4>

                <p>
                    Government Organizations • Schools • Hospitals •
                    Industries • Corporate Offices • Residential Communities
                </p>

            </div>

        </section>

    );

}

export default Clients;