import React from 'react';
import {
  Sparkles,
  Flame,
  Trophy,
  Search,
  Layout,
  Maximize2,
  Code2,
  Eye,
  Github,
  Command,
  SlidersHorizontal
} from 'lucide-react';

export default function Navbar({
  streak = 7,
  xp = 1450,
  solvedCount = 0,
  totalCount = 150,
  layoutMode, // 'split' | 'visualizer' | 'editor'
  setLayoutMode,
  onOpenSearch
}) {
  return (
    <header className="h-14 bg-surface-card/90 border-b border-surface-border px-4 lg:px-6 flex items-center justify-between backdrop-blur-xl z-20 select-none">
      {/* Brand & Logo */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 via-emerald-500 to-cyan-400 p-0.5 shadow-glow-emerald flex items-center justify-center">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-brand-400 animate-pulse-subtle" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-tight text-white">
                NeetCode <span className="text-brand-400">150</span>
              </span>
              <span className="text-[10px] uppercase font-bold font-mono px-1.5 py-0.2 rounded bg-brand-500/10 border border-brand-500/20 text-brand-400">
                PRO
              </span>
            </div>
          </div>
        </div>

        {/* Global Progress Pill */}
        <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l border-white/10 text-xs font-mono text-neutral-400">
          <span>Mastery:</span>
          <span className="text-brand-300 font-bold">{solvedCount} / {totalCount}</span>
          <span className="text-neutral-500">({Math.round((solvedCount / totalCount) * 100)}%)</span>
        </div>
      </div>

      {/* Center: Command Palette Trigger */}
      <button
        onClick={onOpenSearch}
        className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-white/10 hover:border-white/20 text-xs text-neutral-400 hover:text-neutral-200 transition-all font-mono shadow-inner group"
      >
        <Search className="w-3.5 h-3.5 text-neutral-500 group-hover:text-brand-400 transition-colors" />
        <span>Quick jump to algorithm...</span>
        <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-neutral-800 border border-white/10 text-[10px] text-neutral-300">
          <Command className="w-2.5 h-2.5" /> K
        </kbd>
      </button>

      {/* Right: Gamification Badges & Layout Controls */}
      <div className="flex items-center gap-3">
        {/* Streak Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold font-mono shadow-sm">
          <Flame className="w-4 h-4 fill-orange-400 text-orange-400" />
          <span>{streak}d</span>
        </div>

        {/* XP Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs font-mono font-bold">
          <Trophy className="w-3.5 h-3.5 text-yellow-400" />
          <span>{xp} XP</span>
        </div>

        {/* Layout Mode Selector */}
        <div className="hidden lg:flex items-center p-0.5 rounded-lg bg-neutral-900/90 border border-white/10 text-xs">
          <button
            onClick={() => setLayoutMode('split')}
            className={`p-1.5 rounded-md transition-all ${
              layoutMode === 'split'
                ? 'bg-brand-500 text-neutral-950 font-bold shadow-glow-emerald'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Split 3-Pane View"
          >
            <Layout className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setLayoutMode('visualizer')}
            className={`p-1.5 rounded-md transition-all ${
              layoutMode === 'visualizer'
                ? 'bg-brand-500 text-neutral-950 font-bold shadow-glow-emerald'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Visualizer Focus"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setLayoutMode('editor')}
            className={`p-1.5 rounded-md transition-all ${
              layoutMode === 'editor'
                ? 'bg-brand-500 text-neutral-950 font-bold shadow-glow-emerald'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Code Editor Focus"
          >
            <Code2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
