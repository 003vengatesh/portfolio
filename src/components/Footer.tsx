<<<<<<< HEAD
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[var(--card-border)] py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <p className="text-xl font-bold">{profile.name}</p>
            <p className="mt-2 max-w-lg muted-text">{profile.headline}</p>
          </div>

          <div className="space-y-3 text-sm muted-text">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-primary">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-primary">
              <Phone size={16} /> {profile.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> {profile.location}
            </span>
          </div>

          <div className="flex gap-3 md:justify-end">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--card-border)] transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--card-border)] transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--card-border)] transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-[var(--card-border)] pt-5 text-sm muted-text">
          Copyright {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Vite.
        </p>
=======
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
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
