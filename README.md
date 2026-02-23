# harikrishnakada.github.io

Personal website built with Jekyll and hosted on GitHub Pages.

## 🚀 Quick Start

### Local Development

1. Install Ruby and Bundler (if not already installed)
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start local server
5. Visit `http://localhost:4000` in your browser

### Deployment

Simply push to the `main` branch and GitHub Pages will automatically build and deploy your site.

## 📝 Adding Content

### Creating a new blog post

1. Create a new file in `_posts/` directory
2. Name it: `YYYY-MM-DD-title.md`
3. Add front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS -0000
categories: category-name
---
```
4. Write your content in Markdown

### Customizing the site

- Edit `_config.yml` to change site settings
- Modify `assets/css/style.scss` for custom styling
- Update `index.md` and `about.md` with your information

## 🎨 Themes

The site currently uses the Minima theme. You can change it in `_config.yml`:

Popular GitHub Pages themes:
- `minima` (default, clean and simple)
- `jekyll-theme-cayman` (modern, gradient header)
- `jekyll-theme-minimal` (minimalist)
- `jekyll-theme-slate` (dark theme)
- `jekyll-theme-architect` (bold design)

## 📄 License

This project is open source and available under the MIT License.