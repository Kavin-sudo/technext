import React from 'react';
import Feature from '../../components/feature/Feature';
import metaverse from '../../assets/SVG/metaverse.svg';
import nft from '../../assets/SVG/nft.svg';
import ai from '../../assets/SVG/ai.svg';
import blockchain from '../../assets/SVG/blockchain.svg';
import cyber from '../../assets/SVG/cybersecurity.svg';
import './event.css';

const concepts = [
  {
    title: 'Metaverse',
    classname: 'color1',
    subtitel: 'Track 1',
    image: metaverse,
    description:
      'Create your own branded Metaverse. Join the already existing Metaverses. Experience the future of Web3.',
  },
  {
    title: 'NFT',
    classname: 'color2',
    subtitel: 'Track 2',
    image: nft,
    description:
      'Is it just a jpg? What makes NFTs unique? How do you create the new Mona Lisa token?',
  },
  {
    title: 'AI',
    classname: 'color3',
    subtitel: 'Track 3',
    image: ai,
    description:
      'Is it sentient? How do we use AI to make our life better? Some cool use-cases and demos.',
  },
  {
    title: 'Blockchain',
    classname: 'color4',
    subtitel: 'Track 4',
    image: blockchain,
    description:
      'Not just for Cryptocurrency now. Decentralized Finance – DeFi. Irrepudiatable Smart Contracts.',
  },
  {
    title: 'Cyber Security',
    classname: 'color5',
    subtitel: 'Track 5',
    image: cyber,
    description:
      'There is no perimeter. There is zero-trust. Yet, we are building security protocols for the future. Learn how.',
  },
];

const Features = () => (
  <section className="event-sec section__padding_event">
    <div className="eventtrack">
      <h1 className="com-title">5 Event Tracks</h1>
      <p>Focused on the future of technology – Web 3.0. Choose your preferred sponsorship track.</p>
    </div>
    <div className="event-tracks">
      {concepts.map((item, index) => (
        <Feature img={item.image} title={item.title} subtitel={item.subtitel} description={item.description} key={item.title + index} classname={item.classname} />
      ))}
    </div>
  </section>
);

export default Features;
