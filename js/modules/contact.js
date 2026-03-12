// contact.js

export function initContact() {
  const section = document.querySelector('.contact');

  if (
    !section ||
    typeof gsap === 'undefined' ||
    typeof ScrollTrigger === 'undefined'
  ) {
    return;
  }

  const semiCircle = section.querySelector('.contact__semi-circle');
  const title = section.querySelector('.contact__title');
  const subtitle = section.querySelector('.contact__subtitle');
  const divider = section.querySelector('.contact__divider');
  const text = section.querySelector('.contact__text');
  const infoItems = section.querySelectorAll('.contact__info-item');
  const formCard = section.querySelector('.contact__form-card');

  // ─── Null checks ──────────────────────────────────────────
  const elements = [semiCircle, title, subtitle, divider, text, formCard];
  if (elements.some((el) => !el) || !infoItems.length) return;

  // ─── Reduced motion ───────────────────────────────────────
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) {
    gsap.set([...elements, ...infoItems], { opacity: 1, clearProps: 'all' });
    return;
  }

  // ─── Timeline ─────────────────────────────────────────────
  const triggerStart = window.innerWidth <= 768 ? 'top 90%' : 'top 80%';

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

  tl.from(semiCircle, {
    x: -20,
    opacity: 0,
    duration: 0.5,
  })
    .from(
      title,
      {
        y: 28,
        opacity: 0,
        duration: 0.7,
      },
      '-=0.25',
    )
    .from(
      subtitle,
      {
        y: 18,
        opacity: 0,
        duration: 0.55,
      },
      '-=0.35',
    )
    .from(
      divider,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.5,
      },
      '-=0.3',
    )
    .from(
      text,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
      },
      '-=0.2',
    )
    .from(
      infoItems,
      {
        y: 14,
        opacity: 0,
        stagger: 0.08,
        duration: 0.45,
      },
      '-=0.2',
    )
    .from(
      formCard,
      {
        opacity: 0,
        y: 24,
        duration: 0.75,
      },
      '-=0.45',
    );
}
