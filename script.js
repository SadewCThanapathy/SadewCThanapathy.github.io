// grab the nav element by its id
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  // "scrolled" class once scrolled past 20px,
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// grab every element on the page with the class "reveal"
const revealEls = document.querySelectorAll('.reveal');
// create an observer that watches elements and calls when their visibility changes
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // check if this element is currently visible in the viewport
    if (entry.isIntersecting) {
      // add the "visible" class
      entry.target.classList.add('visible');
      // stop watching the element
      revealObserver.unobserve(entry.target);
    }
  });
// threshold 0.15 callback once 15% of the element is on screen
}, { threshold: 0.15 });
// start observing every .reveal element found earlier
revealEls.forEach(el => revealObserver.observe(el));

// grab the about section video by its id
const aboutVideo = document.getElementById('aboutVideo');
if (aboutVideo) {
  // separate observer for play/pause 
  const videoObserver = new IntersectionObserver((entries) => {
    // an "entry" exists for each observed element 
    entries.forEach(entry => {
      // check if the video is currently visible in the viewport
      if (entry.isIntersecting) {
        // attempt to play the video, .play() 
        const p = aboutVideo.play();
        // some browsers like safari may reject the play 
        if (p !== undefined) { p.catch(() => {}); }
      } else {
        // pause the video once 
        aboutVideo.pause();
      }
    });
  // threshold 0.25 play/pause triggers once 25% of the video is on screen
  }, { threshold: 0.25 });
  // start observing the video element
  videoObserver.observe(aboutVideo);
}

// fill in the footer's empty #year span with the current year
document.getElementById('year').textContent = new Date().getFullYear();