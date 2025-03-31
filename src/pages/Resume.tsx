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
                      role: 'AI & ML Intern',
                      company: 'CodSoft',
                      period: 'Aug 2023 - Oct 2023',
                      description: [
                        'Implemented machine learning algorithms to optimize inventory management, reducing stockouts by 40%.',
                        'Developed data analytics models in Python, achieving a 25% decrease in customer churn.',
                        'Applied NLP techniques and Power BI for insightful data visualization and business decision-making.',
                        'Showcased adaptability and innovation through high-impact projects in machine learning and data science.',
                      ],
                    },
                    {
                      role: "Data Science Intern",
                      company: "Oasis Infobyte",
                      period: "Oct 2023 - Nov 2023",
                      description: [
                        "Conducted statistical analysis and applied ML techniques to solve real-world business challenges.",
                        "Developed data-driven solutions using Python and machine learning models for impactful results.",
                        "Gained hands-on experience in data preprocessing, visualization, and model optimization.",
                        "Enhanced problem-solving and analytical skills through end-to-end AI/ML projects."
                      ],
                    },
                    {
                      role: "Data Analyst Intern",
                      company: "Meriskill",
                      period: "Sept 2023 - Oct 2023",
                      description: [
                        "Utilized Power BI and Tableau to create interactive dashboards for business insights.",
                        "Applied data cleansing, transformation, and visualization techniques to improve decision-making.",
                        "Contributed to process optimization through advanced analytics and data-driven strategies.",
                        "Strengthened expertise in business intelligence tools and real-world data analytics."
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