import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  isDetailView?: boolean;
  isResumeView?: boolean;
  onBack?: () => void;
  onResumeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDetailView = false, isResumeView = false, onBack, onResumeClick }) => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const links = [
    { name: 'Expertise', href: '#about' },
    { name: 'Work', href: '#projects' },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'py-4 bg-void/80 backdrop-blur-md border-b border-white/5' : 'py-8'}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo or Back Button */}
          {isDetailView || isResumeView ? (
             <button 
               onClick={onBack}
               className="group flex items-center gap-2 text-white font-display text-lg font-bold hover:text-zinc-300 transition-colors"
             >
               <ArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={20} />
               {isResumeView ? "BACK TO PORTFOLIO" : "BACK TO PROJECTS"}
             </button>
          ) : (
            <a href="#" className="relative group z-50">
              <div className="font-display text-2xl font-bold text-white tracking-tighter">
                MOEEZ<span className="text-zinc-500">.</span>DEV
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          )}

          {/* Desktop Links - Only show if not in detail/resume view */}
          {(!isDetailView && !isResumeView) && (
            <>
              <div className="hidden md:flex items-center gap-12">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors tracking-widest uppercase relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}

                <button
                    onClick={onResumeClick}
                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors tracking-widest uppercase relative group"
                >
                    Resume
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </button>
                
                <a 
                  href="#contact" 
                  className="px-6 py-2 bg-white text-black font-bold text-sm rounded-full hover:bg-zinc-200 transition-transform hover:scale-105 active:scale-95"
                >
                  Let's Talk
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden text-white z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </>
          )}
          
          {/* Detail View Right Side Spacer (optional, keeps layout balanced) */}
          {(isDetailView || isResumeView) && <div className="w-[100px] hidden md:block"></div>}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Only for home view */}
      <AnimatePresence>
        {mobileMenuOpen && !isDetailView && !isResumeView && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-void flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl text-white font-bold hover:text-zinc-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
             <button
                onClick={() => {
                    setMobileMenuOpen(false);
                    if(onResumeClick) onResumeClick();
                }}
                className="font-display text-4xl text-white font-bold hover:text-zinc-400 transition-colors"
            >
                RESUME
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;