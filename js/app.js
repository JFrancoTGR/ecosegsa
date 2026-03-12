// app.js

import { initGSAP } from './modules/init-gsap.js';
import { initHeader } from './modules/header.js';
import { initHero } from './modules/hero.js';
import { initAbout } from './modules/about.js';
import { initServices } from './modules/services.js';
import { initCtaRibbon } from './modules/cta-ribbon.js';
import { initSecurity } from './modules/security.js';
import { initPartners } from './modules/partners.js';
import { initContact } from './modules/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initGSAP();
  initHeader();
  initHero();
  initAbout();
  initServices();
  initCtaRibbon();
  initSecurity();
  initPartners();
  initContact();
});