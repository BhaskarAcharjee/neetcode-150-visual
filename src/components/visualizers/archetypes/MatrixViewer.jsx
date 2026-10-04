import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Compass, Award } from 'lucide-react';

export default function MatrixViewer({ state, problem }) {
  if (!state) return null;

  const {
    grid = [],
    activeCell = null,
    visitedCells = [],
    islandCount,
    conditionBadge
  } = state;

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-between min-h-[360px] gap-6">
      {/* Top Condition Badge & Island Count */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {conditionBadge && (
          <motion.div
            key={conditionBadge}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-teal-500/30 text-teal-300 text-xs font-mono font-semibold shadow-md"
          >
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>{conditionBadge}</span>
          </motion.div>
        )}

        {islandCount !== undefined && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-brand-500/30 text-brand-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Islands: {islandCount}</span>
          </div>
        )}
      </div>

      {/* 2D Grid Canvas with Liquid Ripple Flood-Fill */}
      <div className="bg-neutral-950/80 p-4 rounded-2xl border border-white/10 shadow-glass">
        <div className="flex flex-col gap-2">
          {grid.map((row, rIdx) => (
            <div key={rIdx} className="flex gap-2">
              {row.map((cellVal, cIdx) => {
                const isActive = activeCell && activeCell[0] === rIdx && activeCell[1] === cIdx;
                const isVisited = visitedCells.some(([vr, vc]) => vr === rIdx && vc === cIdx);
                const isLand = cellVal === '1' || cellVal === 1;

                return (
                  <motion.div
                    key={`${rIdx}-${cIdx}`}
                    layout
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex flex-col items-center justify-center font-mono font-bold text-sm select-none border transition-all ${
                      isActive
                        ? 'bg-amber-500/30 text-amber-200 border-amber-400 ring-2 ring-amber-400/50 shadow-glow-emerald scale-105'
                        : isVisited
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
                        : isLand
                        ? 'bg-neutral-800 text-neutral-200 border-white/20'
                        : 'bg-neutral-900/40 text-blue-400/50 border-blue-900/20'
                    }`}
                  >
                    <span>{isLand ? '🏝️' : '🌊'}</span>
                    <span className="text-[9px] font-mono opacity-60">
                      {rIdx},{cIdx}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend / Status */}
      <div className="flex items-center gap-4 text-xs font-mono bg-neutral-900/80 px-4 py-2 rounded-xl border border-white/10">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500" /> Visited Land</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-400" /> Active Cell</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-500/40" /> Water</span>
      </div>
    </div>
  );
}
