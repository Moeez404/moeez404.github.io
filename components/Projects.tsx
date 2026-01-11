import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Github, ArrowUpRight, Folder, Eye } from 'lucide-react';
import { Project } from '../types';

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Komponent Kraft',
    description: 'A React-based AI UI component generator leveraging Google Gemini models for instant code generation. streams production-ready components with live previews.',
    longDescription: "Komponent Kraft bridges the gap between design intent and executable code. Leveraging Google's Gemini 2.0 Flash model, it parses natural language descriptions into production-ready UI components in real-time. The system features a custom streaming parser that renders code as it's generated, drastically reducing perceived latency. It supports multi-framework export (React, Vue, HTML) and allows for conversational iteration—users can simply ask to 'make the button rounder' or 'change the color scheme,' and the AI adjusts the existing code context-awarely.",
    role: "Full Stack Developer",
    year: "2025",
    tags: ['React', 'Gemini API', 'Tailwind', 'TypeScript'],
    features: [
      "Real-time AI code streaming with instant visual preview.",
      "Multi-framework support (React, Vue, HTML) with seamless adaptation.",
      "Iterative design refinement via natural language prompting."
    ],
    imageUrl: '/public/assets/komponentkraft.png',
    github: 'https://github.com/Moeez404/componentcraft',
    link: 'https://komponentkraft.vercel.app/',
    featured: true
  },
  {
    id: '2',
    title: 'Lyrical Motion',
    description: 'A kinetic typography video creator that synchronizes text animations with audio analysis, rendering 2K quality video directly in the browser.',
    longDescription: "Lyrical Motion is a browser-based motion graphics engine designed to democratize music video creation. By combining the Web Audio API for real-time frequency analysis with a custom Canvas-based rendering engine, it synchronizes kinetic text animations to the beat of the music. The core technical achievement is the client-side video composition pipeline, which captures the canvas frame-by-frame and encodes it into a high-bitrate MP4 file (up to 2K resolution) entirely within the user's browser.",
    role: "Full Stack Developer",
    year: "2026",
    tags: ['React', 'Web Audio API', 'FFmpeg.wasm', 'Canvas'],
    features: [
      "Browser-based video rendering and encoding up to 2K resolution.",
      "Real-time audio frequency analysis for beat-synced visual effects.",
      "Custom kinetic typography engine with dynamic text layouts."
    ],
    imageUrl: '/public/assets/lyricalmotion.png',
    github: 'https://github.com/Moeez404/lyrical-motion',
    link: 'https://lyrical-motion.vercel.app/',
    featured: true
  },
  {
    id: '3',
    title: 'Glitch Runner',
    description: 'A meta-puzzle platformer where you hack the game engine. Manipulate physics, visibility, and object behavior in real-time to solve levels.',
    longDescription: "Glitch Runner is a deconstruction of game mechanics. Built on a custom-written physics engine, it introduces a 'Hacking Mode' that exposes underlying object properties (gravity, solidity, friction) to the player. The game challenges users to think like developers, debugging their way through levels by altering the environment's rules. It includes a sophisticated drag-and-drop level editor that serializes game state to JSON, allowing players to build and share their own glitched puzzles.",
    role: "Full Stack Dev & Game Designer",
    year: "2025",
    tags: ['React', 'Game Physics', 'Level Editor', 'Canvas API'],
    features: [
      "Innovative 'hack-the-world' gameplay mechanic exposing engine properties.",
      "Custom physics simulation and rendering system built from scratch.",
      "Integrated drag-and-drop level editor with JSON serialization."
    ],
    imageUrl: '/public/assets/glitchrunner.png',
    github: 'https://github.com/Moeez404/glitch-runner',
    link: 'https://glitchrunner-v1.vercel.app/',
    featured: true
  }
];

const otherProjects: Project[] = [
  {
    id: '4',
    title: 'Zenogorithms',
    description: 'Zen-inspired algorithm visualizer with intelligent AI tutoring powered by Gemini. Features interactive code walkthroughs.',
    tags: ['TypeScript', 'Gemini AI', 'Tailwind'],
    imageUrl: '',
    github: 'https://github.com/Moeez404/zengorithms',
    link: 'https://zengorithms.vercel.app/'
  },
  {
    id: '5',
    title: 'Prisma Tile',
    description: 'A color gradient puzzle game where players arrange tiles to create smooth transitions. Built with performance-focused React and Canvas.',
    tags: ['React', 'TypeScript', 'Canvas'],
    imageUrl: '',
    github: 'https://github.com/Moeez404/prismatile',
    link: 'https://prismatile.vercel.app/'
  },
  {
    id: '6',
    title: 'Just Vibes',
    description: 'Browser-based audio workstation converting songs to Lofi/Nightcore. Features client-side audio processing and video export.',
    tags: ['Web Audio API', 'React', 'Canvas'],
    imageUrl: '',
    github: 'https://github.com/Moeez404/just-vibes',
    link: 'https://just-vibes.vercel.app/'
  }
];

