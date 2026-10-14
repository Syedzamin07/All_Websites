// Shared animation tokens for Framer Motion.
// Import these into any component instead of writing one-off variants —
// keeps every fade/stagger/hover in the site on the same timing and easing.

export const EXPO_EASE = [0.16, 1, 0.3, 1];

// Single element fade-up on scroll or load.
export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EXPO_EASE },
  },
};

// Wrap a list of children in this to stagger their fadeUp children.
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Card hover — subtle lift, no scale distortion.
export const cardHover = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: EXPO_EASE },
  },
};

// Button hover — slight scale, kept tiny so it reads as physical, not bouncy.
export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: EXPO_EASE },
  },
  tap: { scale: 0.98 },
};

// Props to spread onto a motion.section for a standard scroll reveal.
// viewport.once ensures it never re-animates on scroll-back (distracting).
export const scrollReveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
  variants: fadeUp,
};
