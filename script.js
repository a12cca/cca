const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal with slight stagger
(function () {
  if (prefersReduced) return;
  const els = Array.from(document.querySelectorAll('.fade'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const i = els.indexOf(entry.target);
      entry.target.style.transitionDelay = `${Math.min(i * 40, 240)}ms`; // soft stagger
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.18, rootMargin: '20px' });
  els.forEach(el => io.observe(el));
})();

// Sticky nav state
(function () {
  const nav = document.getElementById('navbar');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Footer year
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Contact mailto
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
