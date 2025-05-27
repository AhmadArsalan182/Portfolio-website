import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Code, Cpu, Database, Globe, Layers, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Floating icons with random movement
  const icons = [
    { Icon: Code, color: 'from-cyan-500 to-blue-500', delay: 0 },
    { Icon: Globe, color: 'from-purple-500 to-pink-500', delay: 1.2 },
    { Icon: Database, color: 'from-green-500 to-emerald-500', delay: 0.4 },
    { Icon: Cpu, color: 'from-orange-500 to-amber-500', delay: 0.8 },
    { Icon: Layers, color: 'from-red-500 to-rose-500', delay: 1.6 },
    { Icon: Zap, color: 'from-yellow-500 to-amber-500', delay: 2 }
  ];
  
  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16"
    >
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_0,#000_100%)]"></div>
      
      {/* Neon grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Horizontal lines */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`h-${i}`} 
            className="absolute h-[1px] w-full" 
            style={{ 
              top: `${i * 5}%`, 
              background: `linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.8) 50%, transparent 100%)`,
              opacity: i % 2 === 0 ? 0.8 : 0.3,
              boxShadow: i % 2 === 0 ? '0 0 10px rgba(56, 189, 248, 0.8)' : 'none'
            }}
          />
        ))}
        
        {/* Vertical lines */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`v-${i}`} 
            className="absolute w-[1px] h-full" 
            style={{ 
              left: `${i * 5}%`, 
              background: `linear-gradient(0deg, transparent 0%, rgba(236, 72, 153, 0.8) 50%, transparent 100%)`,
              opacity: i % 2 === 0 ? 0.8 : 0.3,
              boxShadow: i % 2 === 0 ? '0 0 10px rgba(236, 72, 153, 0.8)' : 'none'
            }}
          />
        ))}
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              background: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.2})`,
              boxShadow: `0 0 ${Math.random() * 10}px rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`
            }}
            animate={{
              x: [
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`
              ],
              y: [
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`,
                `${Math.random() * 100}vh`
              ],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
          animate={{ 
            opacity: [0, 0.05, 0],
            x: ['-5%', '5%', '-5%']
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "mirror" 
          }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-blue-500/10"
          animate={{ 
            opacity: [0, 0.08, 0],
            y: ['-5%', '5%', '-5%']
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "mirror" 
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="px-4 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30 inline-flex items-center">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2 h-2 w-2 rounded-full bg-cyan-400"
                />
                DIGITAL INNOVATION AGENCY
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="block mb-2">We Build the</span>
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text relative inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 7px rgba(56, 189, 248, 0.6)",
                    "0 0 10px rgba(56, 189, 248, 0.6)",
                    "0 0 7px rgba(56, 189, 248, 0.6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                UnThinkable
                <motion.span 
                  className="absolute -inset-1 rounded-lg opacity-30"
                  animate={{ 
                    background: [
                      "linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0.3) 50%, rgba(56, 189, 248, 0) 100%)",
                      "linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(56, 189, 248, 0) 100%)",
                      "linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0.3) 50%, rgba(56, 189, 248, 0) 100%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.span>
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
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-600 to-purple-600"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative flex items-center">
                  See Our Work
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full border-2 border-cyan-500 rounded-full"></span>
                <span className="absolute inset-0 w-full h-full transition duration-300 group-hover:bg-cyan-500/10"></span>
                <span className="relative flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Futuristic 3D element */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 10 - 5}deg) rotateY(${mousePosition.x * 10 - 5}deg)`,
              }}
              className="relative w-full aspect-square max-w-lg mx-auto"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl opacity-50"></div>
              
              {/* Holographic cube */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute rounded-full border-2 border-cyan-500/30"
                    style={{
                      width: `${80 - i * 15}%`,
                      height: `${80 - i * 15}%`,
                      boxShadow: `0 0 15px rgba(56, 189, 248, 0.3), inset 0 0 15px rgba(56, 189, 248, 0.3)`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      borderColor: [
                        'rgba(56, 189, 248, 0.3)',
                        'rgba(236, 72, 153, 0.3)',
                        'rgba(56, 189, 248, 0.3)'
                      ]
                    }}
                    transition={{
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
                
                {/* Core element */}
                <motion.div
                  className="relative w-1/2 h-1/2 rounded-xl bg-gradient-to-br from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border border-white/10 overflow-hidden"
                  animate={{
                    rotate: [0, 360],
                    boxShadow: [
                      '0 0 20px rgba(56, 189, 248, 0.5)',
                      '0 0 30px rgba(236, 72, 153, 0.5)',
                      '0 0 20px rgba(56, 189, 248, 0.5)'
                    ]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Animated grid inside */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={`cell-${i}`}
                        className="bg-white/5 backdrop-blur-sm"
                        animate={{
                          opacity: [
                            0.1 + Math.random() * 0.3,
                            0.5 + Math.random() * 0.5,
                            0.1 + Math.random() * 0.3
                          ],
                          backgroundColor: [
                            'rgba(56, 189, 248, 0.1)',
                            'rgba(236, 72, 153, 0.1)',
                            'rgba(56, 189, 248, 0.1)'
                          ]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Scanning line */}
                  <motion.div
                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)' }}
                  />
                </motion.div>
                
                {/* Floating tech icons */}
                {icons.map(({ Icon, color, delay }, index) => (
                  <motion.div
                    key={`icon-${index}`}
                    className={`absolute bg-gradient-to-br ${color} p-3 rounded-full`}
                    style={{
                      boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
                      x: `${Math.cos(index * (Math.PI * 2 / 6)) * 130}px`,
                      y: `${Math.sin(index * (Math.PI * 2 / 6)) * 130}px`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 8,
                      delay: delay,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>
                ))}
              </div>
              
              {/* Data streams */}
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`stream-${i}`}
                    className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    style={{ 
                      top: `${10 + i * 8}%`,
                      opacity: 0.3,
                      boxShadow: '0 0 5px rgba(56, 189, 248, 0.5)'
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                      opacity: [0.1, 0.5, 0.1]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Cyberpunk scroll indicator */}
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
        <div className="w-8 h-12 border-2 border-cyan-500/30 rounded-full flex justify-center" 
             style={{ boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)' }}>
          <motion.div 
            className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              boxShadow: [
                '0 0 5px rgba(56, 189, 248, 0.8)',
                '0 0 10px rgba(56, 189, 248, 0.8)',
                '0 0 5px rgba(56, 189, 248, 0.8)'
              ]
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