import { TaskInput } from '@/components/TaskInput';
import { TaskList } from '@/components/TaskList';
import { FocusMode } from '@/components/FocusMode';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white selection:bg-blue-500/30">
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-20">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extralight tracking-tighter flex items-center gap-2">
              Nexus <span className="font-bold text-blue-500">Task</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">AI-Augmented Productivity System v1.0</p>
          </div>
          <div className="p-2 bg-white/5 rounded-full border border-white/10">
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>
        </header>

        <section className="space-y-8">
          <TaskInput />
          <TaskList />
        </section>

        <FocusMode />

        <footer className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          Designed for the future of work &bull; Power by Claude 3.5
        </footer>
      </div>
    </main>
  );
}
