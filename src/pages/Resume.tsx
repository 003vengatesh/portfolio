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
      </div>
    </div>
  );
};

export default Resume;