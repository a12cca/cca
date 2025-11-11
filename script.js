// Reduced motion check
const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// IntersectionObserver for reveal
(function () {
  if (prefersReduced) return; // skip reveals for reduced motion users

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade').forEach((el) => io.observe(el));
})();

// Sticky nav state on scroll
(function () {
  const nav = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 6) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Footer year
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Contact form -> mailto
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const body = [
      'Name: ' + (data.get('name') || ''),
      'Email: ' + (data.get('email') || ''),
      'Company: ' + (data.get('company') || ''),
      'Project: ' + (data.get('project') || ''),
      'Links: ' + (data.get('links') || '')
    ].join('%0A');

    window.location.href = 'mailto:funding@cca.vc?subject=Funding%20request&body=' + body;
  });
})();
