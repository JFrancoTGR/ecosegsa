// security.js

export function initSecurity() {
  const section = document.querySelector('.security');
  if (
    !section ||
    typeof gsap === 'undefined' ||
    typeof ScrollTrigger === 'undefined'
  ) {
    return;
  }

  const image = section.querySelector('.security__image');
  const leaf = section.querySelector('.security__decor-leaf');
  const ring = section.querySelector('.security__decor-ring');
  const semiCircle = section.querySelector('.security__semi-circle');
  const title = section.querySelector('.security__title');
  const subtitle = section.querySelector('.security__subtitle');
  const divider = section.querySelector('.security__divider');
  const text = section.querySelector('.security__text');
  const items = section.querySelectorAll('.security__item');

  // ─── Null checks ──────────────────────────────────────────
  const elements = [image, leaf, ring, semiCircle, title, subtitle, divider, text];
  if (elements.some((el) => !el) || !items.length) return;

  // ─── Reduced motion ───────────────────────────────────────
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    gsap.set([...elements, ...items], { opacity: 1, clearProps: 'all' });
    return;
  }

  // ─── Timeline ─────────────────────────────────────────────
  const isMobile = window.innerWidth <= 768;
  const triggerStart = isMobile ? 'top 88%' : 'top 78%';

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

  tl.from(image, {
    scale: 1.04,
    opacity: 0,
    duration: 1,
  })
    .from(
      [leaf, ring],
      {
        opacity: 0,
        scale: 0.8,
        stagger: 0.08,
        duration: 0.7,
      },
      '-=0.7',
    )
    .from(
      semiCircle,
      {
        x: -24,
        opacity: 0,
        duration: 0.55,
      },
      '-=0.35',
    )
    .from(
      title,
      {
        y: 36,
        opacity: 0,
        duration: 0.75,
      },
      '-=0.3',
    )
    .from(
      subtitle,
      {
        y: 24,
        opacity: 0,
        duration: 0.6,
      },
      '-=0.35',
    )
    .from(
      divider,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.55,
      },
      '-=0.35',
    )
    .from(
      text,
      {
        y: 24,
        opacity: 0,
        duration: 0.65,
      },
      '-=0.2',
    )
    .from(
      items,
      {
        y: 16,
        opacity: 0,
        stagger: isMobile ? 0.06 : 0.08,
        duration: 0.45,
      },
      '-=0.2',
    );
}