import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const skills = [
  {
    category: "Game Engineering",
    tools: "Unity 3D / Godot / C#",
    description: "Building immersive worlds with physics-based interactions and complex state management. Translating game feel to web interfaces.",
  },
  {
    category: "Frontend Architecture",
    tools: "React / Svelte / TypeScript",
    description: "Crafting pixel-perfect, high-performance interfaces that feel alive. Focus on micro-interactions and accessibility.",
  },
  {
    category: "Backend Systems",
    tools: "Node.js / FastAPI / Go",
    description: "Designing scalable APIs and microservices. Experience with real-time data using WebSockets and server-sent events.",
  },
  {
    category: "Data & Cloud",
    tools: "PostgreSQL / AWS / Docker",
    description: "Ensuring data integrity and deployment reliability across distributed systems. Containerization and CI/CD pipelines.",
  }
];

const About: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-void relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-[0.9]">
            TECHNICAL <br/> <span className="text-zinc-600">EXPERTISE</span>
          </h2>
          <p className="text-zinc-400 max-w-md text-lg leading-relaxed mb-2">
             A multidisciplinary approach to software development, bridging the gap between high-performance gaming and responsive web applications.
          </p>
        </div>

        <div className="relative">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-t border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 relative z-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-zinc-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-300">
                  {skill.category}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-zinc-500 group-hover:text-white transition-colors">
                    {skill.tools}
                  </span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-white" />
                </div>
              </div>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredIndex === index ? 'auto' : 0,
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                className="overflow-hidden"
              >
                <p className="pt-4 text-zinc-400 text-lg max-w-2xl">
                  {skill.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

export default About;