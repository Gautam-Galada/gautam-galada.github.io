# Content Management Guide

This guide explains how to manage all content on your portfolio website. You have complete control over every aspect of your site.

## Table of Contents

1. [Adding Articles](#adding-articles)
2. [Managing Projects](#managing-projects)
3. [Adding Publications](#adding-publications)
4. [Updating Portfolio/CV](#updating-portfoliocv)
5. [Managing Achievements](#managing-achievements)
6. [Customizing Colors & Styles](#customizing-colors--styles)

---

## Adding Articles

Articles are managed in `articles.html`. Here's how to add new articles:

### Step 1: Open articles.html

Navigate to the file and find the section with commented-out article templates (around line 120).

### Step 2: Add Your Article

Uncomment and customize this template:

```html
<div class="article-card reveal">
  <div class="article-date">January 15, 2025</div>
  <span class="article-category">Machine Learning</span>

  <h2 class="publication-title">
    Your Article Title Here
  </h2>

  <div class="card-description" style="margin-top: var(--spacing-sm);">
    <p>
      Your article description/excerpt goes here. This should be a compelling
      summary that encourages readers to click through.
    </p>
  </div>

  <div class="project-tags" style="margin-top: var(--spacing-sm);">
    <span class="badge">Tag1</span>
    <span class="badge">Tag2</span>
    <span class="badge">Tag3</span>
  </div>

  <div style="margin-top: var(--spacing-sm);">
    <a href="articles/your-article-slug.html" class="btn btn-primary">Read Article</a>
  </div>
</div>
```

### Step 3: Create the Article Page

Create a new HTML file in an `articles/` directory (you'll need to create this):

```bash
mkdir articles
```

Create your article file: `articles/your-article-slug.html`

Use this template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Article Title | Gautam Galada</title>
  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="../css/typography.css">
  <link rel="stylesheet" href="../css/animations.css">
</head>
<body>
  <nav role="navigation">
    <div class="nav-container">
      <a href="../index.html" class="nav-brand">Gautam Galada</a>
      <button class="menu-toggle" aria-label="Toggle navigation">☰</button>
      <ul class="nav-links">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../portfolio.html">Portfolio</a></li>
        <li><a href="../projects.html">Projects</a></li>
        <li><a href="../publications.html">Publications</a></li>
        <li><a href="../articles.html">Articles</a></li>
        <li><a href="../achievements.html">Achievements</a></li>
        <li><button id="theme-toggle" class="theme-toggle">Dark</button></li>
      </ul>
    </div>
  </nav>

  <main id="main-content">
    <div class="content-wrapper">
      <article class="container">
        <header class="article-header">
          <h1 class="article-title">Your Article Title</h1>
          <div class="article-meta">
            <span class="article-meta-item">January 15, 2025</span>
            <span class="article-meta-item">5 min read</span>
          </div>
        </header>

        <div class="article-content">
          <h2>Introduction</h2>
          <p>Your article content goes here...</p>

          <h2>Section 2</h2>
          <p>More content...</p>

          <h2>Conclusion</h2>
          <p>Final thoughts...</p>
        </div>
      </article>
    </div>
  </main>

  <footer>
    <div class="footer-content">
      <p class="footer-text">&copy; 2025 Gautam Galada</p>
    </div>
  </footer>

  <script src="../js/theme-toggle.js"></script>
  <script src="../js/smooth-scroll.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>
```

---

## Managing Projects

### Adding a New Project

Open `projects.html` and add a new project card:

```html
<div class="project-card reveal" data-category="ml research">
  <span class="project-status status-current">In Progress</span>
  <!-- Or: <span class="project-status status-completed">Completed</span> -->

  <div class="project-image">🔬</div>
  <!-- Replace with actual image later -->

  <h3 class="project-title">Your Project Name</h3>
  <div class="project-meta">Time Period | Location</div>

  <div class="project-description">
    <p>
      Detailed description of your project, methodologies used, and results achieved.
    </p>
  </div>

  <div class="project-tags">
    <span class="badge">Python</span>
    <span class="badge">PyTorch</span>
    <span class="badge">ML</span>
  </div>

  <div class="project-links">
    <a href="https://github.com/yourusername/repo" class="btn btn-primary">View Code</a>
    <a href="#" class="btn btn-secondary">View Demo</a>
  </div>
</div>
```

### Project Categories

The `data-category` attribute is used for filtering. Available filters:
- `all` - Shows in all filter views
- `current` - Currently in progress
- `research` - Research projects
- `ml` - Machine Learning projects
- `nlp` - NLP projects

You can add multiple categories: `data-category="ml nlp research"`

### Project Status Badges

```html
<!-- For ongoing projects -->
<span class="project-status status-current">In Progress</span>

<!-- For completed projects -->
<span class="project-status status-completed">Completed</span>
```

---

## Adding Publications

Open `publications.html` and add to the appropriate year section:

```html
<div class="publication-card reveal">
  <span class="pub-year">2025</span>
  <span class="pub-status status-published">Published</span>
  <!-- Other statuses: status-in-press, status-preprint -->

  <h3 class="publication-title">
    Your Paper Title
  </h3>

  <p class="publication-authors">
    <strong>Gautam Galada</strong>, Co-Author 1, Co-Author 2
  </p>

  <p class="publication-venue">
    Conference/Journal Name • Pages or DOI
  </p>

  <div class="card-description" style="margin-top: var(--spacing-sm);">
    <p>
      Abstract or description of your paper.
    </p>
  </div>

  <div class="project-tags" style="margin-top: var(--spacing-sm);">
    <span class="badge">Machine Learning</span>
    <span class="badge">NLP</span>
  </div>

  <div style="margin-top: var(--spacing-sm); display: flex; gap: var(--spacing-sm);">
    <a href="link-to-paper.pdf" class="btn btn-primary">View Paper</a>
    <a href="https://doi.org/..." class="btn btn-secondary">DOI</a>
  </div>
</div>
```

### Creating New Year Sections

If you need to add a new year:

```html
<h2 style="color: var(--color-primary); font-size: 2rem; margin: 3rem 0 2rem 0; border-bottom: 2px solid var(--color-border); padding-bottom: 0.5rem;">
  2026
</h2>

<!-- Add publication cards here -->
```

---

## Updating Portfolio/CV

### Editing Work Experience

Open `portfolio.html` and find the timeline section for experience. Add new positions:

```html
<div class="timeline-item reveal">
  <div class="timeline-date">Month Year - Month Year</div>
  <h3 class="timeline-title">Your Job Title</h3>
  <div class="timeline-subtitle">Company Name, Location</div>
  <div class="timeline-content">
    <ul>
      <li>Achievement or responsibility 1</li>
      <li>Achievement or responsibility 2</li>
      <li>Achievement or responsibility 3</li>
    </ul>
  </div>
</div>
```

### Adding Education

Similar structure in the Education section:

```html
<div class="timeline-item reveal">
  <div class="timeline-date">Aug 2025 - Present</div>
  <h3 class="timeline-title">Degree Name</h3>
  <div class="timeline-subtitle">University Name, Location</div>
  <div class="timeline-content">
    <p><strong>GPA: 4.0/4.0</strong></p>
    <p><strong>Coursework:</strong> Course 1, Course 2, Course 3</p>
  </div>
</div>
```

### Updating Skills

Find the Technical Skills section and update the badges:

```html
<div class="card reveal">
  <h3 class="card-title">Skill Category</h3>
  <div class="card-description">
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
      <span class="badge">Skill 1</span>
      <span class="badge">Skill 2</span>
      <span class="badge">Skill 3</span>
    </div>
  </div>
</div>
```

---

## Managing Achievements

Open `achievements.html` to add new achievements:

### Adding Competition Wins

```html
<div class="achievement-card reveal">
  <div class="achievement-icon">🏆</div>

  <div class="achievement-content">
    <span class="achievement-rank rank-first">1st Place Winner</span>
    <!-- rank-first (gold), rank-second (silver), rank-third (bronze) -->

    <h3 class="achievement-title">Competition Name</h3>
    <div class="achievement-event">Event Description</div>
    <div class="achievement-meta">Location • Year</div>

    <div class="achievement-description">
      <p>
        Description of what you achieved and its significance.
      </p>
      <div style="margin-top: var(--spacing-sm);">
        <span class="badge">Tag1</span>
        <span class="badge">Tag2</span>
      </div>
    </div>
  </div>
</div>
```

---

## Customizing Colors & Styles

### Changing Color Scheme

Open `css/main.css` and edit the CSS variables at the top:

#### Light Mode Colors (lines 7-16):

```css
:root {
  --color-bg: #ffffff;           /* Background color */
  --color-surface: #fafafa;      /* Card backgrounds */
  --color-primary: #000000;      /* Primary text/accents */
  --color-secondary: #333333;    /* Secondary elements */
  --color-accent: #666666;       /* Accent color */
  --color-text: #000000;         /* Main text */
  --color-text-secondary: #555555; /* Secondary text */
  --color-border: #e0e0e0;       /* Borders */
  --color-hover: #f5f5f5;        /* Hover states */
}
```

#### Dark Mode Colors (lines 33-43):

```css
[data-theme="dark"] {
  --color-bg: #000000;           /* Background - pure black */
  --color-surface: #0a0a0a;      /* Slightly lighter surface */
  --color-primary: #8b5cf6;      /* Violet primary color */
  --color-secondary: #a78bfa;    /* Lighter violet */
  --color-accent: #c4b5fd;       /* Light violet accent */
  --color-text: #f5f5f5;         /* Main text color */
  --color-text-secondary: #a0a0a0; /* Secondary text */
  --color-border: #1a1a1a;       /* Dark borders */
  --color-hover: #0f0f0f;        /* Hover background */
}
```

### Customizing Typography

Edit `css/typography.css` for font sizes, weights, and styles.

### Adjusting Spacing

In `css/main.css`, modify the spacing variables (lines 18-23):

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
```

---

## Tips & Best Practices

### Content Guidelines

1. **Keep it professional** - No emojis in content (except for placeholder icons that you'll replace)
2. **Be specific** - Use concrete numbers and achievements
3. **Update regularly** - Keep your projects and publications current
4. **Test responsively** - Check on mobile after making changes

### File Organization

```
gautam-galada.github.io/
├── articles/              # Individual article pages
│   ├── article-1.html
│   └── article-2.html
├── assets/
│   ├── img/              # Images
│   └── pdf/              # PDFs (CV, papers)
├── css/                  # Stylesheets
├── js/                   # JavaScript files
├── index.html            # Main pages
├── portfolio.html
├── projects.html
├── publications.html
├── articles.html
└── achievements.html
```

### Testing Your Changes

1. Open the HTML file in your browser
2. Test dark mode toggle
3. Test on mobile (resize browser or use DevTools)
4. Check all links work
5. Verify navigation works

### Deploying Changes

```bash
git add .
git commit -m "Add new article/project/publication"
git push origin main
```

Your changes will be live on GitHub Pages within a few minutes!

---

## Need Help?

If you encounter issues:

1. Check the browser console for errors (F12)
2. Validate your HTML at https://validator.w3.org/
3. Make sure all opening tags have closing tags
4. Verify file paths are correct (especially for articles/)

---

**You have complete control over every aspect of your website. All files are plain HTML/CSS/JavaScript - no build tools or frameworks required!**
