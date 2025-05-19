import React from 'react';
import { motion } from 'framer-motion';
import { XIcon as Icon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { missionVision, history, AboutSection } from '../data/about';

const AboutSectionComponent: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const LucideIcon = LucideIcons[iconName as keyof typeof LucideIcons] as Icon;
    return LucideIcon ? <LucideIcon className="h-8 w-8" /> : null;
  };

  return (
    <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-accent-500/5 via-dark-800/50 to-dark-800" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-accent-500/10 text-accent-400 rounded-full text-sm font-medium mb-4">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who We Are and
            <span className="bg-gradient-to-r from-accent-400 to-secondary-400 text-transparent bg-clip-text"> What We Stand For</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Learn about our mission, vision, values, and the journey that has shaped our agency.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {missionVision.map((item: AboutSection, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-dark-700 border border-white/5 rounded-2xl p-8 h-full hover:border-accent-500/30 transition-colors duration-300 group">
                <div className="bg-accent-500/10 p-4 rounded-xl text-accent-400 w-fit mb-6 group-hover:bg-accent-500/20 transition-colors duration-300">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* History/Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-dark-700 border border-white/5 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-12 text-center">Our Journey</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-accent-500/20 z-0"></div>
            
            {/* Timeline items */}
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year bubble */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold z-10">
                  <span className="text-xs">{item.year}</span>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-dark-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent-500/30 transition-colors duration-300">
                    <h4 className="text-lg font-bold mb-2 text-accent-400">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionComponent;