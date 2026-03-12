// partners.js

export function initPartners() {
  const section = document.querySelector('.partners');

  if (
    !section ||
    typeof gsap === 'undefined' ||
    typeof ScrollTrigger === 'undefined'
  ) {
    return;
  }

  const text = section.querySelector('.partners__text');
  const logos = section.querySelectorAll('.partners__logo');
  const semiLeft = section.querySelector('.partners__semi-left');
  const semiRight = section.querySelector('.partners__semi-right');

  // ─── Null checks ──────────────────────────────────────────
  if (!text || !logos.length) return;

  // ─── Reduced motion ───────────────────────────────────────
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    gsap.set([text, ...logos], { opacity: 1, clearProps: 'all' });
    return;
  }

  // ─── Timeline ─────────────────────────────────────────────
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      once: true,
    },
  });

  tl.from(
    [semiLeft, semiRight],
    {
      opacity: 0,
      scale: 0.7,
      stagger: 0.08,
      duration: 0.55,
      ease: 'power3.out',
    },
  )
    .from(
      text,
      {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.3',
    )
    .from(
      logos,
      {
        opacity: 0,
        y: 16,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.3',
    );
}