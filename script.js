// Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Reveal on scroll for sections
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// Play the About video only while it's on screen
const aboutVideo = document.getElementById('aboutVideo');
if (aboutVideo) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const p = aboutVideo.play();
        if (p !== undefined) { p.catch(() => {}); }
      } else {
        aboutVideo.pause();
      }
    });
  }, { threshold: 0.25 });
  videoObserver.observe(aboutVideo);
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();