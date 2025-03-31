import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold gradient-text">Vengat</p>
            <p className="text-sm opacity-70 mt-1">Turning Data into Insights</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/003vengatesh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/vengateshwaran-n-66437926b/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/vengat_x" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="mailto:nvengatesh486@email.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;