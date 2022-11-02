import { 
  ResponsiveAppBar, 
  Hero, 
  Service,
  WhyUs,
  Testimonial,
  Banner,
  Faq,
  Footer
} 
  from './components'
import React from 'react';
import './App.css'

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Hero/>
      <Service/>
      <WhyUs/>
      <Testimonial/>
      <Banner/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
