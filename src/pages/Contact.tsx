import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import { profile } from '../data/portfolio';

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || 'Portfolio enquiry').trim();
    const message = String(formData.get('message') || '').trim();
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 max-w-4xl"
        >
          <p className="section-kicker mb-3">Contact</p>
          <h1 className="text-4xl font-bold md:text-5xl">Let us talk about the next useful system</h1>
          <p className="section-copy mt-5">
            Reach out for Java/PHP developer roles, institutional web systems, frontend improvement work, database-backed modules or AI-aware application ideas.
          </p>
        </motion.header>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="surface-card p-7">
              <h2 className="text-2xl font-bold">Direct Details</h2>
              <div className="mt-6 space-y-4">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 muted-text transition-colors hover:text-primary">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-sm">Email</span>
                    <span className="font-semibold text-[var(--foreground)]">{profile.email}</span>
                  </span>
                </a>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 muted-text transition-colors hover:text-primary">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                    <Phone size={20} />
                  </span>
                  <span>
                    <span className="block text-sm">Phone</span>
                    <span className="font-semibold text-[var(--foreground)]">{profile.phone}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 muted-text">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--surface-muted)] text-primary">
                    <MapPin size={20} />
                  </span>
                  <span>
                    <span className="block text-sm">Location</span>
                    <span className="font-semibold text-[var(--foreground)]">{profile.location}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="surface-card p-7">
              <h2 className="text-2xl font-bold">Profiles</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  GitHub <Github size={17} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  LinkedIn <Linkedin size={17} />
                </a>
                <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Twitter <Twitter size={17} />
                </a>
              </div>
            </div>

            <div className="surface-card overflow-hidden p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.233083863413!2d77.95600847411287!3d10.362388967823175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ad0dfb9fbec1%3A0x36766a38f03c4a4f!2sDindigul%2C%20Tamil%20Nadu%20624001%2C%20India!5e0!3m2!1sen!2sin!4v1711885000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                title="Tamil Nadu location map"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="surface-card p-7"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <p className="mt-2 muted-text">Messages route to {profile.email}.</p>

            <div className="mt-7 grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Name
                </label>
                <input id="name" name="name" className="input-field" placeholder="Your name" required />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Email
                </label>
                <input id="email" name="email" type="email" className="input-field" placeholder="you@example.com" required />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
                  Subject
                </label>
                <input id="subject" name="subject" className="input-field" placeholder="Role, project or collaboration" required />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  className="input-field resize-none"
                  placeholder="Share the role, project details or next step."
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Prepare Email <Send size={18} />
              </button>
            </div>
          </motion.form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
