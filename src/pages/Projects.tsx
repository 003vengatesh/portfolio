import React, { useState } from 'react';
import { motion } from 'framer-motion';
import timeSeriesForcast from '/src/assets/time_series_forcasting.jpg';
import {  Search } from 'lucide-react';
     // ExternalLink, Github,
const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Predictive Analytics Dashboard',
      description: 'A real-time dashboard for predictive analytics using machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['Python', 'ML', 'Dashboard'],
      category: 'machine-learning',
      //  github: '#',
      //  demo: '#',
    },
    {
      id: 2,
      title: 'Natural Language Processing Tool',
      description: 'An NLP tool that analyzes sentiment and extracts key information from text data.',
      image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['NLP', 'Python', 'AI'],
      category: 'nlp',
      // github: '#',
      // demo: '#',
    },
    {
      id: 3,
      title: 'Time Series Forecasting',
      description: 'A time series forecasting model for financial data using deep learning techniques.',
      image: timeSeriesForcast,
      tags: ['Deep Learning', 'Finance', 'Python'],
      category: 'deep-learning',
      // github: '#',
      // demo: '#',
    },
    {
      id: 4,
      title: 'Customer Segmentation Analysis',
      description: 'A clustering model to segment customers based on their purchasing behavior.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      tags: ['Clustering', 'Python', 'Business'],
      category: 'machine-learning',
      // github: '#',
      // demo: '#',
    },
    {
      id: 5,
      title: 'Image Classification Model',
      description: 'A deep learning model for classifying images using convolutional neural networks.',
      image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['CNN', 'Computer Vision', 'Python'],
      category: 'deep-learning',
      // github: '#',
      // demo: '#',
    },
    {
      id: 6,
      title: 'Recommendation System',
      description: 'A collaborative filtering recommendation system for an e-commerce platform.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      tags: ['Recommendation', 'Python', 'E-commerce'],
      category: 'machine-learning',
      // github: '#',
      // demo: '#',
    },
    {
      id: 7,
      title: 'Chatbot with NLP',
      description: 'An intelligent chatbot built with natural language processing capabilities.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80',
      tags: ['NLP', 'Chatbot', 'Python'],
      category: 'nlp',
      // github: '#',
      // demo: '#',
    },
    {
      id: 8,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets using D3.js.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tags: ['Visualization', 'D3.js', 'JavaScript'],
      category: 'data-visualization',
      // github: '#',
      // demo: '#',
    },
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
          <div className="glass-card p-6 mb-12">
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
          </div>
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