import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, RotateCcw, X, CheckCircle2, Flame, Trophy } from 'lucide-react';

export default function ResetProgressModal({
  isOpen,
  onClose,
  onConfirmReset,
  solvedCount = 0,
  streak = 0,
  xp = 0,
  level = 1,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-md bg-neutral-900/95 border border-rose-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans relative"
        >
          {/* Subtle Red/Rose Glow at top */}
          <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600" />

          <div className="p-6 space-y-5">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-100">
                    Reset All Progress?
                  </h3>
                  <p className="text-xs text-neutral-400">
                    This will clear all your saved progress and statistics.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Impact Summary Badges */}
            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5 flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold mb-1 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{solvedCount}</span>
                </div>
                <span className="text-[10px] text-neutral-400 uppercase font-semibold">Solved</span>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5 flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-orange-400 text-xs font-bold mb-1 font-mono">
                  <Flame className="w-3.5 h-3.5 fill-orange-400/20" />
                  <span>{streak}d</span>
                </div>
                <span className="text-[10px] text-neutral-400 uppercase font-semibold">Streak</span>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5 flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold mb-1 font-mono">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{xp} XP</span>
                </div>
                <span className="text-[10px] text-neutral-400 uppercase font-semibold">Lv. {level}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed bg-rose-500/5 border border-rose-500/15 rounded-xl p-3">
              Are you sure? All checkmarks will be unchecked, streak will reset to <strong className="text-white">0 days</strong>, and XP will reset to <strong className="text-white">0 XP</strong>. This action is irreversible.
            </p>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                Keep Progress
              </button>
              <button
                type="button"
                onClick={() => {
                  onConfirmReset();
                  onClose();
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Everything</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
