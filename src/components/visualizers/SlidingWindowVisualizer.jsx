import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowDown, DollarSign, Award } from 'lucide-react';
import { triggerConfetti } from '../../utils/confetti';

export default function SlidingWindowVisualizer({
  initialPrices = [7, 1, 5, 3, 6, 4],
  isPlaying,
  setIsPlaying,
  speed = 1,
  currentStep,
  setCurrentStep,
  setTotalSteps,
  onStepChange
}) {
  const [prices] = useState(initialPrices);

  // Precompute sliding window steps
  const steps = React.useMemo(() => {
    const list = [];
    let l = 0;
    let maxProfit = 0;
    let bestBuy = 0;
    let bestSell = 0;

    list.push({
      l: 0,
      r: 1,
      currentProfit: 0,
      maxProfit: 0,
      bestBuy: 0,
      bestSell: 0,
      action: 'INIT',
      message: `Initialize Left pointer at Day 0 ($${prices[0]}), Right pointer at Day 1 ($${prices[1]}).`
    });

    for (let r = 1; r < prices.length; r++) {
      const buyPrice = prices[l];
      const sellPrice = prices[r];
      const profit = sellPrice - buyPrice;

      if (buyPrice < sellPrice) {
        if (profit > maxProfit) {
          maxProfit = profit;
          bestBuy = l;
          bestSell = r;
          list.push({
            l,
            r,
            currentProfit: profit,
            maxProfit,
            bestBuy,
            bestSell,
            action: 'NEW_MAX',
            message: `🎉 Profitable! Buy at Day ${l} ($${buyPrice}), Sell at Day ${r} ($${sellPrice}). Profit = $${profit}. New Max Profit!`
          });
        } else {
          list.push({
            l,
            r,
            currentProfit: profit,
            maxProfit,
            bestBuy,
            bestSell,
            action: 'PROFITABLE',
            message: `Buy at Day ${l} ($${buyPrice}), Sell at Day ${r} ($${sellPrice}). Profit = $${profit} (<= current max $${maxProfit}).`
          });
        }
      } else {
        // Found a lower buy price! Shift left pointer to r
        l = r;
        list.push({
          l,
          r,
          currentProfit: 0,
          maxProfit,
          bestBuy,
          bestSell,
          action: 'SHIFT_BUY',
          message: `📉 Dip found at Day ${r} ($${sellPrice} < $${buyPrice})! Shift Buy pointer to Day ${r}.`
        });
      }
    }

    list.push({
      l: bestBuy,
      r: bestSell,
      currentProfit: maxProfit,
      maxProfit,
      bestBuy,
      bestSell,
      action: 'COMPLETE',
      message: `✨ Done! Maximum achievable profit is $${maxProfit} (Buy Day ${bestBuy} @ $${prices[bestBuy]}, Sell Day ${bestSell} @ $${prices[bestSell]}).`
    });

    return list;
  }, [prices]);

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
          if (steps[next]?.action === 'COMPLETE') {
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
      {/* Top Banner / State Callout */}
      <div className="w-full flex items-center justify-between mb-6 px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block">Sliding Window State</span>
            <span className="text-sm font-medium text-neutral-200">{state.message}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-neutral-950/70 px-3 py-1.5 rounded-lg border border-white/5">
            <span className="text-xs text-neutral-400">Current Profit:</span>
            <span className={`text-sm font-mono font-bold ${state.currentProfit > 0 ? 'text-emerald-400' : 'text-neutral-400'}`}>
              ${state.currentProfit}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-emerald-400 font-semibold">Max Profit:</span>
            <span className="text-sm font-mono font-bold text-emerald-300">
              ${state.maxProfit}
            </span>
          </div>
        </div>
      </div>

      {/* Main Stock Bar Chart Visualizer */}
      <div className="w-full my-auto flex flex-col items-center justify-center">
        <div className="text-xs uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-3">
          <span>Day-by-Day Stock Price Window</span>
          <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Buy (Left)
          </span>
          <span className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-400" /> Sell (Right)
          </span>
        </div>

        <div className="flex items-end justify-center gap-4 sm:gap-6 h-52 px-4 py-2 w-full max-w-xl">
          {prices.map((price, idx) => {
            const isLeft = state.l === idx;
            const isRight = state.r === idx;
            const isInsideWindow = idx >= state.l && idx <= state.r;
            const isBestPair = (state.action === 'COMPLETE' || state.action === 'NEW_MAX') && (state.bestBuy === idx || state.bestSell === idx);

            const heightPercent = Math.max(25, (price / 8) * 100);

            return (
              <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
                {/* Pointer tags */}
                <div className="h-8 flex flex-col items-center justify-center mb-1">
                  {isLeft && (
                    <motion.span
                      layoutId="l-ptr"
                      className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-500 text-neutral-950 uppercase shadow-glow-emerald"
                    >
                      BUY (L)
                    </motion.span>
                  )}
                  {isRight && (
                    <motion.span
                      layoutId="r-ptr"
                      className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-500 text-neutral-950 uppercase shadow-glow-cyan"
                    >
                      SELL (R)
                    </motion.span>
                  )}
                </div>

                {/* Bar */}
                <motion.div
                  layout
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full max-w-[54px] rounded-t-xl flex flex-col items-center justify-between py-2 transition-all duration-300 relative ${
                    isBestPair
                      ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 border-2 border-emerald-300 shadow-glow-emerald text-neutral-950'
                      : isLeft
                      ? 'bg-gradient-to-t from-emerald-600/60 to-emerald-400/80 border-2 border-emerald-400 text-emerald-100 shadow-glow-emerald'
                      : isRight
                      ? 'bg-gradient-to-t from-blue-600/60 to-blue-400/80 border-2 border-blue-400 text-blue-100 shadow-glow-cyan'
                      : isInsideWindow
                      ? 'bg-neutral-800/80 border border-white/20 text-neutral-300'
                      : 'bg-neutral-900/60 border border-white/5 text-neutral-500'
                  }`}
                >
                  <span className="font-mono font-bold text-sm">${price}</span>
                </motion.div>

                {/* Day label */}
                <span className="text-[11px] font-mono text-neutral-400 mt-2">
                  Day {idx}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Stat Footer */}
      <div className="w-full mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
        <div>Strategy: <span className="text-neutral-300">Greedy Two-Pointer Sliding Window</span></div>
        <div>Time: <span className="text-emerald-400">O(n)</span> | Space: <span className="text-emerald-400">O(1)</span></div>
      </div>
    </div>
  );
}
