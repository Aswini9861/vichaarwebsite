import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the use of 'Routes'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import WebAppServices from './Components/WebAppServices';
import MobileAppServices from './Components/MobileAppServices';
import Contact from './Components/Contact';
import Realestate from './Components/Realestate';
import Blog from './Components/Blog';
import Commonissue from './Components/Commonissue';
import BusinessServices from './Components/BusinessServices';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/webServices" element={<WebAppServices />} />
          <Route path="/mobileappservices" element={<MobileAppServices />} />
          <Route path="/businessservices" element={<BusinessServices />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/realestate" element={<Realestate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Commonissue" element={<Commonissue />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;