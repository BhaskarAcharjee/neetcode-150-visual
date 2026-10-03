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
  Sliders,
  Timer,
  HardDrive
} from 'lucide-react';
import TwoSumVisualizer from './visualizers/TwoSumVisualizer';
import SlidingWindowVisualizer from './visualizers/SlidingWindowVisualizer';
import TwoPointersVisualizer from './visualizers/TwoPointersVisualizer';
import BinarySearchVisualizer from './visualizers/BinarySearchVisualizer';
import { triggerConfetti } from '../utils/confetti';

function renderFormattedText(text) {
  if (!text) return null;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(/^https?:\/\//)) {
      let cleanUrl = part;
      let trailing = '';
      const match = part.match(/[.,;)]+$/);
      if (match) {
        trailing = match[0];
        cleanUrl = part.slice(0, -trailing.length);
      }

      return (
        <React.Fragment key={index}>
          <a
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 underline underline-offset-2 break-all hover:opacity-90 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <span>{cleanUrl}</span>
            <ExternalLink className="w-3 h-3 inline shrink-0" />
          </a>
          {trailing}
        </React.Fragment>
      );
    }
    return part;
  });
}

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
      className={`flex flex-col bg-surface-card border border-surface-border rounded-2xl overflow-hidden transition-all duration-300 relative shadow-glass ${isZenMode ? 'fixed inset-4 z-50 shadow-2xl' : 'w-full h-full'
        }`}
    >
      {/* Visualizer Top Header */}
      <div className="flex flex-col gap-2.5 px-5 py-3 border-b border-surface-border bg-neutral-950/80 backdrop-blur-md">
        {/* Row 1: Problem Title, Badges, and Stats */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-brand-400">
              #{problem.num}
            </span>
            <h2 className="text-base font-bold text-neutral-100 flex items-center gap-2">
              {problem.name}
            </h2>
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${difficultyColors[problem.difficulty] || difficultyColors.Medium}`}>
              {problem.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-neutral-900 border border-brand-500/20 text-brand-400 shadow-sm">
              <Timer className="w-4 h-4" /> {problem.timeComplexity}
            </span>
            {problem.spaceComplexity && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-900 border border-white/5 text-cyan-400">
                <HardDrive className="w-4 h-4" /> {problem.spaceComplexity}
              </span>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span>{problem.category}</span>
          </div>
        </div>

        {/* Row 2: Short problem statement fetched from visual <div class="problem-info"> <p> tag */}
        {problem.shortDescription && (
          <div className="text-xs text-neutral-300 leading-relaxed bg-neutral-900/50 px-3.5 py-2 rounded-xl border border-white/5 backdrop-blur-sm">
            <span className="text-neutral-400 font-medium mr-1.5">Overview:</span>
            {renderFormattedText(problem.shortDescription)}
          </div>
        )}

        {/* Row 2.5: Tags fetched from visuals <span class="meta-tag"> */}
        {problem.tags && problem.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {problem.tags.map((tag, idx) => (
              <span
                key={idx}
                className="meta-tag inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-brand-300 hover:border-brand-500/30 transition-all shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Row 3: Action Buttons & Mode Switcher Tabs (Above the visualizer arena) */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/5">
          {/* Solved Toggle Checkbox */}
          <button
            onClick={handleSolvedClick}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-all ${isSolved
              ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-glow-emerald'
              : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-neutral-200 hover:border-white/20'
              }`}
          >
            <CheckCircle className={`w-3.5 h-3.5 ${isSolved ? 'fill-emerald-400 text-neutral-950' : ''}`} />
            <span>{isSolved ? 'Solved' : 'Mark Solved'}</span>
          </button>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-0.5 rounded-lg bg-neutral-900/90 border border-white/10">
              <button
                onClick={() => setActiveTab('canvas')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${activeTab === 'canvas'
                  ? 'bg-brand-500 text-neutral-950 font-semibold shadow-glow-emerald'
                  : 'text-neutral-400 hover:text-neutral-200'
                  }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Interactive</span>
              </button>

              <button
                onClick={() => setActiveTab('embed')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${activeTab === 'embed'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
                  }`}
              >
                <Eye className="w-3 h-3" />
                <span>Full Visual</span>
              </button>

              <button
                onClick={() => setActiveTab('explanation')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${activeTab === 'explanation'
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200'
                  }`}
              >
                <HelpCircle className="w-3 h-3" />
                <span>Intuition</span>
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
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${speed === s
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

        {/* Intuition & Problem Statement Tab */}
        {activeTab === 'explanation' && (
          <div className="flex-1 p-5 sm:p-6 overflow-y-auto max-w-4xl mx-auto space-y-5">
            {/* 1. Full Problem Statement (Fetched from Python Solution Comment before class Solution) */}
            <div className="p-5 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                  <Code2 className="w-4 h-4 text-brand-400" />
                  <span>Problem Statement</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">
                  problem/{problem.num}
                </span>
              </div>

              <div className="bg-neutral-950/80 p-4 rounded-xl border border-white/5 max-h-80 overflow-y-auto font-mono text-xs text-neutral-300 whitespace-pre-wrap leading-relaxed select-text">
                {renderFormattedText(problem.fullProblemStatement || problem.shortDescription)}
              </div>
            </div>

            {/* 2. Layman's Terms Card (Fetched from visual explanation-panel) */}
            <div className="p-5 rounded-2xl bg-neutral-900/80 border border-brand-500/30 backdrop-blur-md relative overflow-hidden shadow-glow-emerald">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-400 mb-3 pb-2 border-b border-white/5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>How It Works (Layman's Terms)</span>
              </div>

              {problem.laymanHtml ? (
                <div
                  className="layman-content"
                  dangerouslySetInnerHTML={{ __html: problem.laymanHtml }}
                />
              ) : (
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {renderFormattedText(problem.laymanExplanation || problem.shortDescription)}
                </p>
              )}
            </div>

            {/* 3. Complexity Analysis Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 font-mono text-sm font-bold">
                  ⏱️
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    Time Complexity
                  </h4>
                  <div className="text-lg font-mono font-bold text-brand-300 mt-0.5">
                    {problem.timeComplexity}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Optimal algorithm runtime matching the NeetCode visual benchmark.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono text-sm font-bold">
                  💾
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    Space Complexity
                  </h4>
                  <div className="text-lg font-mono font-bold text-cyan-300 mt-0.5">
                    {problem.spaceComplexity}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Auxiliary memory allocated for data structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
