import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to Machine Learning Algorithms',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu.',
      image: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'May 15, 2023',
      readTime: '8 min read',
      author: 'John Doe',
      category: 'Machine Learning',
    },
    {
      id: 2,
      title: 'Data Preprocessing Techniques for Better Model Performance',
      excerpt: 'Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac.',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'April 22, 2023',
      readTime: '6 min read',
      author: 'John Doe',
      category: 'Data Science',
    },
    {
      id: 3,
      title: 'Understanding Neural Networks: A Beginner\'s Guide',
      excerpt: 'Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
      date: 'March 10, 2023',
      readTime: '10 min read',
      author: 'John Doe',
      category: 'Deep Learning',
    },
    {
      id: 4,
      title: 'The Future of AI: Trends to Watch in 2023',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.',
      image: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'February 28, 2023',
      readTime: '7 min read',
      author: 'John Doe',
      category: 'AI',
    },
    {
      id: 5,
      title: 'Ethical Considerations in Data Science',
      excerpt: 'Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
      date: 'January 15, 2023',
      readTime: '9 min read',
      author: 'John Doe',
      category: 'Ethics',
    },
    {
      id: 6,
      title: 'Optimizing Machine Learning Models for Production',
      excerpt: 'Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'December 5, 2022',
      readTime: '8 min read',
      author: 'John Doe',
      category: 'MLOps',
    },
  ];
  
  const categories = [
    'All',
    'Machine Learning',
    'Deep Learning',
    'Data Science',
    'AI',
    'Ethics',
    'MLOps',
  ];
  
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
          
          {/* Featured Post */}
          <div className="glass-card overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80" 
                  alt="Featured Post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-sm text-primary mb-2">Featured Post</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Understanding Neural Networks: A Beginner's Guide</h2>
                <div className="flex items-center text-sm opacity-70 mb-4">
                  <User size={16} className="mr-1" />
                  <span className="mr-4">John Doe</span>
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">March 10, 2023</span>
                  <Clock size={16} className="mr-1" />
                  <span>10 min read</span>
                </div>
                <p className="opacity-80 mb-6">
                  Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros.
                </p>
                <Link to="#" className="text-primary hover:underline flex items-center w-fit">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  index === 0 ? 'bg-primary text-white' : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-xs px-2 py-1 rounded-full bg-primary bg-opacity-20 text-primary mb-3 inline-block">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex items-center text-sm opacity-70 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <p className="opacity-80 mb-4">{post.excerpt}</p>
                <Link to="#" className="text-primary hover:underline flex items-center w-fit">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Newsletter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-8 mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="opacity-80 max-w-lg mx-auto mb-6">
            Stay updated with my latest articles, projects, and insights in data science and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow py-3 px-4 rounded-lg bg-transparent border border-gray-700 focus:border-primary focus:outline-none"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Blog;