interface CardProps {
  project: Project;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  onProjectSelect: (project: Project) => void;
}

const Card: React.FC<CardProps> = ({ project, i, progress, range, targetScale, onProjectSelect }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        onClick={() => onProjectSelect(project)}
        className="relative flex flex-col md:flex-row bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden w-[90vw] md:w-[1000px] h-[75vh] md:h-[500px] shadow-2xl origin-top cursor-pointer group/card hover:border-white/20 transition-colors"
      >
        {/* Content - Order 1 on mobile (top), Order 1 on desktop (left) */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between h-[60%] md:h-full order-1 md:order-1 border-b md:border-b-0 md:border-r border-white/5 bg-zinc-900/20 backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
               <span className="text-zinc-500 font-mono text-xs md:text-sm tracking-wider uppercase">Featured 0{i + 1}</span>
            </div>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">{project.title}</h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">{project.description}</p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 md:px-3 md:py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs text-zinc-300 font-mono uppercase">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-6 relative z-20">
              <a 
                href={project.github} 
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()} 
                className="flex items-center gap-2 text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:text-zinc-300 transition-colors"
              >
                <Github size={16} className="md:w-[18px] md:h-[18px]" /> Code
              </a>
              {project.link && (
                 <a 
                   href={project.link}
                   target="_blank"
                   rel="noreferrer" 
                   onClick={(e) => e.stopPropagation()} 
                   className="flex items-center gap-2 text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:text-zinc-300 transition-colors"
                 >
                   Live Demo <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" /> 
                </a>
              )}
            </div>
          </div>
          
          {/* Mobile Hint */}
          <div className="md:hidden absolute top-4 right-4 text-zinc-600 flex items-center gap-1 text-xs">
             <Eye size={12} /> Tap to view
          </div>
        </div>

        {/* Image - Order 2 on mobile (bottom), Order 2 on desktop (right) */}
        <div className="w-full md:w-1/2 h-[40%] md:h-full relative overflow-hidden group order-2 md:order-2">
          <motion.div 
             layoutId={`project-image-${project.id}`}
             className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/card:scale-105"
             style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-500" />
          
          <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md border border-white/10 p-3 rounded-full opacity-0 group-hover/card:opacity-100 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300 hidden md:flex items-center justify-center">
            <ArrowUpRight className="text-white" size={24} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section id="projects" className="relative bg-zinc-950">
      
      {/* Featured Section */}
      <div ref={container} className="relative mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12">
            <h2 className="font-display text-5xl md:text-8xl font-bold text-white mb-12 text-center">
            SELECTED <span className="text-zinc-700">WORK</span>
            </h2>
        </div>
        
        {featuredProjects.map((project, i) => {
            const targetScale = 1 - ((featuredProjects.length - i) * 0.05);
            return (
            <Card 
                key={project.id} 
                i={i} 
                project={project} 
                progress={scrollYProgress} 
                range={[i * 0.25, 1]} 
                targetScale={targetScale} 
                onProjectSelect={onProjectSelect}
            />
            )
        })}
      </div>

      {/* Archive / Other Projects Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <h3 className="font-display text-3xl font-bold text-white">Other Noteworthy Projects</h3>
           <a href="https://github.com/Moeez404" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 mt-4 md:mt-0">
             View Github Profile <ArrowUpRight size={16} />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {otherProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-800/50 transition-all duration-300"
              >
                 <div className="flex justify-between items-start mb-6">
                    <Folder className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
                    <div className="flex gap-3">
                        {project.github && (
                            <a href={project.github} className="text-zinc-500 hover:text-white transition-colors"><Github size={18} /></a>
                        )}
                        {project.link && (
                            <a href={project.link} className="text-zinc-500 hover:text-white transition-colors"><ArrowUpRight size={18} /></a>
                        )}
                    </div>
                 </div>
                 
                 <h4 className="font-display font-bold text-xl text-white mb-2 group-hover:text-zinc-200 transition-colors">{project.title}</h4>
                 <p className="text-zinc-400 text-sm leading-relaxed mb-4 min-h-[40px] line-clamp-2">{project.description}</p>
                 
                 <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-zinc-500">
                            #{tag}
                        </span>
                    ))}
                 </div>
              </motion.div>
           ))}
        </div>
      </div>

    </section>
  );
};

export default Projects;