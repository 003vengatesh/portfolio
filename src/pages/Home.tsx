import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Database, Code, BarChart2, Brain, LineChart, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import myImage from '/src/assets/Vengat.jpg';
import timeSeriesForcast from '/src/assets/time_series_forcasting.jpg';
<img src={myImage} alt="My Image" />;


const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Vengat</span> <span className="gradient-text"></span>
              </h1>
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Turning <span className="gradient-text">Data</span> into <span className="gradient-text">Insights</span>
              </h1> */}
              <p className="text-lg opacity-80 mb-8 max-w-lg">
              From chaos to clarity, I decode the language of data.<br></br>
              Let’s predict, optimize, and innovate together.<br></br><br></br>
              
              Turning data into <span className="gradient-text">Insights,</span> and insights into <span className="gradient-text"> Innovation.</span>
                </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary flex items-center">
                  Connect <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/resume" className="btn-secondary flex items-center">
                  Download Resume <Download size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card p-1">
                  <img 
                    src={myImage}
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 glass-card p-3 rounded-lg animate-float"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Database size={24} className="text-primary" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 glass-card p-3 rounded-lg animate-float"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
                >
                  <Brain size={24} className="text-accent" />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -right-8 glass-card p-3 rounded-lg animate-float"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: "easeInOut" }}
                >
                  <BarChart2 size={24} className="text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mx-auto">Core Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {[
              { name: 'Python', icon: <Code size={40} className="mx-auto text-primary" /> },
              { name: 'SQL', icon: <Database size={40} className="mx-auto text-primary" /> },
              { name: 'Machine Learning', icon: <Brain size={40} className="mx-auto text-primary" /> },
              { name: 'Deep Learning', icon: <BrainCircuit size={40} className="mx-auto text-primary" /> },
              { name: 'Data Visualization', icon: <BarChart2 size={40} className="mx-auto text-primary" /> },
              { name: 'AI', icon: <LineChart size={40} className="mx-auto text-primary" /> },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <Link to="/projects" className="text-primary hover:underline flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'CUBY.AI – Intelligent Voice Assistant',
                description: 'A generative-AI powered desktop assistant enabling full voice-based system control, OS automation, NLP conversation, and smart task execution.',
                image: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?auto=format&fit=crop&w=2070&q=80',
                tags: ['Python', 'AI', 'NLP', 'Automation'],
                github: 'https://github.com/003vengatesh/Cuby.AI/tree/main'
              },
              {
                title: 'Diabetes Prediction System',
                description: 'An end-to-end ML application built with Django to predict diabetes risk from medical indicators using predictive analytics and classification modeling.',
                image: '/src/assets/diabetis_prediction.jpg',
                tags: ['Machine Learning', 'Django', 'Healthcare'],
                github: 'https://github.com/003vengatesh/Cuby_Assistant'   // change to correct repo if separate
              },
              {
                title: 'Credit Card Fraud Detection',
                description: 'A high-accuracy fraud detection model using ML classifiers and anomaly analysis to identify fraudulent financial transactions.',
                image: '/src/assets/project_images/credit_card_fraud_detection.jpg',
                tags: ['ML', 'Analytics', 'Security'],
                github: 'https://github.com/003vengatesh/CODSOFT/tree/main/Machine%20Learning'
              }

            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden group"
              >
                
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="opacity-80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary bg-opacity-20 text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {/* <a href="#" className="text-sm text-primary hover:underline">GitHub</a> */}
                    {/* <a href="#" className="text-sm text-primary hover:underline">Live Demo</a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mx-auto">Testimonials</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'John Smith',
                role: 'CTO at TechCorp',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu.',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              },
              {
                name: 'Sarah Johnson',
                role: 'Data Science Lead',
                content: 'Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
              },
              {
                name: 'Michael Chen',
                role: 'AI Researcher',
                content: 'Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm opacity-70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic opacity-80">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       */}
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work together?</h2>
            <p className="opacity-80 max-w-2xl mx-auto mb-8">
            Let’s Build Something Great Together! Ready to collaborate and create impactful solutions?&nbsp;&nbsp;&nbsp; Let’s connect!
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Get in Touch <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
