import React from 'react';
import map from '../../assets/PNG/map@2x.png';
import mail from '../../assets/SVG/mail.svg';
import phone from '../../assets/SVG/call.svg';
import loction from '../../assets/SVG/pin.svg';

import './footer.css';

const Footer = () => (
  <section className="contactus-sec" id="Contact">
    <hr />
    <div className="custom-container">
      <div className="contactus--main">
        <div className="contactus--left">
          <div className="title text-left">
            <h2>Contact Us</h2>
            <p>We are on standby to support you and handle all your queries. </p>
          </div>
          <div className="contactus--list">
            <div className="contactus--item">
              <h1>Sponsorship & Speakers</h1>
              <div className="contactus--inner-item">
                <img src={mail} alt="icon" className="contactus--icon" />
                <div className="contactus--desc">
                  <h6>Email Address</h6>
                  <a href="mailto:technext@cii.in">
                    <h4>technext@cii.in</h4>
                  </a>
                </div>
              </div>
              <div className="contactus--inner-item">
                <img src={phone} alt="icon" className="contactus--icon" />
                <div className="contactus--desc">
                  <h6>Contact Number</h6>
                  <a href="tel:8939666906">
                    <h4>+ 91 98400982387</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="contactus--item">
              <img src={loction} alt="icon" className="contactus--icon" />
              <div className="contactus--desc">
                <h6>Contact Address</h6>
                <h4>   CII Southern Region Headquarters, <br />
                  Velachery Rd, Little Mount,<br />
                  Guindy, Chennai - 600032
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus--right">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>

    <footer className="ft--cpy-right">
      <p>© Copyright 2022 Tech Next. All Rights Reserved</p>
    </footer>
  </section>
);

export default Footer;
