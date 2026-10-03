import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  Sparkles,
  Maximize2,
  Minimize2,
  CheckCircle,
  HelpCircle,
  ExternalLink,
  Code2,
  Eye,
  Sliders
} from 'lucide-react';
import TwoSumVisualizer from './visualizers/TwoSumVisualizer';
import SlidingWindowVisualizer from './visualizers/SlidingWindowVisualizer';
import TwoPointersVisualizer from './visualizers/TwoPointersVisualizer';
import BinarySearchVisualizer from './visualizers/BinarySearchVisualizer';
import { triggerConfetti } from '../utils/confetti';

export default function VisualizerArena({
  problem,
  isSolved,
  onToggleSolved,
}) {
  const [activeTab, setActiveTab] = useState('canvas'); // 'canvas' | 'embed' | 'explanation'
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(1);
  const [isZenMode, setIsZenMode] = useState(false);

  // Reset steps when problem changes
  React.useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [problem?.num]);

  const handleStepBack = () => {
    setIsPlaying(false);
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    setCurrentStep(prev => Math.min(totalSteps - 1, prev + 1));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const togglePlay = () => {
    if (currentStep >= totalSteps - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSolvedClick = () => {
    if (!isSolved) {
      triggerConfetti();
    }
    onToggleSolved(problem.num);
  };

  // Determine which native interactive visualizer to display
  const renderNativeVisualizer = () => {
    const commonProps = {
      isPlaying,
      setIsPlaying,
      speed,
      currentStep,
      setCurrentStep,
      setTotalSteps,
      onStepChange: (step) => setCurrentStep(step),
    };

    if (problem.categoryId === 'sliding-window' || problem.interactiveType === 'sliding-window') {
      return <SlidingWindowVisualizer {...commonProps} />;
    }
    if (problem.categoryId === 'two-pointers' || problem.interactiveType === 'two-pointers') {
      return <TwoPointersVisualizer {...commonProps} />;
    }
    if (problem.categoryId === 'binary-search' || problem.interactiveType === 'binary-search') {
      return <BinarySearchVisualizer {...commonProps} />;
    }

    // Default to Two Sum / Hash Map array visualizer
    return (
      <TwoSumVisualizer
        {...commonProps}
        initialNums={problem.initialData?.nums || [2, 7, 11, 15]}
        initialTarget={problem.initialData?.target ?? 9}
      />
    );
  };

  const difficultyColors = {
    Easy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    Medium: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    Hard: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  };

  return (
    <div
      className={`flex flex-col bg-surface-card border border-surface-border rounded-2xl overflow-hidden transition-all duration-300 relative shadow-glass ${
        isZenMode ? 'fixed inset-4 z-50 shadow-2xl' : 'w-full h-full'
      }`}
    >
      {/* Visualizer Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-surface-border bg-neutral-950/70 backdrop-blur-md">
        {/* Left: Problem Meta */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-brand-400">
            #{problem.num}
          </span>
          <h2 className="text-base font-bold text-neutral-100 flex items-center gap-2">
            {problem.name}
          </h2>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${difficultyColors[problem.difficulty] || difficultyColors.Medium}`}>
            {problem.difficulty}
          </span>
          <span className="hidden md:inline-flex text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-400">
            {problem.timeComplexity}
          </span>
        </div>

        {/* Right: View Mode Tabs & Zen Button */}
        <div className="flex items-center gap-2">
          {/* Solved Toggle Checkbox */}
          <button
            onClick={handleSolvedClick}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
              isSolved
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-glow-emerald'
                : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-neutral-200 hover:border-white/20'
            }`}
          >
            <CheckCircle className={`w-3.5 h-3.5 ${isSolved ? 'fill-emerald-400 text-neutral-950' : ''}`} />
            <span>{isSolved ? 'Solved' : 'Mark Solved'}</span>
          </button>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center p-0.5 rounded-lg bg-neutral-900/90 border border-white/10">
            <button
              onClick={() => setActiveTab('canvas')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === 'canvas'
                  ? 'bg-brand-500 text-neutral-950 font-semibold shadow-glow-emerald'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Interactive</span>
            </button>

            <button
              onClick={() => setActiveTab('embed')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === 'embed'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Full Visual</span>
            </button>

            <button
              onClick={() => setActiveTab('explanation')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                activeTab === 'explanation'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <HelpCircle className="w-3 h-3" />
              <span className="hidden sm:inline">Intuition</span>
            </button>
          </div>

          {/* Zen Mode Button */}
          <button
            onClick={() => setIsZenMode(!isZenMode)}
            className="p-1.5 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all"
            title={isZenMode ? "Exit Zen Mode" : "Zen Mode"}
          >
            {isZenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Arena Content */}
      <div className="flex-1 relative flex flex-col overflow-hidden bg-grid-pattern">
        {/* Subtle glowing background ambient halo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        {activeTab === 'canvas' && (
          <div className="flex-1 flex flex-col justify-between overflow-y-auto">
            {renderNativeVisualizer()}

            {/* Playback Control Toolbar */}
            <div className="mt-auto px-5 py-3 border-t border-surface-border bg-neutral-950/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              {/* Playback Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all"
                  title="Reset to Start"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleStepBack}
                  disabled={currentStep <= 0}
                  className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-40 disabled:pointer-events-none transition-all"
                  title="Previous Step"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlay}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-neutral-950 font-bold text-xs shadow-glow-emerald transition-all hover:scale-105 active:scale-95"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-neutral-950" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-neutral-950" />
                      <span>{currentStep >= totalSteps - 1 ? 'Replay' : 'Auto Play'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleStepForward}
                  disabled={currentStep >= totalSteps - 1}
                  className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:bg-neutral-800 disabled:opacity-40 disabled:pointer-events-none transition-all"
                  title="Next Step"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Step Segmented Progress Indicator */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-400">
                  Step <span className="text-neutral-200 font-bold">{currentStep + 1}</span> of {totalSteps}
                </span>

                <div className="w-28 sm:w-36 h-2 bg-neutral-900 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 rounded-full"
                    animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>

              {/* Speed Slider / Pill Selector */}
              <div className="flex items-center gap-1.5 bg-neutral-900/90 p-1 rounded-lg border border-white/10 text-xs">
                <span className="text-neutral-400 text-[11px] px-1.5 font-medium">Speed:</span>
                {[0.5, 1, 1.5, 2].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${
                      speed === s
                        ? 'bg-brand-500 text-neutral-950 font-bold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Embed Mode: Loads the curated deep HTML visualization from visual/ */}
        {activeTab === 'embed' && (
          <div className="w-full h-full flex flex-col bg-neutral-950">
            <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-white/5 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-brand-400" />
                Viewing Native D3/Canvas Animation ({problem.file})
              </span>
              <a
                href={problem.file}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium"
              >
                Open directly <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <iframe
              src={problem.file}
              title={problem.name}
              className="w-full flex-1 border-none bg-neutral-950"
            />
          </div>
        )}

        {/* Explanation Mode */}
        {activeTab === 'explanation' && (
          <div className="flex-1 p-6 overflow-y-auto max-w-3xl mx-auto space-y-6">
            {/* Quick Summary Card */}
            <div className="p-5 rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur-md">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-2">
                Problem Statement
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {problem.summary}
              </p>
            </div>

            {/* Layman Intuition Card */}
            <div className="p-5 rounded-xl bg-neutral-900/70 border border-brand-500/20 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> The "Aha!" Moment (Layman's Terms)
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {problem.laymanExplanation}
              </p>
            </div>

            {/* Complexity & Edge Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/5">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Time Complexity
                </h4>
                <div className="text-xl font-mono font-bold text-brand-400">{problem.timeComplexity}</div>
                <p className="text-xs text-neutral-400 mt-1">Single pass linear traversal ensures optimum execution.</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/50 border border-white/5">
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                  Space Complexity
                </h4>
                <div className="text-xl font-mono font-bold text-cyan-400">{problem.spaceComplexity}</div>
                <p className="text-xs text-neutral-400 mt-1">Memory proportional to distinct elements stored.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
