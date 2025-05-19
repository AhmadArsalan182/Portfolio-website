import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Github, X } from 'lucide-react';
import team, { TeamMember } from '../data/team';

const TeamSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Get all unique departments
  const departments = Array.from(
    new Set(team.map((member) => member.department))
  );

  // Filter team members based on selected department
  const filteredMembers = filter
    ? team.filter((member) => member.department === filter)
    : team;

  return (
    <section id="team" className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary-500/5 via-dark-800/50 to-dark-800" />
        
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWNmgydjR6bTAgMThoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0tNiAwSDEwVjEwaDIwdjQwem0tMi0zOEgxMnYzNmgxNlYxMnptOC0yaC00di00aDR2NHptMCA0NmgtNHYtNGg0djR6bTI0IDBIMzBWMTBoMzB2NDB6bS0yLTM4SDMydjM2aDI0VjEyem0tMTAgMGg0djRoLTR2LTR6bTAgNDZoNHY0aC00di00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-5" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4">
            OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Talented Minds
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text"> Behind Our Success</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our diverse team of experts brings creativity, technical prowess, and strategic thinking
            to every project we undertake.
          </p>
        </motion.div>

        {/* Department filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === null
                ? 'bg-primary-500 text-white'
                : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          
          {departments.map((department) => (
            <motion.button
              key={department}
              onClick={() => setFilter(department)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === department
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {department}
            </motion.button>
          ))}
        </motion.div>

        {/* Team grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredMembers.map((member, index) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer"
              >
                <div className="bg-dark-700 rounded-2xl overflow-hidden border border-white/5 group">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="transition-transform duration-300 transform group-hover:-translate-y-2">
                        <span className="text-primary-400 text-sm font-medium mb-1 block">
                          {member.department}
                        </span>
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-gray-300">{member.role}</p>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            className="p-2 bg-white/10 rounded-full hover:bg-primary-500/80 transition-colors duration-300"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            className="p-2 bg-white/10 rounded-full hover:bg-primary-500/80 transition-colors duration-300"
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            className="p-2 bg-white/10 rounded-full hover:bg-primary-500/80 transition-colors duration-300"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Team member modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-dark-800 rounded-2xl p-8 max-w-2xl w-full mx-auto border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                onClick={() => setSelectedMember(null)}
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  
                  <div className="mt-4 flex gap-3 justify-center">
                    {selectedMember.socialLinks.linkedin && (
                      <a
                        href={selectedMember.socialLinks.linkedin}
                        className="p-2 bg-white/10 rounded-full hover:bg-primary-500/80 transition-colors duration-300"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {selectedMember.socialLinks.twitter && (
                      <a
                        href={selectedMember.socialLinks.twitter}
                        className="p-2 bg-white/10 rounded-full hover:bg-primary-500/80 transition-colors duration-300"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {selectedMember.socialLinks.github && (
                      <a
                        href={selectedMember.socialLinks.github}
                        className="p-2 bg-white/10 rounded-full hover:bg-primary-500/80 transition-colors duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="mb-1">
                    <span className="text-primary-400 text-sm font-medium">
                      {selectedMember.department}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
                  <p className="text-gray-300 mb-4">{selectedMember.role}</p>
                  <div className="w-16 h-1 bg-primary-500 mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">{selectedMember.bio}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;