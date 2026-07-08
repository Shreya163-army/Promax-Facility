import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpeg";
import gallery2 from "../../assets/images/gallery2.jpeg";
import gallery3 from "../../assets/images/gallery3.jpeg";
import gallery4 from "../../assets/images/gallery4.jpeg";
import gallery5 from "../../assets/images/gallery5.jpeg";
import gallery6 from "../../assets/images/gallery6.jpeg";
import gallery7 from "../../assets/images/gallery7.jpeg";
import gallery8 from "../../assets/images/gallery8.jpeg";
import gallery9 from "../../assets/images/gallery9.jpeg";
import gallery10 from "../../assets/images/gallery10.jpeg";
import gallery11 from "../../assets/images/gallery11.jpeg";

const galleryImages = [
  {
    image: gallery1,
    title: "Fire Safety Training"
  },
  {
    image: gallery2,
    title: "Security Personnel Training"
  },
  {
    image: gallery3,
    title: "Emergency Response"
  },
  {
    image: gallery4,
    title: "Professional Workforce"
  },
  {
    image: gallery5,
    title: "Fire Extinguisher Drill"
  },
  {
    image: gallery6,
    title: "Classroom Training"
  },
  {
    image: gallery7,
    title: "Operational Excellence"
  },
  {
    image: gallery8,
    title: "Safety Awareness"
  },
  {
    image: gallery9,
    title: "Team Development"
  },
  {
    image: gallery10,
    title: "Practical Demonstration"
  },
  {
    image: gallery11,
    title: "PROMAX Team"
  }
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="gallery-header">

        <p className="section-tag">
          OUR GALLERY
        </p>

        <div className="section-line"></div>

        <h2>
          Training • Operations • Excellence
        </h2>

        <p>
          A glimpse into our professional security training,
          fire safety demonstrations and operational excellence
          that enable us to deliver reliable security and
          facility management services.
        </p>

      </div>

      <div className="gallery-grid">

        {galleryImages.map((item, index) => (

          <div
            className="gallery-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;