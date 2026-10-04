import React, { useState, useEffect, useMemo } from 'react';
import DashboardLayout from './components/DashboardLayout';
import ResetProgressModal from './components/ResetProgressModal';
import { ALL_PROBLEMS } from './data/problems';
import {
  getStreakState,
  recordStreakActivity,
  calculateBaseXp,
  getLevelInfo,
  resetAllProgress,
} from './utils/gamification';

export default function App() {
  const [problems] = useState(ALL_PROBLEMS);
  const [selectedProblem, setSelectedProblem] = useState(() => ALL_PROBLEMS[0]);

  // Persistent Solved State
  const [solvedSet, setSolvedSet] = useState(() => {
    try {
      const saved = localStorage.getItem('neetcode_solved');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
    return new Set();
  });

  // Streak state: { streak, isActiveToday, lastActiveDate }
  const [streakState, setStreakState] = useState(() => getStreakState());

  // Bonus XP (for challenges/milestones, initialized to 0)
  const [bonusXp, setBonusXp] = useState(() => {
    try {
      const saved = localStorage.getItem('neetcode_bonus_xp');
      if (saved) return parseInt(saved, 10);
    } catch (e) {}
    return 0;
  });

  // Reset Progress confirmation modal state
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Compute real XP dynamically from solved problems + bonus XP
  const xp = useMemo(() => {
    return calculateBaseXp(solvedSet, problems) + bonusXp;
  }, [solvedSet, problems, bonusXp]);

  const levelInfo = useMemo(() => getLevelInfo(xp), [xp]);

  // Sync solvedSet to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('neetcode_solved', JSON.stringify(Array.from(solvedSet)));
    } catch (e) {}
  }, [solvedSet]);

  // Sync XP to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('neetcode_xp', xp.toString());
      localStorage.setItem('neetcode_bonus_xp', bonusXp.toString());
    } catch (e) {}
  }, [xp, bonusXp]);

  const handleToggleSolved = (num) => {
    setSolvedSet((prev) => {
      const next = new Set(prev);
      if (next.has(num)) {
        next.delete(num);
      } else {
        next.add(num);
        // Mark streak active today upon solving
        const updatedStreak = recordStreakActivity();
        setStreakState(updatedStreak);
      }
      return next;
    });
  };

  const handleSolveSuccess = (num) => {
    if (!solvedSet.has(num)) {
      handleToggleSolved(num);
    } else {
      // Practicing already solved problem also maintains/extends streak
      const updatedStreak = recordStreakActivity();
      setStreakState(updatedStreak);
    }
  };

  const handleConfirmReset = () => {
    resetAllProgress();
    setSolvedSet(new Set());
    setBonusXp(0);
    setStreakState({ streak: 0, isActiveToday: false, lastActiveDate: null });
  };

  return (
    <>
      <DashboardLayout
        problems={problems}
        selectedProblem={selectedProblem}
        onSelectProblem={setSelectedProblem}
        solvedSet={solvedSet}
        onToggleSolved={handleToggleSolved}
        streak={streakState.streak}
        isActiveToday={streakState.isActiveToday}
        xp={xp}
        levelInfo={levelInfo}
        onSolveSuccess={handleSolveSuccess}
        onOpenResetModal={() => setIsResetModalOpen(true)}
      />

      <ResetProgressModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirmReset={handleConfirmReset}
        solvedCount={solvedSet.size}
        streak={streakState.streak}
        xp={xp}
        level={levelInfo.level}
      />
    </>
  );
}
