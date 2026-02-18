"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Home, Calendar, Users, Settings, Share2, Link2, CheckCircle2, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface FreeSlot {
  start: string;
  end: string;
  duration_minutes: number;
}

export default function Dashboard() {
  const [slots, setSlots] = useState<FreeSlot[]>([]);
  const [shareText, setShareText] = useState("");
  const [loading, setLoading] = useState(true);
  const [copying, setCopying] = useState(false);

  useEffect(() => {
    fetchFreeTime();
  }, []);

  const fetchFreeTime = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/free-time");
      const data = await res.json();
      setSlots(data.slots);
      setShareText(data.text);
    } catch (err) {
      console.error("Failed to fetch free time", err);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    setCopying(true);
    try {
      await navigator.clipboard.writeText(shareText);
      // Haptic feedback if available
      if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
      }
    } catch (err) {
      console.error("Failed to copy", err);
    }
    setTimeout(() => setCopying(false), 2000);
  };

  const totalFreeMinutes = slots.reduce((acc, slot) => acc + slot.duration_minutes, 0);
  const totalFreeHours = (totalFreeMinutes / 60).toFixed(1);

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative pb-24 bg-zinc-950 text-white overflow-hidden">
      {/* Header */}
      <header className="p-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-zinc-400">Ready to reclaim your time?</p>
        </motion.div>
      </header>

      {/* Hero Card */}
      <section className="px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-br from-indigo-600 to-violet-700 border-none overflow-hidden relative h-40">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Calendar size={80} strokeWidth={1} />
            </div>
            <CardContent className="p-6 flex flex-col justify-between h-full relative z-10">
              <div>
                <p className="text-indigo-100 text-sm font-medium">Weekly Free Time</p>
                {loading ? (
                  <Loader2 className="h-8 w-8 animate-spin text-white mt-1" />
                ) : (
                  <h2 className="text-4xl font-bold text-white mt-1">{totalFreeHours}h</h2>
                )}
              </div>
              <p className="text-indigo-200 text-xs">Total available across next 7 days</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Free Slots List */}
      <section className="px-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Free Slots</h3>
          <Button variant="ghost" size="sm" className="text-indigo-400 p-0 h-auto" onClick={fetchFreeTime}>
            Refresh
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-450px)]">
          <div className="space-y-4">
            {loading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-white/5 rounded-xl animate-pulse" />
              ))
            ) : slots.length > 0 ? (
              slots.slice(0, 10).map((slot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md overflow-hidden">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {new Date(slot.start).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                        </span>
                        <span className="text-xs text-zinc-400">
                          {new Date(slot.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(slot.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <Badge className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20 border-none">
                        {slot.duration_minutes}m
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-zinc-500">
                No free slots found.
              </div>
            )}
          </div>
        </ScrollArea>
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-zinc-950/80 backdrop-blur-xl border-t border-white/5 px-8 py-4 flex justify-between items-center z-50">
        <Button variant="ghost" size="icon" className="text-indigo-500">
          <Home size={24} />
        </Button>
        <Button variant="ghost" size="icon" className="text-zinc-500">
          <Calendar size={24} />
        </Button>
        
        <div className="relative -top-10">
          <Drawer>
            <DrawerTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white"
              >
                <Plus size={32} />
              </motion.button>
            </DrawerTrigger>
            <DrawerContent className="bg-zinc-900 border-zinc-800 text-white max-w-md mx-auto">
              <DrawerHeader>
                <DrawerTitle>Time Actions</DrawerTitle>
                <DrawerDescription className="text-zinc-400">What would you like to do with your free time?</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <Button 
                  className="w-full h-16 bg-indigo-600 hover:bg-indigo-700 text-lg flex items-center justify-start gap-4 px-6 rounded-2xl"
                  onClick={handleShare}
                >
                  {copying ? <CheckCircle2 className="text-green-400" /> : <Share2 />}
                  <div className="flex flex-col items-start">
                    <span>{copying ? "Copied to Clipboard!" : "One-Tap Share"}</span>
                    {!copying && <span className="text-xs text-indigo-200">Generate shareable text for 7 days</span>}
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full h-16 border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 text-lg flex items-center justify-start gap-4 px-6 rounded-2xl"
                  disabled
                >
                  <Link2 className="text-zinc-400" />
                  <div className="flex flex-col items-start">
                    <span className="text-zinc-400">Connect More Calendars</span>
                    <span className="text-xs text-zinc-500">iCloud, Outlook, and more</span>
                  </div>
                </Button>
              </div>
              <DrawerFooter className="pb-8">
                <DrawerClose asChild>
                  <Button variant="ghost" className="text-zinc-400">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <Button variant="ghost" size="icon" className="text-zinc-500">
          <Users size={24} />
        </Button>
        <Button variant="ghost" size="icon" className="text-zinc-500">
          <Settings size={24} />
        </Button>
      </nav>
    </div>
  );
}
