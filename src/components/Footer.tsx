import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, ArrowRight, Linkedin, Twitter, Instagram, Facebook, Github } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" className="inline-flex items-center gap-2 mb-6">
                <Zap className="h-6 w-6 text-accent-400" />
                <span className="text-white text-xl font-bold bg-gradient-to-r from-accent-400 to-secondary-400 text-transparent bg-clip-text">
                  NOVA
                </span>
                <span className="text-white text-xl font-bold">Studio</span>
              </a>
              
              <p className="text-gray-300 mb-6">
                We create digital experiences that are both beautiful and functional, 
                helping businesses make a lasting impact in the digital world.
              </p>
              
              <div className="flex gap-4">
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
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['home', 'about', 'services', 'projects', 'team', 'contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(`#${link}`)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
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
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-4">
                {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Digital Marketing', 'Brand Strategy'].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter to receive the latest updates and insights.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <div className="relative">
                    <Mail className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 text-white"
                    />
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  className="px-5 py-3 bg-primary-500 text-white rounded-lg font-medium text-base hover:bg-primary-600 transition-colors duration-300 whitespace-nowrap flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Nova Studio. All rights reserved.
          </p>
          
          <div className="flex gap-6">
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