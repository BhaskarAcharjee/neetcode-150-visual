// Gamification System: Real Streak, Dynamic XP by Difficulty, and Progress Persistence

export const DIFFICULTY_XP = {
  Easy: 50,
  Medium: 100,
  Hard: 200,
};

// Formats a date object into local 'YYYY-MM-DD'
export function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getYesterdayDateString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return getLocalDateString(d);
}

/**
 * Evaluates the current streak state based on stored localStorage values.
 * Returns { streak: number, isActiveToday: boolean, lastActiveDate: string | null }
 */
export function getStreakState() {
  try {
    const savedStreak = parseInt(localStorage.getItem('neetcode_streak') || '0', 10);
    const lastActiveDate = localStorage.getItem('neetcode_last_active_date');
    const today = getLocalDateString();
    const yesterday = getYesterdayDateString();

    if (!lastActiveDate || isNaN(savedStreak) || savedStreak <= 0) {
      return {
        streak: 0,
        isActiveToday: false,
        lastActiveDate: null,
      };
    }

    if (lastActiveDate === today) {
      return {
        streak: savedStreak,
        isActiveToday: true,
        lastActiveDate,
      };
    }

    if (lastActiveDate === yesterday) {
      // Streak is active from yesterday; awaiting activity today to maintain/increment
      return {
        streak: savedStreak,
        isActiveToday: false,
        lastActiveDate,
      };
    }

    // More than 1 day missed: streak is broken
    localStorage.setItem('neetcode_streak', '0');
    return {
      streak: 0,
      isActiveToday: false,
      lastActiveDate,
    };
  } catch (e) {
    console.error('Failed to get streak state:', e);
    return { streak: 0, isActiveToday: false, lastActiveDate: null };
  }
}

/**
 * Records activity for today (e.g., solving a problem, passing tests, completing quiz).
 * Increments streak if yesterday was active, or starts at 1 if fresh/broken.
 */
export function recordStreakActivity() {
  try {
    const current = getStreakState();
    const today = getLocalDateString();
    const yesterday = getYesterdayDateString();

    if (current.isActiveToday) {
      // Already active today; streak maintained
      return {
        streak: Math.max(1, current.streak),
        isActiveToday: true,
        lastActiveDate: today,
      };
    }

    let newStreak = 1;
    if (current.lastActiveDate === yesterday && current.streak > 0) {
      newStreak = current.streak + 1;
    }

    localStorage.setItem('neetcode_streak', newStreak.toString());
    localStorage.setItem('neetcode_last_active_date', today);

    return {
      streak: newStreak,
      isActiveToday: true,
      lastActiveDate: today,
    };
  } catch (e) {
    console.error('Failed to record streak activity:', e);
    return { streak: 1, isActiveToday: true, lastActiveDate: getLocalDateString() };
  }
}

/**
 * Calculates total XP deterministically based on problems solved.
 */
export function calculateBaseXp(solvedSet, problemsList = []) {
  if (!solvedSet || solvedSet.size === 0) return 0;
  const problemMap = new Map(problemsList.map((p) => [p.num, p]));
  let total = 0;
  for (const num of solvedSet) {
    const prob = problemMap.get(num);
    if (prob) {
      total += DIFFICULTY_XP[prob.difficulty] || 50;
    }
  }
  return total;
}

/**
 * Computes level, rank title, and progress toward next level.
 * 250 XP per level.
 */
export function getLevelInfo(totalXp = 0) {
  const xp = Math.max(0, totalXp);
  const xpPerLevel = 250;
  const level = Math.floor(xp / xpPerLevel) + 1;
  const currentLevelXp = xp % xpPerLevel;
  const nextLevelXp = xpPerLevel;
  const percent = Math.min(100, Math.round((currentLevelXp / nextLevelXp) * 100));

  const TITLES = [
    'Novice',
    'Apprentice',
    'Coder',
    'Algorithmist',
    'Problem Solver',
    'Engineer',
    'Senior Engineer',
    'Staff Engineer',
    'Principal Engineer',
    'Architect',
    'Grandmaster',
  ];

  const titleIndex = Math.min(level - 1, TITLES.length - 1);
  const title = TITLES[titleIndex];

  return {
    level,
    title,
    currentLevelXp,
    nextLevelXp,
    percent,
  };
}

/**
 * Completely resets all saved progress, streak, and XP.
 */
export function resetAllProgress() {
  try {
    localStorage.removeItem('neetcode_solved');
    localStorage.removeItem('neetcode_xp');
    localStorage.removeItem('neetcode_bonus_xp');
    localStorage.removeItem('neetcode_streak');
    localStorage.removeItem('neetcode_last_active_date');
    localStorage.removeItem('neetcode_streak_history');
  } catch (e) {
    console.error('Failed to reset progress:', e);
  }
}
