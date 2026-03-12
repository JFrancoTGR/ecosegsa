// init-gsap.js

export function initGSAP() {
  if (typeof gsap === 'undefined') {
    console.error('GSAP no está disponible. Verifica que el CDN cargó correctamente.');
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
}