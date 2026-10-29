// IQ Fitness – small scripts for the menu and the booking form.

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

// Booking form: opens WhatsApp with the visitor's details ready to send.
(function () {
  var form = document.getElementById('book-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg =
      'Hi, I would like to book a free class.\n' +
      'Name: ' + form.elements.name.value + '\n' +
      'Mobile: ' + form.elements.phone.value + '\n' +
      'Class: ' + form.elements.venue.value;
    window.location.href = 'https://wa.me/447530049333?text=' + encodeURIComponent(msg);
  });
})();
