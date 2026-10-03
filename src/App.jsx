import React, { useState, useEffect } from 'react';
import DashboardLayout from './components/DashboardLayout';
import { ALL_PROBLEMS } from './data/problems';

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
    // Default initial sample solved problems for instant satisfaction
    return new Set(['0001', '0217', '0242', '0125']);
  });

  // Persistent XP & Streak
  const [xp, setXp] = useState(() => {
    try {
      const saved = localStorage.getItem('neetcode_xp');
      if (saved) return parseInt(saved, 10);
    } catch (e) {}
    return 1450;
  });

  const [streak, setStreak] = useState(() => {
    try {
      const saved = localStorage.getItem('neetcode_streak');
      if (saved) return parseInt(saved, 10);
    } catch (e) {}
    return 7;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('neetcode_solved', JSON.stringify(Array.from(solvedSet)));
    } catch (e) {}
  }, [solvedSet]);

  useEffect(() => {
    try {
      localStorage.setItem('neetcode_xp', xp.toString());
    } catch (e) {}
  }, [xp]);

  const handleToggleSolved = (num) => {
    setSolvedSet((prev) => {
      const next = new Set(prev);
      if (next.has(num)) {
        next.delete(num);
        setXp((curr) => Math.max(0, curr - 50));
      } else {
        next.add(num);
        setXp((curr) => curr + 50);
      }
      return next;
    });
  };

  const handleSolveSuccess = (num) => {
    if (!solvedSet.has(num)) {
      handleToggleSolved(num);
    }
  };

  return (
    <DashboardLayout
      problems={problems}
      selectedProblem={selectedProblem}
      onSelectProblem={setSelectedProblem}
      solvedSet={solvedSet}
      onToggleSolved={handleToggleSolved}
      streak={streak}
      xp={xp}
      onSolveSuccess={handleSolveSuccess}
    />
  );
}
