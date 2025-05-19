import React from 'react';
import { motion } from 'framer-motion';
import { XIcon as Icon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import services, { Service } from '../data/services';

const ServicesSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const LucideIcon = LucideIcons[iconName as keyof typeof LucideIcons] as Icon;
    return LucideIcon ? <LucideIcon className="h-8 w-8" /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary-500/5 via-dark-900/50 to-dark-900" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Ideas into
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text"> Digital Reality</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs, 
            helping you navigate the digital landscape with confidence.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service: Service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4"></div>
              <div className="relative bg-dark-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:border-primary-500/30">
                <div className="bg-primary-500/10 p-4 rounded-xl text-primary-400 w-fit mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                  {renderIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 flex-grow">{service.description}</p>
                
                <div className="mt-6 pt-6 border-t border-white/5">
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-400 font-medium flex items-center group/btn"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;