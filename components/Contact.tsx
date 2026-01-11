import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col justify-between py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/10">
      
      <div>
        <h2 className="font-display text-6xl md:text-[10rem] leading-[0.85] font-bold text-white uppercase tracking-tighter">
          Let's <br /> 
          <span className="text-zinc-600 hover:text-white transition-colors duration-500 cursor-default">Create</span> <br />
          Together
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-24">
        
        <div className="space-y-8">
            <a 
                href="mailto:moeezahmed404@gmail.com" 
                className="inline-flex items-center gap-4 text-3xl md:text-5xl text-white font-display font-bold hover:text-zinc-400 transition-colors"
            >
                Say Hello
                <ArrowUpRight size={32} className="md:w-12 md:h-12" />
            </a>
            
            <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/moeez404" target="_blank" rel="noreferrer" className="text-sm font-mono uppercase text-zinc-500 hover:text-white transition-colors">
                    LinkedIn
                </a>
                <a href="https://github.com/moeez404" target="_blank" rel="noreferrer" className="text-sm font-mono uppercase text-zinc-500 hover:text-white transition-colors">
                    GitHub
                </a>
            </div>
        </div>

        <div className="text-right">
            <p className="text-zinc-500 text-sm font-mono max-w-xs ml-auto mb-4">
                Designed & Engineered with precision. <br />
                © {new Date().getFullYear()} Moeez Ahmed.
            </p>
            <div className="h-2 w-full bg-gradient-to-r from-zinc-800 to-white rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default Contact;