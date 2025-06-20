import React from 'react';
import { Code, Palette, Brain, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer and UI/UX Designer with a knack for turning 
              complex problems into elegant, user-friendly solutions. With hands-on experience 
              in technologies like ReactJS, Node.js, Django, and tools like Figma and Adobe XD, 
              I bridge the gap between beautiful design and scalable backend systems.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether it's building secure web applications, designing intuitive user interfaces, 
              or implementing machine learning pipelines, I enjoy crafting experiences that are 
              as functional as they are visually engaging.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Driven by curiosity and creativity, I'm always learning and exploring new technologies 
              to deliver meaningful digital products that create real impact.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Full Stack Development</h3>
              <p className="text-gray-600 text-sm">Building scalable web applications with modern technologies</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center mb-4">
                <Palette size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">UI/UX Design</h3>
              <p className="text-gray-600 text-sm">Creating intuitive and beautiful user experiences</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                <Brain size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm">Implementing AI solutions for real-world problems</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Problem Solving</h3>
              <p className="text-gray-600 text-sm">Turning complex challenges into elegant solutions</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;