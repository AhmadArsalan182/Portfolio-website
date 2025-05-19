import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/LOGO.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'bg-dark-800/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.a
              href="#home"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={logoImage} alt="Devloop Logo" className="h-16 md:h-20 w-auto" />
            </motion.a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-3 py-2 text-sm lg:text-base text-gray-300 rounded-md relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span
                  className="absolute inset-0 bg-accent-500/10 rounded-md -z-0 opacity-0 group-hover:opacity-100"
                  layoutId="hoverBackground"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-secondary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex-shrink-0 md:hidden">
            <motion.button
              className="rounded-md p-2 text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-dark-800/95 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-accent-500/10 hover:text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;