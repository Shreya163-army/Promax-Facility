import "./MandarProfile.css";
import leader from "../../assets/images/mandar.jpeg";

import {
  FaMedal,
  FaShieldAlt,
  FaGlobeAsia,
  FaUserTie
} from "react-icons/fa";

function MandarProfile() {
  return (

<section className="mandar-profile" id="mandar-profile">

<div className="profile-image">

<img
src={leader}
alt="Mandar Sawant"
/>

</div>

<div className="profile-content">

<p className="section-tag">
DIRECTOR PROFILE
</p>

<div className="section-line"></div>

<h2>
Mandar Sawant
</h2>

<h4>
Director • PROMAX Facility
</h4>

<p>

Mandar Sawant is a seasoned security and operations leader
with over <strong>20 years of experience</strong> across
military special operations and corporate security
management.

<br /><br />

A former member of the
<strong> Indian Army's elite Parachute Regiment
(Special Forces)</strong>,
he proudly served the nation for
<strong>16 years</strong> in high-risk operational
environments, including counter-terrorism operations
and United Nations peacekeeping assignments.

<br /><br />

Following his military career,
Mr. Sawant successfully led security and operational
functions across manufacturing, technology,
commercial and residential sectors.

His expertise includes:

<ul>

<li>Corporate Security Management</li>

<li>Risk Assessment & Risk Mitigation</li>

<li>Asset Protection</li>

<li>Crisis & Emergency Response</li>

<li>Facility Operations</li>

<li>Leadership & Team Development</li>

</ul>

He combines military discipline,
strategic planning and customer-focused service
to deliver reliable, professional and scalable
facility management solutions.

</p>

<div className="profile-highlights">

<div>
<FaMedal />
<span>20+ Years Experience</span>
</div>

<div>
<FaShieldAlt />
<span>16 Years Special Forces</span>
</div>

<div>
<FaGlobeAsia />
<span>UN Peacekeeping Missions</span>
</div>

<div>
<FaUserTie />
<span>Corporate Security Expert</span>
</div>

</div>

</div>

</section>

  );
}

export default MandarProfile;