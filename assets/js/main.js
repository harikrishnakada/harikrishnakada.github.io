// Modern Portfolio - Interactive JavaScript
// Handles animations, scroll effects, and interactivity

document.addEventListener('DOMContentLoaded', function() {

  // ===== SCROLL TO TOP BUTTON =====
  const scrollToTopBtn = document.createElement('div');
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== ANIMATE ELEMENTS ON SCROLL =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and timeline items
  document.querySelectorAll('.card, .timeline-item, .post-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ===== HEADER SHADOW ON SCROLL =====
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
      }
    });
  }

  // ===== SKILL ITEMS ANIMATION =====
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.05}s`;
    item.style.animation = 'fadeInUp 0.6s ease-out forwards';
  });

  // ===== ADD RIPPLE EFFECT TO BUTTONS =====
  document.querySelectorAll('.button, .cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // ===== TYPING EFFECT FOR HOME PAGE =====
  const homeH2 = document.querySelector('.home > h2');
  if (homeH2) {
    const text = homeH2.textContent;
    homeH2.textContent = '';
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        homeH2.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    setTimeout(typeWriter, 500);
  }

  // ===== EXTERNAL LINKS OPEN IN NEW TAB =====
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes('harikrishnakada.github.io')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ===== COPY CODE BLOCK ON CLICK =====
  document.querySelectorAll('pre code').forEach(block => {
    block.style.cursor = 'pointer';
    block.setAttribute('title', 'Click to copy');

    block.addEventListener('click', async function() {
      try {
        await navigator.clipboard.writeText(this.textContent);
        const originalBg = this.style.background;
        this.style.background = 'var(--success-color)';
        setTimeout(() => {
          this.style.background = originalBg;
        }, 300);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });

  // ===== LAZY LOAD IMAGES =====
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ===== PARALLAX EFFECT FOR HEADERS =====
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.home > h1, .home > h2');

    parallaxElements.forEach(el => {
      const speed = 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // ===== PROGRESS BAR ON SCROLL =====
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });

  // ===== ADD GRADIENT BACKGROUND TO HOME =====
  const homeSection = document.querySelector('.home');
  if (homeSection) {
    const gradientBg = document.createElement('div');
    gradientBg.style.cssText = `
      position: absolute;
      top: -50%;
      right: -50%;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.05) 50%, transparent 100%);
      z-index: -1;
      animation: float 6s ease-in-out infinite;
    `;
    homeSection.style.position = 'relative';
    homeSection.insertBefore(gradientBg, homeSection.firstChild);
  }

  // ===== CONSOLE MESSAGE =====
  console.log('%c👋 Hello there!', 'font-size: 20px; color: #667eea; font-weight: bold;');
  console.log('%cLooking for something? Feel free to reach out!', 'font-size: 14px; color: #718096;');
  console.log('%c📧 harikrishna.kada@gmail.com', 'font-size: 14px; color: #667eea;');
});
