# Design Updates - Professional Minimalist Portfolio

## Changes Made

### 1. Color Scheme (UPDATED)

**Light Mode** - White & Black:
- Background: Pure white (#ffffff)
- Primary: Black (#000000)
- Subtle grays for secondary elements

**Dark Mode** - Black & Violet:
- Background: Pure black (#000000)
- Primary: Violet (#8b5cf6)
- Accent: Light violet (#c4b5fd)

### 2. Removed Decorative Elements

- Removed emoji icons (will be replaced with SVG/images)
- Removed accent bars on cards
- Simplified borders (2px → 1px)
- Reduced animations (smoother, faster transitions)
- Cleaned up excessive decorations

### 3. Typography Updates

- Reduced font weights (900 → 700 for titles)
- Smaller, more professional font sizes
- Better hierarchy and spacing

### 4. Navigation Improvements

- Removed "Reads" page (too early-stage)
- Cleaner navigation bar
- Theme toggle now shows "Light"/"Dark" text instead of emojis

### 5. Professional Minimalism

- Cards with simple 1px borders
- Subtle hover effects (2px lift instead of 4px)
- Faster transitions (0.2s vs 0.3s)
- Clean, professional aesthetic

---

## TODO: Remove Emojis from HTML

You'll need to manually update the following files to remove emojis:

### Files to Update:
1. `index.html` - Remove all emoji usage
2. `portfolio.html` - Remove download icon, section icons
3. `projects.html` - Replace project icons with placeholders
4. `publications.html` - Remove emoji decorations
5. `articles.html` - Remove banner emoji
6. `achievements.html` - Replace achievement icons

### Search & Replace Patterns:

Replace these common emojis:
- `📧` → "Email:"
- `📱` → "Phone:"
- `📍` → "Location:"
- `🏆`, `🥇`, `🥈`, `🥉` → Use CSS classes or text
- `💻` → "GitHub"
- `💼` → "LinkedIn"
- `🎓` → "Scholar"
- `☰` → "Menu" (in menu toggle)

### Navigation Update:

Remove this line from all HTML files:
```html
<li><a href="reads.html">Reads</a></li>
```

Update menu toggle button:
```html
<!-- OLD -->
<button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
  ☰
</button>

<!-- NEW -->
<button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
  Menu
</button>
```

---

## How to Add Icons (Future)

Instead of emojis, use one of these professional approaches:

### Option 1: Simple Unicode Characters
- Use minimal unicode: • ◆ ▪ for bullets
- Use text labels: "Email", "Phone", "Location"

### Option 2: SVG Icons (Recommended)

Create an `assets/icons/` folder and add SVG files:

```html
<img src="assets/icons/email.svg" alt="Email" class="icon">
```

### Option 3: Icon Font (If needed later)

Add Font Awesome or similar (only if absolutely needed):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<i class="fas fa-envelope"></i>
```

---

## File Structure (Updated)

```
gautam-galada.github.io/
├── index.html
├── portfolio.html
├── projects.html
├── publications.html
├── articles.html
├── achievements.html
├── CONTENT_MANAGEMENT.md    # How to add articles, projects, etc.
├── DESIGN_UPDATES.md        # This file
├── README.md
├── css/
│   ├── main.css            # NEW: Professional black/white & violet theme
│   ├── typography.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── theme-toggle.js     # UPDATED: "Light"/"Dark" text instead of emojis
│   └── smooth-scroll.js
└── assets/
    ├── img/
    └── pdf/
```

---

## Quick Reference: Color Variables

Edit `css/main.css` to customize:

```css
/* Light Mode */
:root {
  --color-bg: #ffffff;        /* White background */
  --color-primary: #000000;   /* Black text/accents */
  --color-border: #e0e0e0;    /* Light gray borders */
}

/* Dark Mode */
[data-theme="dark"] {
  --color-bg: #000000;        /* Black background */
  --color-primary: #8b5cf6;   /* Violet accents */
  --color-text: #f5f5f5;      /* Light text */
}
```

---

## Testing Checklist

After removing emojis and updating navigation:

- [ ] Check all pages load correctly
- [ ] Test dark mode toggle on each page
- [ ] Verify navigation works (no Reads link)
- [ ] Check mobile menu (should say "Menu" not ☰)
- [ ] Test on mobile device or responsive mode
- [ ] Verify all social links work
- [ ] Check footer displays correctly

---

## Next Steps

1. **Remove Emojis**: Go through each HTML file and remove/replace emojis
2. **Add Real Icons** (optional): Consider adding SVG icons for professional look
3. **Test Thoroughly**: Check all pages in both light and dark mode
4. **Deploy**: Push to GitHub and verify on GitHub Pages

---

For detailed content management instructions, see [CONTENT_MANAGEMENT.md](CONTENT_MANAGEMENT.md)
