import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Hash, ArrowRight, CornerDownLeft, RotateCcw } from 'lucide-react';

export default function CommandPaletteModal({
  isOpen,
  onClose,
  problems,
  onSelectProblem,
  onOpenResetModal,
}) {
  const [query, setQuery] = useState('');

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape') {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = React.useMemo(() => {
    if (!query) return problems.slice(0, 8);
    const q = query.toLowerCase();
    return problems
      .filter(p => p.name.toLowerCase().includes(q) || p.num.includes(q) || p.category.toLowerCase().includes(q))
      .slice(0, 10);
  }, [problems, query]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-xl bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden font-sans"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3 border-b border-white/10 gap-3">
            <Search className="w-5 h-5 text-neutral-400" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search all 150+ NeetCode algorithms..."
              className="flex-1 bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none font-mono"
            />
            <button
              onClick={() => onClose(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="p-2 max-h-80 overflow-y-auto divide-y divide-white/5">
            {/* Quick Action: Reset Progress */}
            {onOpenResetModal && (query.toLowerCase().includes('reset') || query.toLowerCase().includes('clear')) && (
              <div
                onClick={() => {
                  onClose(false);
                  onOpenResetModal();
                }}
                className="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-rose-500/10 border border-rose-500/20 text-rose-300 transition-colors group mb-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-rose-200 group-hover:text-rose-100">
                      Reset All Progress
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono">
                      Clear all solved problems, streak, and XP
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 uppercase font-bold">
                  Action
                </span>
              </div>
            )}

            {filtered.length === 0 && !(onOpenResetModal && (query.toLowerCase().includes('reset') || query.toLowerCase().includes('clear'))) ? (
              <div className="p-8 text-center text-xs text-neutral-500 font-mono">
                No matching problems found for "{query}".
              </div>
            ) : (
              filtered.map((prob) => (
                <div
                  key={prob.num}
                  onClick={() => {
                    onSelectProblem(prob);
                    onClose(false);
                  }}
                  className="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-brand-400 font-bold">
                      #{prob.num}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-neutral-200 group-hover:text-white">
                        {prob.name}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {prob.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      prob.difficulty === 'Easy'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : prob.difficulty === 'Medium'
                        ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                    }`}>
                      {prob.difficulty}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2.5 bg-neutral-950/70 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>Navigation: Click to jump</span>
            <span>ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
