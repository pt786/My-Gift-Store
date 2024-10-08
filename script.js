// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Collapsible Widgets
const widgets = document.querySelectorAll('.widget h3');

widgets.forEach(widget => {
  widget.addEventListener('click', () => {
    widget.parentNode.classList.toggle('collapsed');
  });
});
