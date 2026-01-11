import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Calendar, User, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <section className="min-h-screen w-full bg-void text-white pb-24">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <motion.div 
           layoutId={`project-image-${project.id}`}
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${project.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="max-w-7xl mx-auto"
           >
              <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">{project.title}</h1>
           </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Project Meta Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-500 mb-1">
                    <User size={16} /> <span className="font-mono text-sm uppercase tracking-wider">Role</span>
                </div>
                <p className="text-xl font-medium">{project.role || "Developer"}</p>
            </div>
            
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-500 mb-1">
                    <Calendar size={16} /> <span className="font-mono text-sm uppercase tracking-wider">Year</span>
                </div>
                <p className="text-xl font-medium">{project.year || "2023"}</p>
            </div>

            <div className="col-span-1 md:col-span-2 space-y-2">
                <div className="flex items-center gap-2 text-zinc-500 mb-1">
                    <Code2 size={16} /> <span className="font-mono text-sm uppercase tracking-wider">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Content & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Column: Description */}
            <div className="lg:col-span-2 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-3xl font-bold mb-6 text-zinc-100">Project Overview</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed md:text-xl md:leading-relaxed">
                        {project.longDescription || project.description}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    viewportMargin="-100px"
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="font-display text-2xl font-bold mb-4 text-zinc-100">Key Features</h3>
                    <ul className="space-y-4 text-zinc-400">
                        {project.features ? (
                            project.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))
                        ) : (
                            // Fallback if no specific features defined
                            <>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2.5 flex-shrink-0" />
                                    <span>High-performance architecture ensuring steady framerates.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2.5 flex-shrink-0" />
                                    <span>Seamless user experience with micro-interactions and smooth transitions.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2.5 flex-shrink-0" />
                                    <span>Responsive design that adapts perfectly across all device sizes.</span>
                                </li>
                            </>
                        )}
                    </ul>
                </motion.div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-1">
                <div className="sticky top-32 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
                    <h3 className="font-display text-xl font-bold mb-6">Project Links</h3>
                    
                    <div className="space-y-4">
                        {project.link ? (
                            <a 
                                href={project.link} 
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between w-full p-4 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-all group"
                            >
                                Live Demo
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        ) : (
                             <button disabled className="flex items-center justify-between w-full p-4 rounded-lg bg-zinc-800 text-zinc-500 cursor-not-allowed font-medium">
                                Demo Unavailable
                             </button>
                        )}

                        {project.github && (
                            <a 
                                href={project.github} 
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between w-full p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors group"
                            >
                                Source Code
                                <Github className="group-hover:rotate-12 transition-transform" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

        </div>

        {/* Footer */}
        <div className="mt-32 border-t border-white/10 pt-12 flex flex-col items-center justify-center text-center">
            <p className="text-zinc-500 text-sm font-mono">
                Designed & Engineered with precision. <br />
                © {new Date().getFullYear()} Moeez Ahmed.
            </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetail;