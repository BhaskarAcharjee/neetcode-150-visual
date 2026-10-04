import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowDown, ArrowUp, Check, X } from 'lucide-react';

export default function StackViewer({ state, problem }) {
  if (!state) return null;

  const {
    stack = [],
    inputRemaining = [],
    currentInputItem,
    action = 'idle',
    matchedPair,
    conditionBadge
  } = state;

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-between min-h-[360px] gap-6">
      {/* Top Condition Badge */}
      {conditionBadge && (
        <motion.div
          key={conditionBadge}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-semibold shadow-md ${
            action === 'match'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-glow-emerald'
              : action === 'mismatch'
              ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              : 'bg-neutral-900 border-indigo-500/30 text-indigo-300'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{conditionBadge}</span>
        </motion.div>
      )}

      {/* Center Layout: Input Stream on Left, Physical Stack Container on Right */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-center gap-8 py-2">
        {/* Input String Stream */}
        <div className="flex flex-col items-center gap-2 bg-neutral-900/60 p-4 rounded-2xl border border-white/5 w-full md:w-64">
          <span className="text-xs font-mono text-neutral-400 font-semibold">
            Input Scanner Stream
          </span>
          <div className="flex items-center gap-1.5 min-h-[44px]">
            {currentInputItem && (
              <motion.div
                key={`current-${currentInputItem}`}
                initial={{ scale: 0.8, y: -10 }}
                animate={{ scale: 1.1, y: 0 }}
                className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-400 text-indigo-300 font-mono font-bold flex items-center justify-center shadow-glow-indigo text-lg"
              >
                {currentInputItem}
              </motion.div>
            )}
            {inputRemaining.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-md bg-neutral-950 border border-white/10 text-neutral-400 font-mono text-sm flex items-center justify-center opacity-70"
              >
                {item}
              </div>
            ))}
            {inputRemaining.length > 6 && (
              <span className="text-xs text-neutral-500 font-mono">+{inputRemaining.length - 6}</span>
            )}
            {inputRemaining.length === 0 && !currentInputItem && (
              <span className="text-xs text-neutral-500 font-mono italic">Stream ended</span>
            )}
          </div>
        </div>

        {/* Physical Stack Glass Container */}
        <div className="flex flex-col items-center">
          <div className="text-xs font-mono text-neutral-400 mb-2 flex items-center gap-2">
            <span>Stack Top</span>
            <ArrowDown className="w-3.5 h-3.5 text-indigo-400" />
          </div>

          <div className="w-44 h-56 rounded-b-2xl border-x-2 border-b-2 border-dashed border-indigo-500/40 bg-neutral-950/60 backdrop-blur-md p-3 flex flex-col-reverse items-center gap-2 overflow-y-auto shadow-inner relative">
            <AnimatePresence>
              {stack.map((item, idx) => {
                const isTop = idx === stack.length - 1;
                return (
                  <motion.div
                    key={item.id || `${item.val}-${idx}`}
                    initial={{ y: -80, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -60, opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                    className={`w-full py-2 px-3 rounded-lg flex items-center justify-between font-mono font-bold text-sm shadow-md border ${
                      isTop
                        ? 'bg-indigo-500/20 text-indigo-200 border-indigo-400/80 shadow-glow-indigo'
                        : 'bg-neutral-900 text-neutral-300 border-white/10'
                    }`}
                  >
                    <span>{item.val}</span>
                    <span className="text-[10px] font-mono text-neutral-500 font-normal">
                      depth {idx}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {stack.length === 0 && (
              <div className="my-auto text-xs font-mono text-neutral-600 italic">
                (Empty Stack)
              </div>
            )}
          </div>
          <span className="text-[11px] font-mono text-neutral-500 mt-2">
            Capacity: {stack.length} elements
          </span>
        </div>
      </div>

      {/* Bracket / Item Match Animation Notification */}
      {matchedPair && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono"
        >
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Matched Pair: {matchedPair[0]} & {matchedPair[1]}</span>
        </motion.div>
      )}
    </div>
  );
}
