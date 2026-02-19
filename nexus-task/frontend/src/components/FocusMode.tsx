'use client';

import { useState, useEffect } from 'react';
import { useTaskStore } from '@/store/useTaskStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Focus, X, Zap } from 'lucide-react';

export function FocusMode() {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useTaskStore();
  const activeTask = tasks.find(t => !t.completed);

  if (!activeTask) return null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg shadow-blue-500/20 transition-all z-40 group"
      >
        <Focus className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-8"
            >
              <div className="flex justify-center">
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"
                  />
                  <Zap className="w-16 h-16 text-blue-400 relative z-10" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-blue-400 text-xs uppercase tracking-[0.3em] font-bold">Current Focus</p>
                <h2 className="text-5xl font-extralight tracking-tight max-w-2xl">
                  {activeTask.title}
                </h2>
              </div>

              <p className="text-gray-500 font-light italic text-lg">
                "Simplicity is the ultimate sophistication."
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
