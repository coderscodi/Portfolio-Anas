import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Frameworks',
      skills: ['ReactJS', 'NextJS', 'ExpressJS', 'Bootstrap', 'Django'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Tools & Tech',
      skills: ['GitHub', 'Docker', 'VS Code', 'LabelImg', 'TensorFlow', 'PyTorch', 'Adobe XD', 'Figma'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Cloud (AWS)',
      skills: ['EC2', 'Lambda', 'S3', 'DynamoDB'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'WAMP', 'MySQL Client'],
      color: 'from-red-400 to-red-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-primary-100 hover:to-secondary-100 hover:text-primary-700 transition-all duration-200 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;