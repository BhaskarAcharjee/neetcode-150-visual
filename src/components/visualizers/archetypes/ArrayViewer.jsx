import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, CheckCircle2, AlertCircle, ArrowDown } from 'lucide-react';

export default function ArrayViewer({ state, problem }) {
  if (!state) return null;

  const { elements = [], hashTable = {}, hashTitle = 'Hash Map', pointers = [], condition } = state;

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-center gap-8 min-h-[360px]">
      {/* Dynamic Condition Badge */}
      {condition && (
        <motion.div
          key={condition}
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-brand-500/30 text-brand-300 text-xs font-mono font-semibold shadow-glow-emerald backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          <span>{condition}</span>
        </motion.div>
      )}

      {/* Main Elements Visual Array */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {elements.map((el, idx) => {
            const isMatch = el.status === 'match';
            const isActive = el.status === 'active';
            const isDup = el.status === 'duplicate';
            const isVisited = el.status === 'visited';

            return (
              <div key={idx} className="flex flex-col items-center gap-2 relative">
                {/* Pointer indicator */}
                {pointers.find(p => p.index === idx) && (
                  <motion.div
                    initial={{ y: -6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute -top-7 flex flex-col items-center"
                  >
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-brand-500 text-neutral-950 shadow-sm">
                      {pointers.find(p => p.index === idx).label}
                    </span>
                    <ArrowDown className="w-3 h-3 text-brand-400 -mt-0.5" />
                  </motion.div>
                )}

                {/* Number / Character Tile */}
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex flex-col items-center justify-center font-mono font-bold text-lg sm:text-xl transition-all shadow-lg select-none border ${
                    isMatch
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-glow-emerald scale-105'
                      : isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 ring-2 ring-cyan-500/40 scale-105'
                      : isDup
                      ? 'bg-rose-500/20 text-rose-300 border-rose-400 ring-2 ring-rose-500/40'
                      : isVisited
                      ? 'bg-neutral-900/60 text-neutral-400 border-white/5 opacity-70'
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
      </div>

      {/* Hash Map / Set Sidecar Inspector */}
      {Object.keys(hashTable).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-neutral-900/80 rounded-xl p-3.5 border border-white/10 backdrop-blur-md shadow-glass"
        >
          <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold text-neutral-300">
            <Database className="w-3.5 h-3.5 text-brand-400" />
            <span>{hashTitle}</span>
            <span className="ml-auto text-[11px] font-mono text-neutral-500">
              {Object.keys(hashTable).length} item(s)
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {Object.entries(hashTable).map(([key, val]) => (
                <motion.div
                  key={key}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950 border border-brand-500/30 text-xs font-mono"
                >
                  <span className="text-brand-300 font-bold">{key}</span>
                  <span className="text-neutral-500">→</span>
                  <span className="text-cyan-300 font-medium">{val}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </div>
  );
}
