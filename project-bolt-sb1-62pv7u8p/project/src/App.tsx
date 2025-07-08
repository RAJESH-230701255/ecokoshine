import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ManufacturingSteps from './components/ManufacturingSteps';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import WhatIsActivatedCarbon from './components/WhatIsActivatedCarbon';
import Process from './components/Process';
import Applications from './components/Applications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ManufacturingSteps />
      <About />
      <Products />
      <WhyChooseUs />
      <WhatIsActivatedCarbon />
      <Applications />
      <Footer />
    </div>
  );
}

export default App;