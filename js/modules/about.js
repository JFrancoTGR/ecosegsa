// about.js

export function initAbout() {
  const about = document.querySelector('.about');
  if (
    !about ||
    typeof gsap === 'undefined' ||
    typeof ScrollTrigger === 'undefined'
  )
    return;

  const image = about.querySelector('.about__image');
  const ring = about.querySelector('.about__ring');
  const semiCircle = about.querySelector('.about__semi-circle');
  const title = about.querySelector('.about__title');
  const subtitle = about.querySelector('.about__subtitle');
  const divider = about.querySelector('.about__divider');
  const text = about.querySelector('.about__text');

  // ─── Null checks ──────────────────────────────────────────
  const elements = [image, ring, semiCircle, title, subtitle, divider, text];
  if (elements.some((el) => !el)) return;

  // ─── Reduced motion ───────────────────────────────────────
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) {
    gsap.set(elements, { opacity: 1, clearProps: 'all' });
    return;
  }

  // ─── Timeline ─────────────────────────────────────────────
  const triggerStart = window.innerWidth <= 768 ? 'top 88%' : 'top 72%';

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: triggerStart,
      once: true,
    },
    defaults: {
      ease: 'power3.out',
    },
  });

  tl.from(image, {
    scale: 1.06,
    opacity: 0,
    duration: 1,
  })
    .from(
      ring,
      {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.7',
    )
    .from(
      semiCircle,
      {
        x: -24,
        opacity: 0,
        duration: 0.6,
      },
      '-=0.45',
    )
    .from(
      title,
      {
        y: 36,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.35',
    )
    .from(
      subtitle,
      {
        y: 20,
        opacity: 0,
        duration: 0.55,
      },
      '-=0.45',
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
        duration: 0.7,
      },
      '-=0.2',
    );
}
