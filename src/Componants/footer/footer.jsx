// Footer.js
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const services = [
        'Systems Integrator',
        'Custom Software Development',
        'PMO Outsourcing',
        'Call Center Setup & Operations',
        'Customized ERP Solutions',
        'Digital Marketing'
      ];
      const quickLinks = [
        'About Us',
        'Case Study',
        'Contact Us',
        'Blogs'
      ];
      const contactInfo = [
        'Phone: +91-120-4362095',
        'Email: info@avanceglobal.in',
        'Address: C-54 Second Floor, Sector 2 Noida - 201301, Uttar Pradesh, India'
      ];
  return (
    <div className="footerContainer11">
      <div className="footerPart11">
        <div className="firstPart11">
          <div className="logo11">
          <img src="./Img/logo (1).png"alt=""className="logo-img11"/>
          </div>
          <p className='para11'>We believe in delivering simple, secure, and cost-effective solutions, Our Team consistently strives for delivering smart designs, fresh ideas, CRM, ERPs, custom applications development and support and visual concepts of an exceptional standard for every project</p>
          <div className="icons11">
        <FontAwesomeIcon icon={faFacebookF} className="socialIcon11" />
        <FontAwesomeIcon icon={faTwitter} className="socialIcon11" />
        <FontAwesomeIcon icon={faInstagram} className="socialIcon11" />
        <FontAwesomeIcon icon={faLinkedin} className="socialIcon11" />
      </div>
        </div>
      </div>
      <div className="footerPart11">
        <div className="secondPar11t">
          <h3 className='OurService11'>Our Services</h3>
          <ul className="serviceList11">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        </div>
      </div>
      <div className="footerPart11">
        <div className="thirdPart11">
          <h3 className='QuickLinks11'>Quick Links</h3>
          <ul className="quickLinksList11">
          {quickLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
        </div>
      </div>
      <div className="footerPart11">
        <div className="fourthPart11">
            <h3 className='ContactInfo11'>Contact Information</h3>
          <div className="verticalTitles11">
          <ul className="contactList11">
          {contactInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
          </div>
          <div className="placeholderrs11">
        <input type="text11" placeholder="Enter Your Email..." className="subscribeInput11" />
        <button className="subscribeButton11">Subscribe</button>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
