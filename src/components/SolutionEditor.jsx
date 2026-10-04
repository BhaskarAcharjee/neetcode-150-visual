import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Copy,
  Check,
  Columns,
  Square,
  Terminal,
  ChevronDown,
  ChevronUp,
  RotateCw,
  Sparkles,
  CheckCircle2,
  FileCode,
  Layers,
  Cpu
} from 'lucide-react';
import CodeHighlighter from './CodeHighlighter';
import { triggerConfetti } from '../utils/confetti';

function cleanPythonCode(code) {
  if (!code) return '';
  let cleaned = code;
  // 1. Remove docstring above class Solution
  const classIdx = cleaned.indexOf('class Solution');
  if (classIdx !== -1) {
    const prefix = cleaned.slice(0, classIdx);
    const suffix = cleaned.slice(classIdx);
    const cleanedPrefix = prefix
      .replace(/"""[\s\S]*?"""/g, '')
      .replace(/'''[\s\S]*?'''/g, '')
      .trim();
    cleaned = (cleanedPrefix ? cleanedPrefix + '\n\n' : '') + suffix;
  } else {
    cleaned = cleaned
      .replace(/^\s*"""[\s\S]*?"""\s*/g, '')
      .replace(/^\s*'''[\s\S]*?'''\s*/g, '');
  }

  // 2. Convert any docstrings inside Solution into # comments
  const docstringToComments = (match, indent, content) => {
    return content
      .split('\n')
      .map(line => {
        const trimmed = line.trim();
        return trimmed ? `${indent}# ${trimmed}` : `${indent}#`;
      })
      .join('\n');
  };

  cleaned = cleaned.replace(/([ \t]*)"""([\s\S]*?)"""/g, docstringToComments);
  cleaned = cleaned.replace(/([ \t]*)'''([\s\S]*?)'''/g, docstringToComments);

  return cleaned.trim();
}

