<<<<<<< HEAD
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
=======
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';
import myImage from '/src/assets/Vengat.jpg';
import myResume from '/src/assets/Vengateshwaran_resume.pdf';
 
const Resume: React.FC = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
            <p className="opacity-80 max-w-2xl">
              Here's an overview of my professional experience, education, and skills. Download the full resume for more details.
            </p>
          </div>
          
          <a 
            href={myResume}  
            className="btn-primary mt-6 md:mt-0 flex items-center justify-center w-full md:w-auto"
            download
          >
            <Download size={18} className="mr-2"/> Download Resume
          </a>
        </motion.div>
        
        <div className="glass-card p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src={myImage} 
                alt="Profile" 
                className="w-full h-auto rounded-lg mb-4"
              />
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                <div className="space-y-2 opacity-80">
                  <p>Email: nvengatesh7373@gmail.com</p>
                  <p>Phone: +91 8610622718</p>
                  <p>Location: TamilNadu, India</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Data Visualization', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'Computer Vision', 'Statistics'].map((skill, index) => (
                    <span key={index} className="text-sm px-3 py-1 rounded-full bg-primary bg-opacity-20 text-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Languages</h2>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Tamil</span>
                      <span>Native</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span>Fluent</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Kannada</span>
                      <span>Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                    <Briefcase size={20} className="text-secondary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Work Experience</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      role: 'Web Developer',
                      company: 'NPR College of Education',
                      period: 'Jul 2025 - Present',
                      description: [
                        'Designing and developing secure, scalable, and responsive web applications for academic and administrative systems.',
                        'Building user-centric interfaces using modern frontend technologies and optimized backend integrations.',
                        'Implementing authentication, role-based access control, and database-driven modules for institutional platforms.',
                        'Actively contributing to digital transformation initiatives within the college environment.',
                      ],
                    },
                    {
                      role: 'Data Science & Business Analytics Intern',
                      company: 'The Sparks Foundation',
                      period: 'Nov 2023 - Jan 2024',
                      description: [
                        'Worked on real-world business datasets to build predictive machine learning models using Python.',
                        'Performed data analysis, feature engineering, and model evaluation for business-driven use cases.',
                        'Developed end-to-end ML workflows from preprocessing to deployment-ready predictions.',
                        'Strengthened applied knowledge in machine learning, analytics, and data-driven problem solving.',
                      ],
                    },
                    {
                      role: 'Data Science & Machine Learning Intern',
                      company: 'CodSoft',
                      period: 'Sep 2023 - Oct 2023',
                      description: [
                        'Built machine learning models for classification and prediction using real-world datasets.',
                        'Worked extensively on data preprocessing, feature selection, and model optimization.',
                        'Developed projects in NLP and predictive analytics using Python and scikit-learn.',
                        'Demonstrated strong problem-solving skills through practical, production-style ML implementations.',
                      ],
                    },

                  ].map((job, index) => (
                    <div key={index} className="glass-card p-6">
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <div className="flex flex-wrap items-center text-sm opacity-70 mb-3">
                        <span>{job.company}</span>
                        <span className="mx-2">•</span>
                        <span>{job.period}</span>
                        <span className="mx-2">•</span>
                        {/* <span>{job.location}</span> */}
                      </div>
                      <ul className="list-disc list-inside space-y-1 opacity-80">
                        {job.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                    <GraduationCap size={20} className="text-secondary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Education</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      degree: 'Master of Science in Computer Applications',
                      institution: 'Bharathidasan University, Trichy',
                      period: '2024-2026',
                      description: 'Relevant coursework: Algorithms, Data Structures, Machine Learning, Database Systems.',
                    },
                    {
                      degree: 'Bachelor of Science in Computer Science',
                      institution: 'Madurai Kamaraj University, Madurai',
                      period: '2021-2024',
                      
                      percentage: '80%',
                      
                    },
                  ].map((edu, index) => (
                    <div key={index} className="glass-card p-6">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <div className="flex items-center text-sm opacity-70 mb-3">
                        <span>{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.period}</span>
                      </div>
                      <p className="opacity-80">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                    <Award size={20} className="text-secondary" />
                  </div>
                  <h2 className="text-2xl font-semibold">Certifications</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Object-Oriented Programming in Python",
                      issuer: "Udemy",
                      year: "2023"
                    },
                    {
                      name: "Data Analysis and Visualization with Python",
                      issuer: "Udemy",
                      year: "2023"
                    },
                    {
                      name: "Microsoft Power BI",
                      issuer: "Great Learning",
                      year: "2023"
                    },
                    {
                      name: "Machine Learning",
                      issuer: "Great Learning",
                      year: "2023"
                    },
                    {
                      name: "Deep Learning Basics",
                      issuer: "Great Learning",
                      year: "2023"
                    },
                  ].map((cert, index) => (
                    <div key={index} className="glass-card p-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3">
                        <FileText size={18} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{cert.name}</h3>
                        <div className="text-sm opacity-70">
                          <span>{cert.issuer}</span>
                          <span className="mx-1">•</span>
                          <span>{cert.year}</span> 
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> 
        </div>
        
        <div className="text-center">
          <p className="opacity-80 mb-6">Need a more detailed version of my resume?</p>
          <a 
            href={myResume}  
            className="btn-primary inline-flex items-center"
            download
          >
            <Download size={18} className="mr-2" /> Download Full Resume (PDF)
          </a>
        </div>
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Resume;
=======
export default Resume;
>>>>>>> b6702caa4f643f23f59edf5e36727cf75dcb04ee
