import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, CornerDownRight } from 'lucide-react';

export default function DpTableViewer({ state, problem }) {
  if (!state) return null;

  const {
    table = [],
    formula,
    dependencies = [],
    currentIndex,
    conditionBadge
  } = state;

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-between min-h-[360px] gap-6">
      {/* Top Condition Badge & Recurrence Formula */}
      <div className="flex flex-col items-center gap-2">
        {conditionBadge && (
          <motion.div
            key={conditionBadge}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-violet-500/30 text-violet-300 text-xs font-mono font-semibold shadow-md"
          >
            <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
            <span>{conditionBadge}</span>
          </motion.div>
        )}

        {formula && (
          <div className="text-xs font-mono text-neutral-300 bg-neutral-900/80 px-3.5 py-1.5 rounded-lg border border-white/5">
            Recurrence: <span className="text-violet-300 font-bold">{formula}</span>
          </div>
        )}
      </div>

      {/* Main DP Table */}
      <div className="flex flex-wrap items-center justify-center gap-3 py-6 max-w-2xl">
        {table.map((cell, idx) => {
          const isCurrent = cell.status === 'current';
          const isDep = cell.status === 'dependent';
          const isComputed = cell.status === 'computed';

          return (
            <div key={idx} className="flex flex-col items-center gap-2 relative">
              {/* Transition arrow indicator for dependent cells */}
              {isDep && (
                <div className="h-4 flex items-center justify-center">
                  <span className="text-[9px] font-mono font-bold text-violet-400 bg-violet-500/10 px-1 rounded">
                    dep
                  </span>
                </div>
              )}
              {isCurrent && (
                <div className="h-4 flex items-center justify-center">
                  <span className="text-[9px] font-mono font-bold text-brand-400 bg-brand-500/10 px-1 rounded">
                    calc
                  </span>
                </div>
              )}
              {!isDep && !isCurrent && <div className="h-4" />}

              {/* DP Cell */}
              <motion.div
                layout
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex flex-col items-center justify-center font-mono font-bold text-base sm:text-lg border select-none transition-all shadow-md ${
                  isCurrent
                    ? 'bg-violet-500/20 text-violet-200 border-violet-400 ring-2 ring-violet-400/50 shadow-glow-indigo scale-110'
                    : isDep
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 scale-105'
                    : isComputed
                    ? 'bg-neutral-900 text-neutral-200 border-white/10'
                    : 'bg-neutral-950/50 text-neutral-600 border-white/5 opacity-50'
                }`}
              >
                <span>{cell.val}</span>
                <span className="text-[10px] font-mono text-neutral-500 font-normal">
                  dp[{cell.index}]
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Status Legend */}
      <div className="flex items-center gap-4 text-xs font-mono bg-neutral-900/80 px-4 py-2 rounded-xl border border-white/10">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-violet-400" /> Current Step</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Dependencies</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-neutral-600" /> Uncomputed</span>
      </div>
    </div>
  );
}
