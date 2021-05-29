import React from 'react';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
// import About from './components/About';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';

import './App.css';

require('dotenv').config();

function App() {
  return (
    <>
      <Navbar/>
      <Landing />
      {/* <About /> */}
      <Leaderboard />
      <Footer />
    </>
  );
}

export default App;
