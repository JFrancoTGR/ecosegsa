// about.js

export function initAbout() {
  const about = document.querySelector('.about');
  if (!about || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const image = about.querySelector('.about__image');
  const ring = about.querySelector('.about__ring');
  const semiCircle = about.querySelector('.about__semi-circle');
  const title = about.querySelector('.about__title');
  const subtitle = about.querySelector('.about__subtitle');
  const divider = about.querySelector('.about__divider');
  const text = about.querySelector('.about__text');
  const overlap = about.querySelector('.about__services-overlap');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: 'top 72%',
      once: true
    },
    defaults: {
      ease: 'power3.out'
    }
  });

  tl.from(image, {
    scale: 1.06,
    opacity: 0,
    duration: 1
  })
    .from(
      ring,
      {
        scale: 0.7,
        opacity: 0,
        duration: 0.8
      },
      '-=0.7'
    )
    .from(
      semiCircle,
      {
        x: -24,
        opacity: 0,
        duration: 0.6
      },
      '-=0.45'
    )
    .from(
      title,
      {
        y: 36,
        opacity: 0,
        duration: 0.8
      },
      '-=0.35'
    )
    .from(
      subtitle,
      {
        y: 20,
        opacity: 0,
        duration: 0.55
      },
      '-=0.45'
    )
    .from(
      divider,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.55
      },
      '-=0.35'
    )
    .from(
      text,
      {
        y: 24,
        opacity: 0,
        duration: 0.7
      },
      '-=0.2'
    )
    .from(
      overlap,
      {
        y: 30,
        opacity: 0,
        duration: 0.75
      },
      '-=0.25'
    );
}