import React from 'react';
import FAQ from './faq';
import Banner from './banner';
import Hero from './hero';
import Navbar from './navbar';
import Service from './service';
import Testimonial from './testimonial';
import WhyUs from './whyus';
import Footer from './footer';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <Banner />
      <FAQ />
      <Footer />
    </div>
  );
}

export default LandingPage;
