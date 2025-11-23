// Main JavaScript file for personal website

document.addEventListener('DOMContentLoaded', function () {
  // ==========================================
  // Dark Mode Logic
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const html = document.documentElement;

  // Check saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Toggle icons
      if (sunIcon && moonIcon) {
        sunIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
        moonIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
      }
    });
  }

  // ==========================================
  // Copy Page Link Logic
  // ==========================================
  const copyLinkBtn = document.getElementById('copy-link-btn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);

        // Visual feedback
        const originalIcon = copyLinkBtn.innerHTML;
        copyLinkBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`; // Checkmark

        setTimeout(() => {
          copyLinkBtn.innerHTML = originalIcon;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    });
  }

  // ==========================================
  // Heading Anchor Links
  // ==========================================
  const headings = document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6');

  headings.forEach(heading => {
    if (heading.id) {
      const anchor = document.createElement('a');
      anchor.className = 'anchor-link';
      anchor.href = '#' + heading.id;
      anchor.setAttribute('aria-label', 'Link to this section');
      anchor.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;

      // Click to copy link
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const url = window.location.origin + window.location.pathname + '#' + heading.id;
        navigator.clipboard.writeText(url).then(() => {
          // Optional: Show a small tooltip or feedback
          // For now, just updating the URL hash without jumping (optional)
          history.pushState(null, null, '#' + heading.id);
        });
      });

      heading.insertBefore(anchor, heading.firstChild);
    }
  });

  // ==========================================
  // Existing Functionality
  // ==========================================

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Skip if it's our new anchor link (handled above)
      if (this.classList.contains('anchor-link')) return;

      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL hash
        history.pushState(null, null, targetId);
      }
    });
  });

  // Add active class to current nav item
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.page-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });

  // Close mobile menu when clicking outside
  const navTrigger = document.getElementById('nav-trigger');

  if (navTrigger) {
    document.addEventListener('click', function (event) {
      const isClickInsideNav = event.target.closest('.site-nav');
      // Also check if click is on the trigger label
      const isClickOnLabel = event.target.closest('label[for="nav-trigger"]');

      if (!isClickInsideNav && !isClickOnLabel && navTrigger.checked) {
        navTrigger.checked = false;
      }
    });
  }

  // Add copy button to code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    // Check if button already exists (to prevent duplicates on re-runs if any)
    if (block.parentElement.querySelector('.copy-button')) return;

    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(block.textContent);
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    });
    block.parentElement.style.position = 'relative';
    block.parentElement.appendChild(button);
  });
});
