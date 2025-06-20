import React, { useState } from 'react';
import { ExternalLink, Github, Palette, Code, ArrowRight, Star, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleCollaborate = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fullStackProjects = [
    {
      id: 1,
      title: 'Internshala Automation',
      description: 'An automated platform to streamline Internshala workflows using HTML, CSS, JavaScript, Java, Docker, MySQL, and Ruby.',
      longDescription: 'A comprehensive automation solution that reduces manual workflow processes by 80% and improves efficiency across multiple departments.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Java', 'Docker', 'MySQL', 'Ruby'],
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-purple-600',
      category: 'fullstack',
      featured: true,
      stats: { users: '500+', performance: '80%', rating: 4.8 },
      year: '2024'
    },
    {
      id: 2,
      title: 'Lung Nodule Malignancy Detection',
      description: 'ML-based system using CNN (VGG19), Python, and TensorFlow to predict lung cancer from CT scans. Includes LabelImg annotation and dataset training.',
      longDescription: 'Advanced machine learning system achieving 94% accuracy in early-stage lung cancer detection, potentially saving thousands of lives.',
      tech: ['Python', 'TensorFlow', 'CNN', 'VGG19', 'LabelImg', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-teal-600',
      category: 'fullstack',
      featured: true,
      stats: { accuracy: '94%', dataset: '10K+', rating: 4.9 },
      year: '2024'
    },
    {
      id: 3,
      title: 'FalseDream – Phishing Email Detection',
      description: 'A secure web platform using Python, Django, RCNN, and NLP techniques to detect phishing emails. Features client/admin dashboards, visual analytics, and ML-based classification.',
      longDescription: 'Enterprise-grade security solution protecting over 1000+ organizations from phishing attacks with real-time threat detection.',
      tech: ['Python', 'Django', 'RCNN', 'NLP', 'Machine Learning', 'Security'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-500 to-pink-600',
      category: 'fullstack',
      featured: false,
      stats: { threats: '99.7%', orgs: '1000+', rating: 4.7 },
      year: '2023'
    }
  ];

  const uiuxProjects = [
    {
      id: 4,
      title: 'EduTrack – Learning Progress Dashboard',
      description: 'A dashboard UI design for students and teachers to track learning, attendance, and progress using clean graphs and cards.',
      longDescription: 'Intuitive educational platform design that improved student engagement by 65% and teacher productivity by 40%.',
      tech: ['Adobe XD', 'UI Design', 'Dashboard Design', 'Data Visualization'],
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-500 to-purple-600',
      category: 'uiux',
      featured: true,
      stats: { engagement: '65%', users: '5K+', rating: 4.6 },
      year: '2024'
    },
    {
      id: 5,
      title: 'FoodFi – Food Delivery App Redesign',
      description: 'A UI/UX case study improving user journey and usability of a food delivery app. Enhanced navigation, filtering, and checkout flow.',
      longDescription: 'Complete app redesign that reduced order completion time by 45% and increased user retention by 30%.',
      tech: ['Figma', 'UX Research', 'Mobile Design', 'User Journey'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-600',
      category: 'uiux',
      featured: true,
      stats: { conversion: '45%', retention: '30%', rating: 4.8 },
      year: '2024'
    },
    {
      id: 6,
      title: 'SafeBank – Digital Banking UI Kit',
      description: 'A responsive banking app interface with login, transaction history, fund transfer, and analytics screens. Clean, secure, and scalable.',
      longDescription: 'Comprehensive banking UI system adopted by 3 financial institutions, serving over 50K active users daily.',
      tech: ['Figma', 'Banking UI', 'Mobile Design', 'Financial App'],
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-emerald-500 to-teal-600',
      category: 'uiux',
      featured: false,
      stats: { institutions: '3', users: '50K+', rating: 4.9 },
      year: '2023'
    }
  ];

  const allProjects = [...fullStackProjects, ...uiuxProjects];
  
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const featuredProjects = allProjects.filter(project => project.featured);

  const ProjectCard = ({ project, size = 'normal' }: { project: any, size?: 'normal' | 'large' }) => (
    <motion.div 
      className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
        size === 'large' ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <div className={`h-${size === 'large' ? '80' : '56'} overflow-hidden`}>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              {project.featured && (
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  <Star size={12} className="mr-1 fill-current" />
                  Featured
                </div>
              )}
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                {project.year}
              </div>
            </div>
            <div className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors`}>
              {project.category === 'fullstack' ? (
                <Code size={20} className="text-white" />
              ) : (
                <Palette size={20} className="text-white" />
              )}
            </div>
          </div>

          <div>
            <h3 className={`font-bold mb-2 ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
              {project.title}
            </h3>
            <p className={`text-white/90 leading-relaxed ${size === 'large' ? 'text-base' : 'text-sm'}`}>
              {size === 'large' ? project.longDescription : project.description}
            </p>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-4 justify-center mb-4">
              <motion.button 
                className="flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-colors font-medium border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} className="mr-2" />
                Code
              </motion.button>
              <motion.button 
                className="flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} className="mr-2" />
                {project.category === 'fullstack' ? 'Demo' : 'Design'}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Stats */}
        <div className="flex justify-between items-center mb-4">
          {Object.entries(project.stats).map(([key, value], index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-gray-800">{value}</div>
              <div className="text-xs text-gray-500 capitalize">{key}</div>
            </div>
          ))}
        </div>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, size === 'large' ? 8 : 4).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium hover:from-primary-100 hover:to-secondary-100 hover:text-primary-700 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > (size === 'large' ? 8 : 4) && (
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
              +{project.tech.length - (size === 'large' ? 8 : 4)} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Code size={16} className="mr-2" />
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Featured <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my best work spanning full-stack development and UI/UX design, 
            showcasing innovation, technical excellence, and user-centered solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {[
              { key: 'all', label: 'All Projects', icon: ArrowRight },
              { key: 'fullstack', label: 'Development', icon: Code },
              { key: 'uiux', label: 'UI/UX Design', icon: Palette }
            ].map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <filter.icon size={18} className="mr-2" />
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Grid */}
        {activeFilter === 'all' && (
          <div className="mb-16">
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                <Star size={20} className="text-white fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Featured Work</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  size={index === 0 ? 'large' : 'normal'} 
                />
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div>
          {activeFilter !== 'all' && (
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`w-8 h-8 bg-gradient-to-br ${
                activeFilter === 'fullstack' ? 'from-blue-500 to-purple-600' : 'from-pink-500 to-purple-600'
              } rounded-xl flex items-center justify-center mr-3`}>
                {activeFilter === 'fullstack' ? (
                  <Code size={20} className="text-white" />
                ) : (
                  <Palette size={20} className="text-white" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {activeFilter === 'fullstack' ? 'Development Projects' : 'UI/UX Projects'}
              </h3>
            </motion.div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Let's collaborate and bring your ideas to life with cutting-edge technology and beautiful design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  onClick={handleCollaborate}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-2xl font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users size={20} className="mr-2" />
                  Let's Collaborate
                </motion.button>
                <motion.button 
                  className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} className="mr-2" />
                  View All Code
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;