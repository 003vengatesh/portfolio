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
      </div>
    </footer>
  );
};

export default Footer;
