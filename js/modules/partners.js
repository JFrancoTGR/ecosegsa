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

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      once: true,
    //   markers: true,
    },
  });

  tl.from(text, {
    opacity: 0,
    y: 24,
    duration: 0.6,
    ease: 'power3.out',
  }).from(
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
