// ContactComponent.js
import React from 'react';
import './Contact.css';

function ContactUs() {
  return ( 
    <div >
    <div className="contact-wrap">
      <div className="contact-in contact-info">
        <h1>Contact Info</h1>
        <h2>
          <i className="fa fa-phone" aria-hidden="true"></i> Phone
        </h2>
        <p>123-456-789</p>
        <h2>
          <i className="fa fa-envelope" aria-hidden="true"></i> Email
        </h2>
        <p>info@democompany.com</p>
        <h2>
          <i className="fa fa-map-marker" aria-hidden="true"></i> Address
        </h2>
        <p>Vasant Vihar, Delhi, India</p>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-in send-message">
        <h1>Send a Message</h1>
        <form>
          <input type="text" placeholder="Full Name" className="contact-in-input" />
          <input type="text" placeholder="Email" className="contact-in-input" />
          <input type="text" placeholder="Subject" className="contact-in-input" />
          <textarea placeholder="Message" className="contact-in-textarea"></textarea>
          <input type="submit" value="SUBMIT" className="contact-in-btn" />
        </form>
      </div>
      <div className="contact-in google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1601968196548!5m2!1sen!2sin" width="100%" height="auto" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
