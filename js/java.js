// ══════════════════════════════════════════
// NAV JS — burger toggle + mobile accordion dropdowns
// ══════════════════════════════════════════
const nBurger  = document.getElementById('nBurger');
const nOverlay = document.getElementById('nOverlay');
const nOvClose = document.getElementById('nOvClose');

function openOverlay(){
  nOverlay.classList.add('open');
  nBurger.classList.add('open');
  nBurger.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
}
function closeOverlay(){
  nOverlay.classList.remove('open');
  nBurger.classList.remove('open');
  nBurger.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}

nBurger.addEventListener('click', () => {
  nOverlay.classList.contains('open') ? closeOverlay() : openOverlay();
});
nOvClose.addEventListener('click', closeOverlay);

// Accordion behavior for "Who We Are" / "What We Do" on mobile
document.querySelectorAll('.n-ov-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault(); // tap opens submenu instead of navigating
    const parent = toggle.closest('.n-ov-drop');
    const wasOpen = parent.classList.contains('open');
    document.querySelectorAll('.n-ov-drop').forEach(d => d.classList.remove('open'));
    if (!wasOpen) parent.classList.add('open');
  });
});


// ══════════════════════════════════════════
// HIDE HEADER ON SCROLL DOWN, SHOW ON SCROLL UP
// ══════════════════════════════════════════
let lastScrollY = window.scrollY;
const header = document.getElementById('nBar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // scrolling down → hide
    header.classList.add('n-hide');
  } else {
    // scrolling up → show
    header.classList.remove('n-hide');
  }

  lastScrollY = currentScrollY;
});