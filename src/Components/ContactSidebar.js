// ContactSidebar.js

import React from 'react';
import { Envelope, GeoAlt, Telephone, Globe } from 'react-bootstrap-icons';
import './ContactSidebar.css';

const ContactSidebar = () => {
  return (
    <div className="contact-sidebar">
      <h3>Lets get in touch</h3>
      <p>We are open for any suggestions or just to have a chat</p>
      <div className="contact-info">
        <Envelope /> info@sendit.com
      </div>
      <div className="contact-info">
        <GeoAlt /> Nairobi 198 west 21 street
      </div>
      <div className="contact-info">
        <Telephone /> +123456789
      </div>
      <div className="contact-info">
        <Globe /> sendit.com
      </div>
    </div>
  );
};

export default ContactSidebar;
