import React from 'react';
import './sponsorship.css';

const Sponsorship = () => (
  <div className="section__padding" id="sponsorship">
    <div className="sponsorship--title">
      <h5>Sponsorship Categories</h5>
      <h1>First come first serve!</h1>
    </div>
    <div className="sponsorship--main">
      <div className="sponsorship--left">
        <ul>
          <li>
            <span className="fcfs1">Event Sponsor</span>
            <h1>20 Lakhs</h1>
          </li>
          <li>
            <span className="fcfs2">Diamond Sponsor</span>
            <h1>15 Lakhs</h1>
          </li>
          <li>
            <span className="fcfs3">Platinum Sponsor</span>
            <h1>10 Lakhs</h1>
          </li>
          <li>
            <span className="fcfs4">Gold Sponsor</span>
            <h1>7.5 Lakhs</h1>
          </li>
          <li>
            <span className="fcfs5">Silver Sponsor</span>
            <h1>5 Lakhs</h1>
          </li>
          <li>
            <span className="fcfs6">Bronze Sponsor</span>
            <h1>3 Lakhs</h1>
          </li>
        </ul>
      </div>
      <div className="sponsorship--right">
        <h4>What is in it for you?</h4>
        <ul>
          <li>
            <p>An opportunity to be part and learn at Asia&apos;s most exciting Web 3.0 Summit.</p>
          </li>
          <li>
            <p>Get prime brand visibility with the who&apos;s who of tech decision-makers.</p>
          </li>
          <li>
            <p>Reach and pitch to the best under one roof.</p>
          </li>
          <li>
            <p>Showcase your new and emerging tech to the most influential in future technology.</p>
          </li>
          <li>
            <p>Interact with key Policy Makers, Government Officials and Business leaders.</p>
          </li>
          <li>
            <p>Sponsorship don&apos;t stop with brand logo being flashed, or just a speaking session. Sponsorship invites are EXCLUSIVE to companies that have a showcaseable role in the Future of Tech.</p>
          </li>
        </ul>
      </div>
    </div>

    <div className="btn_align-center">
      <button type="button" className="btn-md pulse">Join the event</button>
    </div>
  </div>
);

export default Sponsorship;
