import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color = "bg-white", delay = 0 }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-zinc-300">{name}</span>
        <span className="text-xs text-zinc-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${color} shadow-[0_0_10px_currentColor]`}
        />
      </div>
    </div>
  );
};

export default SkillBar;