/**
 * PRESET LANDING PAGE ADVOCACIA - JAVASCRIPT ULTRA-PERFORMÁTICO
 * Zero bibliotecas externas. 100% Vanilla JS.
 * Otimizado para PageSpeed 90+ (Carregamento diferido, passive listeners, IntersectionObserver).
 */

(function () {
  'use strict';

  // 1. Atualizar ano no rodapé automaticamente
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Header transparente -> sombra sutil no scroll
  const header = document.querySelector('[data-header]');
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            header.classList.add('is-scrolled');
          } else {
            header.classList.remove('is-scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 3. Menu Mobile Drawer
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const drawer = document.getElementById('mobile-drawer');
  const closeElements = document.querySelectorAll('[data-menu-close]');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMenu() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = drawer && drawer.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });
  }

  closeElements.forEach((el) => el.addEventListener('click', closeMenu));
  mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // 4. Scroll Reveal com IntersectionObserver ultra-leve
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // 5. FAQ Accordion Clean (Com toggle acessível)
  const faqCards = document.querySelectorAll('.faq-line-item');
  faqCards.forEach((card) => {
    const trigger = card.querySelector('.faq-line-trigger');
    const body = card.querySelector('.faq-line-body');

    if (trigger && body) {
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.contains('is-open');

        // Fechar outras perguntas para manter clean
        faqCards.forEach((other) => {
          if (other !== card && other.classList.contains('is-open')) {
            other.classList.remove('is-open');
            const otherBtn = other.querySelector('.faq-line-trigger');
            const otherBody = other.querySelector('.faq-line-body');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherBody) otherBody.hidden = true;
          }
        });

        if (isOpen) {
          card.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          body.hidden = true;
        } else {
          card.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          body.hidden = false;
        }
      });
    }
  });

  // 6. Rastreamento amigável para cliques no WhatsApp
  const waLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
  waLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'WhatsApp',
          event_label: 'Clique WhatsApp',
        });
      }
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact');
      }
    });
  });
})();
