// header.js

export function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const toggle = header.querySelector('.site-header__toggle');
  const mobileLinks = header.querySelectorAll(
    '.site-header__mobile-link, .site-header__mobile-cta'
  );

  const SCROLL_THRESHOLD = 180;

  const updateHeaderOnScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  const openMenu = () => {
    header.classList.add('is-menu-open');
    toggle?.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    header.classList.remove('is-menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = header.classList.contains('is-menu-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  toggle?.addEventListener('click', toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMenu();
  });

  updateHeaderOnScroll();
}