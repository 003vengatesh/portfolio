<<<<<<< HEAD
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code2, Database, Download, ExternalLink, Github, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import myImage from '/src/assets/Vengat.jpg';
import myResume from '/src/assets/Vengateshwaran_resume.pdf';
import { featuredProjects, metrics, profile, skillGroups } from '../data/portfolio';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-32 md:pt-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="section-kicker mb-4">Portfolio of {profile.name}</p>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                {profile.role}
              </h1>
              <p className="section-copy mt-6 max-w-2xl">{profile.headline}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/projects" className="btn-primary">
                  View Projects <ArrowRight size={18} />
                </Link>
                <a href={myResume} className="btn-secondary" download>
                  Download Resume <Download size={18} />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="mt-1 text-sm muted-text">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative"
            >
              <div className="glass-card overflow-hidden p-3">
                <img
                  src={myImage}
                  alt={profile.name}
                  className="h-[420px] w-full rounded-lg object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-6 left-6 right-6 grid gap-3 rounded-lg border border-[var(--card-border)] bg-[var(--surface)] p-4 shadow-xl md:left-10 md:right-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                    <ShieldCheck size={20} />
                  </span>
                  <div>
                    <p className="font-semibold">Institutional systems experience</p>
                    <p className="text-sm muted-text">Workflows, roles, databases, reports and production-style modules.</p>
                  </div>
                </div>
=======
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Database, Code, BarChart2, Brain, LineChart, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import myImage from '/src/assets/Vengat.jpg';
import Diabetis from '/src/assets/project_images/diabetis_prediction.jpg';
import credit_card from '/src/assets/project_images/credit_card_fraud_detection.jpg';
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
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <section className="section-shell mt-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="section-kicker mb-3">Core Capabilities</p>
            <h2 className="section-title">A practical stack for enterprise-style web work</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="surface-card p-5"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                  {index % 3 === 0 ? <Code2 size={22} /> : index % 3 === 1 ? <Database size={22} /> : <Briefcase size={22} />}
                </div>
                <h3 className="font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
=======
      
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
                image: Diabetis,
                tags: ['Machine Learning', 'Django', 'Healthcare'],
                github: 'https://github.com/003vengatesh/Cuby_Assistant'   // change to correct repo if separate
              },
              {
                title: 'Credit Card Fraud Detection',
                description: 'A high-accuracy fraud detection model using ML classifiers and anomaly analysis to identify fraudulent financial transactions.',
                image: credit_card,
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
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <section className="section-shell">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker mb-3">Selected Work</p>
              <h2 className="section-title">Projects with stronger business context</h2>
            </div>
            <Link to="/projects" className="btn-secondary w-fit">
              Full Project Catalogue <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="project-card surface-card flex flex-col p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="tag-pill">{project.subtitle}</span>
                    <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                  </div>
                  <span className="rounded-lg bg-[var(--surface-muted)] px-3 py-2 text-sm font-semibold text-primary">
                    {project.language}
                  </span>
                </div>
                <p className="mb-5 flex-1 muted-text">{project.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      GitHub <Github size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      Live <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.article>
=======
      
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
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      <section className="section-shell">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="section-kicker mb-3">Available for better engineering conversations</p>
              <h2 className="section-title">Let us build something clean, useful and production-minded.</h2>
              <p className="section-copy mt-4 max-w-3xl">
                I can contribute across Java/PHP backend work, institutional web modules, database workflows, frontend polish and AI-enabled tools.
              </p>
            </div>
            <Link to="/contact" className="btn-primary md:justify-self-end">
              Contact Me <ArrowRight size={18} />
            </Link>
          </div>
=======
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
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
