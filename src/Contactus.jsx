

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-us-map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.204483283874!2d-71.09601372396762!3d42.3466765791884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370c6f4f67eeb%3A0xe3504b4d1a6209c3!2s4%20Yawkey%20Way%2C%20Boston%2C%20MA%2002215%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
      <div className="contact-us-details">
        <div className="contact-us-store-info">
          <h2>Your Store</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> My Company, 42 avenue des Champs Élysées 75000 Paris France
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: 0123456789
          </p>
          <p>
            Maecenas euismod felis et purus consectetur, quis fermentum velit. Aenean egestas quis turpis vehicula.
            It is a long-established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
        </div>
        <div className="contact-us-form">
          <h2>Contact Form</h2>
          <form>
            <label htmlFor="name">* Your Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">* E-Mail Address</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="enquiry">* Enquiry</label>
            <textarea id="enquiry" name="enquiry" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
