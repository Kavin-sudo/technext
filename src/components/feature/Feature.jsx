import React from 'react';
import './feature.css';

const Feature = ({ img, subtitel, title, description, classname }) => (
  <div className="event-tracks--card-items">
    <div className="event-tracks--card-items-top">
      <img src={img} alt="icons" className="event-tracks--card-items-icons" />
      <div className="event-tracks--card-items-title">
        <h6 className="track1">{subtitel}</h6>
        <h4 className={classname}>{title}</h4>
      </div>
    </div>
    <div className="event-tracks--card-items-bottom">
      <div className="event-tracks--card-items-desc">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default Feature;
