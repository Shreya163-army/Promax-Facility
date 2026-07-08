import "./CompanyValues.css";

import {
  FaEye,
  FaBullseye,
  FaHandshake,
  FaBuilding
} from "react-icons/fa";

function CompanyValues() {

  return (

<section className="values" id="values">

<div className="values-header">

<p className="section-tag">
OUR VALUES
</p>

<div className="section-line"></div>

<h2>
Our Vision, Mission & Commitment
</h2>

<p>
Everything we do is driven by quality, professionalism,
innovation and long-term relationships.
</p>

</div>

{/* VISION */}

<div className="value-card">

<div className="value-icon">
<FaEye />
</div>

<div className="value-content">

<h3>Our Vision</h3>

<p>

Our vision is to provide <strong>"Premier Service, For Precious Relationship"</strong>
with cutting edge protection and loss prevention services that are unique in the
facility management industry.

We provide world-class integrated Security and Facility Management Services
across India by using modern techniques, advanced management processes and
state-of-the-art equipment while maintaining global quality standards.

Our endeavour is to relieve our clients of every facility-related concern,
allowing them to focus on their business with complete peace of mind.

We train our security personnel in vigilance, fire fighting and disaster
management to ensure immediate response during emergencies and maintain
smooth business continuity.

Our diverse range of services is designed to meet customer needs through
customized solutions supported by trained professionals.

Client satisfaction, safety of employees, protection of property and assets
remain our highest priorities, backed by integrity and continuous improvement.

</p>

</div>

</div>

{/* MISSION */}

<div className="value-card">

<div className="value-icon">
<FaBullseye />
</div>

<div className="value-content">

<h3>Our Mission</h3>

<p>

Our mission is to become a market leader by defining new standards
and shaping the future of Facility Management in line with our vision.

We strive to provide high-quality, comprehensive facility management
solutions operating 24×7 with fast response and customized services
that meet every client's unique requirements.

We aim to achieve secure and beneficial solutions by understanding the
broader challenges of protecting workplaces and corporate assets while
continuously improving our services and setting new benchmarks.

</p>

</div>

</div>

{/* COMMITMENT */}

<div className="value-card">

<div className="value-icon">
<FaHandshake />
</div>

<div className="value-content">

<h3>Our Commitment</h3>

<p>

PROMAX Facility & Security Management Services Pvt. Ltd.
is committed to protecting your home, business and valuable assets
through a strong and multi-functional security system.

Our commitment to Total Quality Management is reflected in our
well-trained, reliable and professional workforce that works
round the clock to safeguard life, property and business continuity
while exceeding our clients' expectations.

</p>

</div>

</div>

{/* SERVICES */}

<div className="value-card">

<div className="value-icon">
<FaBuilding />
</div>

<div className="value-content">

<h3>Our Services Philosophy</h3>

<p>

PROMAX Facility & Security Management Services Pvt. Ltd.
understands the sensitivity of Facility Management and provides
professional, specialized and customized solutions based on
each client's specific requirements.

Our services combine skilled manpower, electronic security,
ground handling support and modern management systems to deliver
the highest standards of service.

We provide professionally trained, smartly uniformed and
well-supervised staff to protect client assets, personnel
and property across residential, commercial, industrial,
healthcare, educational and financial sectors.

</p>

</div>

</div>

</section>

  );

}

export default CompanyValues;