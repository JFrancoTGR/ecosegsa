// services.js

export function initServices() {
  const section = document.querySelector('.services');
  if (
    !section ||
    typeof gsap === 'undefined' ||
    typeof ScrollTrigger === 'undefined'
  )
    return;

  const heading = section.querySelector('.services__heading');
  const cards = section.querySelectorAll('.service-card');

  // ─── Null checks ──────────────────────────────────────────
  if (!heading || !cards.length) return;

  // ─── Reduced motion ───────────────────────────────────────
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    gsap.set([heading, ...cards], { opacity: 1, clearProps: 'all' });
    return;
  }

  // ─── Timeline ─────────────────────────────────────────────
  const isMobile = window.innerWidth <= 768;
  const triggerStart = isMobile ? 'top 82%' : 'top 58%';

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: triggerStart,
      once: true,
    },
    defaults: {
      ease: 'power3.out',
    },
  });

  tl.from(heading, {
    y: 36,
    opacity: 0,
    duration: 0.8,
  }).from(
    cards,
    {
      y: 40,
      opacity: 0,
      stagger: isMobile ? 0.11 : 0.19,
      duration: 0.75,
    },
    '-=0.37',
  );
}