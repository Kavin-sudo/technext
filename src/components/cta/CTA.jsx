import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel CSS
import img1 from '../../assets/PNG/speaker 1@2x.png';
import img2 from '../../assets/PNG/speaker 2@2x.png';
import img3 from '../../assets/PNG/speaker 3@2x.png';
import img4 from '../../assets/PNG/speaker 4@2x.png';
import back from '../../assets/SVG/back.svg';
import next from '../../assets/SVG/next.svg';
import prestigious from '../../assets/SVG/prestigious.svg';

import './cta.css';

const concepts = [
  {
    name: 'Ram Shriram',
    img: img1,
  },
  {
    name: 'Seth Blake',
    img: img2,
  },
  {
    name: 'Vernon Walters',
    img: img4,
  },
  {
    name: 'Evan McKinney',
    img: img3,
  },
  {
    name: 'Seth Blake',
    img: img2,
  },
  {
    name: 'Vernon Walters',
    img: img4,
  },
  {
    name: 'Evan McKinney',
    img: img3,
  },
  {
    name: 'Seth Blake',
    img: img2,
  },
  {
    name: 'Vernon Walters',
    img: img4,
  },
  {
    name: 'Evan McKinney',
    img: img3,
  },
];

const CTA = () => (
  <section className="exclusive-sec" id="speakers">
    <div className="custom-container">
      <div className="exclusive--main">

        <div className="title text-left section_4_set">
          <span className="king_gren"><img src={prestigious} alt="king" /> Prestigious and exclusive</span>
          <h2>Featuring the pioneers on the cutting-edge <br />of Web 3.0 technologies.</h2>
          <p>We are only inviting the best in the World. The inventors of Web 3.0 The ones at the forefront of the future.</p>
        </div>
        <Carousel
          showArrows
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          loop={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-prev">
              <img src={back} alt="arrow" className="owl-arrow" />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-next">
              <img src={next} alt="arrow" className="owl-arrow" />
            </button>
          )}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            991: { items: 3 },
            1400: { items: 4 },
            1900: { items: 4 },
          }}
        >
          {concepts.map((item, index) => (
            <div className="fut-people-item" key={index}>
              <img src={item.img} alt="poster" className="fut-people-avatar" />
              <div className="fut-people--bio-view">
                <h4>{item.name}</h4>
                <button type="button" className="view-bio open_bio">
                  View Bio
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </section>
);

export default CTA;
