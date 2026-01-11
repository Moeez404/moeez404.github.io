import React from 'react';
import { motion } from 'framer-motion';

interface InfiniteMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ items, direction = 'left', speed = 20 }) => {
  return (
    <div className="relative flex overflow-hidden w-full mask-gradient">
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
      <motion.div
        className="flex gap-8 whitespace-nowrap py-4"
        animate={{
          x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-mono text-sm hover:border-zinc-600 hover:text-white transition-colors cursor-default"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;