// cta-ribbon.js

export function initCtaRibbon() {
  const ribbon = document.querySelector('.cta-ribbon');
  if (
    !ribbon ||
    typeof gsap === 'undefined' ||
    typeof ScrollTrigger === 'undefined'
  ) {
    return;
  }

  const button = ribbon.querySelector('.cta-ribbon__button');
  if (!button) return;

  // ─── Reduced motion ───────────────────────────────────────
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    gsap.set(button, { opacity: 1, clearProps: 'all' });
    return;
  }

  // ─── Animación ────────────────────────────────────────────
  gsap.fromTo(
    button,
    {
      opacity: 0,
      scale: 0.94,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ribbon,
        start: 'top 95%',
        once: true,
      },
      clearProps: 'opacity,scale',
    }
  );
}