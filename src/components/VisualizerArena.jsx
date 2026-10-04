import React, { useState, useEffect, useMemo } from 'react';
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
  HardDrive,
  SlidersHorizontal,
  HelpCircleIcon,
  CheckCircle2,
  XCircle,
  Activity
} from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import { generateExecutionTrace } from '../engine/stepEngine';

// Archetype Visualizer Components
import ArrayViewer from './visualizers/archetypes/ArrayViewer';
import TwoPointersViewer from './visualizers/archetypes/TwoPointersViewer';
import SlidingWindowViewer from './visualizers/archetypes/SlidingWindowViewer';
import BinarySearchViewer from './visualizers/archetypes/BinarySearchViewer';
import StackViewer from './visualizers/archetypes/StackViewer';
import LinkedListViewer from './visualizers/archetypes/LinkedListViewer';
import TreeViewer from './visualizers/archetypes/TreeViewer';
import MatrixViewer from './visualizers/archetypes/MatrixViewer';
import DpTableViewer from './visualizers/archetypes/DpTableViewer';
import BitRegisterViewer from './visualizers/archetypes/BitRegisterViewer';

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
  onActiveLineChange
}) {
  const [activeTab, setActiveTab] = useState('canvas'); // 'canvas' | 'embed' | 'explanation'
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [isZenMode, setIsZenMode] = useState(false);

  // Custom Input State
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customInputText, setCustomInputText] = useState('');
  const [customTargetText, setCustomTargetText] = useState('');
  const [appliedCustomInput, setAppliedCustomInput] = useState(null);

  // Quiz / Test Understanding State
  const [isQuizMode, setIsQuizMode] = useState(true);
  const [quizAnswerSelected, setQuizAnswerSelected] = useState(null);
  const [quizAnswerStatus, setQuizAnswerStatus] = useState(null); // 'correct' | 'wrong'

  // Generate deterministic trace for current problem and custom inputs
  const { archetype, steps } = useMemo(() => {
    return generateExecutionTrace(problem, appliedCustomInput || {});
  }, [problem, appliedCustomInput]);

  const totalSteps = steps.length;
  const currentStepData = steps[currentStep] || steps[0];

  // Synchronize active code line with side-by-side IDE
  useEffect(() => {
    if (onActiveLineChange && currentStepData?.codeLine) {
      onActiveLineChange(currentStepData.codeLine);
    }
  }, [currentStepData, onActiveLineChange]);

  // Reset steps when problem changes
  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
    setAppliedCustomInput(null);
    setQuizAnswerSelected(null);
    setQuizAnswerStatus(null);
    setShowCustomInput(false);
  }, [problem?.num]);

  // Reset quiz selection on step change
  useEffect(() => {
    setQuizAnswerSelected(null);
    setQuizAnswerStatus(null);
  }, [currentStep]);

  // Auto-play timer
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      // Pause if current step has an unanswered quiz in quiz mode
      if (isQuizMode && currentStepData?.quiz && quizAnswerStatus === null) {
        setIsPlaying(false);
        return;
      }

      const delay = 1400 / speed;
      timer = setTimeout(() => {
        if (currentStep < totalSteps - 1) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, speed, currentStep, totalSteps, isQuizMode, currentStepData, quizAnswerStatus]);

  const handleStepBack = () => {
    setIsPlaying(false);
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleStepForward = () => {
    setIsPlaying(false);
    setCurrentStep((prev) => Math.min(totalSteps - 1, prev + 1));
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

  const handleApplyCustomInput = () => {
    try {
      const custom = {};
      if (customInputText.trim()) {
        if (customInputText.includes('[') || customInputText.includes(',')) {
          custom.nums = customInputText
            .replace(/[\[\]]/g, '')
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
            .map(Number);
        } else if (isNaN(Number(customInputText.trim()))) {
          custom.s = customInputText.trim();
        } else {
          custom.n = Number(customInputText.trim());
        }
      }
      if (customTargetText.trim()) {
        custom.target = Number(customTargetText.trim());
      }
      setAppliedCustomInput(custom);
      setCurrentStep(0);
      setIsPlaying(false);
      setShowCustomInput(false);
      triggerConfetti();
    } catch (e) {
      console.error(e);
    }
  };

  const handleQuizAnswer = (optionIdx) => {
    setQuizAnswerSelected(optionIdx);
    if (optionIdx === currentStepData.quiz.answer) {
      setQuizAnswerStatus('correct');
      triggerConfetti();
    } else {
      setQuizAnswerStatus('wrong');
    }
  };

  // Render archetype visualizer component
  const renderArchetypeVisualizer = () => {
    const commonProps = {
      state: currentStepData?.state,
      problem,
    };

    switch (archetype) {
      case 'two-pointers':
        return <TwoPointersViewer {...commonProps} />;
      case 'sliding-window':
        return <SlidingWindowViewer {...commonProps} />;
      case 'binary-search':
        return <BinarySearchViewer {...commonProps} />;
      case 'stack':
        return <StackViewer {...commonProps} />;
      case 'linked-list':
        return <LinkedListViewer {...commonProps} />;
      case 'trees':
        return <TreeViewer {...commonProps} />;
      case 'matrix':
        return <MatrixViewer {...commonProps} />;
      case 'dp':
        return <DpTableViewer {...commonProps} />;
      case 'bit-manipulation':
        return <BitRegisterViewer {...commonProps} />;
      case 'arrays':
      default:
        return <ArrayViewer {...commonProps} />;
    }
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
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                difficultyColors[problem.difficulty] || difficultyColors.Medium
              }`}
            >
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
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
              {archetype}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-500">
            <span>{problem.category}</span>
          </div>
        </div>

        {/* Row 2: Short problem statement */}
        {problem.shortDescription && (
          <div className="text-xs text-neutral-300 leading-relaxed bg-neutral-900/50 px-3.5 py-2 rounded-xl border border-white/5 backdrop-blur-sm">
            <span className="text-neutral-400 font-medium mr-1.5">Overview:</span>
            {renderFormattedText(problem.shortDescription)}
          </div>
        )}

        {/* Row 3: Action Buttons & Mode Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/5">
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
              <CheckCircle
                className={`w-3.5 h-3.5 ${isSolved ? 'fill-emerald-400 text-neutral-950' : ''}`}
              />
              <span>{isSolved ? 'Solved' : 'Mark Solved'}</span>
            </button>

            {/* Custom Input Toggle */}
            <button
              onClick={() => setShowCustomInput(!showCustomInput)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                showCustomInput || appliedCustomInput
                  ? 'bg-brand-500/20 text-brand-300 border-brand-500/40'
                  : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-white'
              }`}
              title="Test custom test cases"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Custom Input</span>
            </button>

            {/* Test Your Understanding Quiz Mode Toggle */}
            <button
              onClick={() => setIsQuizMode(!isQuizMode)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                isQuizMode
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-glow-indigo'
                  : 'bg-neutral-900 text-neutral-400 border-white/10 hover:text-white'
              }`}
              title="Interactive Quiz Mode"
            >
              <HelpCircleIcon className="w-3.5 h-3.5" />
              <span>Sandbox Quiz {isQuizMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-0.5 rounded-lg bg-neutral-900/90 border border-white/10">
              <button
                onClick={() => setActiveTab('canvas')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
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
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'embed'
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Eye className="w-3 h-3" />
                <span>Legacy D3</span>
              </button>

              <button
                onClick={() => setActiveTab('explanation')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'explanation'
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
              title={isZenMode ? 'Exit Zen Mode' : 'Zen Mode'}
            >
              {isZenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Custom Input Dropdown Bar */}
        <AnimatePresence>
          {showCustomInput && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-neutral-900/90 rounded-xl p-3 border border-brand-500/30 flex flex-wrap items-center gap-3"
            >
              <div className="flex-1 min-w-[200px]">
                <label className="text-[11px] font-mono text-neutral-400 block mb-1">
                  Custom Array / String / Value:
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2, 7, 11, 15 or 'anagram'"
                  value={customInputText}
                  onChange={(e) => setCustomInputText(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="w-32">
                <label className="text-[11px] font-mono text-neutral-400 block mb-1">
                  Target (optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. 9"
                  value={customTargetText}
                  onChange={(e) => setCustomTargetText(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex items-end gap-2 pt-4">
                <button
                  onClick={handleApplyCustomInput}
                  className="px-3.5 py-1.5 rounded-lg bg-brand-500 text-neutral-950 font-bold text-xs shadow-glow-emerald hover:bg-brand-400 transition-all"
                >
                  Simulate
                </button>
                {appliedCustomInput && (
                  <button
                    onClick={() => {
                      setAppliedCustomInput(null);
                      setCurrentStep(0);
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-neutral-800 text-neutral-400 text-xs hover:text-white"
                  >
                    Reset
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Arena Content */}
      <div className="flex-1 relative flex flex-col overflow-hidden bg-grid-pattern">
        {activeTab === 'canvas' && (
          <div className="flex-1 flex flex-col justify-between overflow-y-auto">
            {/* Step Description Banner */}
            <div className="px-6 pt-4">
              <motion.div
                key={currentStepData?.stepIndex}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-neutral-950/70 rounded-xl p-3 border border-white/5 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-neutral-200">
                    {currentStepData?.description}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-500">
                  Line {currentStepData?.codeLine?.python || '—'} (Python) / Line{' '}
                  {currentStepData?.codeLine?.java || '—'} (Java)
                </span>
              </motion.div>
            </div>

            {/* Dynamic Archetype Visualization */}
            <div className="flex-1 flex flex-col justify-center">
              {renderArchetypeVisualizer()}
            </div>

            {/* "Test Your Understanding" Sandbox Quiz Card */}
            {isQuizMode && currentStepData?.quiz && (
              <motion.div
                key={`quiz-${currentStepData.stepIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-6 mb-3 p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 backdrop-blur-md shadow-glow-indigo"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                    <HelpCircleIcon className="w-4 h-4 text-purple-400" />
                    Test Your Understanding: Predict the Next Algorithmic Step
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded">
                    +50 XP
                  </span>
                </div>

                <p className="text-xs text-neutral-200 mb-3 font-medium">
                  {currentStepData.quiz.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStepData.quiz.options.map((option, idx) => {
                    const isSelected = quizAnswerSelected === idx;
                    const isCorrect = idx === currentStepData.quiz.answer;

                    return (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(idx)}
                        disabled={quizAnswerStatus !== null}
                        className={`px-3 py-2 rounded-lg text-xs font-mono text-left border transition-all ${
                          quizAnswerStatus !== null
                            ? isCorrect
                              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold'
                              : isSelected
                              ? 'bg-rose-500/20 border-rose-400 text-rose-300'
                              : 'bg-neutral-900/60 border-white/5 text-neutral-500'
                            : 'bg-neutral-900 border-white/10 hover:border-purple-400 hover:bg-neutral-800 text-neutral-200'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {quizAnswerStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2.5 pt-2 border-t border-purple-500/20 flex items-center gap-2 text-xs font-mono"
                  >
                    {quizAnswerStatus === 'correct' ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Correct!
                      </span>
                    ) : (
                      <span className="text-rose-400 font-bold flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Nice attempt!
                      </span>
                    )}
                    <span className="text-neutral-300">
                      {currentStepData.quiz.explanation}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Time & Space Live Variable State Tracker */}
            {currentStepData?.variables && Object.keys(currentStepData.variables).length > 0 && (
              <div className="mx-6 mb-2 px-3 py-1.5 rounded-lg bg-neutral-950/70 border border-white/5 flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-cyan-400" /> State Tracker:
                </span>
                {Object.entries(currentStepData.variables).map(([k, v]) => (
                  <span
                    key={k}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-300"
                  >
                    <span className="text-neutral-500">{k}:</span>{' '}
                    <span className="text-cyan-300 font-bold">{String(v)}</span>
                  </span>
                ))}
              </div>
            )}

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
                  Step <span className="text-neutral-200 font-bold">{currentStep + 1}</span> of{' '}
                  {totalSteps}
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

        {/* Embed Mode: Loads legacy HTML visualization */}
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
            {/* 1. Full Problem Statement */}
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

            {/* 2. Layman's Terms Card */}
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
