/**
 * Smooth Scroll Functionality
 * Handles smooth scrolling for anchor links and scroll-to-top
 */

(function() {
  'use strict';

  /**
   * Smooth scroll to a target element
   */
  function scrollToElement(element, offset = 80) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  /**
   * Handle anchor link clicks
   */
  function handleAnchorClick(event) {
    const href = event.currentTarget.getAttribute('href');

    // Only handle internal anchor links
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        scrollToElement(targetElement);

        // Update URL without scrolling
        if (history.pushState) {
          history.pushState(null, null, href);
        }

        // Update focus for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    }
  }

  /**
   * Set up smooth scrolling for all anchor links
   */
  function setupSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });
  }

  /**
   * Create and manage scroll-to-top button
   */
  function setupScrollToTop() {
    // Create scroll-to-top button if it doesn't exist
    let scrollBtn = document.getElementById('scroll-to-top');

    if (!scrollBtn) {
      scrollBtn = document.createElement('button');
      scrollBtn.id = 'scroll-to-top';
      scrollBtn.className = 'scroll-to-top';
      scrollBtn.innerHTML = '↑';
      scrollBtn.setAttribute('aria-label', 'Scroll to top');
      scrollBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: #fff;
        border: 2px solid var(--color-primary);
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        font-weight: bold;
      `;
      document.body.appendChild(scrollBtn);
    }

    // Show/hide button based on scroll position
    function toggleScrollButton() {
      if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    }

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Add hover effect
    scrollBtn.addEventListener('mouseenter', () => {
      scrollBtn.style.backgroundColor = 'transparent';
      scrollBtn.style.color = 'var(--color-primary)';
    });

    scrollBtn.addEventListener('mouseleave', () => {
      scrollBtn.style.backgroundColor = 'var(--color-primary)';
      scrollBtn.style.color = '#fff';
    });

    window.addEventListener('scroll', toggleScrollButton);
    toggleScrollButton(); // Initial check
  }

  /**
   * Add active state to navigation links based on scroll position
   */
  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    function updateActiveLink() {
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }

    if (sections.length > 0 && navLinks.length > 0) {
      window.addEventListener('scroll', updateActiveLink);
      updateActiveLink(); // Initial check
    }
  }

  /**
   * Initialize all scroll-related functionality
   */
  function init() {
    setupSmoothScroll();
    setupScrollToTop();
    setupScrollSpy();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for potential external use
  window.smoothScroll = {
    scrollToElement
  };
})();
