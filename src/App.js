import React from 'react';

import { Footer, Sponsorship, Agenda, Events, Keytopics, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Keytopics />
    <Events />
    <Agenda />
    <CTA />
    <Sponsorship />
    <Footer />
  </div>
);

export default App;
