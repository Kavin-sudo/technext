import React from 'react';
// import Feature from '../../components/feature/Feature';
import keyimg from '../../assets/PNG/meta image@2x.png';
import './keyTopics.css';

const content = [
  [
    '- Who\'s Who of Metaverse',
  ],
  [
    '- NFT',

  ],
  [
    '- Crypto',
  ],
  [
    '- AI Luminaries',
  ],
];

const WhatGPT3 = () => (
  <section className="key_topics section__margin2" id="wgpt3">
    <div className="key_topics_img box home-ImgHover">
      <img src={keyimg} alt="keyimg" />
    </div>
    <div className="key_topics_cont box">
      <p>The first event of its kind in Asia exclusively focused on the future of technology, with over  500+ guests from around the world</p>

      <ul className="key_topics_list">
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhatGPT3;
