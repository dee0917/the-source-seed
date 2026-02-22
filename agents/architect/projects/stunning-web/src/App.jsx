import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/Button';
import { ArrowRight, Cpu, Layers, Zap, MousePointer2, ChevronRight, Github } from 'lucide-react';
import { cn } from './utils';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass rounded-full px-4 py-2 flex items-center gap-8 pointer-events-auto"
      >
        <div className="flex items-center gap-2 pr-4 border-r border-white/10">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-black rounded-full" />
          </div>
          <span className="font-mono text-sm tracking-tighter uppercase font-bold">Flux.</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {['Vision', 'Architecture', 'Protocol'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-medium text-white/50 hover:text-white transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
        </div>
        <Button variant="secondary" className="px-4 py-1.5 h-auto text-[10px] tracking-widest uppercase">
          Connect
        </Button>
      </motion.div>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-8 glass rounded-2xl overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
        <Icon size={120} strokeWidth={0.5} />
      </div>
      <div className="relative z-10">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-500">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-medium mb-3 tracking-tight">{title}</h3>
        <p className="text-white/40 leading-relaxed text-sm max-w-[240px] group-hover:text-white/60 transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-20" />
      
      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 mb-8 border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Next-Gen Architecture
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-8 leading-[0.9] text-gradient">
            Elegance <br /> 
            <span className="italic font-light">defined</span> by code.
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Crafting digital interfaces that feel as natural as physical matter. Experience the fusion of minimalist design and high-performance engineering.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto h-14 px-8 text-base">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto h-14 px-8 text-base">
              View Showcase
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-20 left-10 hidden lg:block opacity-20 pointer-events-none"
      >
        <div className="p-4 glass rounded-xl border-white/5">
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
            <div className="w-3 h-3 rounded-full bg-green-500/20" />
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-32 bg-white/10 rounded" />
            <div className="h-1.5 w-24 bg-white/10 rounded" />
            <div className="h-1.5 w-28 bg-white/10 rounded" />
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-40 right-10 hidden lg:block opacity-20 pointer-events-none"
      >
        <div className="p-4 glass rounded-full border-white/5 flex gap-4">
          <div className="w-8 h-8 rounded-full bg-white/10" />
          <div className="w-8 h-8 rounded-full bg-white/10" />
          <div className="w-8 h-8 rounded-full bg-white/10" />
        </div>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const items = [
    {
      icon: Cpu,
      title: "Optimized Core",
      description: "Blazing fast execution with minimal runtime overhead. Built for the modern web."
    },
    {
      icon: Layers,
      title: "Fluid Design",
      description: "Components that adapt gracefully to any screen, ensuring a premium experience everywhere."
    },
    {
      icon: Zap,
      title: "Rapid Flow",
      description: "Intuitive workflows designed to keep you in the zone. Zero friction, just pure creativity."
    },
    {
      icon: MousePointer2,
      title: "Micro-Interactions",
      description: "Tactile responses and subtle animations that make every click feel deliberate."
    }
  ];

  return (
    <section id="vision" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Designed for the <br />most demanding eyes.</h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              We focus on the details that others ignore. Every pixel, every easing curve, and every shadow is meticulously tuned to provide an unparalleled user experience.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/30 border-t border-white/10 pt-4 md:pt-0 md:border-t-0">
            <span>01 // The Architecture</span>
            <ChevronRight size={14} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <FeatureCard key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <span className="font-mono text-lg tracking-tighter uppercase font-bold">Flux.</span>
          </div>
          <p className="text-white/30 text-sm max-w-xs font-light">
            Pushing the boundaries of what is possible on the web. Crafted with soul in the digital ether.
          </p>
          <div className="flex gap-4">
             <a href="#" className="p-2 glass rounded-full hover:bg-white hover:text-black transition-colors">
               <Github size={18} />
             </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="hover:text-white transition-colors cursor-pointer">Platform</li>
              <li className="hover:text-white transition-colors cursor-pointer">Protocol</li>
              <li className="hover:text-white transition-colors cursor-pointer">Security</li>
            </ul>
          </div>
          <div>
             <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-6">Company</h4>
             <ul className="space-y-3 text-sm text-white/50">
               <li className="hover:text-white transition-colors cursor-pointer">About</li>
               <li className="hover:text-white transition-colors cursor-pointer">Manifesto</li>
               <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
             </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-between text-[10px] font-mono uppercase tracking-widest text-white/20">
        <p>© 2026 Flux Labs. All rights reserved.</p>
        <p>Built by Architect.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <main className="relative noise-bg min-h-screen bg-background overflow-x-hidden selection:bg-accent/30">
      <Nav />
      <Hero />
      <Features />
      
      {/* Visual divider / Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto h-[400px] glass rounded-3xl overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
           <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="w-[120%] h-[120%] opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" 
              />
           </div>
           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Ready to transcend the ordinary?</h2>
              <Button className="h-14 px-10 text-lg">Join the Waitlist</Button>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
