import React from 'react';
import banerlogo from '../../assets/PNG/cii logo@2x.png';
import './header.css';

const Header = () => (
  <section className="gpt3__header section__padding_home banner-poster" id="home">
    <div className="banner-card--left">
      <h3><span>@ ITC Grand Chola | 30 Nov, 2022</span></h3>
      <h1>Future of Tech  <br /><span className="text-amimate">Web 3.0</span></h1>
      {/* <h3 style={{ fontSize: '24px', fontWeight: 600 }}>30 Nov 2022, Chennai, Tamil Nadu, India</h3> */}
      <button type="button" className="btn-md pulse">Join the event</button>

      <div className="baner_image">
        <p>Proudly presented by</p>

        <img src={banerlogo} alt="logo" style={{ width: '217px', paddingBottom: '10px' }} />
      </div>
    </div>

  </section>
);

export default Header;
