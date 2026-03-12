// hero.js

export function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero || typeof gsap === 'undefined') return;

  const semiCircle = hero.querySelector('.hero__semi-circle');
  const title = hero.querySelector('.hero__title');
  const divider = hero.querySelector('.hero__divider');
  const description = hero.querySelector('.hero__description');
  const stats = hero.querySelectorAll('.hero__stat');
  const image = hero.querySelector('.hero__image');

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  tl.from(semiCircle, {
    x: -30,
    opacity: 0,
    duration: 0.7
  })
    .from(
      title,
      {
        y: 40,
        opacity: 0,
        duration: 0.9
      },
      '-=0.35'
    )
    .from(
      divider,
      {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.7
      },
      '-=0.45'
    )
    .from(
      description,
      {
        y: 24,
        opacity: 0,
        duration: 0.7
      },
      '-=0.35'
    )
    .from(
      stats,
      {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6
      },
      '-=0.2'
    )
    .from(
      image,
      {
        scale: 1.08,
        opacity: 0,
        duration: 1.3
      },
      '-=1.2'
    );
}