import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900 pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-accent-500/10 via-dark-900/50 to-dark-900" />
        
        {/* Animated circles */}
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -left-20 w-[30rem] h-[30rem] bg-secondary-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMThoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNiAwSDEwVjEwaDIwdjQwem0tMi0zOEgxMnYzNmgxNlYxMnptOC0yaC00di00aDR2NHptMCA0NmgtNHYtNGg0djR6bTI0IDBIMzBWMTBoMzB2NDB6bS0yLTM4SDMydjM2aDI0VjEyem0tMTAgMGg0djRoLTR2LTR6bTAgNDZoNHY0aC00di00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="px-4 py-1 rounded-full text-xs md:text-sm font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20">
                DIGITAL INNOVATION AGENCY
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="block">We Build the</span>
              <span className="bg-gradient-to-r from-accent-400 via-secondary-400 to-primary-400 text-transparent bg-clip-text">
                Future of Digital
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              A leading digital agency creating innovative solutions that transform businesses through stunning design and cutting-edge technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 text-white rounded-full font-medium text-base hover:bg-accent-600 transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Work
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-accent-500/30 bg-transparent text-white rounded-full font-medium text-base hover:bg-accent-500/10 transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-secondary-500/30 rounded-2xl blur-xl transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-dark-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      className="aspect-square bg-dark-700/50 rounded-xl flex items-center justify-center overflow-hidden group relative"
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-secondary-500/0 group-hover:from-accent-500/20 group-hover:to-secondary-500/20 transition-all duration-300"></div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-dark-700/50 rounded-xl border border-white/5">
                  <div className="h-2 w-24 bg-accent-500/30 rounded-full"></div>
                  <div className="mt-2 h-2 w-20 bg-accent-500/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
        }}
      >
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;