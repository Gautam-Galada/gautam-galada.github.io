# Gautam Galada - Personal Portfolio Website

A modern, minimalist portfolio website for a PhD candidate in Computer Science & AI, hosted on GitHub Pages.

## 🌐 Live Website

Visit the website at: [https://gautam-galada.github.io](https://gautam-galada.github.io)

## 📋 About

This is a static portfolio website showcasing:
- Current research and academic work
- Professional experience and education
- Technical projects with detailed descriptions
- Research publications
- Articles and blog posts
- Awards and achievements
- Book reviews and recommendations

## 🎨 Design Philosophy

The website follows a **brutalist academic aesthetic** with:
- Clean, minimalist design
- Professional color palette (deep blues, muted grays, gold accents)
- No external frameworks or dependencies
- Pure HTML, CSS, and vanilla JavaScript
- Fully responsive and mobile-friendly
- Dark mode support
- WCAG AA accessibility compliant
- SEO optimized

## 🗂️ Project Structure

```
gautam-galada.github.io/
├── index.html              # Home page
├── portfolio.html          # Complete CV and experience
├── projects.html           # Technical projects
├── publications.html       # Research publications
├── articles.html           # Blog posts and articles
├── achievements.html       # Awards and achievements
├── reads.html             # Book reviews and recommendations
├── css/
│   ├── main.css           # Main styles and layout
│   ├── typography.css     # Typography and text styles
│   └── animations.css     # Animations and transitions
├── js/
│   ├── main.js            # Core functionality
│   ├── theme-toggle.js    # Dark mode implementation
│   └── smooth-scroll.js   # Smooth scrolling and navigation
├── assets/
│   ├── img/               # Images and photos
│   └── pdf/               # Downloadable CV and documents
└── README.md
```

## 🚀 Features

### Core Features
- ✅ **7 Different Pages** with unique content and layouts
- ✅ **Dark/Light Mode Toggle** with localStorage persistence
- ✅ **Smooth Scrolling** navigation
- ✅ **Responsive Design** - works on all devices
- ✅ **Accessibility** - WCAG AA compliant with ARIA labels
- ✅ **SEO Optimized** - meta tags, Open Graph, Twitter Cards
- ✅ **No Build Tools** - pure static files, ready to deploy

### Interactive Elements
- Reveal on scroll animations
- Mobile-friendly hamburger menu
- Project filtering on projects page
- Tab navigation on reads page
- Scroll-to-top button
- Active navigation link highlighting
- Smooth page transitions

### Performance
- Minimal JavaScript (~3KB total)
- Optimized CSS (~15KB total)
- No external dependencies
- Fast loading times
- Efficient animations with CSS transforms

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks or libraries
- **GitHub Pages** - Free hosting

## 📦 Deployment Instructions

### Automatic Deployment (GitHub Pages)

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/Gautam-Galada/gautam-galada.github.io.git
   cd gautam-galada.github.io
   ```

2. **Make your changes**
   - Update personal information in all HTML files
   - Replace profile photo in `assets/img/`
   - Add your CV PDF to `assets/pdf/`
   - Customize colors in `css/main.css` if desired

3. **Commit and push changes**
   ```bash
   git add .
   git commit -m "Update portfolio website"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select branch: `main`
   - Click "Save"
   - Your site will be live at `https://YOUR-USERNAME.github.io`

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gautam-Galada/gautam-galada.github.io.git
   cd gautam-galada.github.io
   ```

2. **Open with a local server**

   Using Python 3:
   ```bash
   python -m http.server 8000
   ```

   Using Node.js (with http-server):
   ```bash
   npx http-server -p 8000
   ```

3. **Visit in browser**
   ```
   http://localhost:8000
   ```

### Customization Guide

#### Update Personal Information
Edit the following files and replace with your information:
- All `.html` files - Update name, contact info, content
- `css/main.css` - Adjust colors if desired
- `assets/img/` - Add your profile photo
- `assets/pdf/` - Add your CV

#### Color Customization
Edit CSS variables in `css/main.css`:
```css
:root {
  --color-primary: #1e3a5f;     /* Deep blue */
  --color-secondary: #2c5282;   /* Secondary blue */
  --color-accent: #d4af37;      /* Gold accent */
  /* ... other colors ... */
}
```

#### Dark Mode Colors
```css
[data-theme="dark"] {
  --color-bg: #0f1419;
  --color-surface: #1a1f2e;
  /* ... other dark mode colors ... */
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## ♿ Accessibility

This website is built with accessibility in mind:
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Skip to main content link
- Sufficient color contrast (WCAG AA)
- Responsive text sizing
- Screen reader friendly

## 🔧 Maintenance

### Adding New Projects
Edit `projects.html` and add a new project card:
```html
<div class="project-card reveal" data-category="your-category">
  <!-- Project content -->
</div>
```

### Adding New Publications
Edit `publications.html` and add a new publication card with appropriate year section.

### Adding New Articles
Uncomment and customize the article template in `articles.html`.

### Adding New Book Reviews
Add a new read card in `reads.html` under the appropriate tab.

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Contact

**Gautam Galada**
- Email: gautamgalada1105@gmail.com
- Phone: +1 716-398-0499
- Location: Denton, Texas
- GitHub: [Gautam-Galada](https://github.com/Gautam-Galada)
- LinkedIn: [gautam-galada](https://www.linkedin.com/in/gautam-galada)

## 🙏 Acknowledgments

Built with modern web standards and best practices. No frameworks, just clean code.

---

**Note:** This website is built without any build tools or external dependencies. Simply clone and deploy!

*Last updated: November 2024*
