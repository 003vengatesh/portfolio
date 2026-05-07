<<<<<<< HEAD
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Code2,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Search,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  languageOrder,
  projects,
  projectTrackMeta,
  type Project,
  type ProjectLanguage,
  type ProjectTrack,
} from '../data/portfolio';

const trackIcons: Record<ProjectTrack, LucideIcon> = {
  academic: GraduationCap,
  'real-time': Briefcase,
  internship: Layers3,
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const TrackIcon = trackIcons[project.track];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="project-card surface-card flex h-full flex-col p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
            <TrackIcon size={22} />
          </span>
          <div>
            <p className="text-sm font-semibold text-primary">{project.subtitle}</p>
            <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
          </div>
        </div>
        <span className="tag-pill shrink-0">{project.language}</span>
      </div>

      <p className="mb-5 muted-text">{project.description}</p>

      <div className="mb-5 space-y-3">
        {project.impact.slice(0, 3).map((item) => (
          <p key={item} className="flex gap-3 text-sm muted-text">
            <Code2 className="mt-0.5 shrink-0 text-secondary" size={16} />
            {item}
          </p>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub <Github size={16} />
          </a>
        ) : (
          <span className="btn-secondary cursor-default">
            Resume Project <FileText size={16} />
          </span>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Live <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [trackFilter, setTrackFilter] = useState<ProjectTrack | 'all'>('all');
  const [languageFilter, setLanguageFilter] = useState<ProjectLanguage | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const languageOptions = useMemo(
    () => languageOrder.filter((language) => projects.some((project) => project.language === language)),
    [],
  );

  const visibleProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesTrack = trackFilter === 'all' || project.track === trackFilter;
      const matchesLanguage = languageFilter === 'all' || project.language === languageFilter;
      const searchable = [
        project.title,
        project.subtitle,
        project.description,
        project.language,
        project.source,
        ...project.tags,
        ...project.impact,
      ]
        .join(' ')
        .toLowerCase();

      return matchesTrack && matchesLanguage && (!query || searchable.includes(query));
    });
  }, [languageFilter, searchTerm, trackFilter]);

  const groupedProjects = projectTrackMeta
    .map((track) => ({
      ...track,
      projects: visibleProjects.filter((project) => project.track === track.id),
    }))
    .filter((track) => track.projects.length > 0);

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-5xl"
        >
          <p className="section-kicker mb-3">Project Portfolio</p>
          <h1 className="text-4xl font-bold md:text-5xl">Organized by final-year, real-time and internship work</h1>
          <p className="section-copy mt-5">
            The portfolio now separates true academic projects, production-style institutional modules and internship work. Each section is grouped by implementation language so recruiters can scan the stack quickly.
          </p>
        </motion.header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          {projectTrackMeta.map((track) => {
            const TrackIcon = trackIcons[track.id];
            const count = projects.filter((project) => project.track === track.id).length;

            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setTrackFilter(track.id)}
                className={`surface-card p-5 text-left transition-all hover:border-primary ${
                  trackFilter === track.id ? 'border-primary' : ''
                }`}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                  <TrackIcon size={22} />
                </span>
                <span className="text-sm font-semibold text-primary">{count} projects</span>
                <h2 className="mt-1 text-xl font-bold">{track.label}</h2>
                <p className="mt-2 text-sm muted-text">{track.description}</p>
              </button>
            );
          })}
        </section>

        <section className="glass-card mb-12 p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="input-field pl-11"
                placeholder="Search by project, stack, module or outcome"
                type="search"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setTrackFilter('all')}
                className={`btn-secondary ${trackFilter === 'all' ? 'text-primary' : ''}`}
              >
                All Tracks
              </button>
              {projectTrackMeta.map((track) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setTrackFilter(track.id)}
                  className={`btn-secondary ${trackFilter === track.id ? 'text-primary' : ''}`}
                >
                  {track.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setLanguageFilter('all')}
              className={`tag-pill ${languageFilter === 'all' ? 'border-primary text-primary' : ''}`}
            >
              All Languages
            </button>
            {languageOptions.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => setLanguageFilter(language)}
                className={`tag-pill ${languageFilter === language ? 'border-primary text-primary' : ''}`}
              >
                {language}
              </button>
            ))}
          </div>
        </section>

        {groupedProjects.length === 0 ? (
          <div className="surface-card p-8 text-center">
            <h2 className="text-2xl font-bold">No projects matched</h2>
            <p className="mt-2 muted-text">Try a different track, language or search term.</p>
          </div>
        ) : (
          <div className="space-y-14">
            {groupedProjects.map((track) => (
              <section key={track.id}>
                <div className="mb-7">
                  <p className="section-kicker mb-2">{track.projects.length} visible projects</p>
                  <h2 className="section-title">{track.label}</h2>
                  <p className="section-copy mt-3 max-w-3xl">{track.description}</p>
                </div>

                <div className="space-y-10">
                  {languageOrder
                    .filter((language) => track.projects.some((project) => project.language === language))
                    .map((language) => {
                      const languageProjects = track.projects.filter((project) => project.language === language);

                      return (
                        <div key={`${track.id}-${language}`}>
                          <div className="mb-4 flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                              <Code2 size={18} />
                            </span>
                            <h3 className="text-xl font-bold">{language}</h3>
                          </div>
                          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {languageProjects.map((project, index) => (
                              <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </section>
            ))}
          </div>
        )}
=======
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
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Projects;
=======
export default Projects;
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
