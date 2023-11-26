function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const sr = ScrollReveal();

sr.reveal('.section__pic-container img', { origin: 'left', distance: '50px', duration: 1000 });
sr.reveal('.section__text h1', { origin: 'top', distance: '50px', duration: 1000 });
sr.reveal('.about-pic', { origin: 'right', distance: '50px', duration: 1000 });
sr.reveal('.about-containers h3', { origin: 'bottom', distance: '20px', duration: 800, interval: 300 });
sr.reveal('.experience-sub-title', { origin: 'bottom', distance: '20px', duration: 800, interval: 300 });
sr.reveal('.project-img', { origin: 'left', distance: '50px', duration: 1000 });

sr.reveal('.icon', { origin: 'bottom', distance: '20px', duration: 800, interval: 200 });
sr.reveal('.btn', { origin: 'bottom', distance: '20px', duration: 800, interval: 200 });
sr.reveal('.contact-icon', { origin: 'bottom', distance: '20px', duration: 800, interval: 200 });
sr.reveal('.nav-links li', { origin: 'bottom', distance: '20px', duration: 800, interval: 200 });
