import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Me</h1>
          
          <div className="glass-card p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <p className="opacity-80 mb-8">
                  Have a question or want to work together? Feel free to contact me using the form or through any of the channels below.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-4">
                      <Mail size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Email</p>
                      <p className="font-medium">nvengatesh7373@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-4">
                      <Phone size={20} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Phone</p>
                      <p className="font-medium">+91 8610622718</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-4">
                      <MapPin size={20} className="text-secondary"/>
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Location</p>
                      <p className="font-medium">TamilNadu, India</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/003vengatesh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center hover:bg-primary hover:bg-opacity-30 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} className="text-secondary" />
                    </a>
                    <a 
                      href="https://linkedin.com/vengateshwaran-n-66437926b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center hover:bg-primary hover:bg-opacity-30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="text-secondary" />
                    </a>
                    <a 
                      href="https://twitter.com/vengat_x" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center hover:bg-primary hover:bg-opacity-30 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} className="text-secondary" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-lg bg-transparent border border-gray-700 focus:border-primary focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-lg bg-transparent border border-gray-700 focus:border-primary focus:outline-none"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 rounded-lg bg-transparent border border-gray-700 focus:border-primary focus:outline-none"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 rounded-lg bg-transparent border border-gray-700 focus:border-primary focus:outline-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full flex items-center justify-center">
                    <Send size={18} className="mr-2" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Map or Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-4 h-80 mb-12"
        >
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.233083863413!2d77.95600847411287!3d10.362388967823175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ad0dfb9fbec1%3A0x36766a38f03c4a4f!2sDindigul%2C%20Tamil%20Nadu%20624001%2C%20India!5e0!3m2!1sen!2sin!4v1711885000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '0.5rem' }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </motion.div>
        
        {/* FAQ Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-8">Frequently Asked Questions</h2>
          
          <div className="glass-card p-8">
            <div className="space-y-6">
              {[
                {
                  question: 'What services do you offer?',
                  answer: 'I offer data science consulting, machine learning model development, data visualization, and AI integration services. I can help with everything from data preprocessing to model deployment.',
                },
                {
                  question: 'How do we start working together?',
                  answer: "The process typically begins with an initial consultation to understand your needs and goals. From there, I will provide a proposal outlining the scope, timeline, and cost of the project.",
                },
                {
                  question: 'What is your typical project timeline?',
                  answer: 'Project timelines vary depending on complexity and scope. Small projects might take 2-4 weeks, while larger ones can take several months. I will provide a detailed timeline during the proposal phase.',
                },
                {
                  question: 'Do you offer training or workshops?',
                  answer: 'Yes, I offer training sessions and workshops on various data science topics, including machine learning, data visualization, and AI fundamentals. These can be customized to your team needs.',
                },
              ].map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="opacity-80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Contact;