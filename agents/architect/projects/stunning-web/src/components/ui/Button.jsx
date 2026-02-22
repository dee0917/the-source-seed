import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) => {
  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200',
    secondary: 'bg-white/5 border border-white/10 text-white hover:bg-white/10',
    ghost: 'text-white/60 hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        'px-5 py-2.5 rounded-full font-medium transition-all text-sm relative overflow-hidden',
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
