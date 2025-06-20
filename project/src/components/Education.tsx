import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech (Computer Science & Engineering)',
      institution: 'Babu Banarasi Das Engineering College',
      shortName: 'BBDEC',
      duration: '2022 - 2025',
      location: 'Lucknow, UP',
      description: 'Specialized in software engineering, data structures, algorithms, and modern web technologies. Graduated with distinction in computer science fundamentals.',
      highlights: ['Software Engineering', 'Data Structures & Algorithms', 'Web Development', 'Database Management'],
      icon: '🎓',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      level: 'Bachelor\'s Degree',
      status: 'Completed'
    },
    {
      degree: 'Diploma (Mechanical Engineering)',
      institution: 'SHEAT College of Engineering and Management',
      shortName: 'SHEAT',
      duration: '2019 - 2022',
      location: 'Varanasi, UP',
      description: 'Comprehensive foundation in mechanical engineering principles, manufacturing processes, and technical problem-solving methodologies.',
      highlights: ['Engineering Fundamentals', 'Manufacturing Processes', 'Technical Drawing', 'Problem Solving'],
      icon: '⚙️',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
      level: 'Diploma',
      status: 'Completed'
    },
    {
      degree: 'High School Education',
      institution: 'Happy Home English School',
      shortName: 'HHES',
      duration: '2018 - 2019',
      location: 'Local',
      description: 'Strong academic foundation with focus on mathematics, science, and English. Developed critical thinking and analytical skills.',
      highlights: ['Mathematics', 'Science', 'English Literature', 'Critical Thinking'],
      icon: '🏫',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      level: 'Secondary Education',
      status: 'Completed'
    }
  ];

  const achievements = [
    { icon: GraduationCap, label: 'Academic Excellence', value: 'Distinction' },
    { icon: Award, label: 'Technical Projects', value: '7+' },
    { icon: BookOpen, label: 'Certifications', value: '12+' },
    { icon: Users, label: 'Team Projects', value: '4+' }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <GraduationCap size={16} className="mr-2" />
            Academic Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A progressive academic journey from foundational learning to specialized technical expertise, 
            building the knowledge base that drives my passion for technology and innovation.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <achievement.icon size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {educationData.map((edu, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
              {/* Timeline Dot */}
              <div className={`absolute w-6 h-6 bg-gradient-to-br ${edu.color} rounded-full border-4 border-white shadow-lg ${
                index % 2 === 0 
                  ? 'left-5 md:right-0 md:left-auto md:-mr-3' 
                  : 'left-5 md:left-0 md:-ml-3'
              } top-8`}></div>

              {/* Education Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className={`bg-gradient-to-br ${edu.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{edu.icon}</span>
                        <div className={`px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700`}>
                          {edu.level}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                        <div className={`px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium`}>
                          {edu.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      Key Areas of Study
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium hover:bg-white/90 transition-colors duration-200 border border-white/50"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Continuous Learning Philosophy
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                My educational journey reflects a commitment to continuous growth and adaptation. 
                From mechanical engineering foundations to computer science specialization, 
                I've embraced diverse learning experiences that shape my holistic approach to problem-solving 
                and innovation in technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Award size={16} className="mr-2" />
                  Lifelong Learner
                </div>
                <div className="flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  <Users size={16} className="mr-2" />
                  Collaborative Mindset
                </div>
                <div className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <GraduationCap size={16} className="mr-2" />
                  Academic Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;