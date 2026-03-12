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

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 78%',
      once: true,
      // markers: true,
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
        stagger: 0.08,
        duration: 0.45,
      },
      '-=0.2',
    );
}
