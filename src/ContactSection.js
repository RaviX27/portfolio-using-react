import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactMeSection = () => {
  return (
    <section className="contact">
      <h2 className="section-title"><span>Contact </span>Me</h2>
      <div className="contact-grid">
        <ContactBox icon={faMapMarkerAlt} content="Galgamuwa, Sri Lanka" />
        <ContactBox icon={faEnvelope} content="Umandaravimal@gmail.com" href="mailto:Umandaravimal@gmail.com" />
        <ContactBox icon={faPhone} content="+94 771 631 532" href="tel:+94771631532" />
      </div>
    </section>
  );
};

const ContactBox = ({ icon, content, href }) => {
  return (
    <div className="contact-box">
      <a href={href} className="contact-link">
        <FontAwesomeIcon icon={icon} className="contact-icon" />
        <p className="contact-content">{content}</p>
      </a>
    </div>
  );
};

export default ContactMeSection;
