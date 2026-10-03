import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import SidebarRoadmap from './SidebarRoadmap';
import VisualizerArena from './VisualizerArena';
import SolutionEditor from './SolutionEditor';
import CommandPaletteModal from './CommandPaletteModal';

export default function DashboardLayout({
  problems,
  selectedProblem,
  onSelectProblem,
  solvedSet,
  onToggleSolved,
  streak,
  xp,
  onSolveSuccess
}) {
  const [layoutMode, setLayoutMode] = useState('split'); // 'split' | 'visualizer' | 'editor'
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isSolved = solvedSet.has(selectedProblem?.num);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#08090d] text-neutral-100 overflow-hidden select-none font-sans">
      {/* Top Navigation Bar */}
      <Navbar
        streak={streak}
        xp={xp}
        solvedCount={solvedSet.size}
        totalCount={problems.length}
        layoutMode={layoutMode}
        setLayoutMode={setLayoutMode}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Desktop Collapsible Left Sidebar */}
        <div
          className={`hidden md:flex transition-all duration-300 relative ${
            isSidebarOpen ? 'w-80 lg:w-96' : 'w-0'
          }`}
        >
          <div className="w-80 lg:w-96 h-full overflow-hidden flex flex-col">
            <SidebarRoadmap
              problems={problems}
              selectedProblem={selectedProblem}
              onSelectProblem={onSelectProblem}
              solvedSet={solvedSet}
              onToggleSolved={onToggleSolved}
              streak={streak}
              xp={xp}
            />
          </div>

          {/* Sidebar Toggle Edge Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
            title={isSidebarOpen ? 'Collapse Roadmap' : 'Expand Roadmap'}
          >
            {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Sidebar Overlay Drawer */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex">
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            <div className="relative w-80 max-w-[85vw] h-full z-50 bg-neutral-950 flex flex-col">
              <div className="flex items-center justify-between p-3 border-b border-white/10">
                <span className="font-bold text-sm text-neutral-200">NeetCode 150 Roadmap</span>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <SidebarRoadmap
                  problems={problems}
                  selectedProblem={selectedProblem}
                  onSelectProblem={(p) => {
                    onSelectProblem(p);
                    setIsMobileSidebarOpen(false);
                  }}
                  solvedSet={solvedSet}
                  onToggleSolved={onToggleSolved}
                  streak={streak}
                  xp={xp}
                />
              </div>
            </div>
          </div>
        )}

        {/* Center / Right Content Arena */}
        <main className="flex-1 flex flex-col p-2.5 sm:p-4 gap-3 overflow-hidden bg-dots-pattern">
          {/* Mobile Top Roadmap Bar Toggle */}
          <div className="flex md:hidden items-center justify-between px-2 py-1">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-xs font-semibold text-neutral-200"
            >
              <Menu className="w-4 h-4 text-brand-400" />
              <span>Browse Problems ({problems.length})</span>
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-400"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Main Layout Area based on layoutMode */}
          <div className="flex-1 flex flex-col xl:flex-row gap-3 overflow-hidden">
            {/* Visualizer Arena */}
            {(layoutMode === 'split' || layoutMode === 'visualizer') && (
              <div
                className={`transition-all duration-300 ${
                  layoutMode === 'visualizer'
                    ? 'w-full h-full'
                    : 'flex-1 min-h-[360px] xl:w-7/12'
                }`}
              >
                <VisualizerArena
                  problem={selectedProblem}
                  isSolved={isSolved}
                  onToggleSolved={onToggleSolved}
                />
              </div>
            )}

            {/* Solution Editor */}
            {(layoutMode === 'split' || layoutMode === 'editor') && (
              <div
                className={`transition-all duration-300 ${
                  layoutMode === 'editor'
                    ? 'w-full h-full'
                    : 'flex-1 min-h-[360px] xl:w-5/12'
                }`}
              >
                <SolutionEditor
                  problem={selectedProblem}
                  onSolveSuccess={onSolveSuccess}
                />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPaletteModal
        isOpen={isSearchOpen}
        onClose={setIsSearchOpen}
        problems={problems}
        onSelectProblem={onSelectProblem}
      />
    </div>
  );
}
