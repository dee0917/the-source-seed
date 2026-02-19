'use client';

import { useState } from 'react';
import { useTaskStore, Priority } from '@/store/useTaskStore';
import { Plus, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function TaskInput() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title, priority);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-focus-within:opacity-50 transition duration-500"></div>
      <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nexus, what needs to be done?"
          className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 px-4 py-2"
        />
        
        <select 
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="bg-transparent text-xs text-gray-400 border-none focus:ring-0 mr-2 cursor-pointer"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors group/btn"
        >
          <Plus className="w-5 h-5 text-blue-400 group-hover/btn:text-blue-300" />
        </motion.button>
      </div>
      
      {/* AI Suggestion Badge */}
      <div className="mt-2 flex items-center gap-2 text-[10px] text-gray-500 ml-2">
        <Sparkles className="w-3 h-3 text-purple-400" />
        <span>Try "Refactor the authentication flow by Friday"</span>
      </div>
    </form>
  );
}
