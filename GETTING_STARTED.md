# Getting Started with Your Professional Portfolio

## What's Been Done ✓

Your website has been updated to a **professional, minimalist design** with complete control over all content.

### New Color Scheme

**Light Mode**: Clean white background with black text
**Dark Mode**: Pure black with violet accents (#8b5cf6)

The design is now:
- More professional and academic
- Minimalist (removed decorative elements)
- Faster (simplified animations)
- Cleaner (thinner borders, better spacing)

---

## Important Files

### 📖 Documentation
1. **CONTENT_MANAGEMENT.md** - **READ THIS FIRST**
   - How to add articles
   - How to add projects
   - How to add publications
   - How to update your CV
   - How to customize colors

2. **DESIGN_UPDATES.md** - Design changes and next steps
3. **README.md** - General project information

---

## What You Need to Do

### Step 1: Remove Emojis from HTML Files

The HTML files still contain emojis. You need to remove them manually:

**Files to edit:**
- `index.html`
- `portfolio.html`
- `projects.html`
- `publications.html`
- `articles.html`
- `achievements.html`

**Common replacements:**
```
📧  → Email:  or just remove
📱  → Phone:  or just remove
📍  → remove entirely
🏆  → remove (use CSS styling instead)
💻  → GitHub
💼  → LinkedIn
☰   → Menu
```

**Example - Footer section (appears in all files):**

Before:
```html
<a href="mailto:gautamgalada1105@gmail.com" class="social-link">
  📧 gautamgalada1105@gmail.com
</a>
```

After:
```html
<a href="mailto:gautamgalada1105@gmail.com" class="social-link">
  Email
</a>
```

### Step 2: Remove "Reads" Link from Navigation

In all 6 HTML files, find and DELETE this line:
```html
<li><a href="reads.html">Reads</a></li>
```

### Step 3: Update Menu Toggle Button

In all HTML files, find:
```html
<button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
  ☰
</button>
```

Change to:
```html
<button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
  Menu
</button>
```

---

## How to Add Articles (Your #1 Question)

### Quick Start:

1. **Create articles folder** (if it doesn't exist):
   ```bash
   mkdir articles
   ```

2. **Add article card to `articles.html`** (around line 120):
   ```html
   <div class="article-card reveal">
     <div class="article-date">January 20, 2025</div>
     <span class="article-category">Machine Learning</span>

     <h2 class="publication-title">
       Your Article Title
     </h2>

     <div class="card-description">
       <p>Brief description of your article...</p>
     </div>

     <div class="project-tags">
       <span class="badge">ML</span>
       <span class="badge">Python</span>
     </div>

     <div>
       <a href="articles/my-article.html" class="btn btn-primary">Read Article</a>
     </div>
   </div>
   ```

3. **Create the article page** (`articles/my-article.html`):

   See the full template in CONTENT_MANAGEMENT.md section "Adding Articles"

**For complete instructions**, see `CONTENT_MANAGEMENT.md` → "Adding Articles"

---

## Complete Control - What You Can Edit

### Colors (`css/main.css`)
Lines 7-16 (light mode) and 33-43 (dark mode):
```css
--color-bg: #ffffff;      /* Background */
--color-primary: #000000; /* Main color */
/* etc... */
```

### Content (HTML files)
- Every page is plain HTML
- No build process
- Direct editing
- Immediate results

### Styling (`css/` folder)
- `main.css` - Layout, colors, components
- `typography.css` - Fonts and text
- `animations.css` - Transitions and effects

### Functionality (`js/` folder)
- `theme-toggle.js` - Dark/light mode
- `smooth-scroll.js` - Smooth navigation
- `main.js` - Mobile menu, animations

---

## Testing Your Changes

### Local Testing:
```bash
# Start a local server
python -m http.server 8000

# Or with Node.js
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

### Check:
- [ ] Dark mode toggle works
- [ ] Navigation links work
- [ ] Mobile menu works
- [ ] No emojis remain
- [ ] All content displays correctly

---

## Deploying to GitHub Pages

```bash
git add .
git commit -m "Remove emojis and update navigation"
git push origin main
```

Your site will be live at: `https://gautam-galada.github.io`

---

## Quick Reference

### Project Structure:
```
gautam-galada.github.io/
├── index.html          ← Home page
├── portfolio.html      ← Your CV
├── projects.html       ← Technical projects
├── publications.html   ← Research papers
├── articles.html       ← Blog posts
├── achievements.html   ← Awards
├── articles/           ← Individual article pages (create this)
├── css/               ← Styles
├── js/                ← Scripts
└── assets/            ← Images, PDFs

Documentation:
├── CONTENT_MANAGEMENT.md  ← How to add content
├── DESIGN_UPDATES.md      ← Design changes
├── GETTING_STARTED.md     ← This file
└── README.md              ← General info
```

### Navigation Structure (after removing Reads):
- Home
- Portfolio
- Projects
- Publications
- Articles
- Achievements

---

## Need to Customize More?

### Change Violet to Another Color:

Edit `css/main.css`, line 37:
```css
[data-theme="dark"] {
  --color-primary: #8b5cf6;  /* Change this hex code */
}
```

Popular alternatives:
- Blue: `#3b82f6`
- Green: `#10b981`
- Red: `#ef4444`
- Teal: `#14b8a6`

### Adjust Spacing:

Edit spacing variables in `css/main.css`, lines 18-23.

### Change Fonts:

Edit `css/typography.css` - all font-related styles are there.

---

## Summary

**Done:**
- ✅ Professional black & white / violet color scheme
- ✅ Minimalist design (removed decorations)
- ✅ Complete documentation for content management
- ✅ Theme toggle updated (no emojis)
- ✅ Reads page removed

**You Need To Do:**
1. Remove emojis from HTML files (see DESIGN_UPDATES.md)
2. Remove "Reads" link from navigation in all files
3. Update menu toggle emoji to "Menu" text

**After That:**
- Add your articles using the guide in CONTENT_MANAGEMENT.md
- Customize colors if desired
- Deploy to GitHub Pages

---

## Questions?

Check these files for detailed guides:
1. **CONTENT_MANAGEMENT.md** - All content operations
2. **DESIGN_UPDATES.md** - Design customization
3. **README.md** - Technical overview

**You have 100% control** - every file is plain HTML/CSS/JS. No frameworks, no build tools, no complexity.

---

**Your professional portfolio is ready to go! 🚀**
