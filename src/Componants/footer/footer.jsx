import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const services = [
    { text: 'Systems Integrator', link: '/systems-integrator' },
    { text: 'Custom Software Development', link: '/custom-software' },
    { text: 'PMO Outsourcing', link: '/pmo-outsourcing' },
    { text: 'Call Center Setup & Operations', link: '/call-center-setup' },
    { text: 'Customized ERP Solutions', link: '/erp-solutions' },
    { text: 'Digital Marketing', link: '/digital-marketing' },
  ];

  const quickLinks = [
    { text: 'About Us', link: '/about-us' },
    { text: 'Case Study', link: '/case-study' },
    { text: 'Contact Us', link: '/contact-us' },
    { text: 'Blogs', link: '/blogs' },
  ];

  const contactInfo = [
    { text: 'Phone: +91-120-4362095', link: 'tel:+911204362095' },
    { text: 'Email: info@avanceglobal.in', link: 'mailto:info@avanceglobal.in' },
    { text: 'Address: C-54 Second Floor, Sector 2 Noida - 201301, Uttar Pradesh, India', link: '#' },
  ];

  return (
    <div className="footerContainer11">
      <div className="footerPart11">
        <div className="firstPart11">
          <div className="logo11">
            <img src="./Img/logo (1).png" alt="" className="logo-img11" />
          </div>
          <p className='para11'>We believe in delivering simple, secure, and cost-effective solutions. Our Team consistently strives for delivering smart designs, fresh ideas, CRM, ERPs, custom applications development and support and visual concepts of an exceptional standard for every project</p>
          <div className="icons11">
            <FontAwesomeIcon icon={faFacebookF} className="socialIcon11" />
            <FontAwesomeIcon icon={faTwitter} className="socialIcon11" />
            <FontAwesomeIcon icon={faInstagram} className="socialIcon11" />
            <FontAwesomeIcon icon={faLinkedin} className="socialIcon11" />
          </div>
        </div>
      </div>
      <div className="footerPart11">
        <div className="secondPart11">
          <h3 className='OurService11'>Our Services</h3>
          <ul className="serviceList11">
            {services.map((service, index) => (
              <li key={index}>
                <a href={service.link}>{service.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footerPart11">
        <div className="thirdPart11">
          <h3 className='QuickLinks11'>Quick Links</h3>
          <ul className="quickLinksList11">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>{link.text}</a>
              </li>
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
                <li key={index}>
                  <a href={info.link}>{info.text}</a>
                </li>
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
