/**
 * Main JavaScript File
 * Core functionality for the portfolio website
 */

(function() {
  'use strict';

  /**
   * Mobile navigation toggle
   */
  function setupMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
      });

      // Close mobile menu when clicking a link
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', (event) => {
        if (!event.target.closest('nav')) {
          navLinks.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  /**
   * Reveal on scroll animation
   */
  function setupRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length === 0) return;

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(element => {
      observer.observe(element);
    });
  }

  /**
   * Add animation classes to elements on page load
   */
  function setupPageLoadAnimations() {
    const animateElements = document.querySelectorAll('[data-animate]');

    animateElements.forEach((element, index) => {
      const animationType = element.getAttribute('data-animate');
      const delay = index * 100; // Stagger by 100ms

      setTimeout(() => {
        element.classList.add(`animate-${animationType}`);
      }, delay);
    });
  }

  /**
   * Project cards filter functionality
   */
  function setupProjectFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category').split(' ');

          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
            card.classList.add('animate-fade-in');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /**
   * Copy to clipboard functionality
   */
  function setupCopyToClipboard() {
    const copyButtons = document.querySelectorAll('[data-copy]');

    copyButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const textToCopy = button.getAttribute('data-copy');

        try {
          await navigator.clipboard.writeText(textToCopy);

          // Visual feedback
          const originalText = button.textContent;
          button.textContent = '✓ Copied!';
          button.classList.add('btn-accent');

          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('btn-accent');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      });
    });
  }

  /**
   * Form validation and submission
   */
  function setupFormHandling() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            field.setAttribute('aria-invalid', 'true');
          } else {
            field.classList.remove('error');
            field.setAttribute('aria-invalid', 'false');
          }
        });

        if (isValid) {
          // Handle form submission
          console.log('Form data:', data);
          form.reset();

          // Show success message
          const successMsg = document.createElement('div');
          successMsg.className = 'alert alert-success';
          successMsg.textContent = 'Message sent successfully!';
          form.appendChild(successMsg);

          setTimeout(() => {
            successMsg.remove();
          }, 3000);
        }
      });
    });
  }

  /**
   * Highlight current page in navigation
   */
  function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;

      if (linkPath === currentPath ||
          (currentPath === '/' && linkPath.endsWith('index.html')) ||
          (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
        link.classList.add('active');
      }
    });
  }

  /**
   * External links handling
   */
  function setupExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(link => {
      // Skip links to the same domain
      if (link.hostname === window.location.hostname) return;

      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');

      // Add visual indicator
      if (!link.querySelector('.external-icon')) {
        const icon = document.createElement('span');
        icon.className = 'external-icon';
        icon.innerHTML = ' ↗';
        icon.setAttribute('aria-label', '(opens in new tab)');
        link.appendChild(icon);
      }
    });
  }

  /**
   * Reading time estimator for articles
   */
  function setupReadingTime() {
    const articles = document.querySelectorAll('.article-content');

    articles.forEach(article => {
      const text = article.textContent;
      const wordCount = text.trim().split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200); // Average reading speed

      const timeElement = document.createElement('span');
      timeElement.className = 'reading-time';
      timeElement.textContent = `${readingTime} min read`;

      const meta = article.previousElementSibling?.querySelector('.article-meta');
      if (meta) {
        const metaItem = document.createElement('span');
        metaItem.className = 'article-meta-item';
        metaItem.appendChild(timeElement);
        meta.appendChild(metaItem);
      }
    });
  }

  /**
   * Lazy load images
   */
  function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach(img => {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
      });
    }
  }

  /**
   * Performance: Skip to main content link
   */
  function setupSkipLink() {
    const skipLink = document.querySelector('.skip-link');

    if (skipLink) {
      skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#main-content');

        if (mainContent) {
          mainContent.setAttribute('tabindex', '-1');
          mainContent.focus();
          mainContent.addEventListener('blur', () => {
            mainContent.removeAttribute('tabindex');
          }, { once: true });
        }
      });
    }
  }

  /**
   * Add keyboard navigation support
   */
  function setupKeyboardNav() {
    document.addEventListener('keydown', (event) => {
      // Escape key to close mobile menu
      if (event.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');

        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
          }
        }
      }
    });
  }

  /**
   * Initialize all functionality
   */
  function init() {
    setupMobileNav();
    setupRevealOnScroll();
    setupPageLoadAnimations();
    setupProjectFilter();
    setupCopyToClipboard();
    setupFormHandling();
    highlightCurrentPage();
    setupExternalLinks();
    setupReadingTime();
    setupLazyLoading();
    setupSkipLink();
    setupKeyboardNav();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose utility functions
  window.portfolioUtils = {
    setupRevealOnScroll,
    setupLazyLoading
  };
})();
