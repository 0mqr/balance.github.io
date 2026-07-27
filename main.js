/* ═══════════════════════════════════════════════
   Omar Segura · Soluciones Contables y Digitales
   main.js  v2
   ═══════════════════════════════════════════════

   ╔═══════════════════════════════════════════╗
   ║  CONFIGURACIÓN – EDITAR AQUÍ              ║
   ╚═══════════════════════════════════════════╝
   Cambia el número de WhatsApp y el correo
   en este único lugar. El resto del sitio
   se actualiza automáticamente.
*/

var CONFIG = {
  // Número WhatsApp: código de país + número sin espacios ni guiones
  // El Salvador: 503 + tu número  →  ej: 50370123456
  WA_NUMBER: '50377779714',

  // Correo para recibir solicitudes
  EMAIL: 'balance.omqr@gmail.com',

  // Mensaje WA de contacto directo (sin formulario)
  WA_MSG_DIRECTO: 'Hola%20Omar%2C%20deseo%20información%20sobre%20servicios%20contables.'
};

(function () {
  'use strict';

  /* ── Inicializar URLs de WhatsApp ─────────── */
  function initWA() {
    var waBase = 'https://wa.me/' + CONFIG.WA_NUMBER + '?text=' + CONFIG.WA_MSG_DIRECTO;
    // Botón flotante
    var waFloat = document.getElementById('wa-float');
    if (waFloat) waFloat.setAttribute('href', waBase);
    // Card de contacto
    var waContacto = document.getElementById('wa-contacto');
    if (waContacto) waContacto.setAttribute('href', waBase);
  }
  initWA();

  /* ── Navbar scroll effect ─────────────────── */
  var navbar = document.getElementById('navbar');
  function handleNavScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ── Mobile menu ──────────────────────────── */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileLinks = document.querySelectorAll('.mobile-link');

  hamburger.addEventListener('click', function () {
    var isOpen = mobileMenu.classList.toggle('open');
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
    var cursor    = document.getElementById('cursor');
    var cursorDot = document.getElementById('cursorDot');
    var mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      cursorDot.style.left = mx + 'px';
      cursorDot.style.top  = my + 'px';
    });
    (function animateCursor() {
      cx += (mx - cx) * 0.14;
      cy += (my - cy) * 0.14;
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
      requestAnimationFrame(animateCursor);
    })();

    document.querySelectorAll('a, button, .service-card, .plan-card, .portfolio-item, .skill-card, .stab, .radio-opt, .check-opt, .prox-card').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('active'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('active'); });
    });
  }

  /* ── Scroll reveal ────────────────────────── */
  var revealEls = document.querySelectorAll('.reveal-up, .reveal-right');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  /* ── Smooth anchor scrolling ──────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var navHeight = navbar ? navbar.offsetHeight : 68;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - navHeight, behavior: 'smooth' });
      }
    });
  });

  /* ── Active nav highlight ─────────────────── */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        navAnchors.forEach(function (a) { a.style.color = ''; a.style.fontWeight = ''; });
        var active = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (active && !active.classList.contains('nav-cta')) {
          active.style.color = 'var(--blue)';
          active.style.fontWeight = '600';
        }
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(function (s) { sectionObserver.observe(s); });

  /* ── Hero scroll hint ─────────────────────── */
  var scrollHint = document.querySelector('.hero-scroll-hint');
  if (scrollHint) {
    window.addEventListener('scroll', function () {
      scrollHint.style.opacity = window.scrollY > 80 ? '0' : '1';
    }, { passive: true });
  }

  /* ── Services tabs ────────────────────────── */
  var stabs = document.querySelectorAll('.stab');
  var panels = document.querySelectorAll('.stab-panel');
  stabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tab = this.getAttribute('data-tab');
      stabs.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');
      var panel = document.getElementById('tab-' + tab);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Videollamada toggle ──────────────────── */
  var vlSi  = document.getElementById('vl-si');
  var vlNo  = document.getElementById('vl-no');
  var vlFields = document.getElementById('vlFields');
  if (vlSi && vlFields) {
    vlSi.addEventListener('change', function () { if (this.checked) vlFields.style.display = 'block'; });
    vlNo.addEventListener('change', function () { if (this.checked) vlFields.style.display = 'none'; });
  }

  /* ══════════════════════════════════════════
     FORMULARIO – Validación y envío
  ═══════════════════════════════════════════ */
  function getVal(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }
  function getRadio(name) {
    var checked = document.querySelector('input[name="' + name + '"]:checked');
    return checked ? checked.value : '';
  }
  function getCheckboxes(name) {
    var checked = document.querySelectorAll('input[name="' + name + '"]:checked');
    var vals = [];
    checked.forEach(function (c) { vals.push(c.value); });
    return vals;
  }
  function setError(id, msg) {
    var el = document.getElementById(id);
    if (el) el.textContent = msg;
  }
  function clearErrors() {
    document.querySelectorAll('.field-error').forEach(function (el) { el.textContent = ''; });
    document.querySelectorAll('.invalid').forEach(function (el) { el.classList.remove('invalid'); });
  }
  function markInvalid(fieldId) {
    var el = document.getElementById(fieldId);
    if (el) el.classList.add('invalid');
  }

  function validateForm() {
    clearErrors();
    var ok = true;

    var nombre = getVal('f-nombre');
    if (!nombre) { setError('err-nombre', 'El nombre es obligatorio.'); markInvalid('f-nombre'); ok = false; }

    var wa = getVal('f-whatsapp');
    if (!wa) { setError('err-whatsapp', 'El WhatsApp es obligatorio.'); markInvalid('f-whatsapp'); ok = false; }

    var correo = getVal('f-correo');
    if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      setError('err-correo', 'Ingresa un correo válido.'); markInvalid('f-correo'); ok = false;
    }

    var tipo = getRadio('tipo_cliente');
    if (!tipo) { setError('err-tipo_cliente', 'Selecciona un tipo de cliente.'); ok = false; }

    var servicios = getCheckboxes('servicio');
    if (!servicios.length) { setError('err-servicio', 'Selecciona al menos un servicio.'); ok = false; }

    var desc = getVal('f-descripcion');
    if (!desc || desc.length < 10) { setError('err-descripcion', 'Describe brevemente tu necesidad.'); markInvalid('f-descripcion'); ok = false; }

    var urgencia = getRadio('urgencia');
    if (!urgencia) { setError('err-urgencia', 'Selecciona la urgencia.'); ok = false; }

    var modalidad = getRadio('modalidad');
    if (!modalidad) { setError('err-modalidad', 'Selecciona la modalidad.'); ok = false; }

    return ok;
  }

  function buildResumen() {
    var vl       = getRadio('videollamada');
    var fecha    = getVal('f-fecha');
    var hora     = getVal('f-hora');
    var duracion = getVal('f-duracion');
    var vlTexto  = '';
    if (vl === 'Sí') {
      vlTexto = '\n📹 Videollamada solicitada';
      if (fecha)    vlTexto += '\n  Fecha preferida: ' + fecha;
      if (hora)     vlTexto += '\n  Hora preferida: ' + hora;
      if (duracion) vlTexto += '\n  Duración: ' + duracion;
      vlTexto += '\n  (Fecha y hora pendientes de confirmación)';
    } else {
      vlTexto = '\n📹 No requiere videollamada por ahora';
    }

    var empresa  = getVal('f-empresa');
    var periodo  = getVal('f-periodo');

    return [
      '📋 *SOLICITUD DE SERVICIO*',
      '👤 Nombre: ' + getVal('f-nombre'),
      empresa ? '🏢 Empresa: ' + empresa : null,
      '📱 WhatsApp: ' + getVal('f-whatsapp'),
      getVal('f-correo') ? '📧 Correo: ' + getVal('f-correo') : null,
      '🏷️ Tipo de cliente: ' + getRadio('tipo_cliente'),
      '✅ Servicio(s): ' + getCheckboxes('servicio').join(', '),
      periodo ? '📅 Período: ' + periodo : null,
      '📝 Descripción: ' + getVal('f-descripcion'),
      '⚡ Urgencia: ' + getRadio('urgencia'),
      '💻 Modalidad: ' + getRadio('modalidad'),
      vlTexto
    ].filter(Boolean).join('\n');
  }

  function buildEmailBody() {
    var vl       = getRadio('videollamada');
    var fecha    = getVal('f-fecha');
    var hora     = getVal('f-hora');
    var duracion = getVal('f-duracion');
    var vlTexto  = vl === 'Sí'
      ? 'Sí\nFecha preferida: ' + (fecha || '—') + '\nHora preferida: ' + (hora || '—') + '\nDuración: ' + (duracion || '—') + '\n(Fecha y hora pendientes de confirmación)'
      : 'No por ahora';

    var empresa = getVal('f-empresa');
    var periodo = getVal('f-periodo');

    return [
      'SOLICITUD DE SERVICIO',
      '',
      'Nombre: ' + getVal('f-nombre'),
      empresa ? 'Empresa: ' + empresa : null,
      'WhatsApp: ' + getVal('f-whatsapp'),
      getVal('f-correo') ? 'Correo: ' + getVal('f-correo') : null,
      'Tipo de cliente: ' + getRadio('tipo_cliente'),
      'Servicio(s): ' + getCheckboxes('servicio').join(', '),
      periodo ? 'Período: ' + periodo : null,
      '',
      'Descripción:',
      getVal('f-descripcion'),
      '',
      'Urgencia: ' + getRadio('urgencia'),
      'Modalidad: ' + getRadio('modalidad'),
      '',
      'Videollamada: ' + vlTexto
    ].filter(function(l) { return l !== null; }).join('\n');
  }

  /* Botón WhatsApp */
  var btnWA = document.getElementById('btnWA');
  if (btnWA) {
    btnWA.addEventListener('click', function () {
      if (!validateForm()) {
        document.querySelector('.field-error:not(:empty)').closest('.form-block').scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      var texto = buildResumen();
      var encoded = encodeURIComponent(texto);
      window.open('https://wa.me/' + CONFIG.WA_NUMBER + '?text=' + encoded, '_blank');
    });
  }

  /* Botón Email */
  var btnEmail = document.getElementById('btnEmail');
  if (btnEmail) {
    btnEmail.addEventListener('click', function () {
      if (!validateForm()) {
        document.querySelector('.field-error:not(:empty)').closest('.form-block').scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      var asunto = encodeURIComponent('Solicitud de servicio – ' + getVal('f-nombre'));
      var cuerpo = encodeURIComponent(buildEmailBody());
      window.location.href = 'mailto:' + CONFIG.EMAIL + '?subject=' + asunto + '&body=' + cuerpo;
    });
  }

  /* ── Plan card hover ──────────────────────── */
  document.querySelectorAll('.plan-card:not(.featured)').forEach(function (card) {
    card.addEventListener('mouseenter', function () { this.style.borderColor = 'var(--blue)'; });
    card.addEventListener('mouseleave', function () { this.style.borderColor = ''; });
  });

})();
