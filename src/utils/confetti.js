import confetti from 'canvas-confetti';

export const triggerConfetti = (origin = { x: 0.5, y: 0.6 }) => {
  // Primary burst
  confetti({
    particleCount: 55,
    spread: 60,
    origin,
    colors: ['#10b981', '#34d399', '#6366f1', '#a855f7', '#38bdf8', '#fbbf24'],
    ticks: 200,
    gravity: 1.1,
    scalar: 0.9,
    disableForReducedMotion: true,
  });

  // Secondary delayed gentle shower
  setTimeout(() => {
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 45,
      origin: { x: origin.x - 0.1, y: origin.y },
      colors: ['#10b981', '#38bdf8', '#818cf8'],
      ticks: 160,
      gravity: 0.9,
      scalar: 0.75,
    });
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 45,
      origin: { x: origin.x + 0.1, y: origin.y },
      colors: ['#34d399', '#f43f5e', '#fbbf24'],
      ticks: 160,
      gravity: 0.9,
      scalar: 0.75,
    });
  }, 120);
};

export const triggerMiniSparkle = (elementRect) => {
  if (!elementRect) {
    triggerConfetti({ x: 0.5, y: 0.5 });
    return;
  }
  const x = (elementRect.left + elementRect.width / 2) / window.innerWidth;
  const y = (elementRect.top + elementRect.height / 2) / window.innerHeight;
  
  confetti({
    particleCount: 25,
    spread: 40,
    startVelocity: 18,
    origin: { x, y },
    colors: ['#10b981', '#34d399', '#6ee7b7'],
    ticks: 100,
    gravity: 1.2,
    scalar: 0.7,
  });
};
