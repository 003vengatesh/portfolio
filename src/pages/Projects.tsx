import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MedmateAI from '/src/assets/project_images/medmate_ai.jpg';
import timeSeriesForcast from '/src/assets/time_series_forcasting.jpg';
import {  Search } from 'lucide-react';
     // ExternalLink, Github,
const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'CUBY.AI – Intelligent Voice Assistant',
      description: 'An advanced AI voice assistant enabling full system control through voice commands, automation, chatbot interaction, and generative AI features.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2070&q=80',
      tags: ['Python', 'AI', 'Automation', 'NLP'],
      category: 'nlp',
      github: 'https://github.com/003vengatesh/Cuby_Assistant',
    },
    {
      id: 2,
      title: 'Credit Card Fraud Detection System',
      description: 'A high-accuracy fraud detection system using Logistic Regression and Random Forest with advanced encoding and hyperparameter tuning.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2070&q=80',
      tags: ['Machine Learning', 'Python', 'Classification'],
      category: 'machine-learning',
      github: 'https://github.com/003vengatesh/CODSOFT/tree/main/Machine%20Learning',
    },
    {
      id: 3,
      title: 'Customer Churn Prediction',
      description: 'A predictive ML system to identify customer churn using Random Forest, Logistic Regression, and XGBoost with ~87% accuracy.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80',
      tags: ['XGBoost', 'ML', 'Customer Analytics'],
      category: 'machine-learning',
      github: 'https://github.com/003vengatesh/CODSOFT/tree/main/Data%20Science',
    },
    {
      id: 4,
      title: 'Movie Genre Classification (NLP)',
      description: 'An NLP-based multi-class movie genre classification system using TF-IDF and Machine Learning models.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2070&q=80',
      tags: ['NLP', 'TF-IDF', 'Text Classification'],
      category: 'nlp',
      github: 'https://github.com/003vengatesh/CODSOFT/tree/main/Machine%20Learning',
    },
    {
      id: 5,
      title: 'MedMateAI – AI Healthcare Assistant',
      description: 'An AI-powered healthcare assistant for medical guidance, symptom analysis, and intelligent responses.',
      image: MedmateAI ,
      tags: ['Healthcare AI', 'Python', 'ML'],
      category: 'deep-learning',
      github: 'https://github.com/003vengatesh/MedMateAI',
    }
  ];

  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
          
          {/* Search and Filter */}
          {/* <div className="glass-card p-6 mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative md:w-1/3">
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full py-2 pl-10 pr-4 rounded-lg bg-transparent border border-gray-700 focus:border-primary focus:outline-none"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-70" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setFilter('all')} 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilter('machine-learning')} 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === 'machine-learning' ? 'bg-primary text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  Machine Learning
                </button>
                <button 
                  onClick={() => setFilter('deep-learning')} 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === 'deep-learning' ? 'bg-primary text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  Deep Learning
                </button>
                <button 
                  onClick={() => setFilter('nlp')} 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === 'nlp' ? 'bg-primary text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  NLP
                </button>
                <button 
                  onClick={() => setFilter('data-visualization')} 
                  className={`px-4 py-2 rounded-lg transition-colors ${filter === 'data-visualization' ? 'bg-primary text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  Data Visualization
                </button>
              </div>
            </div>
          </div> */}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                {/* <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="flex items-center text-sm hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center text-sm hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
         
        {/* Interactive AI Model Section */}
         {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="section-title mb-8">Interactive AI Demo</h2>
          
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Try My Sentiment Analysis Model</h3>
                <p className="opacity-80 mb-6">
                  This is a demonstration of a sentiment analysis model that can analyze the sentiment of any text you input. Try it out by typing a sentence in the input field.
                </p>
                <div className="mb-4">
                  <textarea
                    placeholder="Enter a sentence to analyze sentiment..."
                    className="w-full p-4 rounded-lg bg-transparent border border-gray-700 focus:border-primary focus:outline-none h-32"
                  ></textarea>
                </div>
                <button className="btn-primary">Analyze Sentiment</button>
              </div>
              
              <div className="glass-card p-6 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-medium mb-2">Sentiment Analysis Result</h4>
                  <p className="opacity-70">Enter text and click analyze to see results</p>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span>Negative</span>
                  <span>Positive</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
                  <div className="bg-primary h-4 rounded-full" style={{ width: '0%' }}></div>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-medium">Sentiment: <span className="text-primary">Neutral</span></p>
                  <p className="opacity-70">Confidence: 0%</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>  */}
      </div>
    </div>
  );
};

export default Projects;