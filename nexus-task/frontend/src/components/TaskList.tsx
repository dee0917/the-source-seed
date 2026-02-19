'use client';

import { Task, useTaskStore } from '@/store/useTaskStore';
import { motion, Reorder } from 'framer-motion';
import { CheckCircle2, Circle, Trash2, GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTaskStore();

  if (tasks.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 font-light italic">Your nexus is empty. Start by adding a task.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 mt-8">
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={cn(
            "group relative flex items-center gap-4 bg-white/5 hover:bg-white/[0.08] backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300",
            task.completed && "opacity-50"
          )}
        >
          <button 
            onClick={() => toggleTask(task.id)}
            className="flex-shrink-0 transition-transform active:scale-90"
          >
            {task.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-400" />
            ) : (
              <Circle className="w-6 h-6 text-gray-500 group-hover:text-blue-400" />
            )}
          </button>

          <span className={cn(
            "flex-1 text-sm font-light text-gray-200 transition-all",
            task.completed && "line-through text-gray-500"
          )}>
            {task.title}
          </span>

          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className={cn(
              "text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold",
              task.priority === 'high' ? "bg-red-500/20 text-red-400" :
              task.priority === 'medium' ? "bg-yellow-500/20 text-yellow-400" :
              "bg-blue-500/20 text-blue-400"
            )}>
              {task.priority}
            </div>
            
            <button 
              onClick={() => deleteTask(task.id)}
              className="text-gray-500 hover:text-red-400 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
