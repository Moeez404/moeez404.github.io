import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import Resume from './components/Resume';
import { Project } from './types';

type ViewState = 'home' | 'project' | 'resume';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setView('project');
  };

  const handleResumeClick = () => {
    setView('resume');
  };

  const handleBack = () => {
    setSelectedProject(null);
    setView('home');
  };

  return (
    <div className="bg-void min-h-screen text-white selection:bg-white selection:text-black font-sans">
      
      {/* Global Grain Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-[100] bg-grain" />

      {/* Conditional Navbar */}
      <Navbar 
        isDetailView={view === 'project'} 
        isResumeView={view === 'resume'}
        onBack={handleBack} 
        onResumeClick={handleResumeClick}
      />

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.main 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Hero />
            <About />
            <Projects onProjectSelect={handleProjectSelect} />
            <Contact />
          </motion.main>
        )}

        {view === 'project' && selectedProject && (
          <motion.main
            key="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 pt-20"
          >
             <ProjectDetail project={selectedProject} />
          </motion.main>
        )}

        {view === 'resume' && (
             <motion.main
                key="resume"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
             >
                 <Resume />
             </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;