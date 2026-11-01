// IQ Fitness – mobile menu.

// Mobile menu: opens and closes the navigation on phones.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.querySelector('.menu-toggle__label').textContent = open ? 'Close' : 'Menu';
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });

  // Close the menu after tapping a link.
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
})();
