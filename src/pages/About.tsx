import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle2, Download, GraduationCap, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import myImage from '/src/assets/Vengat.jpg';
import myResume from '/src/assets/Vengateshwaran_resume.pdf';
import { certifications, education, experiences, profile, skillGroups, skillLevels } from '../data/portfolio';

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 max-w-4xl"
        >
          <p className="section-kicker mb-3">About</p>
          <h1 className="text-4xl font-bold md:text-5xl">Software engineering profile with real institutional delivery</h1>
          <p className="section-copy mt-5">{profile.summary}</p>
        </motion.header>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="surface-card overflow-hidden"
          >
            <img src={myImage} alt={profile.name} className="h-[420px] w-full object-cover object-top" />
            <div className="p-6">
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="mt-2 muted-text">{profile.role}</p>
              <a href={myResume} className="btn-primary mt-6 w-full" download>
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="space-y-6"
          >
            <div className="surface-card p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                  <Layers3 size={22} />
                </span>
                <h2 className="text-2xl font-bold">Professional Summary</h2>
              </div>
              <div className="space-y-4 leading-7 muted-text">
                <p>
                  I focus on practical systems that reduce manual work and make academic operations easier to manage. My strongest recent work is around CodeIgniter, PHP, MySQL, role-based workflows and student-facing institutional modules.
                </p>
                <p>
                  Alongside web development, I keep a solid AI and data science foundation through Python, ML notebooks, NLP experiments and AI assistant projects. That mix lets me approach software as both an engineer and a problem solver.
                </p>
                <p>
                  I am aiming for MNC-level engineering expectations: clean UI, clear code ownership, stable data flows, secure access patterns and project stories that a recruiter can understand quickly.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {skillGroups.slice(0, 4).map((group) => (
                <div key={group.title} className="surface-card p-5">
                  <h3 className="font-semibold">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="section-shell">
          <div className="mb-8">
            <p className="section-kicker mb-3">Technical Depth</p>
            <h2 className="section-title">Balanced across backend, data and frontend delivery</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {skillLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="surface-card p-5"
              >
                <div className="mb-3 flex justify-between gap-4 text-sm font-semibold">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--surface-muted)]">
                  <motion.div
                    className="h-2 rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.04 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
              <Briefcase size={22} />
            </span>
            <div>
              <p className="section-kicker">Experience</p>
              <h2 className="section-title">Work and internships</h2>
            </div>
          </div>

          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="surface-card p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{experience.role}</h3>
                    <p className="mt-1 font-semibold text-primary">{experience.company}</p>
                  </div>
                  <p className="text-sm muted-text">{experience.period} | {experience.location}</p>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <p key={highlight} className="flex gap-3 text-sm muted-text">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-secondary" size={17} />
                      {highlight}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                <GraduationCap size={22} />
              </span>
              <h2 className="section-title">Education</h2>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="surface-card p-5">
                  <h3 className="font-bold">{item.degree}</h3>
                  <p className="mt-1 text-primary">{item.institution}</p>
                  <p className="mt-2 text-sm muted-text">{item.period} | {item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                <Award size={22} />
              </span>
              <h2 className="section-title">Certifications</h2>
            </div>
            <div className="grid gap-3">
              {certifications.map((certification) => (
                <div key={certification} className="surface-card flex items-center gap-3 p-4">
                  <CheckCircle2 className="shrink-0 text-secondary" size={18} />
                  <p className="text-sm font-medium">{certification}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-6 text-center">
          <Link to="/projects" className="btn-secondary">
            Explore Projects
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
