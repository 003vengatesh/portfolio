import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Code, Coffee, Download, Heart, Music, Pen } from 'lucide-react';
import { Link } from 'react-router-dom';
import myImage from '/src/assets/Vengat.jpg';

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
    {
      name: 'The Cybersecurity Threat Landscape',
      issuer: 'LinkedIn',
      year: '2024',
      skills: ['Cybersecurity', 'Threat & Vulnerability Management'],
    },
    {
      name: 'MATLAB Certified',
      issuer: 'Great Learning',
      year: '2024',
      credentialId: 'verify.mygreatlearning.com/ZTOZWQBQ',
    },
    {
      name: 'Introduction to Deep Learning',
      issuer: 'Infosys Springboard',
      year: '2023',
    },
    {
      name: 'Probability for Data Science',
      issuer: 'Great Learning',
      year: '2023',
      credentialId: 'verify.mygreatlearning.com/NOTATSGG',
    },
    {
      name: 'Analyzing and Visualizing Data with Microsoft Power BI',
      issuer: 'Great Learning',
      year: '2023',
      credentialId: 'verify.mygreatlearning.com/GAMGMRDG',
    },
    {
      name: 'Tableau Desktop',
      issuer: 'Udemy',
      year: '2023',
      credentialId: 'UC-616df22-31d9-4811-8bb9-a63823229452',
    },
    {
      name: 'Data Analysis',
      issuer: 'Udemy',
      year: '2023',
      credentialId: 'UC-e89ef463-507b-427e-b017-0d450b7d9374',
    },
    {
      name: 'Mastering Data Visualization with Python',
      issuer: 'Udemy',
      year: '2023',
      credentialId: 'UC-366dbf20-65bf-4470-9dce-9d0887ea145b',
    },
    {
      name: 'Python Seaborn',
      issuer: 'Great Learning',
      year: '2023',
      credentialId: 'verify.mygreatlearning.com/QEWWQOQV',
    },
    {
      name: 'Deep Learning',
      issuer: 'Great Learning',
      year: '2023',
      credentialId: 'verify.mygreatlearning.com/GYLUZDKM',
    },
    {
      name: 'Machine Learning',
      issuer: 'Great Learning',
      year: '2023',
      credentialId: 'verify.mygreatlearning.com/FUYRLVJG',
    },
    {
      name: 'Microsoft Excel – Advanced',
      issuer: 'Naan Mudhalvan',
      year: '2023',
    },
    {
      name: 'Microsoft PowerPoint – Advanced',
      issuer: 'Naan Mudhalvan',
      year: '2023',
    },
    {
      name: 'Object Oriented Programming in Python',
      issuer: 'Udemy',
      year: '2023',
      credentialId: 'UC-38au841c-add-4810-9504-ef16ee541b60',
    },
    {
      name: 'Advanced Python 3 Course',
      issuer: 'Udemy',
      credentialId: 'UC-3c3cfb61-2472-4919-9107-43d5c48b3694',
    },
    {
      name: 'Artificial Intelligence and Machine Learning for Managers',
      issuer: 'Udemy',
      credentialId: 'UC-664039df-1989-46c2-b050-f09207a1765f',
    },
    {
      name: 'Learn to Create AI (JARVIS) Assistant with Python',
      issuer: 'Udemy',
      credentialId: 'UC-1f6c7bf4-632b-4388-b27c-81ea3cd54dad',
    },
    {
      name: 'Microsoft Word – Advanced',
      issuer: 'Udemy',
      credentialId: 'UC-9e6d8142-c9ba-44b7-9ddb-b9f3d48a3d3f',
    },
    {
      name: 'MySQL Database Development Mastery',
      issuer: 'Udemy',
      credentialId: 'UC-68ed2f32-c66c-45d6-b52b-30fe6e320417',
    },
    {
      name: 'Statistics for Machine Learning',
      issuer: 'Great Learning',
      credentialId: 'verify.mygreatlearning.com/UMTBJQGK',
    },
  ];


  const experiences = [
    {
      company: 'NPR College of Education',
      role: 'Web Developer',
      period: 'Jul 2025 - Present',
      location: 'Dindigul, Tamil Nadu, India',
      description: 'Developing secure, scalable, and user-centric web applications for academic and administrative systems. Responsible for full-stack development, performance optimization, UI/UX improvements, and deployment of production-grade solutions.',
    },
    {
      company: 'The Sparks Foundation',
      role: 'Data Science & Business Analytics Intern',
      period: 'Nov 2023 - Jan 2024',
      location: 'Remote, India',
      description: 'Worked on data analysis, visualization, and business analytics projects. Applied Python, Pandas, and data-driven techniques to derive actionable insights and solve real-world business problems.',
    },
    {
      company: 'Oasis Infobyte',
      role: 'Data Science Intern',
      period: 'Oct 2023 - Nov 2023',
      location: 'Remote, India',
      description: 'Built machine learning and NLP-based solutions including classification and prediction models. Gained hands-on experience in supervised learning, data preprocessing, and real-world ML workflows.',
    },
    {
      company: 'MeriSKILL',
      role: 'Data Analyst Intern',
      period: 'Oct 2023',
      location: 'Remote, India',
      description: 'Performed data cleaning, exploratory analysis, and business reporting using Python and Pandas. Focused on transforming raw datasets into meaningful insights through structured analytics.',
    },
    {
      company: 'CodSoft',
      role: 'Data Science Intern',
      period: 'Oct 2023',
      location: 'Remote, India',
      description: 'Developed predictive models for real-world datasets including classification and regression tasks. Gained hands-on exposure to feature engineering, visualization, and ML pipelines.',
    },
    {
      company: 'CodSoft',
      role: 'Machine Learning Intern',
      period: 'Sep 2023',
      location: 'Remote, India',
      description: 'Implemented machine learning models for NLP and predictive analytics use cases such as spam detection, credit card fraud detection, and customer churn prediction using supervised learning techniques.',
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
                  src={myImage} 
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
              <h2 className="text-2xl font-semibold mb-4">A Little Summary :</h2>
              <p className="mb-4 opacity-80">
                I am a Web Developer with a strong engineering foundation and an evolving specialization in Artificial Intelligence. I design and build secure, scalable, and user-focused applications using modern web technologies, while actively expanding my expertise in Machine Learning, Deep Learning, and data-driven systems.</p>
              <p className="mb-4 opacity-80">
                My work blends practical software engineering with intelligent automation—ranging from full-stack web development to AI-powered applications and predictive models. I am particularly driven by building real-world solutions that enhance productivity, improve decision-making, and deliver measurable impact.</p>
              <p className="mb-4 opacity-80">
                I thrive in environments that value continuous learning, innovation, and collaboration. As I transition deeper into the AI domain, my goal is to grow as a full-scale AI Developer and contribute to the development of intelligent, high-performance systems across industries.</p>
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