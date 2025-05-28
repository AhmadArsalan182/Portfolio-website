import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-dark-800/50 via-dark-900/70 to-dark-900" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mb-16">
          {/* Company info */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <a href="#home" className="inline-flex items-center justify-center mb-6">
                <img 
                  src="/src/assets/LOGO.png" 
                  alt="Company Logo" 
                  className="h-16 w-auto" // Increased size from h-10 to h-16
                />
              </a>
              
              <p className="text-gray-300 mb-6 text-center md:text-left">
                We create digital experiences that are both beautiful and functional, 
                helping businesses make a lasting impact in the digital world.
              </p>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <motion.a
                  href="#"
                  className="p-2 bg-white/10 rounded-lg text-white hover:bg-accent-500/80 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 bg-white/10 rounded-lg text-white hover:bg-accent-500/80 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 bg-white/10 rounded-lg text-white hover:bg-accent-500/80 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 bg-white/10 rounded-lg text-white hover:bg-accent-500/80 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Quick links */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full flex flex-col items-center md:items-start"
            >
              <h4 className="text-lg font-bold mb-6 text-center md:text-left">Quick Links</h4>
              <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                {['home', 'about', 'services', 'projects', 'team', 'contact'].map((link) => (
                  <li key={link} className="w-full text-center md:text-left">
                    <button
                      onClick={() => scrollToSection(`#${link}`)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group mx-auto md:mx-0"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full flex flex-col items-center md:items-start"
            >
              <h4 className="text-lg font-bold mb-6 text-center md:text-left">Our Services</h4>
              <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
                {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Digital Marketing', 'Brand Strategy'].map((service) => (
                  <li key={service} className="w-full text-center md:text-left">
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group mx-auto md:mx-0"
                    >
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-gray-400 mb-4 md:mb-0 text-center md:text-left">
            © {currentYear} devloop. All rights reserved.
          </p>
          
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;