/* ============================================================
   Sweet Pastry Bakery — main.js
   Part 3: JavaScript Functionality
   Student: ST10538439
   ============================================================ */

/* ── 1. Wait for page to fully load before running anything ── */
document.addEventListener('DOMContentLoaded', function () {
/* ── 7. Enquiry Form Validation + Price Response ────────────
     Validates all fields and returns a pricing estimate       */
  const enquiryForm = document.getElementById('enquiry-form');

  if (enquiryForm) {

    /* Pricing map per product type */
    const pricing = {
      'bread':        { label: 'Artisan Breads',         price: 'from R 65 per loaf' },
      'pastries':     { label: 'Pastries & Desserts',    price: 'from R 28 per item / R 320 per tray' },
      'birthday-cake':{ label: 'Birthday Cake',          price: 'from R 450' },
      'wedding-cake': { label: 'Wedding Cake',           price: 'from R 1 800' },
      'corporate':    { label: 'Corporate / Events',     price: 'from R 650' },
      'seasonal':     { label: 'Seasonal Specials',      price: 'from R 75 per item' },
      'other':        { label: 'Custom Order',           price: 'price confirmed after consultation' }
    };

    function showError(fieldId, message) {
      const el = document.getElementById(fieldId + '-error');
      if (el) { el.textContent = message; el.style.display = 'block'; }
      const input = document.getElementById(fieldId);
      if (input) input.classList.add('input-error');
    }

    function clearError(fieldId) {
      const el = document.getElementById(fieldId + '-error');
      if (el) { el.textContent = ''; el.style.display = 'none'; }
      const input = document.getElementById(fieldId);
      if (input) input.classList.remove('input-error');
    }

    function clearAllErrors() {
      ['name','email','phone','product','date','guests'].forEach(clearError);
    }

    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearAllErrors();

      let valid = true;

      /* Name — letters and spaces only, at least 2 characters */
      const name = document.getElementById('name').value.trim();
      if (!name || name.length < 2) {
        showError('name', 'Please enter your full name (at least 2 characters).');
        valid = false;
      } else if (!/^[A-Za-z\s'-]+$/.test(name)) {
        showError('name', 'Name may only contain letters, spaces, hyphens and apostrophes.');
        valid = false;
      }

      /* Email — basic format check */
      const email = document.getElementById('email').value.trim();
      if (!email) {
        showError('email', 'Please enter your email address.');
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Please enter a valid email address (e.g. name@example.com).');
        valid = false;
      }

      /* Phone — SA format: 10 digits, optionally with spaces */
      const phone = document.getElementById('phone').value.trim();
      const phoneClean = phone.replace(/\s+/g, '');
      if (!phone) {
        showError('phone', 'Please enter your phone number.');
        valid = false;
      } else if (!/^0[0-9]{9}$/.test(phoneClean)) {
        showError('phone', 'Please enter a valid SA phone number (e.g. 082 000 0000).');
        valid = false;
      }

      /* Product — must select something */
      const product = document.getElementById('product').value;
      if (!product) {
        showError('product', 'Please select a product or service.');
        valid = false;
      }

      /* Date — must be today or in the future */
      const dateVal = document.getElementById('date').value;
      if (!dateVal) {
        showError('date', 'Please select your required date.');
        valid = false;
      } else {
        const chosen = new Date(dateVal);
        const today  = new Date();
        today.setHours(0, 0, 0, 0);
        if (chosen < today) {
          showError('date', 'Please select a date from today onwards.');
          valid = false;
        }
      }

      /* Guests — if provided, must be a positive number */
      const guests = document.getElementById('guests').value;
      if (guests && (isNaN(guests) || parseInt(guests) < 1)) {
        showError('guests', 'Please enter a valid number of guests (minimum 1).');
        valid = false;
      }

      /* If everything is valid — show price response */
      if (valid) {
        const info     = pricing[product] || { label: product, price: 'to be confirmed' };
        const guestLine = guests
          ? '<p>We\'ll prepare enough for approximately <strong>' + guests + ' guests</strong>.</p>'
          : '';
        const chosenDate = new Date(dateVal).toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        const responseBox = document.getElementById('enquiry-response');
        responseBox.innerHTML =
          '<h3>Thank you, ' + name.split(' ')[0] + '!</h3>' +
          '<p>We\'ve received your enquiry for <strong>' + info.label + '</strong>.</p>' +
          '<p>Estimated pricing: <strong>' + info.price + '</strong>.</p>' +
          '<p>Required date: <strong>' + chosenDate + '</strong>.</p>' +
          guestLine +
          '<p>A member of our team will contact you at <strong>' + email + '</strong> within 24 hours to confirm your order and final pricing.</p>';
        responseBox.style.display = 'block';
        responseBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        enquiryForm.reset();
      }
    });

    /* Real-time validation — clear error as user types */
    ['name','email','phone','product','date','guests'].forEach(function (fieldId) {
      const el = document.getElementById(fieldId);
      if (el) {
        el.addEventListener('input', function () { clearError(fieldId); });
        el.addEventListener('change', function () { clearError(fieldId); });
      }
    });
  }
  
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
  /* ── 6. Gallery Lightbox ────────────────────────────────────
     Opens clicked gallery images in a full-screen overlay    */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxCap   = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev  = document.getElementById('lightbox-prev');
  const lightboxNext  = document.getElementById('lightbox-next');
  const galleryItems  = document.querySelectorAll('.gallery-item img');

  let currentIndex = 0;

  function openLightbox(index) {
    if (!lightbox || galleryItems.length === 0) return;
    currentIndex = index;
    const img = galleryItems[currentIndex];
    lightboxImg.src = img.getAttribute('data-full') || img.src;
    lightboxImg.alt = img.alt;
    lightboxCap.textContent = img.alt;
    lightbox.classList.add('lightbox-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('lightbox-open');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach(function (img, i) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () { openLightbox(i); });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext)  lightboxNext.addEventListener('click', showNext);

  /* Close lightbox when clicking outside the image */
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* Keyboard navigation */
  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('lightbox-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

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