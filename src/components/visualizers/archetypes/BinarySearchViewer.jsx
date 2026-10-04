import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowDown, Target } from 'lucide-react';

export default function BinarySearchViewer({ state, problem }) {
  if (!state) return null;

  const {
    elements = [],
    low = 0,
    mid = 0,
    high = 0,
    target,
    conditionBadge,
    foundIndex
  } = state;

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-between min-h-[360px] gap-6">
      {/* Top Search Condition & Target Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {conditionBadge && (
          <motion.div
            key={conditionBadge}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold shadow-glow-indigo"
          >
            <Search className="w-3.5 h-3.5 text-purple-400" />
            <span>{conditionBadge}</span>
          </motion.div>
        )}

        {target !== undefined && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-brand-500/30 text-brand-400 text-xs font-mono font-semibold">
            <Target className="w-3.5 h-3.5" />
            <span>Target: {target}</span>
          </div>
        )}
      </div>

      {/* Main Binary Search Elements Grid */}
      <div className="flex flex-wrap items-center justify-center gap-3 py-8 max-w-2xl">
        {elements.map((el, idx) => {
          const isLow = idx === low;
          const isMid = idx === mid;
          const isHigh = idx === high;
          const isEliminated = idx < low || idx > high;
          const isFound = idx === foundIndex;

          return (
            <div key={idx} className="flex flex-col items-center gap-2 relative">
              {/* Pointer Badges */}
              <div className="h-6 flex items-center justify-center">
                {isMid && (
                  <motion.div
                    layoutId="bs-mid"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-purple-500 text-neutral-950 shadow-md">
                      MID
                    </span>
                    <ArrowDown className="w-3 h-3 text-purple-400 -mt-0.5" />
                  </motion.div>
                )}
                {isLow && !isMid && (
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-500 text-neutral-950">
                      LOW
                    </span>
                  </div>
                )}
                {isHigh && !isMid && (
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-blue-500 text-neutral-950">
                      HIGH
                    </span>
                  </div>
                )}
              </div>

              {/* Number Tile */}
              <motion.div
                layout
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex flex-col items-center justify-center font-mono font-bold text-lg border select-none transition-all shadow-md relative ${
                  isFound
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-glow-emerald scale-110'
                    : isMid
                    ? 'bg-purple-500/20 text-purple-200 border-purple-400 shadow-glow-indigo scale-105'
                    : isEliminated
                    ? 'bg-neutral-950/60 text-neutral-600 border-white/5 opacity-30 grayscale'
                    : 'bg-neutral-900 text-neutral-200 border-white/10 hover:border-white/20'
                }`}
              >
                <span>{el.val}</span>
                <span className="text-[10px] font-mono text-neutral-500 font-normal">[{idx}]</span>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Pointer Bounds Summary */}
      <div className="flex items-center gap-6 text-xs font-mono bg-neutral-900/90 px-5 py-2.5 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-neutral-400">Low:</span>
          <span className="text-amber-300 font-bold">{low}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span className="text-neutral-400">Mid:</span>
          <span className="text-purple-300 font-bold">{mid}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-neutral-400">High:</span>
          <span className="text-blue-300 font-bold">{high}</span>
        </div>
      </div>
    </div>
  );
}
