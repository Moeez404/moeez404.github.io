import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe, ArrowUpRight } from 'lucide-react';

const Resume: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      company: "Ilmversity",
      role: "Software Engineer", 
      displayRole: "Software Engineer",
      date: "Apr 2025 - Jan 2026",
      description: [
        "Architected scalable backend infrastructure for an enterprise-grade EdTech SaaS platform serving thousands of daily active users.",
        "Engineered intelligent automation features, including AI-driven timetable scheduling and conversational chatbots, leveraging LLM integrations.",
        "Designed and implemented secure, high-performance RESTful APIs, ensuring data integrity and seamless frontend integration."
      ]
    },
    {
      company: "Mindstrom Studio",
      displayRole: "Game Engineering Intern",
      date: "May 2024 - Sep 2024",
      description: [
        "Developed core gameplay mechanics and physics interactions using C# and Unity, contributing to production-ready game titles.",
        "Implemented responsive UI systems and managed complex state transitions within the game loop.",
        "Collaborated with cross-functional teams to optimize rendering pipelines and ensure consistent frame rates across devices."
      ]
    },
    {
      company: "EVERCODE",
      displayRole: "Software Intern",
      date: "Jan 2024 - Apr 2024",
      description: [
        "Contributed to the development of cutting-edge Web3 and cryptocurrency applications.",
        "Assisted in integrating blockchain protocols with modern web interfaces, ensuring secure transaction handling.",
        "Participated in agile development cycles, refining codebase quality through rigorous code reviews and testing."
      ]
    }
  ];

  const education = [
    {
      school: "Information Technology University",
      degree: "B.S. Computer Engineering",
      date: "2021 - 2025"
    }
  ];

  const projects = [
    {
      title: "Komponent Kraft",
      context: "AI / Dev Tools",
      year: "2025",
      desc: "React-based AI UI generator leveraging Gemini 2.0. Streams production-ready components with live previews and supports multi-framework export."
    },
    {
      title: "Glitch Runner",
      context: "Game Dev",
      year: "2025",
      desc: "Meta-puzzle platformer where players hack the game engine. Features custom physics, real-time object manipulation, and a level editor."
    },
    {
      title: "Lyrical Motion",
      context: "Web Media",
      year: "2026",
      desc: "Kinetic typography video creator synchronizing text animations with audio analysis, rendering 2K video directly in the browser."
    }
  ];

  return (
    <section className="min-h-screen w-full bg-void text-white pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      
      {/* Background Doodles (Abstract shapes) */}
      <div className="absolute bottom-32 left-10 md:left-20 opacity-10 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="rotate-12">
           <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start mb-24"
        >
            <div>
                <h1 className="font-display text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight">
                    Moeez Ahmed
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-lime-400">
                    Software Engineer
                </h2>
            </div>

            <div className="mt-8 md:mt-0 text-left md:text-right space-y-2">
                 <a href="https://moeez404.github.io" className="block text-zinc-400 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4">
                    www.moeez404.github.io
                 </a>
                 <a href="mailto:moeezahmed404@gmail.com" className="block text-zinc-400 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4">
                    moeezahmed404@gmail.com
                 </a>
                 <p className="text-zinc-500 font-mono text-sm mt-2">
                    (+92) 318-6362091
                 </p>
                 <div className="flex gap-4 md:justify-end mt-4">
                    <a href="https://www.linkedin.com/in/moeez404" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} className="text-zinc-500 hover:text-white cursor-pointer transition-colors"/>
                    </a>
                    <a href="https://github.com/moeez404" target="_blank" rel="noopener noreferrer">
                        <Github size={20} className="text-zinc-500 hover:text-white cursor-pointer transition-colors"/>
                    </a>
                 </div>
            </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Experience (Wider) */}
            <div className="lg:col-span-7 space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="text-xl font-bold text-zinc-500 mb-8 border-b border-zinc-800 pb-2">Experience</h3>
                    
                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <div key={i} className="group">
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                                    <h4 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">
                                        {exp.company}
                                    </h4>
                                    <span className="hidden md:inline text-zinc-600">/</span>
                                    <span className="text-lg text-zinc-300 font-medium">{exp.displayRole}</span>
                                </div>
                                <p className="text-zinc-500 font-mono text-sm mb-4">{exp.date}</p>
                                
                                <div className="space-y-3">
                                    {exp.description.map((line, j) => (
                                        <p key={j} className="text-zinc-400 leading-relaxed max-w-2xl">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* RIGHT COLUMN: Education, Projects, Skills (Narrower) */}
            <div className="lg:col-span-5 space-y-16">
                
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-xl font-bold text-zinc-500 mb-8 border-b border-zinc-800 pb-2">Education</h3>
                    <div className="space-y-8">
                        {education.map((edu, i) => (
                            <div key={i}>
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                                    <h4 className="text-lg font-bold text-white">{edu.school}</h4>
                                    <span className="hidden md:inline text-zinc-600">/</span>
                                    <span className="text-zinc-400">{edu.degree}</span>
                                </div>
                                <p className="text-zinc-600 text-sm font-mono">{edu.date}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-xl font-bold text-zinc-500 mb-8 border-b border-zinc-800 pb-2">Selected Projects</h3>
                    <div className="space-y-8">
                        {projects.map((proj, i) => (
                            <div key={i}>
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                                    <h4 className="text-lg font-bold text-white">{proj.title}</h4>
                                    <span className="text-zinc-600">/</span>
                                    <span className="text-zinc-400">{proj.context}</span>
                                </div>
                                <p className="text-zinc-600 text-sm font-mono mb-2">{proj.year}</p>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {proj.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-xl font-bold text-zinc-500 mb-8 border-b border-zinc-800 pb-2">Skillset</h3>
                    <div className="space-y-6">
                        <div>
                            <h5 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">Technical</h5>
                            <p className="text-zinc-400 leading-loose">
                                JavaScript (ES6+), TypeScript, React, React Native, Next.js, Unity (C#), Godot (GDScript), WebGL, Three.js, Node.js, Go, PostgreSQL, AWS, Docker
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>

        </div>
        
      </div>
    </section>
  );
};

export default Resume;