import React from 'react';
import { ArrowRight, Download, Code2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Anas Arshad resume.pdf';
    link.download = 'Anas Arshad resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center shadow-2xl relative overflow-hidden">
              {/* Coding-themed illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
                <div className="relative">
                  {/* Terminal/Code screen effect */}
                  <div className="w-20 h-16 bg-black/80 rounded-lg border border-green-400/30 flex flex-col p-2">
                    <div className="flex space-x-1 mb-1">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="w-12 h-0.5 bg-green-400 rounded"></div>
                      <div className="w-8 h-0.5 bg-blue-400 rounded"></div>
                      <div className="w-10 h-0.5 bg-purple-400 rounded"></div>
                      <div className="w-6 h-0.5 bg-yellow-400 rounded"></div>
                    </div>
                  </div>
                  {/* Floating code elements */}
                  <Code2 size={16} className="absolute -top-2 -right-2 text-green-400 animate-pulse" />
                  <Terminal size={14} className="absolute -bottom-1 -left-2 text-blue-400 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Available for opportunities badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for opportunities
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Anas Arshad
            </span>
          </motion.h1>

          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Designing seamless user experiences and developing robust, scalable web applications 
            that solve real-world problems.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">2+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">5+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Technologies</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              onClick={handleViewWork}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowRight size={20} className="ml-2" />
            </motion.button>
            <motion.button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;