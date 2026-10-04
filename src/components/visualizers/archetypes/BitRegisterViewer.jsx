import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Award, Cpu } from 'lucide-react';

export default function BitRegisterViewer({ state, problem }) {
  if (!state) return null;

  const {
    registerBits = '00000000000000000000000000000000',
    count = 0,
    operation,
    conditionBadge
  } = state;

  // Display lower 16 bits prominently, with top 16 bits condensed
  const bits = registerBits.split('');

  return (
    <div className="flex-1 flex flex-col p-6 items-center justify-between min-h-[360px] gap-6">
      {/* Top Condition Badge & Hamming Weight Count */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {conditionBadge && (
          <motion.div
            key={conditionBadge}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-teal-500/30 text-teal-300 text-xs font-mono font-semibold shadow-md"
          >
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>{conditionBadge}</span>
          </motion.div>
        )}

        {count !== undefined && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-brand-500/30 text-brand-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>1-Bits Counted: {count}</span>
          </div>
        )}
      </div>

      {/* 32-bit Register Visual Grid */}
      <div className="w-full max-w-3xl flex flex-col items-center gap-4 bg-neutral-950/80 p-5 rounded-2xl border border-white/10 shadow-glass">
        <span className="text-xs font-mono text-neutral-400">
          32-Bit Integer Register (Big-Endian)
        </span>

        {/* 4 Bytes x 8 Bits visual grouping */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[0, 1, 2, 3].map((byteIdx) => {
            const byteBits = bits.slice(byteIdx * 8, (byteIdx + 1) * 8);
            return (
              <div
                key={byteIdx}
                className="flex items-center gap-1 bg-neutral-900/60 p-2 rounded-xl border border-white/5"
              >
                {byteBits.map((b, bSubIdx) => {
                  const globalIdx = byteIdx * 8 + bSubIdx;
                  const bitWeight = 31 - globalIdx;
                  const isOne = b === '1';

                  return (
                    <motion.div
                      key={globalIdx}
                      layout
                      className={`w-7 h-10 rounded-lg flex flex-col items-center justify-center font-mono font-bold text-xs border select-none transition-all ${
                        isOne
                          ? 'bg-teal-500/30 text-teal-200 border-teal-400 ring-1 ring-teal-400/50 shadow-glow-cyan'
                          : 'bg-neutral-950 text-neutral-600 border-white/5'
                      }`}
                    >
                      <span>{b}</span>
                      <span className="text-[7px] text-neutral-500 font-normal">
                        {bitWeight}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {operation && (
          <div className="text-xs font-mono text-neutral-400 mt-1">
            Active bitwise operation: <span className="text-teal-300 font-bold">{operation}</span>
          </div>
        )}
      </div>

      {/* Summary Tracker */}
      <div className="flex items-center gap-4 text-xs font-mono bg-neutral-900/80 px-4 py-2 rounded-xl border border-white/10">
        <span className="text-neutral-400">Total Set Bits: <span className="text-teal-300 font-bold text-sm">{count}</span></span>
        <span className="text-neutral-500">|</span>
        <span className="text-neutral-400">Value: <span className="text-neutral-200 font-mono">{parseInt(registerBits, 2) || 0}</span></span>
      </div>
    </div>
  );
}
