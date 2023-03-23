import React from 'react'  
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Pages from './components/Pages';
import Activities from './components/Activities';
import Bookings from './components/Bookings';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <TopBar />
      <Navbar />
      <Pages />
      <Activities />
      <Bookings />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
