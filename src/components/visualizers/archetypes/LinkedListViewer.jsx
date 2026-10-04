import React from 'react';
import { motion } from 'framer-motion';
import { Link2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function LinkedListViewer({ state, problem }) {
  if (!state) return null;

  const {
    nodes = [],
    pointers = {},
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold shadow-md"
        >
          <Link2 className="w-3.5 h-3.5 text-rose-400" />
          <span>{conditionBadge}</span>
        </motion.div>
      )}

      {/* Linked List Nodes & Vector Arrows */}
      <div className="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 py-10 px-4">
        {nodes.map((node, idx) => {
          const isPrev = pointers.prev === node.id;
          const isCurr = pointers.curr === node.id;
          const isNext = pointers.next === node.id;
          const pointsBackward = node.nextId !== null && node.nextId < node.id;
          const pointsForward = node.nextId !== null && node.nextId > node.id;

          return (
            <div key={node.id} className="flex items-center gap-3 relative">
              <div className="flex flex-col items-center">
                {/* Pointer tags above node */}
                <div className="h-6 flex items-center justify-center gap-1">
                  {isCurr && (
                    <motion.span
                      layoutId="ll-curr"
                      className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-cyan-500 text-neutral-950 shadow-sm"
                    >
                      CURR
                    </motion.span>
                  )}
                  {isPrev && (
                    <motion.span
                      layoutId="ll-prev"
                      className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-purple-500 text-white shadow-sm"
                    >
                      PREV
                    </motion.span>
                  )}
                  {isNext && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-neutral-700 text-neutral-300">
                      NEXT
                    </span>
                  )}
                </div>

                {/* Node Box */}
                <motion.div
                  layout
                  className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-mono font-bold text-lg border select-none transition-all shadow-md ${
                    isCurr
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 ring-2 ring-cyan-500/40 shadow-glow-cyan'
                      : isPrev
                      ? 'bg-purple-500/20 text-purple-300 border-purple-400'
                      : 'bg-neutral-900 text-neutral-200 border-white/10'
                  }`}
                >
                  <span>{node.val}</span>
                  <span className="text-[9px] font-mono text-neutral-500 font-normal">#{node.id}</span>
                </motion.div>
              </div>

              {/* Connecting Vector Arrow */}
              {idx < nodes.length - 1 && (
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: pointsBackward ? 180 : 0,
                      color: pointsBackward ? '#a855f7' : '#94a3b8'
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight className="w-5 h-5 text-neutral-400" />
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}

        {/* Tail Null Node */}
        <div className="flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-neutral-600" />
          <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-dashed border-white/10 flex items-center justify-center text-xs font-mono text-neutral-600">
            NULL
          </div>
        </div>
      </div>

      {/* Pointer Summary */}
      <div className="flex items-center gap-5 text-xs font-mono bg-neutral-900/80 px-4 py-2 rounded-xl border border-white/10">
        <span className="text-neutral-400">prev: <span className="text-purple-300 font-bold">{pointers.prev ?? 'None'}</span></span>
        <span className="text-neutral-400">curr: <span className="text-cyan-300 font-bold">{pointers.curr ?? 'None'}</span></span>
        <span className="text-neutral-400">next: <span className="text-neutral-300 font-bold">{pointers.next ?? 'None'}</span></span>
      </div>
    </div>
  );
}
