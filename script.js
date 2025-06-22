// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
hamburger.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    navLinks.classList.toggle('open');
  }
});
// Close menu on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Smooth scroll and active link highlighting
const sections = document.querySelectorAll('section');
const navLinkEls = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let index = sections.length;
  while(--index && window.scrollY + 80 < sections[index].offsetTop) {}
  navLinkEls.forEach(link => link.classList.remove('active'));
  navLinkEls[index].classList.add('active');
}
setActiveLink();
window.addEventListener('scroll', setActiveLink);

// Optional: smooth scroll for browsers that don't support scroll-behavior
navLinkEls.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
