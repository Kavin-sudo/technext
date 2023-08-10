import React from 'react';
import './agenda.css';

const concepts = [
  {
    title: 'Inauguration',
    time: '9.30 AM',
    description:
      'Policy Makers, Political Leaders and Decision Influencers all on stage. TechNext NFT Launch (for auction). Introductions.',
  },
  {
    title: 'Presentations',
    time: '10.00 am - 1.00 pm',
    description:
      'Everything you wanted to know about Web 3.0. Straight from the brilliant minds innovating our future.',
  },
  {
    title: 'Workshops and Interactive Events',
    time: '2.00 pm - 5.00 pm',
    description:
      'Showcasing everything you learnt earlier in the day. Interactions. Demos. Hands-On. Workshops. Experience Web 3.0 for yourself.',
  },
  {
    title: 'Holo Panels',
    time: '5.00 PM - 6.30 pm',
    description:
      'Panel Discussions. Virtual Participants. All the Q&A on all the hot button topics of Web 3.0.',
  },
  {
    title: 'NFT Auction and After-Party',
    time: '6.30 pm onwards',
    description:
      'NFT for a Cause. TechNext NFT auctioned. All proceeds go to our new Web 3.0 Research Lab at Anna Univ Advanced Center for Future Tech. Tech themed after-party. Rock the evening away. We intend to make it memorable.',
  },
];

const Possibility = () => (
  <section className="agenda-sec section__padding" id="possibility">
    <div className="agenda-set_heder">
      <h1 className="com-title">Agenda</h1>
      <p>It is going to be a day to remember with fun-filled, interactive and Educational session!</p>
    </div>
    <div className="agenda--list">
      {concepts.map((items, index) => (
        <div className="agenda--item" key={index}>
          <span className="agenda--time-widget">{items.time}</span>
          <h3>{items.title}</h3>
          <p>{items.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Possibility;
