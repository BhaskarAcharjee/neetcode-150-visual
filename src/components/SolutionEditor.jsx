import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Copy,
  Check,
  Columns,
  Terminal,
  ChevronDown,
  ChevronUp,
  RotateCw,
  CheckCircle2,
  XCircle,
  FileCode,
  RotateCcw,
  Edit3,
  Code2,
  Download,
  AlertTriangle,
  Plus,
  Trash2,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import CodeHighlighter from './CodeHighlighter';
import { triggerConfetti } from '../utils/confetti';
import {
  LANGUAGES,
  getProblemSolutions,
  generateStarterCode,
} from '../utils/solutionParser';
import { runTestCases } from '../utils/codeCompiler';

export default function SolutionEditor({ problem, onSolveSuccess, activeCodeLine }) {
  // Language selection: 'python' | 'java' | 'cpp'
  const [language, setLanguage] = useState('python');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Available solution files for the current problem and language
  const solutions = useMemo(() => {
    return getProblemSolutions(problem, language);
  }, [problem, language]);

  // Selected solution file ID: 'manual' (solution.py/Solution.java) | 'solution1' | 'solution2' | ...
  const [selectedFileId, setSelectedFileId] = useState('manual');

  // Ensure selectedFileId exists in solutions; default to first if not found
  useEffect(() => {
    const exists = solutions.some((s) => s.id === selectedFileId);
    if (!exists && solutions.length > 0) {
      setSelectedFileId(solutions[0].id);
    }
  }, [solutions, selectedFileId]);

  const activeSolution = useMemo(() => {
    return solutions.find((s) => s.id === selectedFileId) || solutions[0] || {};
  }, [solutions, selectedFileId]);

  // Manual code state (persisted per problem and language in localStorage)
  const [manualCode, setManualCode] = useState(() => {
    const key = `neetcode_code_${problem.num}_${language}`;
    const saved = localStorage.getItem(key);
    return saved || generateStarterCode(problem, language);
  });

  // When problem or language changes, sync manual code state
  useEffect(() => {
    const key = `neetcode_code_${problem.num}_${language}`;
    const saved = localStorage.getItem(key);
    setManualCode(saved || generateStarterCode(problem, language));
  }, [problem.num, language]);

  // Save manual code changes to localStorage
  const handleManualCodeChange = (newCode) => {
    setManualCode(newCode);
    const key = `neetcode_code_${problem.num}_${language}`;
    try {
      localStorage.setItem(key, newCode);
    } catch (e) {}
  };

  // Split View mode
  const [isSplitView, setIsSplitView] = useState(false);
  const [copied, setCopied] = useState(false);

  // Compiler & Test Runner states
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [activeConsoleTab, setActiveConsoleTab] = useState('tests'); // 'tests' | 'console'
  const [selectedTestCaseIdx, setSelectedTestCaseIdx] = useState(0);
  const [showConsole, setShowConsole] = useState(true);

  // Custom Test Cases
  const [customInputText, setCustomInputText] = useState('');
  const [customExpectedText, setCustomExpectedText] = useState('');
  const [isAddingCustomCase, setIsAddingCustomCase] = useState(false);

  // Dropdown ref for outside click
  const langDropdownRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Reset execution result on problem change
  useEffect(() => {
    setExecutionResult(null);
  }, [problem.num]);

  // Copy code handler
  const handleCopy = (codeToCopy) => {
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Load Reference Solution into Manual Editor
  const handleLoadReference = () => {
    const refSol = solutions.find((s) => s.id === 'solution1') || solutions[1];
    if (refSol && refSol.code) {
      handleManualCodeChange(refSol.code);
      setSelectedFileId('manual');
    }
  };

  // Reset to Starter Code
  const handleResetToStarter = () => {
    const starter = generateStarterCode(problem, language);
    handleManualCodeChange(starter);
    setExecutionResult(null);
  };

  // Smart Indentation & Tab key interception for textarea
  const handleKeyDown = (e) => {
    // Compile & Run on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRunCode();
      return;
    }

    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;

      // Insert 4 spaces
      const newVal = val.substring(0, start) + '    ' + val.substring(end);
      handleManualCodeChange(newVal);

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      }, 0);
    } else if (e.key === 'Enter') {
      // Auto-indent matching previous line
      const textarea = textareaRef.current;
      if (!textarea) return;

      const pos = textarea.selectionStart;
      const val = textarea.value;
      const lineStart = val.lastIndexOf('\n', pos - 1) + 1;
      const line = val.substring(lineStart, pos);
      const match = line.match(/^(\s+)/);
      let indent = match ? match[1] : '';

      // If line ends with ':' or '{', increase indent by 4 spaces
      if (line.trim().endsWith(':') || line.trim().endsWith('{')) {
        indent += '    ';
      }

      if (indent.length > 0) {
        e.preventDefault();
        const newVal = val.substring(0, pos) + '\n' + indent + val.substring(pos);
        handleManualCodeChange(newVal);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = pos + 1 + indent.length;
        }, 0);
      }
    }
  };

  // Run Code / Compiler action
  const handleRunCode = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setShowConsole(true);

    const codeToExecute = activeSolution.isManual ? manualCode : activeSolution.code;

    // Simulate realistic compilation latency
    setTimeout(async () => {
      const res = await runTestCases({
        code: codeToExecute,
        language,
        problem,
        isManual: activeSolution.isManual,
      });

      setIsRunning(false);
      setExecutionResult(res);

      if (res.success) {
        triggerConfetti();
        if (onSolveSuccess) {
          onSolveSuccess(problem.num);
        }
      }
    }, 700);
  };

  // Manual line numbers generator
  const manualLinesCount = useMemo(() => {
    return (manualCode || '').split('\n').length;
  }, [manualCode]);

  return (
    <div
      className={`flex flex-col bg-surface-card border border-surface-border rounded-2xl overflow-hidden shadow-glass h-full relative ${
        executionResult?.success ? 'ring-1 ring-emerald-500/50 glow-border-emerald' : ''
      }`}
    >
      {/* Top IDE Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-neutral-950/90 border-b border-surface-border backdrop-blur-md select-none relative z-30">
        {/* Left: Language Selector + Quick Pills + Solution File Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* OS Window Dots */}
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* Language Selector Dropdown (Unclipped & Accessible) */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-white/10 hover:border-brand-500/40 text-xs font-semibold text-neutral-200 transition-all shadow-inner group"
              title="Change Programming Language"
            >
              <Code2 className="w-3.5 h-3.5 text-brand-400" />
              <span className="capitalize">
                {language === 'python' ? 'Python' : language === 'java' ? 'Java' : 'C++'}
              </span>
              <ChevronDown className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors" />
            </button>

            {/* Dropdown Menu */}
            {isLangDropdownOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-48 bg-neutral-900/95 border border-white/15 rounded-xl shadow-2xl p-1 z-50 font-sans backdrop-blur-xl">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.id}
                    disabled={!lang.available}
                    onClick={() => {
                      if (lang.available) {
                        setLanguage(lang.id);
                        setSelectedFileId('manual');
                        setIsLangDropdownOpen(false);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all text-left ${
                      language === lang.id
                        ? 'bg-brand-500/20 text-brand-300 font-semibold'
                        : lang.available
                        ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                        : 'text-neutral-500 cursor-not-allowed bg-neutral-950/40'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          lang.id === 'python'
                            ? 'bg-yellow-400'
                            : lang.id === 'java'
                            ? 'bg-orange-400'
                            : 'bg-neutral-600'
                        }`}
                      />
                      <span>{lang.name}</span>
                    </div>

                    {!lang.available ? (
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-white/5">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-[10px] text-neutral-500 font-mono">
                        {lang.ext}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Language Toggle Pills */}
          <div className="flex items-center p-0.5 rounded-lg bg-neutral-900 border border-white/10 text-xs">
            <button
              onClick={() => {
                setLanguage('python');
                setSelectedFileId('manual');
              }}
              className={`px-2 py-0.5 rounded-md font-semibold font-mono text-[11px] transition-all flex items-center gap-1 ${
                language === 'python'
                  ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Switch to Python"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span>Python</span>
            </button>

            <button
              onClick={() => {
                setLanguage('java');
                setSelectedFileId('manual');
              }}
              className={`px-2 py-0.5 rounded-md font-semibold font-mono text-[11px] transition-all flex items-center gap-1 ${
                language === 'java'
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
              title="Switch to Java"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span>Java</span>
            </button>

            <button
              disabled
              className="px-2 py-0.5 rounded-md font-mono text-[11px] text-neutral-500 cursor-not-allowed opacity-60 flex items-center gap-1"
              title="C++ Coming Soon"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
              <span>C++</span>
            </button>
          </div>

          <div className="h-4 w-[1px] bg-white/10 mx-0.5 hidden sm:block" />

          {/* Solution File Tabs: solution.py (Manual), solution1.py, solution2.py... */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {solutions.map((sol) => {
              const isSelected = selectedFileId === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setSelectedFileId(sol.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex-shrink-0 ${
                    isSelected
                      ? 'bg-neutral-900 text-brand-300 font-bold border border-brand-500/30 shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
                  }`}
                  title={sol.tag}
                >
                  {sol.isManual ? (
                    <Edit3 className="w-3 h-3 text-cyan-400" />
                  ) : (
                    <FileCode className="w-3 h-3 text-neutral-500" />
                  )}
                  <span>{sol.label}</span>
                  {sol.isManual && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Actions Bar */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* If on manual editor: Reset & Load Reference Actions */}
          {activeSolution.isManual && (
            <>
              <button
                onClick={handleLoadReference}
                className="hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-900/80 border border-white/5 hover:border-brand-500/30 text-[11px] text-neutral-300 hover:text-brand-300 transition-all font-mono"
                title="Copy solution1.py into editor to experiment"
              >
                <Download className="w-3 h-3 text-brand-400" />
                <span>Load Ref</span>
              </button>

              <button
                onClick={handleResetToStarter}
                className="p-1 rounded-lg text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                title="Reset to Starter Boilerplate"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {/* Copy Button */}
          <button
            onClick={() => handleCopy(activeSolution.isManual ? manualCode : activeSolution.code)}
            className="p-1.5 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Editor Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative bg-[#090a0f]">
        {/* If C++ Selected (Unavailable state) */}
        {language === 'cpp' ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-neutral-950/60">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <Code2 className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-neutral-100 mb-1">
              C++20 Implementation Coming Soon
            </h4>
            <p className="text-xs text-neutral-400 max-w-sm mb-4 leading-relaxed font-sans">
              High-performance C++20 standard template library solutions are currently under construction. Please use Python or Java in the meantime.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('python')}
                className="px-3 py-1.5 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-xs font-semibold hover:bg-yellow-500/30 transition-colors"
              >
                Switch to Python
              </button>
              <button
                onClick={() => setLanguage('java')}
                className="px-3 py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold hover:bg-orange-500/30 transition-colors"
              >
                Switch to Java
              </button>
            </div>
          </div>
        ) : activeSolution.isManual ? (
          /* ======================================================== */
          /* IN-BUILT CODE EDITOR (solution.py / Solution.java)       */
          /* ======================================================== */
          <div className="flex-1 flex flex-col overflow-hidden relative">
            {/* Editor Top Info Bar */}
            <div className="px-3 py-1 bg-neutral-950/60 border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Edit3 className="w-3 h-3 text-cyan-400" />
                <span>Interactive Code Workspace (Editable)</span>
              </span>
              <span className="text-neutral-500">
                {manualLinesCount} lines · Tab = 4 spaces · Ctrl+Enter to Run
              </span>
            </div>

            {/* Line Numbers + Textarea Container */}
            <div className="flex-1 flex overflow-hidden relative font-mono text-[13px]">
              {/* Line Numbers Column */}
              <div className="w-10 bg-neutral-950/80 border-r border-white/5 py-3 pr-2 pl-1 select-none text-right text-neutral-600 text-xs overflow-hidden leading-[1.625rem]">
                {Array.from({ length: manualLinesCount }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Editable Textarea */}
              <div className="flex-1 relative overflow-auto">
                <textarea
                  ref={textareaRef}
                  value={manualCode}
                  onChange={(e) => handleManualCodeChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck="false"
                  placeholder="Write your solution here..."
                  className="w-full h-full bg-transparent text-neutral-100 p-3 leading-[1.625rem] resize-none outline-none font-mono text-[13px] whitespace-pre tab-4 selection:bg-brand-500/30"
                  style={{ tabSize: 4 }}
                />
              </div>
            </div>
          </div>
        ) : (
          /* ======================================================== */
          /* REFERENCE EDITORIAL SOLUTION (solution1.py, etc.)        */
          /* ======================================================== */
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-3 py-1 bg-neutral-950/60 border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-amber-300">
                <FileCode className="w-3 h-3 text-amber-400" />
                <span>{activeSolution.tag} (Reference Solution · Read-Only)</span>
              </span>
              <button
                onClick={handleLoadReference}
                className="text-brand-400 hover:text-brand-300 hover:underline flex items-center gap-1"
              >
                <span>Edit in {activeSolution.filename.replace(/\d+/, '')}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 relative">
              <CodeHighlighter
                code={activeSolution.code}
                language={language}
                activeLine={
                  language === 'python' ? activeCodeLine?.python : activeCodeLine?.java
                }
              />
            </div>
          </div>
        )}
      </div>

      {/* Compiler & Test Execution Console Drawer */}
      <AnimatePresence>
        {showConsole && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-surface-border bg-neutral-950/95 backdrop-blur-md overflow-hidden flex flex-col flex-shrink-0"
          >
            {/* Console Header Bar */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 text-xs bg-neutral-950">
              <div className="flex items-center gap-2">
                {/* Tab: Test Cases */}
                <button
                  onClick={() => setActiveConsoleTab('tests')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                    activeConsoleTab === 'tests'
                      ? 'bg-neutral-800 text-brand-300 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                  <span>Test Cases ({problem.testCases?.length || 0})</span>
                </button>

                {/* Tab: Terminal / Stdout */}
                <button
                  onClick={() => setActiveConsoleTab('console')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                    activeConsoleTab === 'console'
                      ? 'bg-neutral-800 text-cyan-300 font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Compiler Terminal</span>
                </button>

                {/* Status Badge */}
                {executionResult && (
                  <span
                    className={`flex items-center gap-1 font-semibold px-2 py-0.5 rounded text-[11px] font-mono border ${
                      executionResult.success
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                    }`}
                  >
                    {executionResult.success ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Accepted ({executionResult.passedTests}/{executionResult.totalTests})</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3 h-3" />
                        <span>{executionResult.statusText}</span>
                      </>
                    )}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowConsole(false)}
                  className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800"
                  title="Collapse Console"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Console Body Area */}
            <div className="p-3 max-h-48 min-h-[120px] overflow-y-auto font-mono text-xs">
              {activeConsoleTab === 'tests' ? (
                /* ======================================================== */
                /* TAB 1: TEST CASES VIEW                                  */
                /* ======================================================== */
                <div className="space-y-3">
                  {/* Test Cases Pill Bar */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                    {problem.testCases?.map((_, idx) => {
                      const caseRes = executionResult?.results?.[idx];
                      const isSelected = selectedTestCaseIdx === idx;

                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedTestCaseIdx(idx)}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all border ${
                            isSelected
                              ? 'bg-neutral-800 border-white/20 text-white font-bold'
                              : 'bg-neutral-900/60 border-white/5 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {caseRes ? (
                            caseRes.passed ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            )
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                          )}
                          <span>Case {idx + 1}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Test Case Details */}
                  {problem.testCases?.[selectedTestCaseIdx] && (
                    <div className="p-2.5 rounded-xl bg-neutral-900/70 border border-white/5 space-y-2">
                      <div>
                        <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider block">
                          Input
                        </span>
                        <div className="text-neutral-200 mt-0.5 bg-neutral-950 p-2 rounded-lg border border-white/5 select-text font-mono">
                          {problem.testCases[selectedTestCaseIdx].input}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider block">
                            Expected Output
                          </span>
                          <div className="text-emerald-400 mt-0.5 bg-neutral-950 p-2 rounded-lg border border-white/5 select-text font-mono">
                            {problem.testCases[selectedTestCaseIdx].expected}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider block">
                            Your Output
                          </span>
                          <div
                            className={`mt-0.5 bg-neutral-950 p-2 rounded-lg border border-white/5 select-text font-mono ${
                              executionResult?.results?.[selectedTestCaseIdx]?.passed
                                ? 'text-emerald-400'
                                : executionResult?.results?.[selectedTestCaseIdx]
                                ? 'text-rose-400'
                                : 'text-neutral-500'
                            }`}
                          >
                            {executionResult?.results?.[selectedTestCaseIdx]?.actual ||
                              'Run code to inspect output'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* ======================================================== */
                /* TAB 2: TERMINAL / STDOUT LOGS VIEW                      */
                /* ======================================================== */
                <div className="space-y-1 text-neutral-300 font-mono text-[11px] leading-relaxed select-text">
                  {executionResult ? (
                    executionResult.stdout.map((line, idx) => {
                      const isError = line.includes('Error') || line.includes('FAIL');
                      const isPass = line.includes('PASS') || line.includes('ACCEPTED');
                      return (
                        <div
                          key={idx}
                          className={`${
                            isError
                              ? 'text-rose-400'
                              : isPass
                              ? 'text-emerald-400 font-semibold'
                              : 'text-neutral-300'
                          }`}
                        >
                          {line}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-neutral-500 py-2">
                      [Compiler Ready] Press <kbd className="px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300">Ctrl+Enter</kbd> or click <strong>Run Code</strong> to compile and execute against NeetCode test cases.
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editor Action Bottom Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-neutral-950 border-t border-surface-border">
        <div className="flex items-center gap-2">
          {!showConsole && (
            <button
              onClick={() => setShowConsole(true)}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-200 py-1 px-2 rounded hover:bg-neutral-900 transition-all font-mono"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Show Console</span>
              <ChevronUp className="w-3 h-3" />
            </button>
          )}

          {executionResult && (
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-neutral-400">
              <span>Runtime: <strong className="text-brand-300">{executionResult.runtimeMs} ms</strong></span>
              <span>Memory: <strong className="text-cyan-300">{executionResult.memoryMb}</strong></span>
            </div>
          )}
        </div>

        {/* Compile & Run Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunCode}
            disabled={isRunning || language === 'cpp'}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
              isRunning || language === 'cpp'
                ? 'bg-brand-500/50 text-neutral-950 cursor-not-allowed opacity-60'
                : 'bg-brand-500 hover:bg-brand-400 text-neutral-950 shadow-glow-emerald hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {isRunning ? (
              <>
                <RotateCw className="w-3.5 h-3.5 animate-spin" />
                <span>Compiling & Running...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-neutral-950" />
                <span>Run Code</span>
                <kbd className="hidden md:inline text-[9px] opacity-75 font-mono px-1 rounded bg-black/20">
                  Ctrl+↵
                </kbd>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
