/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  GraduationCap, 
  Award, 
  Users, 
  MapPin,
  Briefcase,
  Terminal
} from "lucide-react";
import { PORTFOLIO_DATA } from "./constants";

export default function App() {
  const initials = PORTFOLIO_DATA.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="min-h-screen bg-bg text-text-main font-sans selection:bg-accent/30 selection:text-text-main flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-[280px] bg-surface p-8 flex flex-col border-b md:border-b-0 md:border-r border-border shrink-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="profile-pic w-[120px] h-[120px] bg-border border border-border rounded-lg mb-6 flex items-center justify-center text-4xl font-bold text-accent overflow-hidden"
        >
          {initials}
        </motion.div>
        
        <h1 className="text-2xl font-bold tracking-tight mb-1">{PORTFOLIO_DATA.name}</h1>
        <p className="text-sm text-text-muted font-mono mb-6">{PORTFOLIO_DATA.role}</p>

        <div className="sidebar-section">
          <p className="section-label">Availability</p>
          <div className="status-indicator">
            <div className="status-dot" />
            <span>Open for new projects</span>
          </div>
        </div>

        <div className="sidebar-section">
          <p className="section-label">Skills</p>
          <div className="space-y-4">
            {PORTFOLIO_DATA.skillSections.map(section => (
              <div key={section.title}>
                <p className="text-[9px] uppercase tracking-widest text-accent mb-2 font-bold">{section.title}</p>
                <div className="flex flex-wrap">
                  {section.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-section mt-auto">
          <p className="section-label">Connect</p>
          <div className="space-y-2">
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" className="flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors font-mono">
              <Github className="w-3 h-3" /> github.com/Rohith0629
            </a>
            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" className="flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors font-mono">
              <Linkedin className="w-3 h-3" /> linkedin/in/rohith
            </a>
            <a href={PORTFOLIO_DATA.socials.email} className="flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors font-mono">
              <Mail className="w-3 h-3" /> {PORTFOLIO_DATA.email}
            </a>
          </div>
        </div>
      </aside>

      {/* Main View */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col gap-10 overflow-y-auto max-h-screen">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border pb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tighter max-w-xl">
              Building scalable <br />
              <span className="text-accent">digital systems.</span>
            </h2>
          </motion.div>
          
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-text-main">02</span>
              <span className="text-[11px] text-text-muted uppercase tracking-wider font-medium">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-text-main">05/24</span>
              <span className="text-[11px] text-text-muted uppercase tracking-wider font-medium">Graduation</span>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projects */}
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="font-semibold text-base group-hover:text-accent transition-colors">{project.title}</span>
                <span className="font-mono text-[11px] text-accent">{project.tech[0]}</span>
              </div>
              <p className="text-sm leading-relaxed text-text-muted mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-border rounded-md">
                  <Terminal className="w-3 h-3 text-text-muted" />
                </div>
                <span className="text-[10px] font-mono text-text-muted uppercase">{project.role}</span>
              </div>
            </motion.div>
          ))}

          {/* Education & Certs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="font-semibold text-base">Education</span>
              <span className="font-mono text-[11px] text-accent">Active</span>
            </div>
            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map(edu => (
                <div key={edu.institution}>
                  <p className="text-sm font-medium text-text-main">{edu.institution}</p>
                  <p className="text-xs text-text-muted font-mono">{edu.degree} &mdash; {edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="font-semibold text-base">Certifications</span>
              <span className="font-mono text-[11px] text-accent">Verified</span>
            </div>
            <ul className="space-y-2">
              {PORTFOLIO_DATA.certificates.map(cert => (
                <li key={cert} className="text-xs text-text-muted flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent rounded-full" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <footer className="mt-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-[12px] font-mono text-text-muted">
          <div>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name} &mdash; Portfolio v2.0.4</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> India (IST)
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> Remote Available
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
