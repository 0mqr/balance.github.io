/* ═══════════════════════════════════════════════
   Omar Segura · Servicios Contables Digitales
   main.js
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Navbar scroll effect ─────────────────── */
  const navbar = document.getElementById('navbar');
  function handleNavScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ── Mobile menu ──────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── Custom cursor (desktop only) ────────── */
  if (window.matchMedia('(pointer: fine)').matches) {
    const cursor    = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursorDot');
    let mx = 0, my = 0;
    let cx = 0, cy = 0;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      cursorDot.style.left = mx + 'px';
      cursorDot.style.top  = my + 'px';
    });

    // Smooth lag for outer ring
    function animateCursor() {
      cx += (mx - cx) * 0.14;
      cy += (my - cy) * 0.14;
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Grow on interactive elements
    const interactives = document.querySelectorAll('a, button, .service-card, .plan-card, .portfolio-item, .skill-card');
    interactives.forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('active'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('active'); });
    });
  }

  /* ── Scroll reveal ────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-right');

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) { revealObserver.observe(el); });

  /* ── Smooth anchor scrolling ──────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  /* ── Active nav link highlight ────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(function (a) {
            a.style.color = '';
            a.style.fontWeight = '';
          });
          const activeLink = document.querySelector('.nav-links a[href="#' + id + '"]');
          if (activeLink && !activeLink.classList.contains('nav-cta')) {
            activeLink.style.color = 'var(--blue)';
            activeLink.style.fontWeight = '600';
          }
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(function (s) { sectionObserver.observe(s); });

  /* ── Hero scroll hint fade ────────────────── */
  const scrollHint = document.querySelector('.hero-scroll-hint');
  if (scrollHint) {
    window.addEventListener('scroll', function () {
      scrollHint.style.opacity = window.scrollY > 80 ? '0' : '1';
    }, { passive: true });
  }

  /* ── Lazy WhatsApp number setup ───────────── */
  // EDITAR: Cambia este número por el tuyo (formato: código de país + número sin espacios)
  // Ejemplo El Salvador: 50377779714 (503 = código de país)
  var WA_NUMBER  = '50377779714';
  var WA_MESSAGE = 'Hola%20Omar%2C%20deseo%20informaci%C3%B3n%20sobre%20servicios%20contables.';
  var WA_URL = 'https://wa.me/' + WA_NUMBER + '?text=' + WA_MESSAGE;

  document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
    el.setAttribute('href', WA_URL);
  });

  /* ── Plan card hover polish ───────────────── */
  document.querySelectorAll('.plan-card:not(.featured)').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      this.style.borderColor = 'var(--blue)';
    });
    card.addEventListener('mouseleave', function () {
      this.style.borderColor = '';
    });
  });

})();
