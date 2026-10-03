import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowDown, Database, Cpu } from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export default function TwoSumVisualizer({
  initialNums = [2, 7, 11, 15],
  initialTarget = 9,
  isPlaying,
  setIsPlaying,
  speed = 1,
  currentStep,
  setCurrentStep,
  setTotalSteps,
  onStepChange
}) {
  const [nums, setNums] = useState(initialNums);
  const [target, setTarget] = useState(initialTarget);

  // Precompute the steps of the Two Sum algorithm
  const steps = React.useMemo(() => {
    const list = [];
    const map = {}; // value -> index

    list.push({
      type: 'INIT',
      currentIndex: -1,
      currentNum: null,
      complement: null,
      found: false,
      mapState: {},
      result: null,
      message: `Target is ${target}. Initialize an empty hash map to store seen numbers.`,
      activeIndices: []
    });

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;

      // Step: Inspect current element
      list.push({
        type: 'INSPECT',
        currentIndex: i,
        currentNum: num,
        complement: complement,
        found: false,
        mapState: { ...map },
        result: null,
        message: `Step ${i + 1}: Check nums[${i}] = ${num}. Needed complement = ${target} - ${num} = ${complement}.`,
        activeIndices: [i]
      });

      // Check if complement in map
      if (complement in map) {
        const compIndex = map[complement];
        list.push({
          type: 'MATCH',
          currentIndex: i,
          currentNum: num,
          complement: complement,
          found: true,
          mapState: { ...map },
          result: [compIndex, i],
          message: `🎯 Match Found! Complement ${complement} exists at index ${compIndex}. Indices are [${compIndex}, ${i}]!`,
          activeIndices: [compIndex, i]
        });
        break;
      } else {
        // Step: Insert into map
        map[num] = i;
        list.push({
          type: 'INSERT',
          currentIndex: i,
          currentNum: num,
          complement: complement,
          found: false,
          mapState: { ...map },
          result: null,
          message: `Complement ${complement} not in memory yet. Store ${num} -> index ${i} in hash map and advance.`,
          activeIndices: [i]
        });
      }
    }

    return list;
  }, [nums, target]);

  useEffect(() => {
    if (setTotalSteps) {
      setTotalSteps(steps.length);
    }
  }, [steps, setTotalSteps]);

  // Handle auto-playing
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      const delay = 1400 / speed;
      timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          const next = currentStep + 1;
          setCurrentStep(next);
          if (onStepChange) onStepChange(next);
          if (steps[next]?.type === 'MATCH') {
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
      {/* Top Banner / Formula Callout */}
      <div className="w-full flex items-center justify-between mb-6 px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">Algorithm State</span>
            <span className="text-sm font-medium text-neutral-200">{state.message}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-neutral-950/70 px-3.5 py-1.5 rounded-lg border border-white/5">
          <span className="text-xs text-neutral-400">Target:</span>
          <span className="text-sm font-bold font-mono text-brand-400 px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20">
            {target}
          </span>
        </div>
      </div>

      {/* Main Arena: Array visualization with pointers */}
      <div className="w-full my-auto flex flex-col items-center justify-center">
        <div className="text-xs uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
          <span>Input Array <span className="font-mono text-neutral-300">nums[]</span></span>
          {state.result && (
            <span className="flex items-center gap-1 text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 animate-pulse">
              <CheckCircle2 className="w-3.5 h-3.5" /> Solved
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-2">
          {nums.map((val, idx) => {
            const isCurrent = state.currentIndex === idx;
            const isMatch = state.result && state.result.includes(idx);
            const isInMap = state.mapState && state.mapState[val] !== undefined;

            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Pointer indicator above */}
                <div className="h-6 flex items-center justify-center mb-1">
                  {isCurrent && (
                    <motion.div
                      layoutId="pointer-arrow"
                      className="flex flex-col items-center text-brand-400 font-mono text-xs font-bold"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    >
                      <span>i={idx}</span>
                      <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                    </motion.div>
                  )}
                  {isMatch && !isCurrent && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-emerald-400 font-mono text-xs font-bold"
                    >
                      <span>Match!</span>
                    </motion.div>
                  )}
                </div>

                {/* Array Cell */}
                <motion.div
                  layout
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex flex-col items-center justify-center font-mono font-bold text-lg sm:text-xl transition-all duration-300 ${
                    isMatch
                      ? 'bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 shadow-glow-emerald scale-105'
                      : isCurrent
                      ? 'bg-brand-500/20 border-2 border-brand-400 text-brand-200 shadow-glow-emerald scale-105'
                      : isInMap
                      ? 'bg-neutral-900 border border-brand-500/40 text-neutral-200'
                      : 'bg-neutral-900/90 border border-white/10 text-neutral-400 hover:border-white/20'
                  }`}
                >
                  <span>{val}</span>
                  <span className="text-[10px] font-sans font-normal text-neutral-400 absolute bottom-1">
                    [{idx}]
                  </span>

                  {/* Corner Badge */}
                  {isMatch && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full shadow-glow-emerald" />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hash Map Memory Section */}
      <div className="w-full mt-6 pt-5 border-t border-white/5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
            <Database className="w-3.5 h-3.5 text-brand-400" />
            <span>Hash Map Memory (Value &rarr; Index)</span>
          </div>
          {state.complement !== null && state.currentIndex >= 0 && (
            <div className="text-xs font-mono text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded-md border border-white/10">
              Query: <span className="text-amber-400 font-bold">{state.complement}</span> in map?{' '}
              <span className={state.found ? 'text-emerald-400 font-bold' : 'text-neutral-400'}>
                {state.found ? 'YES (Index ' + state.mapState[state.complement] + ')' : 'NO'}
              </span>
            </div>
          )}
        </div>

        {/* Hash Table Cards */}
        <div className="min-h-[56px] flex flex-wrap items-center gap-2 p-2 rounded-xl bg-neutral-950/60 border border-white/5">
          {Object.keys(state.mapState).length === 0 ? (
            <div className="w-full text-center text-xs text-neutral-400 py-2 italic font-mono">
              [ empty hash map — waiting to store inspected elements ]
            </div>
          ) : (
            <AnimatePresence>
              {Object.entries(state.mapState).map(([key, valIndex]) => {
                const isLookedUp = state.complement === Number(key);
                return (
                  <motion.div
                    key={key}
                    initial={{ scale: 0.8, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs border transition-all ${
                      isLookedUp && state.found
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-glow-emerald scale-105'
                        : isLookedUp
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-neutral-900/80 border-white/10 text-neutral-300'
                    }`}
                  >
                    <span className="text-neutral-400 font-sans">val:</span>
                    <span className="font-bold text-brand-300">{key}</span>
                    <span className="text-neutral-400">&rarr;</span>
                    <span className="text-neutral-400 font-sans">idx:</span>
                    <span className="font-bold text-neutral-200">{valIndex}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
