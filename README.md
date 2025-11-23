# Personal Website - Sudaraka Jayathilaka

A modern, Medium-inspired personal website and blog built with Jekyll. Features a clean, readable design with dark mode support, responsive layouts, and optimized for SEO.

## ✨ Features

- **Medium-Inspired Design**: Clean typography, generous spacing, and elegant layouts
- **Dark Mode**: Seamless theme switching with persistent preference
- **Blog**: Full-featured blog with reading time, tags, and hero images
- **Projects Showcase**: Dedicated section for your portfolio
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Static site generation for optimal performance

## 🚀 Quick Start

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler
- Jekyll

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sudaraka94/sudaraka94.github.io.git
   cd sudaraka94.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4000`

The `--livereload` flag automatically refreshes your browser when you make changes.

## 📝 Creating Content

### Writing a Blog Post

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-01 10:00:00 +0800
categories: [category1, category2]
tags: [tag1, tag2]
author: Sudaraka Jayathilaka
excerpt: "A brief description of your post"
image: /assets/images/posts/your-post-slug/hero.jpg
---

Your content here...
```

**Hero Images**: Place post images in `assets/images/posts/[post-slug]/` and reference them in the front matter.

### Adding a Project

Create a new file in `_projects/`:

```markdown
---
layout: project
title: "Project Name"
description: "Brief description"
tech_stack: [Tech1, Tech2, Tech3]
github_url: https://github.com/username/repo
live_url: https://example.com
featured: true
---

Your project details here...
```

## 🎨 Customization

### Site Configuration

Edit `_config.yml` to update:
- Site title, description, and URL
- Author information and profile image
- Social media links
- Email address

### Styling

The design system uses CSS variables defined in `assets/css/style.css`:

```css
:root {
  --color-primary: #1a8917;
  --color-background: #ffffff;
  --font-serif: 'Charter', Georgia, serif;
  --font-sans: 'Inter', sans-serif;
  /* ... and more */
}
```

Dark mode overrides are automatically applied when `[data-theme="dark"]` is set.

### Dark Mode

The dark mode toggle is in the header. User preference is saved to `localStorage` and persists across sessions.

## 📦 Deployment

### GitHub Pages

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. GitHub Pages will automatically build and deploy your site
3. Your site will be available at `https://sudaraka94.github.io` or your custom domain

### Custom Domain

1. Add your domain to the `CNAME` file
2. Configure DNS settings with your domain provider:
   - Add an A record pointing to GitHub Pages IPs
   - Or add a CNAME record pointing to `sudaraka94.github.io`
3. Update the `url` in `_config.yml`

## 📁 Project Structure

```
.
├── _config.yml           # Site configuration
├── _includes/            # Reusable components (header, footer)
├── _layouts/             # Page templates (default, post, project)
├── _posts/               # Blog posts
├── _projects/            # Project pages
├── assets/
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript (dark mode, anchors)
│   └── images/          # Images and media
├── about.md             # About page
├── blog.md              # Blog listing page
├── index.md             # Homepage
└── projects.md          # Projects listing page
```

## 🛠️ Built With

- **[Jekyll](https://jekyllrb.com/)** - Static site generator
- **[GitHub Pages](https://pages.github.com/)** - Hosting
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Sans-serif typography
- **Charter** - Serif typography for body text

## 🎯 Design Philosophy

This site follows Medium's design principles:
- **Typography-first**: Large, readable fonts with optimal line length
- **Generous spacing**: Breathing room for content
- **Minimal UI**: Focus on content, not chrome
- **Fast and accessible**: Semantic HTML, optimized assets

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and use it as a template for your own website! If you find bugs or have suggestions, please open an issue.

## 📧 Contact

- **Website**: [sudaraka94.com](https://sudaraka94.com)
- **GitHub**: [@sudaraka94](https://github.com/sudaraka94)
- **LinkedIn**: [Sudaraka Jayathilaka](https://linkedin.com/in/sudaraka-jayathilaka)

---

Built with ❤️ using Jekyll
