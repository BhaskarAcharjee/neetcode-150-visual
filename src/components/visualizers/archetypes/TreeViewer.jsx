import React from 'react';
import { motion } from 'framer-motion';
import { GitFork, Layers, RefreshCw } from 'lucide-react';

export default function TreeViewer({ state, problem }) {
  if (!state) return null;

  const {
    tree,
    activeNodeId,
    visitedNodeIds = [],
    swappedNodeIds = [],
    callStack = [],
    conditionBadge
  } = state;

  // Flatten tree for hierarchical rendering with coordinates
  const renderTreeSvg = () => {
    if (!tree) return null;

    // Node coordinates (SVG coordinate space 400x220)
    const positions = {
      1: { x: 200, y: 35 },
      2: { x: 100, y: 105 },
      3: { x: 300, y: 105 },
      4: { x: 50, y: 175 },
      5: { x: 150, y: 175 },
      6: { x: 250, y: 175 },
      7: { x: 350, y: 175 },
    };

    const edges = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 6 },
      { from: 3, to: 7 },
    ];

    // Helper to get node value from tree object
    const getNodeVal = (id) => {
      if (id === 1) return tree.val;
      if (id === 2) return tree.left?.val;
      if (id === 3) return tree.right?.val;
      if (id === 4) return tree.left?.left?.val;
      if (id === 5) return tree.left?.right?.val;
      if (id === 6) return tree.right?.left?.val;
      if (id === 7) return tree.right?.right?.val;
      return null;
    };

    return (
      <svg className="w-full h-56 max-w-md mx-auto" viewBox="0 0 400 220">
        {/* Branch Lines */}
        {edges.map((e, idx) => {
          const fromPos = positions[e.from];
          const toPos = positions[e.to];
          const isHighlighted = visitedNodeIds.includes(e.from) && visitedNodeIds.includes(e.to);

          return (
            <line
              key={idx}
              x1={fromPos.x}
              y1={fromPos.y}
              x2={toPos.x}
              y2={toPos.y}
              stroke={isHighlighted ? '#10b981' : '#334155'}
              strokeWidth={isHighlighted ? '2.5' : '1.5'}
              strokeDasharray={isHighlighted ? 'none' : '4 2'}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Nodes */}
        {Object.entries(positions).map(([idStr, pos]) => {
          const id = Number(idStr);
          const val = getNodeVal(id);
          if (val === null || val === undefined) return null;

          const isActive = id === activeNodeId;
          const isVisited = visitedNodeIds.includes(id);
          const isSwapped = swappedNodeIds.includes(id);

          return (
            <g key={id} className="transition-all duration-300">
              <circle
                cx={pos.x}
                cy={pos.y}
                r="18"
                fill={
                  isActive
                    ? '#10b981'
                    : isSwapped
                    ? '#06b6d4'
                    : isVisited
                    ? '#1e293b'
                    : '#0f172a'
                }
                stroke={
                  isActive
                    ? '#6ee7b7'
                    : isSwapped
                    ? '#38bdf8'
                    : isVisited
                    ? '#10b981'
                    : '#475569'
                }
                strokeWidth={isActive || isSwapped ? '3' : '1.5'}
                className="transition-all duration-300"
              />
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill={isActive || isSwapped ? '#022c22' : '#f8fafc'}
                fontSize="12"
                fontWeight="bold"
                fontFamily="monospace"
              >
                {val}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-between min-h-[360px] gap-6">
      {/* Top Condition Badge */}
      {conditionBadge && (
        <motion.div
          key={conditionBadge}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold shadow-glow-emerald"
        >
          <GitFork className="w-3.5 h-3.5 text-emerald-400" />
          <span>{conditionBadge}</span>
        </motion.div>
      )}

      {/* Main Tree + Recursion Stack Container */}
      <div className="w-full max-w-3xl flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Tree SVG */}
        <div className="flex-1 w-full bg-neutral-950/60 rounded-2xl p-4 border border-white/5 backdrop-blur-sm flex flex-col items-center">
          <span className="text-xs font-mono text-neutral-400 mb-1">Binary Tree Hierarchy</span>
          {renderTreeSvg()}
        </div>

        {/* Call Stack Sidecar */}
        <div className="w-full lg:w-60 bg-neutral-900/80 rounded-2xl p-3.5 border border-white/10 backdrop-blur-md shadow-glass flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 border-b border-white/5 pb-2">
            <Layers className="w-3.5 h-3.5 text-brand-400" />
            <span>Recursion Call Stack</span>
          </div>

          <div className="flex flex-col-reverse gap-1.5 min-h-[120px] max-h-[160px] overflow-y-auto">
            {callStack.map((frame, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-2.5 py-1.5 rounded-lg bg-neutral-950 border border-brand-500/20 text-xs font-mono flex items-center justify-between"
              >
                <span className="text-emerald-300 font-bold">{frame.fn}</span>
                <span className="text-[10px] text-neutral-500">depth {frame.depth}</span>
              </motion.div>
            ))}
            {callStack.length === 0 && (
              <span className="text-xs text-neutral-600 font-mono italic my-auto text-center">
                (Stack Empty)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
