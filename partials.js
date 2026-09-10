async function loadPartial(slotId, path){
  const el = document.getElementById(slotId);
  if(!el) return;
  const res = await fetch(path);
  el.outerHTML = await res.text();
}

(async function initPartials(){
  await Promise.all([
    loadPartial('nav-slot', 'partials/nav.html'),
    loadPartial('topbar-slot', 'partials/topbar.html'),
    loadPartial('footer-slot', 'partials/footer.html'),
  ]);

  // Mark the current page's nav link as active
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#nav a').forEach(a => {
    if(a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  // Pages other than home want the nav visible right away
  if(document.body.dataset.navVisible === 'true'){
    document.getElementById('nav')?.classList.add('visible');
  }

  document.dispatchEvent(new Event('partials:ready'));
})();