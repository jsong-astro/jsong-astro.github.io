// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navbar-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // Fade-in animation on scroll
  const fadeEls = document.querySelectorAll('.fade-in');

  function checkFade() {
    fadeEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  checkFade();
  window.addEventListener('scroll', checkFade, { passive: true });
});
