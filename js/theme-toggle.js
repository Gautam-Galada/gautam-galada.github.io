/**
 * Theme Toggle Functionality
 * Handles dark/light mode switching with localStorage persistence
 */

(function() {
  'use strict';

  const THEME_KEY = 'preferred-theme';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';

  /**
   * Get the preferred theme from localStorage or system preference
   */
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }

    return LIGHT_THEME;
  }

  /**
   * Set the theme on the document
   */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleButton(theme);
  }

  /**
   * Update the theme toggle button text/icon
   */
  function updateThemeToggleButton(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-label',
        theme === DARK_THEME ? 'Switch to light mode' : 'Switch to dark mode'
      );
      toggleBtn.textContent = theme === DARK_THEME ? '☀️' : '🌙';
    }
  }

  /**
   * Toggle between dark and light themes
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(newTheme);
  }

  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
  }

  /**
   * Set up event listeners
   */
  function setupEventListeners() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
          setTheme(e.matches ? DARK_THEME : LIGHT_THEME);
        }
      });
    }
  }

  // Initialize theme immediately to prevent flash
  initTheme();

  // Set up event listeners when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
  } else {
    setupEventListeners();
  }

  // Export for potential external use
  window.themeToggle = {
    setTheme,
    toggleTheme,
    getPreferredTheme
  };
})();
