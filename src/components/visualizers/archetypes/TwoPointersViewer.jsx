import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Waves, Award, ArrowDown } from 'lucide-react';

export default function TwoPointersViewer({ state, problem }) {
  if (!state) return null;

  const {
    elements = [],
    left = 0,
    right = 0,
    conditionBadge,
    currentMetric,
    bestMetric,
    highlightRange = [0, 0]
  } = state;

  const maxVal = Math.max(...elements.map(e => Number(e.height || e.val) || 1), 10);

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-between min-h-[360px] gap-6">
      {/* Top Real-time Condition Badge & Metrics */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {conditionBadge && (
          <motion.div
            key={conditionBadge}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold shadow-glow-cyan"
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-cyan-400" />
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

      {/* Main Pointer Array & Fluid Bounding Box */}
      <div className="w-full max-w-2xl flex items-end justify-center gap-2 sm:gap-3 h-52 relative px-4 pb-8">
        {/* Fluid spring bounding box covering range between L and R */}
        {elements.length > 0 && right >= left && (
          <motion.div
            className="absolute bottom-8 rounded-xl bg-cyan-500/10 border-2 border-dashed border-cyan-400/40 pointer-events-none"
            animate={{
              left: `${(left / elements.length) * 100}%`,
              width: `${((right - left + 1) / elements.length) * 100}%`,
              height: '80%'
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          />
        )}

        {elements.map((el, idx) => {
          const isL = idx === left;
          const isR = idx === right;
          const isInWindow = idx >= left && idx <= right;
          const barHeight = el.height !== undefined ? Math.max(20, (el.height / maxVal) * 160) : 60;

          return (
            <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full relative group">
              {/* Pointer indicator tags */}
              {isL && (
                <motion.div
                  layoutId="pointer-L"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute -top-7 flex flex-col items-center z-20"
                >
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-brand-500 text-neutral-950 shadow-md">
                    L ({left})
                  </span>
                  <ArrowDown className="w-3.5 h-3.5 text-brand-400 -mt-0.5" />
                </motion.div>
              )}

              {isR && (
                <motion.div
                  layoutId="pointer-R"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute -top-7 flex flex-col items-center z-20"
                >
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-cyan-500 text-neutral-950 shadow-md">
                    R ({right})
                  </span>
                  <ArrowDown className="w-3.5 h-3.5 text-cyan-400 -mt-0.5" />
                </motion.div>
              )}

              {/* Vertical Bar / Number Block */}
              <motion.div
                layout
                style={{ height: `${barHeight}px` }}
                className={`w-full max-w-[42px] rounded-t-lg flex flex-col items-center justify-start pt-2 border font-mono font-bold text-xs sm:text-sm select-none transition-all shadow-md ${
                  isL
                    ? 'bg-gradient-to-t from-brand-500/40 to-brand-400/80 text-white border-brand-400 shadow-glow-emerald ring-2 ring-brand-400/50'
                    : isR
                    ? 'bg-gradient-to-t from-cyan-500/40 to-cyan-400/80 text-white border-cyan-400 shadow-glow-cyan ring-2 ring-cyan-400/50'
                    : isInWindow
                    ? 'bg-neutral-800/80 text-neutral-200 border-white/20'
                    : 'bg-neutral-900/40 text-neutral-500 border-white/5 opacity-50'
                }`}
              >
                <span>{el.val}</span>
              </motion.div>

              {/* Index marker */}
              <span className="text-[10px] font-mono text-neutral-500 mt-1 select-none">
                {idx}
              </span>
            </div>
          );
        })}
      </div>

      {/* Live Metric Display */}
      {currentMetric && (
        <div className="flex items-center gap-4 text-xs font-mono bg-neutral-900/80 px-4 py-2 rounded-xl border border-white/10">
          <span className="text-neutral-400">{currentMetric.label}:</span>
          <span className="text-cyan-300 font-bold text-sm">{currentMetric.value}</span>
        </div>
      )}
    </div>
  );
}
