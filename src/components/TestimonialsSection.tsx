import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import testimonials, { Testimonial } from '../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  // Auto-scroll through testimonials
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-dark-900 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-secondary-500/5 via-dark-900/50 to-dark-900" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-secondary-500/10 text-secondary-400 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients
            <span className="bg-gradient-to-r from-secondary-400 to-primary-400 text-transparent bg-clip-text"> Say About Us</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === activeIndex && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="bg-dark-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col md:flex-row items-center gap-8 relative">
                      <div className="absolute top-8 left-8 text-secondary-500/20">
                        <Quote className="h-16 w-16" />
                      </div>
                      
                      <div className="md:w-1/3 flex flex-col items-center z-10">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary-500/30 mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-semibold mb-1">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                        
                        <div className="flex mt-3">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? 'text-secondary-400'
                                  : 'text-gray-600'
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 flex items-center z-10">
                        <blockquote className="text-gray-300 italic leading-relaxed">
                          "{testimonial.testimonial}"
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-secondary-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;