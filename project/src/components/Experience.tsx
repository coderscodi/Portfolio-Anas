import React from 'react';
import { Building, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Accenture Virtual Internship',
      company: 'Accenture',
      type: 'Virtual Experience',
      description: 'Gained hands-on experience with consulting methodologies, digital transformation strategies, and technology solutions for enterprise clients.',
      skills: ['Consulting', 'Strategy', 'Digital Transformation', 'Client Solutions'],
      color: 'from-primary-400 to-primary-600'
    },
    {
      title: 'Walmart Advanced Software Engineering Program',
      company: 'Walmart',
      type: 'Program',
      description: 'Participated in advanced software engineering practices, focusing on scalable architecture, data structures, and modern development workflows.',
      skills: ['Software Engineering', 'System Design', 'Scalability', 'Best Practices'],
      color: 'from-secondary-400 to-secondary-600'
    },
    {
      title: 'Tech Event Associate Coordinator',
      company: 'Various Organizations',
      type: 'Coordinator',
      description: 'Coordinated technical events, managed teams, and facilitated networking opportunities between industry professionals and students.',
      skills: ['Event Management', 'Team Leadership', 'Networking', 'Coordination'],
      color: 'from-accent-400 to-accent-600'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building size={28} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                      <p className="text-primary-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-2 sm:mt-0">
                      <MapPin size={16} className="mr-1" />
                      {exp.type}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;