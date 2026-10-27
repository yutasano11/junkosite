// ジュンコサン 改善版：jQuery 不要の軽量スクリプト
(function () {
  // スマホのハンバーガーメニュー
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('global-nav');
  var label = toggle.querySelector('.visually-hidden');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    label.textContent = open ? 'メニューを閉じる' : 'メニューを開く';
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // スクロールでふわっと表示
  var targets = document.querySelectorAll('.section-title, .worry-list li, .reason, .menu-card, .flow-list li, .voice-card, .first-photo');
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  targets.forEach(function (el) {
    el.classList.add('fade-in');
    io.observe(el);
  });
})();
