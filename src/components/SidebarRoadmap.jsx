import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Flame,
  Trophy,
  Filter,
  Hash,
  ArrowLeftRight,
  Columns,
  Layers,
  Link2,
  GitFork,
  Triangle,
  Share2,
  TrendingUp,
  Zap,
  RotateCcw,
  Compass,
  Calendar,
  Type,
  Sparkles,
  Check,
  X
} from 'lucide-react';
import { CATEGORIES } from '../data/problems';
import { triggerMiniSparkle } from '../utils/confetti';

const ICON_MAP = {
  Hash,
  ArrowLeftRight,
  Columns,
  Layers,
  Search,
  Link2,
  GitFork,
  Triangle,
  Share2,
  TrendingUp,
  Zap,
  RotateCcw,
  Compass,
  Calendar,
  Type,
  Sparkles
};

export default function SidebarRoadmap({
  problems,
  selectedProblem,
  onSelectProblem,
  solvedSet,
  onToggleSolved,
  streak = 7,
  xp = 1450,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('ALL'); // 'ALL' | 'Easy' | 'Medium' | 'Hard'
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'SOLVED' | 'UNSOLVED'
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const toggleCategory = (catName) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [catName]: !prev[catName]
    }));
  };

  // Filter problems by search query, difficulty, and solved status
  const filteredProblems = useMemo(() => {
    return problems.filter(p => {
      // Search
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.num.includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchesSearch) return false;

      // Difficulty
      if (difficultyFilter !== 'ALL' && p.difficulty !== difficultyFilter) return false;

      // Status
      const isSolved = solvedSet.has(p.num);
      if (statusFilter === 'SOLVED' && !isSolved) return false;
      if (statusFilter === 'UNSOLVED' && isSolved) return false;

      return true;
    });
  }, [problems, searchTerm, difficultyFilter, statusFilter, solvedSet]);

  // Group filtered problems by category
  const groupedCategories = useMemo(() => {
    const map = {};
    CATEGORIES.forEach(cat => {
      map[cat.name] = {
        meta: cat,
        problems: [],
        total: 0,
        solved: 0,
      };
    });

    // Count totals first
    problems.forEach(p => {
      if (map[p.category]) {
        map[p.category].total++;
        if (solvedSet.has(p.num)) {
          map[p.category].solved++;
        }
      }
    });

    // Assign filtered
    filteredProblems.forEach(p => {
      if (map[p.category]) {
        map[p.category].problems.push(p);
      }
    });

    return Object.entries(map).filter(([_, data]) => data.problems.length > 0 || searchTerm === '');
  }, [problems, filteredProblems, solvedSet, searchTerm]);

  const totalSolved = solvedSet.size;
  const progressPercent = Math.round((totalSolved / problems.length) * 100) || 0;

  const handleCheckClick = (e, num) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    triggerMiniSparkle(rect);
    onToggleSolved(num);
  };

  return (
    <aside className="w-80 lg:w-96 h-full flex flex-col bg-surface-card border-r border-surface-border select-none overflow-hidden">
      {/* Gamification Header */}
      <div className="p-4 border-b border-surface-border bg-neutral-950/60 backdrop-blur-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 p-0.5 shadow-glow-emerald">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-brand-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-sm text-neutral-100 block tracking-tight">NeetCode 150</span>
              <span className="text-[11px] text-neutral-400 font-mono">Interactive Mastery</span>
            </div>
          </div>

          {/* Daily Streak Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold font-mono">
            <Flame className="w-4 h-4 fill-orange-400 text-orange-400 animate-pulse" />
            <span>{streak}d Streak</span>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="bg-neutral-900/80 p-3 rounded-xl border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-400 font-medium">Roadmap Progress</span>
            <span className="font-mono font-bold text-brand-400">
              {totalSolved} <span className="text-neutral-500 font-normal">/ {problems.length} ({progressPercent}%)</span>
            </span>
          </div>

          <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden border border-white/5 p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-500 via-teal-400 to-cyan-400 rounded-full shadow-glow-emerald"
              animate={{ width: `${progressPercent}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
          </div>

          {/* XP & Level subtitle */}
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-0.5">
            <span className="flex items-center gap-1 text-yellow-400">
              <Trophy className="w-3 h-3" /> Lv. {Math.floor(xp / 250) + 1} Architect
            </span>
            <span>{xp} XP</span>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="p-3 border-b border-surface-border bg-neutral-950/40 space-y-2">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search problems, #num, tags..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-neutral-900/90 border border-white/10 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all font-mono"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] font-medium no-scrollbar">
          {['ALL', 'Easy', 'Medium', 'Hard'].map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                difficultyFilter === diff
                  ? 'bg-neutral-800 text-white font-semibold border border-white/15 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 bg-neutral-900/50 border border-white/5'
              }`}
            >
              {diff}
            </button>
          ))}

          <div className="h-3 w-[1px] bg-white/10 mx-0.5" />

          {/* Solved Filter */}
          <button
            onClick={() => setStatusFilter(statusFilter === 'SOLVED' ? 'ALL' : 'SOLVED')}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
              statusFilter === 'SOLVED'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-neutral-400 hover:text-neutral-200 bg-neutral-900/50 border border-white/5'
            }`}
          >
            <CheckCircle2 className="w-3 h-3" />
            <span>Solved</span>
          </button>
        </div>
      </div>

      {/* Accordion Categories List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
        {groupedCategories.map(([catName, data]) => {
          const isCollapsed = collapsedCategories[catName];
          const IconComponent = ICON_MAP[data.meta?.icon] || Hash;
          const catPercent = data.total > 0 ? Math.round((data.solved / data.total) * 100) : 0;
          const isComplete = data.solved > 0 && data.solved === data.total;

          return (
            <div
              key={catName}
              className="rounded-xl border border-surface-border bg-neutral-950/40 overflow-hidden transition-all duration-200"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleCategory(catName)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`p-1.5 rounded-lg bg-neutral-900 border border-white/5 text-neutral-300 ${isComplete ? 'text-emerald-400 border-emerald-500/30' : ''}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-semibold text-neutral-200 block truncate">
                      {catName}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {data.solved} of {data.total} completed ({catPercent}%)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Category Progress Pill */}
                  <div className="w-12 h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                    <div
                      className={`h-full rounded-full ${isComplete ? 'bg-emerald-400' : 'bg-brand-500'}`}
                      style={{ width: `${catPercent}%` }}
                    />
                  </div>
                  {isCollapsed ? (
                    <ChevronRight className="w-4 h-4 text-neutral-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500" />
                  )}
                </div>
              </button>

              {/* Problem Items List */}
              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-white/5 divide-y divide-white/[0.03]"
                  >
                    {data.problems.map((prob) => {
                      const isSelected = selectedProblem?.num === prob.num;
                      const isProbSolved = solvedSet.has(prob.num);

                      const diffColor =
                        prob.difficulty === 'Easy'
                          ? 'text-emerald-400'
                          : prob.difficulty === 'Medium'
                          ? 'text-amber-400'
                          : 'text-rose-400';

                      return (
                        <div
                          key={prob.num}
                          onClick={() => onSelectProblem(prob)}
                          className={`flex items-center justify-between px-3 py-2.5 cursor-pointer text-xs transition-all group ${
                            isSelected
                              ? 'bg-brand-500/10 border-l-2 border-brand-400 text-neutral-100 font-medium'
                              : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.02]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate pr-2">
                            {/* Checkbox */}
                            <button
                              onClick={(e) => handleCheckClick(e, prob.num)}
                              className="flex-shrink-0 text-neutral-600 hover:text-emerald-400 transition-colors"
                            >
                              {isProbSolved ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-500/20" />
                              ) : (
                                <Circle className="w-4 h-4" />
                              )}
                            </button>

                            <span className="font-mono text-[11px] text-neutral-500 font-semibold group-hover:text-brand-400 transition-colors">
                              #{prob.num}
                            </span>
                            <span className={`truncate ${isProbSolved ? 'line-through text-neutral-500' : ''}`}>
                              {prob.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className={`font-mono text-[10px] font-semibold ${diffColor}`}>
                              {prob.difficulty[0]}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
