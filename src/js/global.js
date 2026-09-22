document.addEventListener('DOMContentLoaded', () => {

  const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', () => {
      const isExpanded = navMenu.classList.toggle('is-active');
      navToggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    document.addEventListener('click', (event) => {
      if (!navToggleBtn.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('is-active');
        navToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
