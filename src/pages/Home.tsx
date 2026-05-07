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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            ))}
          </div>
        </div>
      </section>

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
        </div>
      </section>
    </div>
  );
};

export default Home;
