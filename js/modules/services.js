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

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 58%',
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
      stagger: 0.19,
      duration: 0.75,
    },
    '-=0.37',
  );
}
