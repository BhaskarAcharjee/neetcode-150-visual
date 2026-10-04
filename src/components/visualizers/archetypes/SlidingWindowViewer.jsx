import React from 'react';
import { motion } from 'framer-motion';
import { Columns, ArrowDown, Award, Sparkles } from 'lucide-react';

export default function SlidingWindowViewer({ state, problem }) {
  if (!state) return null;

  const {
    elements = [],
    left = 0,
    right = 0,
    windowState = 'valid',
    conditionBadge,
    currentMetric,
    bestMetric
  } = state;

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-between min-h-[360px] gap-6">
      {/* Top Condition & Window Metrics */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {conditionBadge && (
          <motion.div
            key={conditionBadge}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold shadow-glow-cyan"
          >
            <Columns className="w-3.5 h-3.5 text-blue-400" />
            <span>{conditionBadge}</span>
          </motion.div>
        )}

        {bestMetric && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-brand-500/30 text-brand-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>{bestMetric.label}: {bestMetric.value}</span>
          </div>
        )}
      </div>

      {/* Main Sliding Window Array */}
      <div className="w-full max-w-2xl flex items-center justify-center gap-2 sm:gap-3 py-10 relative px-4">
        {/* Dynamic Fluid Bounding Box with Smooth Spring Physics */}
        {elements.length > 0 && right >= left && (
          <motion.div
            className={`absolute top-4 bottom-4 rounded-2xl border-2 pointer-events-none transition-colors duration-200 ${
              windowState === 'optimal'
                ? 'bg-emerald-500/15 border-emerald-400 shadow-glow-emerald'
                : windowState === 'shrinking'
                ? 'bg-amber-500/15 border-amber-400/80'
                : 'bg-blue-500/15 border-blue-400/80 shadow-glow-cyan'
            }`}
            animate={{
              left: `${(left / elements.length) * 100}%`,
              width: `${((right - left + 1) / elements.length) * 100}%`
            }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          />
        )}

        {elements.map((el, idx) => {
          const isL = idx === left;
          const isR = idx === right;
          const inWindow = idx >= left && idx <= right;

          return (
            <div key={idx} className="flex-1 max-w-[64px] flex flex-col items-center gap-2 relative z-10">
              {/* Pointer indicator */}
              {isL && (
                <motion.div
                  layoutId="window-L"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute -top-8 flex flex-col items-center"
                >
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500 text-neutral-950 shadow-md">
                    L
                  </span>
                  <ArrowDown className="w-3 h-3 text-amber-400 -mt-0.5" />
                </motion.div>
              )}

              {isR && !isL && (
                <motion.div
                  layoutId="window-R"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute -top-8 flex flex-col items-center"
                >
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-500 text-neutral-950 shadow-md">
                    R
                  </span>
                  <ArrowDown className="w-3 h-3 text-blue-400 -mt-0.5" />
                </motion.div>
              )}

              {/* Element block */}
              <motion.div
                layout
                className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center font-mono font-bold text-base sm:text-lg border select-none transition-all shadow-md ${
                  inWindow
                    ? 'bg-neutral-800 text-neutral-100 border-white/20'
                    : 'bg-neutral-950/60 text-neutral-500 border-white/5 opacity-40'
                }`}
              >
                <span>{el.val}</span>
              </motion.div>

              <span className="text-[10px] font-mono text-neutral-500 font-medium">[{idx}]</span>
            </div>
          );
        })}
      </div>

      {/* Live Metric Tracker */}
      {currentMetric && (
        <div className="flex items-center gap-3 text-xs font-mono bg-neutral-900/90 px-4 py-2 rounded-xl border border-white/10">
          <span className="text-neutral-400">{currentMetric.label}:</span>
          <span className="text-blue-300 font-bold text-sm">{currentMetric.value}</span>
        </div>
      )}
    </div>
  );
}