export default function SolutionEditor({ problem, onSolveSuccess, activeCodeLine }) {
  const [language, setLanguage] = useState('python'); // 'python' | 'java'
  const [isSplitView, setIsSplitView] = useState(false);
  const [copiedLang, setCopiedLang] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);
  const [activeOutputTab, setActiveOutputTab] = useState('console'); // 'console' | 'tests'
  const [showConsole, setShowConsole] = useState(true);

  const rawPython = problem.pythonCode || `# Solution for ${problem.num}: ${problem.name}\nclass Solution:\n    def solve(self):\n        pass`;
  const pythonCode = cleanPythonCode(rawPython);
  const javaCode = problem.javaCode || `// Solution for ${problem.num}: ${problem.name}\nclass Solution {\n    public void solve() {\n    }\n}`;

  const handleCopy = (lang) => {
    const code = lang === 'python' ? pythonCode : javaCode;
    navigator.clipboard.writeText(code);
    setCopiedLang(lang);
    setTimeout(() => setCopiedLang(null), 2000);
  };

  const handleRunCode = () => {
    if (isRunning) return;
    setIsRunning(true);
    setRunSuccess(false);

    // Simulate real execution delay
    setTimeout(() => {
      setIsRunning(false);
      setRunSuccess(true);
      setShowConsole(true);
      triggerConfetti();
      if (onSolveSuccess) {
        onSolveSuccess(problem.num);
      }
    }, 1100);
  };

  return (
    <div className={`flex flex-col bg-surface-card border border-surface-border rounded-2xl overflow-hidden shadow-glass h-full relative ${
      runSuccess ? 'ring-1 ring-emerald-500/50 glow-border-emerald' : ''
    }`}>
      {/* Top IDE Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950/80 border-b border-surface-border backdrop-blur-md select-none">
        {/* Left: Window Controls + Tabs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
          </div>

          {/* Tab buttons */}
          {!isSplitView ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage('python')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  language === 'python'
                    ? 'bg-neutral-900 text-brand-300 font-semibold border border-brand-500/30 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span>solution.py</span>
              </button>

              <button
                onClick={() => setLanguage('java')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  language === 'java'
                    ? 'bg-neutral-900 text-cyan-300 font-semibold border border-cyan-500/30 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span>Solution.java</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 px-2 py-1 bg-neutral-900/70 rounded-md border border-white/5">
              <Columns className="w-3.5 h-3.5 text-brand-400" />
              <span>Split View (Python & Java)</span>
            </div>
          )}
        </div>

        {/* Right: Split View Toggle & Language Pill Toggle */}
        <div className="flex items-center gap-2">
          {/* Side-by-Side Split View Button */}
          <button
            onClick={() => setIsSplitView(!isSplitView)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
              isSplitView
                ? 'bg-brand-500/15 text-brand-300 border-brand-500/40 shadow-glow-emerald'
                : 'bg-neutral-900/80 text-neutral-400 border-white/10 hover:text-neutral-200'
            }`}
            title="Toggle Split-Screen View"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isSplitView ? 'Split On' : 'Split View'}</span>
          </button>

          {/* Quick Language Toggle Pill (if not split) */}
          {!isSplitView && (
            <div className="flex items-center p-0.5 rounded-lg bg-neutral-900/90 border border-white/10 text-xs">
              <button
                onClick={() => setLanguage('python')}
                className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                  language === 'python'
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setLanguage('java')}
                className={`px-2 py-0.5 rounded-md font-semibold transition-all ${
                  language === 'java'
                    ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Java
              </button>
            </div>
          )}

          {/* Copy Button */}
          <button
            onClick={() => handleCopy(language)}
            className="p-1.5 rounded-lg bg-neutral-900/80 border border-white/10 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all"
            title="Copy Code"
          >
            {copiedLang ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="flex-1 flex overflow-hidden relative bg-[#090a0f]">
        {/* Single View Mode */}
        {!isSplitView ? (
          <div className="flex-1 overflow-auto p-4 relative">
            <CodeHighlighter
              code={language === 'python' ? pythonCode : javaCode}
              language={language}
              activeLine={language === 'python' ? activeCodeLine?.python : activeCodeLine?.java}
            />
          </div>
        ) : (
          /* Split View Mode: Side by Side Python and Java */
          <div className="flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10 overflow-hidden">
            {/* Left Column: Python */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="px-3 py-1.5 bg-neutral-950/90 border-b border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 text-yellow-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" /> Python 3.12
                </span>
                <button
                  onClick={() => handleCopy('python')}
                  className="hover:text-white transition-colors"
                >
                  {copiedLang === 'python' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <CodeHighlighter
                  code={pythonCode}
                  language="python"
                  activeLine={activeCodeLine?.python}
                />
              </div>
            </div>

            {/* Right Column: Java */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="px-3 py-1.5 bg-neutral-950/90 border-b border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-orange-400" /> Java 21 LTS
                </span>
                <button
                  onClick={() => handleCopy('java')}
                  className="hover:text-white transition-colors"
                >
                  {copiedLang === 'java' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <CodeHighlighter
                  code={javaCode}
                  language="java"
                  activeLine={activeCodeLine?.java}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Console Drawer */}
      <AnimatePresence>
        {showConsole && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-surface-border bg-neutral-950/90 backdrop-blur-md overflow-hidden"
          >
            {/* Console Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 text-xs">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 font-mono text-neutral-300 font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-brand-400" />
                  Terminal & Test Cases
                </span>

                {runSuccess && (
                  <span className="flex items-center gap-1 font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[11px] animate-pulse">
                    <CheckCircle2 className="w-3 h-3" /> All Tests Passed
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowConsole(false)}
                  className="text-neutral-400 hover:text-white"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Test Results Output */}
            <div className="p-3.5 max-h-36 overflow-y-auto font-mono text-xs space-y-2">
              {runSuccess ? (
                <div>
                  <div className="flex items-center gap-4 text-neutral-300 pb-2 mb-2 border-b border-white/5">
                    <div className="text-emerald-400 font-bold">Status: Accepted</div>
                    <div>Runtime: <span className="text-brand-300 font-bold">42 ms</span> (Beats 97.4%)</div>
                    <div>Memory: <span className="text-cyan-300 font-bold">17.3 MB</span> (Beats 89.1%)</div>
                  </div>

                  {problem.testCases?.map((tc, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 px-2 rounded bg-neutral-900/60 border border-white/5">
                      <span className="text-neutral-400">Case {idx + 1}: <span className="text-neutral-200">{tc.input}</span></span>
                      <span className="text-emerald-400 flex items-center gap-1 font-bold">
                        Output: {tc.expected} ✅
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-neutral-400 py-1">
                  Ready. Click <span className="text-brand-400 font-bold font-sans">"Run Code"</span> to compile and execute against NeetCode test cases.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editor Action Bottom Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950 border-t border-surface-border">
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
        </div>

        {/* Run Button with Gamified Micro-interactions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isRunning
                ? 'bg-brand-500/50 text-neutral-950 cursor-wait'
                : 'bg-brand-500 hover:bg-brand-400 text-neutral-950 shadow-glow-emerald hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {isRunning ? (
              <>
                <RotateCw className="w-3.5 h-3.5 animate-spin" />
                <span>Evaluating...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-neutral-950" />
                <span>Run Code</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
