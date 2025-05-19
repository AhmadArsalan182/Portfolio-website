import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'devloop | Digital Innovation Agency';
    
    // Set the default background color
    document.body.style.backgroundColor = '#030303';
    document.body.style.color = '#ffffff';
  }, []);

  return (
    <div className="font-sans bg-dark-900 text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;