import { motion } from 'framer-motion';
import { Award, Briefcase, Download, ExternalLink, FileText, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import myImage from '/src/assets/Vengat.jpg';
import myResume from '/src/assets/Vengateshwaran_resume.pdf';
import { certifications, education, experiences, profile, projects, skillGroups } from '../data/portfolio';

const Resume = () => {
  const resumeProjects = projects.filter((project) => project.featured).slice(0, 5);

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <p className="section-kicker mb-3">Resume</p>
            <h1 className="text-4xl font-bold md:text-5xl">Java resume and professional profile</h1>
            <p className="section-copy mt-5 max-w-3xl">
              The previous PDF has been replaced with the Java resume version. This page mirrors the same direction: Java, PHP, CodeIgniter, MySQL, institutional applications and practical project delivery.
            </p>
          </div>
          <a href={myResume} className="btn-primary" download>
            Download Java Resume <Download size={18} />
          </a>
        </motion.header>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="surface-card overflow-hidden">
              <img src={myImage} alt={profile.name} className="h-80 w-full object-cover object-top" />
              <div className="p-6">
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="mt-2 muted-text">{profile.role}</p>
              </div>
            </div>

            <div className="surface-card p-6">
              <h2 className="mb-4 text-xl font-bold">Contact</h2>
              <div className="space-y-3 text-sm muted-text">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-primary">
                  <Mail size={17} /> {profile.email}
                </a>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-primary">
                  <Phone size={17} /> {profile.phone}
                </a>
                <span className="flex items-center gap-3">
                  <MapPin size={17} /> {profile.location}
                </span>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">
                  <ExternalLink size={17} /> GitHub Profile
                </a>
              </div>
            </div>

            <div className="surface-card p-6">
              <h2 className="mb-4 text-xl font-bold">Technical Expertise</h2>
              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-2 text-sm font-semibold text-primary">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="tag-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="space-y-8">
            <section className="surface-card p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                  <FileText size={22} />
                </span>
                <h2 className="text-2xl font-bold">Professional Profile</h2>
              </div>
              <p className="leading-7 muted-text">
                MCA software professional with a strong foundation in software engineering, problem-solving and system design. Experienced in developing scalable institutional applications, optimizing backend/database workflows and building practical modules that improve operational efficiency.
              </p>
            </section>

            <section>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                  <Briefcase size={22} />
                </span>
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>
              <div className="space-y-5">
                {experiences.slice(0, 3).map((experience) => (
                  <article key={`${experience.company}-${experience.period}`} className="surface-card p-6">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{experience.role}</h3>
                        <p className="mt-1 font-semibold text-primary">{experience.company}</p>
                      </div>
                      <p className="text-sm muted-text">{experience.period}</p>
                    </div>
                    <ul className="mt-5 list-disc space-y-2 pl-5 muted-text">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                  <FileText size={22} />
                </span>
                <h2 className="text-2xl font-bold">Project Highlights</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {resumeProjects.map((project) => (
                  <article key={project.id} className="surface-card p-5">
                    <p className="text-sm font-semibold text-primary">{project.language} | {project.subtitle}</p>
                    <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
                    <p className="mt-3 text-sm muted-text">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                    <GraduationCap size={22} />
                  </span>
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                <div className="space-y-4">
                  {education.map((item) => (
                    <article key={item.degree} className="surface-card p-5">
                      <h3 className="font-bold">{item.degree}</h3>
                      <p className="mt-1 text-primary">{item.institution}</p>
                      <p className="mt-2 text-sm muted-text">{item.period} | {item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                    <Award size={22} />
                  </span>
                  <h2 className="text-2xl font-bold">Certifications</h2>
                </div>
                <div className="space-y-3">
                  {certifications.slice(0, 6).map((certification) => (
                    <article key={certification} className="surface-card p-4">
                      <p className="text-sm font-medium">{certification}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <div className="surface-card p-6 text-center">
              <p className="mb-5 muted-text">For the full one-page resume version, use the PDF download.</p>
              <a href={myResume} className="btn-primary" download>
                Download Full Resume <Download size={18} />
              </a>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Resume;
