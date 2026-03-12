// header.js

export function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const toggle = header.querySelector('.site-header__toggle');
  const mobileLinks = header.querySelectorAll(
    '.site-header__mobile-link, .site-header__mobile-cta',
  );

  const SCROLL_THRESHOLD = 180;

  // ─── Scroll ───────────────────────────────────────────────
  const updateHeaderOnScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  // ─── Menu ─────────────────────────────────────────────────
  const openMenu = () => {
    header.classList.add('is-menu-open');
    toggle?.setAttribute('aria-expanded', 'true');
    toggle?.setAttribute('aria-label', 'Cerrar menú');
  };

  const closeMenu = () => {
    header.classList.remove('is-menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Abrir menú');
  };

  const toggleMenu = () => {
    const isOpen = header.classList.contains('is-menu-open');
    isOpen ? closeMenu() : openMenu();
  };

  // ─── Event listeners ──────────────────────────────────────

  // Toggle hamburguesa
  toggle?.addEventListener('click', toggleMenu);

  // Cerrar al hacer click en un link del menú
  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar al hacer click fuera del header
  document.addEventListener('click', (e) => {
    if (
      header.classList.contains('is-menu-open') &&
      !header.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Scroll: aplicar clase is-scrolled
  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });

  // Resize con debounce: cerrar menú si se pasa a desktop
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 1024) closeMenu();
    }, 100);
  });

  // Ejecutar al init para estado inicial correcto
  updateHeaderOnScroll();
}
