import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowDown, CheckCircle2, XCircle } from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export default function BinarySearchVisualizer({
  initialArray = [-1, 0, 3, 5, 9, 12],
  initialTarget = 9,
  isPlaying,
  setIsPlaying,
  speed = 1,
  currentStep,
  setCurrentStep,
  setTotalSteps,
  onStepChange
}) {
  const [nums] = useState(initialArray);
  const [target] = useState(initialTarget);

  const steps = React.useMemo(() => {
    const list = [];
    let l = 0;
    let r = nums.length - 1;

    list.push({
      l,
      r,
      mid: Math.floor((l + r) / 2),
      status: 'INIT',
      message: `Initialize Search interval: Low = 0 (${nums[0]}), High = ${r} (${nums[r]}). Target = ${target}.`
    });

    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      const midVal = nums[mid];

      list.push({
        l,
        r,
        mid,
        status: 'CHECK',
        message: `Calculate Mid = (${l} + ${r}) // 2 = ${mid}. nums[${mid}] is ${midVal}. Comparing with target ${target}...`
      });

      if (midVal === target) {
        list.push({
          l,
          r,
          mid,
          status: 'FOUND',
          message: `🎯 Target ${target} found at index ${mid}!`
        });
        return list;
      } else if (midVal < target) {
        list.push({
          l,
          r,
          mid,
          status: 'GREATER',
          message: `${midVal} < ${target}. Target must be in the right half! Discard left half and set Low = ${mid + 1}.`
        });
        l = mid + 1;
      } else {
        list.push({
          l,
          r,
          mid,
          status: 'LESS',
          message: `${midVal} > ${target}. Target must be in the left half! Discard right half and set High = ${mid - 1}.`
        });
        r = mid - 1;
      }
    }

    list.push({
      l,
      r,
      mid: -1,
      status: 'NOT_FOUND',
      message: `Target ${target} does not exist in array (Low > High). Returned -1.`
    });

    return list;
  }, [nums, target]);

  useEffect(() => {
    if (setTotalSteps) {
      setTotalSteps(steps.length);
    }
  }, [steps, setTotalSteps]);

  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      const delay = 1400 / speed;
      timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          const next = currentStep + 1;
          setCurrentStep(next);
          if (onStepChange) onStepChange(next);
          if (steps[next]?.status === 'FOUND') {
            triggerConfetti();
          }
        } else {
          setIsPlaying(false);
        }
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, steps, speed, setCurrentStep, setIsPlaying, onStepChange]);

  const state = steps[Math.min(currentStep, steps.length - 1)] || steps[0];

  return (
    <div className="w-full flex flex-col items-center justify-between min-h-[380px] p-6 text-neutral-200">
      {/* Top Banner */}
      <div className="w-full flex items-center justify-between mb-6 px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">Binary Search Step</span>
            <span className="text-sm font-medium text-neutral-200">{state.message}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-neutral-950/70 px-3.5 py-1.5 rounded-lg border border-white/5">
          <span className="text-xs text-neutral-400">Target:</span>
          <span className="text-sm font-bold font-mono text-purple-400 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
            {target}
          </span>
        </div>
      </div>

      {/* Array Elements */}
      <div className="w-full my-auto flex flex-col items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-4">
          {nums.map((val, idx) => {
            const isMid = state.mid === idx;
            const isLow = state.l === idx;
            const isHigh = state.r === idx;
            const isInRange = idx >= state.l && idx <= state.r;
            const isFound = state.status === 'FOUND' && isMid;

            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Pointer Indicators */}
                <div className="h-7 flex items-center justify-center gap-1 mb-1">
                  {isLow && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-500 text-neutral-950">
                      L
                    </span>
                  )}
                  {isMid && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-purple-500 text-white shadow-glow-indigo">
                      MID
                    </span>
                  )}
                  {isHigh && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-500 text-neutral-950">
                      H
                    </span>
                  )}
                </div>

                {/* Box */}
                <motion.div
                  layout
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex flex-col items-center justify-center font-mono font-bold text-lg transition-all duration-300 ${
                    isFound
                      ? 'bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 shadow-glow-emerald scale-110'
                      : isMid
                      ? 'bg-purple-500/20 border-2 border-purple-400 text-purple-200 shadow-glow-indigo scale-105'
                      : isInRange
                      ? 'bg-neutral-900 border border-white/20 text-neutral-200'
                      : 'bg-neutral-950/40 border border-white/5 text-neutral-400 opacity-40 line-through'
                  }`}
                >
                  <span>{val}</span>
                  <span className="text-[10px] font-sans font-normal text-neutral-400 absolute bottom-1">
                    [{idx}]
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
        <div>Formula: <span className="text-neutral-300">mid = low + ((high - low) // 2)</span></div>
        <div>Complexity: <span className="text-purple-400">O(log n)</span> Time | <span className="text-purple-400">O(1)</span> Space</div>
      </div>
    </div>
  );
}
