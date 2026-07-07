import "./About.css";
import aboutImg from "../../assets/images/about.jpeg";

function About() {
  return (
    <section className="about" id="about">

      {/* LEFT CONTENT */}
      <div className="about-left">

        <p className="section-tag">
          ABOUT PROMAX FACILITY
        </p>

        <div className="section-line"></div>

        <h2>
          Trusted Security &amp;
          <br />
          Facility Management
          <br />
          Partner
        </h2>

        <p className="about-text">
          PROMAX Facility provides professional Security Guards,
          Housekeeping, Pest Control, Manpower Supply and complete
          Facility Management services across commercial,
          residential and industrial sectors.

          <br />
          <br />

          Our trained workforce, commitment to quality and
          customer-first approach help businesses maintain
          secure, clean and efficient workplaces.
        </p>

        {/* HIGHLIGHTS */}
        <div className="about-stats">

          <div className="stat-box">
            <h3>Trained</h3>
            <p>Professional Workforce</p>
          </div>

          <div className="stat-box">
            <h3>Trusted</h3>
            <p>Facility Solutions</p>
          </div>

          <div className="stat-box">
            <h3>24/7</h3>
            <p>Security Support</p>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="about-right">
        <img
          src={aboutImg}
          alt="Promax Facility professional security team"
        />
      </div>

    </section>
  );
}

export default About;