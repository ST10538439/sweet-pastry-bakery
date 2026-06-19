/* ============================================================
   Sweet Pastry Bakery — main.js
   Part 3: JavaScript Functionality
   Student: ST10538439
   ============================================================ */

/* ── 1. Wait for page to fully load before running anything ── */
document.addEventListener('DOMContentLoaded', function () {
  /* ── 5. Product Filter and Search ──────────────────────────
     Filters product cards by category and search keyword     */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('product-search');
  const allCards    = document.querySelectorAll('.card[data-category]');

  function applyFilter() {
    const activeBtn  = document.querySelector('.filter-btn.active-filter');
    const activeFilter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const searchTerm   = searchInput ? searchInput.value.toLowerCase().trim() : '';

    allCards.forEach(function (card) {
      const category    = card.getAttribute('data-category');
      const cardText    = card.innerText.toLowerCase();
      const matchFilter = activeFilter === 'all' || category === activeFilter;
      const matchSearch = cardText.includes(searchTerm);

      if (matchFilter && matchSearch) {
        card.style.display = 'block';
        card.style.animation = 'fadeInCard 0.3s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active-filter'); });
        this.classList.add('active-filter');
        applyFilter();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }

  /* ── 2. Hamburger Menu Toggle ──────────────────────────────
     Collapses and expands the nav on mobile screens          */
  const hamburger = document.querySelector('.hamburger');
  const navMenu   = document.querySelector('nav ul');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('nav-open');
      hamburger.classList.toggle('active');
    });

    /* Close menu when a nav link is clicked on mobile */
    document.querySelectorAll('nav ul li a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('nav-open');
        hamburger.classList.remove('active');
      });
    });
  }

  /* ── 3. Scroll Fade-In Animation ───────────────────────────
     Cards and sections fade in as the user scrolls down      */
  const fadeElements = document.querySelectorAll('.card, .section-title, .about-grid, .page-hero');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(function (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  } else {
    /* Fallback for older browsers — just show everything */
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── 4. Active Nav Link Highlight ──────────────────────────
     Highlights the current page link in the navigation       */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active-link');
    }
  }); 

});