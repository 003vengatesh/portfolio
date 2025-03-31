import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Code, Coffee, Download, Heart, Music, Pen } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Deep Learning', level: 75 },
    { name: 'Data Visualization', level: 85 },
    { name: 'AI', level: 80 },
    { name: 'Django', level: 85 },
  ];

  const certifications = [
    { name: 'Machine Learning Specialization', issuer: 'Udemy', year: '2023' },
    { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2022' },
    { name: 'Data Science Professional Certificate', issuer: 'IBM', year: '2021' },
    { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2021' },
  ];

  const experiences = [
    {
      company: 'CodSoft',
      role: 'AI & ML Intern',
      period: 'Aug 2023 - Oct 2023',
      description: 'Implemented AI & ML solutions, focusing on model development and optimization.',
    },
    {
      company: 'Oasis Infobyte',
      role: 'Data Science Intern',
      period: 'Jun 2023 - Aug 2023',
      description: 'Worked on data science solutions and analytics projects.',
    },
    {
      company: 'Meriskill',
      role: 'Data Analytics Intern',
      period: 'May 2023 - Jun 2023',
      description: 'Focused on data analytics and visualization projects.',
    },
  ];

  const hobbies = [
    { name: 'Reading', icon: <BookOpen size={24} /> },
    { name: 'Coding', icon: <Code size={24} /> },
    { name: 'Music', icon: <Music size={24} /> },
    { name: 'Coffee', icon: <Coffee size={24} /> },
    { name: 'Drawing', icon: <Pen size={24} /> },
    { name: 'Fitness', icon: <Heart size={24} /> },
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About <span className="gradient-text"> Me</span></h1>
          
          {/* Bio Section */}
          <div className="glass-card p-8 mb-12 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="../src/assets/Vengat.jpg" 
                  alt="Profile" 
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center">
                <Link to="/resume" className="btn-primary w-full flex items-center justify-center">
                  <Download size={18} className="mr-2" /> Download Resume
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Who am I?</h2>
              <p className="mb-4 opacity-80">
                I am Vengateshwaran N, a passionate Computer Science student and Data Science enthusiast with a strong foundation in Python, SQL, machine learning, and data analysis. Currently pursuing my B.Sc. in Computer Science at NPR Arts and Science College, I have actively engaged in hands-on projects and internships that showcase my expertise in AI, ML, data visualization, and full-stack development.
              </p>
              <p className="mb-4 opacity-80">
              With internship experience at CodSoft, Oasis Infobyte, and Meriskill, I have worked on impactful projects such as machine learning-based inventory optimization, customer churn reduction, and fraud detection systems. My proficiency in Django, Flask, Power BI, and Tableau enables me to develop end-to-end solutions, blending analytics with software development.
              </p>
              <p className="opacity-80">
              My final-year project, CUBY Assistant with Generative AI, leverages BERT and transformers to create an advanced voice assistant that streamlines system control and automates tasks. Alongside my technical pursuits, I have contributed as a Vice President of NSS, fostering leadership and teamwork.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-8">Skills</h2>
          
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-primary h-2.5 rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-8">Experience</h2>
          
          <div className="glass-card p-8">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                      <Briefcase size={24} className="text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <div className="flex items-center text-sm opacity-70 mb-2">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="opacity-80">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-8">Certifications & Achievements</h2>
          
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                      <Award size={24} className="text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{cert.name}</h3>
                    <div className="flex items-center text-sm opacity-70">
                      <span>{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-8">Hobbies & Interests</h2>
          
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mx-auto mb-3">
                    {hobby.icon}
                  </div>
                  <p className="font-medium">{hobby.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;