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
      </div>
    </div>
  );
};

export default Projects;
