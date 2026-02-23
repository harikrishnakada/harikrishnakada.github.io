# 🚀 Hari Krishna Kada - Professional Portfolio

Modern, animated portfolio website built with Jekyll, featuring advanced UI/UX, smooth animations, and professional styling.

**Live Site**: [harikrishnakada.github.io](https://harikrishnakada.github.io)

## ✨ Features

### 🎨 Modern Design
- **Gradient color scheme** with purple-blue theme
- **Card-based layouts** for projects and achievements
- **Timeline design** for experience section
- **Animated skill badges** with hover effects
- **Responsive design** - mobile-first approach

### 🎭 Advanced Animations
- **Fade-in animations** on scroll
- **Smooth transitions** and hover effects
- **Parallax effects** for hero section
- **Typing effect** for headings
- **Progress bar** showing scroll position
- **Floating background gradients**

### 🛠️ Interactive Elements
- **Scroll-to-top button** with smooth scrolling
- **Animated navigation** with underline effects
- **Clickable code blocks** with copy functionality
- **Ripple effects** on buttons
- **Lazy loading** for images
- **Dynamic content reveal** on scroll

### 📱 Fully Responsive
- Optimized for desktop, tablet, and mobile
- Touch-friendly interactions
- Adaptive layouts

## 🚀 Quick Start

### Prerequisites

1. **Install Ruby** (if not already installed)
   - Download [RubyInstaller for Windows](https://rubyinstaller.org/downloads/)
   - Get Ruby+Devkit 3.2.x (x64)
   - Run `ridk install` and choose option 3

2. **Verify installation**
   ```bash
   ruby --version
   gem --version
   ```

### Local Development

1. **Clone this repository**
   ```bash
   git clone https://github.com/harikrishnakada/harikrishnakada.github.io.git
   cd harikrishnakada.github.io
   ```

2. **Install dependencies**
   ```bash
   gem install bundler jekyll
   bundle install
   ```

3. **Run local server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View your site**
   Open `http://localhost:4000` in your browser

### Advanced Server Options

```bash
# With live reload
bundle exec jekyll serve --livereload

# With live reload and auto-open browser
bundle exec jekyll serve --livereload --open-url

# Custom port
bundle exec jekyll serve --port 4001

# Force polling (for Windows file watching issues)
bundle exec jekyll serve --force_polling
```

## 📁 Site Structure

```
harikrishnakada.github.io/
├── _config.yml              # Site configuration
├── _layouts/
│   └── default.html         # Custom layout with JS
├── _posts/                  # Blog posts
│   └── 2026-02-22-welcome.md
├── assets/
│   ├── css/
│   │   └── style.scss      # Advanced CSS with animations
│   └── js/
│       └── main.js         # Interactive JavaScript
├── index.md                # Homepage
├── about.md                # About page
├── experience.md           # Work experience (timeline)
├── projects.md             # Featured projects (cards)
├── skills.md               # Technical skills (badges)
├── certifications.md       # Certifications & achievements
├── contact.md              # Contact information
├── Gemfile                 # Ruby dependencies
└── .gitignore             # Git ignore rules
```

## 🎨 Customization

### Change Colors

Edit `assets/css/style.scss` and modify the color variables:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... more colors */
}
```

### Add New Pages

1. Create `your-page.md` in the root directory
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: Your Page
   permalink: /your-page/
   ---
   ```
3. Add to navigation in `_config.yml`:
   ```yaml
   header_pages:
     - your-page.md
   ```

### Create Blog Posts

1. Create file in `_posts/` directory
2. Name it: `YYYY-MM-DD-title.md`
3. Add front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD HH:MM:SS -0000
   categories: category1 category2
   ---
   ```

## 🚢 Deployment

### GitHub Pages (Automatic)

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`

3. **View your site**
   - Your site will be live at `https://harikrishnakada.github.io`
   - Usually takes 2-5 minutes to deploy

## 🎯 Key Pages

- **Home** (`/`) - Professional introduction and highlights
- **About** (`/about`) - Detailed background and journey
- **Experience** (`/experience`) - Timeline of work history
- **Projects** (`/projects`) - Showcase of major projects
- **Skills** (`/skills`) - Technical expertise with badges
- **Certifications** (`/certifications`) - Certifications and achievements
- **Contact** (`/contact`) - Ways to get in touch

## 🛠️ Technologies Used

- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting
- **Minima Theme** - Base theme (heavily customized)
- **SCSS** - Advanced styling
- **Vanilla JavaScript** - Interactive features
- **Markdown** - Content writing

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it and create your own!

## 📧 Contact

- **Email**: harikrishna.kada@gmail.com
- **LinkedIn**: [linkedin.com/in/hari-krishna-kada](https://www.linkedin.com/in/hari-krishna-kada/)
- **GitHub**: [github.com/harikrishnakada](https://github.com/harikrishnakada)

---

Made with ❤️ using Jekyll and GitHub Pages