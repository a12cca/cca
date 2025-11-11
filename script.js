// Smooth “in-view” reveal using Intersection Observer
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.fade').forEach(function (el) {
    observer.observe(el);
  });
})();

// Sticky nav subtle state on scroll
(function () {
  var nav = document.getElementById('navbar');
  var onScroll = function () {
    if (window.scrollY > 6) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Year in footer
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Contact form mailto handler
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);

    var body = [
      'Name: ' + (data.get('name') || ''),
      'Email: ' + (data.get('email') || ''),
      'Company: ' + (data.get('company') || ''),
      'Project: ' + (data.get('project') || ''),
      'Links: ' + (data.get('links') || '')
    ].join('%0A');

    // opens default mail client
    window.location.href = 'mailto:funding@cca.vc?subject=Funding%20request&body=' + body;
  });
})();
