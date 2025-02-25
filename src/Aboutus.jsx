import React from "react";
import img1 from "./assets/image.png";
import img2 from "./assets/t1.png";
import img3 from "./assets/t2.png";
import img4 from "./assets/t3.png";
import img5 from "./assets/t4.png";

// Dummy team data
const teamData = [
  {
    id: 1,
    name: "Jennifer Lawrence",
    role: "Co Founder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.",
    image: img2,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Co Founder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.",
    image:img3,
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Co Founder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.",
    image: img4,
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Co Founder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum.",
    image:img5,
  },
];

function Aboutus() {
  return (
    <div>
      {/* About Us Section */}
      <section className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-content">
            <img src={img1} alt="Dining" className="about-us-image" />
            <div className="about-us-text">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamData.map((member) => (
            <div className="team-member" key={member.id}>
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p>--- {member.role} ---</p>
              <p>{member.description}</p>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
