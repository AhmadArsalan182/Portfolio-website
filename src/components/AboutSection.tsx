import React from 'react';
import { motion } from 'framer-motion';
import { XIcon as Icon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { missionVision, AboutSection } from '../data/about';

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
            Learn about our mission, vision, and values that shape our agency.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default AboutSectionComponent;