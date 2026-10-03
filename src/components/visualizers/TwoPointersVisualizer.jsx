import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, CheckCircle2, Waves, Award } from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export default function TwoPointersVisualizer({
  initialHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7],
  isPlaying,
  setIsPlaying,
  speed = 1,
  currentStep,
  setCurrentStep,
  setTotalSteps,
  onStepChange
}) {
  const [heights] = useState(initialHeights);

  // Precompute steps for Container With Most Water
  const steps = React.useMemo(() => {
    const list = [];
    let l = 0;
    let r = heights.length - 1;
    let maxArea = 0;
    let bestL = 0;
    let bestR = heights.length - 1;

    list.push({
      l,
      r,
      width: r - l,
      minHeight: Math.min(heights[l], heights[r]),
      area: Math.min(heights[l], heights[r]) * (r - l),
      maxArea: 0,
      bestL,
      bestR,
      message: `Initialize Left at index 0 (h=${heights[0]}), Right at index ${r} (h=${heights[r]}). Maximum initial width = ${r - l}.`
    });

    while (l < r) {
      const hL = heights[l];
      const hR = heights[r];
      const width = r - l;
      const minH = Math.min(hL, hR);
      const currentArea = minH * width;

      if (currentArea > maxArea) {
        maxArea = currentArea;
        bestL = l;
        bestR = r;
        list.push({
          l,
          r,
          width,
          minHeight: minH,
          area: currentArea,
          maxArea,
          bestL,
          bestR,
          message: `🌊 New Max Water! Area = min(${hL}, ${hR}) * ${width} = ${currentArea} units!`
        });
      } else {
        list.push({
          l,
          r,
          width,
          minHeight: minH,
          area: currentArea,
          maxArea,
          bestL,
          bestR,
          message: `Current Area = min(${hL}, ${hR}) * ${width} = ${currentArea} units (<= Max ${maxArea}).`
        });
      }

      // Move shorter line inward
      if (hL < hR) {
        l++;
      } else {
        r--;
      }
    }

    list.push({
      l: bestL,
      r: bestR,
      width: bestR - bestL,
      minHeight: Math.min(heights[bestL], heights[bestR]),
      area: maxArea,
      maxArea,
      bestL,
      bestR,
      isFinal: true,
      message: `🏆 Pointers met! Maximum container holds ${maxArea} units between index ${bestL} and ${bestR}.`
    });

    return list;
  }, [heights]);

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
          if (steps[next]?.isFinal) {
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
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">Two Pointers State</span>
            <span className="text-sm font-medium text-neutral-200">{state.message}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-neutral-950/70 px-3 py-1.5 rounded-lg border border-white/5">
            <span className="text-xs text-neutral-400">Current Area:</span>
            <span className="text-sm font-mono font-bold text-cyan-400">
              {state.area}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-400 font-semibold">Max Area:</span>
            <span className="text-sm font-mono font-bold text-emerald-300">
              {state.maxArea}
            </span>
          </div>
        </div>
      </div>

      {/* Container Heights Chart */}
      <div className="w-full my-auto flex flex-col items-center justify-center">
        <div className="flex items-end justify-center gap-3 sm:gap-4 h-52 px-4 py-2 w-full max-w-2xl">
          {heights.map((h, idx) => {
            const isLeft = state.l === idx;
            const isRight = state.r === idx;
            const isInside = idx >= state.l && idx <= state.r;
            const isBestPair = (state.bestL === idx || state.bestR === idx) && state.isFinal;
            const heightPercent = Math.max(20, (h / 8.5) * 100);

            return (
              <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
                {/* Pointer tags */}
                <div className="h-6 flex flex-col items-center justify-center mb-1">
                  {isLeft && (
                    <motion.span
                      layoutId="ptr-l"
                      className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-cyan-400 text-neutral-950 uppercase shadow-glow-cyan"
                    >
                      L
                    </motion.span>
                  )}
                  {isRight && (
                    <motion.span
                      layoutId="ptr-r"
                      className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-indigo-400 text-neutral-950 uppercase shadow-glow-indigo"
                    >
                      R
                    </motion.span>
                  )}
                </div>

                {/* Vertical Bar */}
                <motion.div
                  layout
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full max-w-[42px] rounded-t-lg flex flex-col items-center justify-between py-2 transition-all duration-300 ${
                    isBestPair
                      ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 border-2 border-emerald-300 shadow-glow-emerald text-neutral-950'
                      : isLeft
                      ? 'bg-cyan-500/80 border-2 border-cyan-300 text-cyan-950 shadow-glow-cyan'
                      : isRight
                      ? 'bg-indigo-500/80 border-2 border-indigo-300 text-indigo-950 shadow-glow-indigo'
                      : isInside
                      ? 'bg-cyan-950/40 border border-cyan-500/20 text-neutral-400'
                      : 'bg-neutral-900/60 border border-white/5 text-neutral-500'
                  }`}
                >
                  <span className="font-mono font-bold text-xs">{h}</span>
                </motion.div>

                <span className="text-[10px] font-mono text-neutral-400 mt-2">[{idx}]</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="w-full mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
        <div>Formula: <span className="text-neutral-300">Area = min(h[L], h[R]) * (R - L)</span></div>
        <div>Inward Shifting: <span className="text-cyan-400">Always advance the shorter wall</span></div>
      </div>
    </div>
  );
}
