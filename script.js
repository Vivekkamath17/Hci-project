(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var root = document.documentElement, side = $('#side'), menuBtn = $('#menuBtn'), themeBtn = $('#themeBtn'), toastEl = $('#toast');
  var sections = $$('main section'), navLinks = $$('#side nav a'), NAME = 'Vivek Kamath';

  $('#yr').textContent = new Date().getFullYear();

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(function () { toastEl.classList.remove('show'); }, 3500);
  }

  /* ---------- Scroll-spy: highlights the section you are reading ---------- */
  var current = '';
  function setCurrent(id) {
    if (id === current) return;
    current = id;
    navLinks.forEach(function (a) {
      if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    var s = document.getElementById(id);
    document.title = (id === 'home' ? 'Computer Science Student' : s.dataset.title) + ' | ' + NAME;
    if (history.replaceState) history.replaceState(null, '', '#' + id);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setCurrent(e.target.id); });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* Move keyboard focus to the heading after a menu jump */
  window.addEventListener('hashchange', function () {
    var s = document.getElementById(location.hash.slice(1));
    var h = s && $('h1, h2', s);
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  });

  /* ---------- Progress line (replaces the hidden scrollbar) ---------- */
  var bar = $('#bar');
  function onScroll() {
    var h = root.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? window.scrollY / h * 100 : 0) + '%';
    if (h > 0 && window.scrollY >= h - 4) setCurrent('contact'); // last section is short
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Theme (remembers choice, follows OS by default) ---------- */
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    themeBtn.setAttribute('aria-pressed', String(t === 'dark'));
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  setTheme(saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  themeBtn.addEventListener('click', function () {
    var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(t);
    try { localStorage.setItem('theme', t); } catch (e) {}
  });

  /* ---------- mobile menu ---------- */
  function setMenu(open) {
    side.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? 'Close' : 'Menu';
  }
  menuBtn.addEventListener('click', function (e) { e.stopPropagation(); setMenu(!side.classList.contains('open')); });
  side.addEventListener('click', function (e) { if (e.target.closest('nav a')) setMenu(false); });
  document.addEventListener('click', function (e) { if (side.classList.contains('open') && !side.contains(e.target)) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && side.classList.contains('open')) { setMenu(false); menuBtn.focus(); } });

  /* ---------- Project search + filters ---------- */
  var items = $$('#projList .item'), chips = $$('.filters button'), q = $('#q'), cat = 'all';
  function applyFilter() {
    var term = q.value.trim().toLowerCase(), n = 0;
    items.forEach(function (it) {
      var okCat = cat === 'all' || it.dataset.cat.split(' ').indexOf(cat) > -1;
      var okTerm = !term || it.textContent.toLowerCase().indexOf(term) > -1;
      it.hidden = !(okCat && okTerm);
      if (!it.hidden) n++;
    });
    $('#projEmpty').hidden = n > 0;
  }
  chips.forEach(function (b) {
    b.addEventListener('click', function () {
      cat = b.dataset.f;
      chips.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      applyFilter();
    });
  });
  q.addEventListener('input', applyFilter);

  /* ---------- Social placeholders: explain instead of doing nothing ---------- */
  $$('[data-todo]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (a.getAttribute('href') === '#social') { e.preventDefault(); toast('This link is not set up yet.'); }
    });
  });

  /* ---------- Contact form: inline validation, then opens email app ---------- */
  var form = $('#form');
  function check(id, msg, ok) {
    $('#' + id).setAttribute('aria-invalid', String(!ok));
    $('#e-' + id).textContent = ok ? '' : msg;
    return ok;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('#name').value.trim(), m = $('#email').value.trim(), t = $('#msg').value.trim();
    var a = check('name', 'Enter your name so I know who to reply to.', n.length > 0);
    var b = check('email', 'Enter a valid email, like name@example.com.', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m));
    var c = check('msg', 'Write a short message (at least 10 characters).', t.length >= 10);
    if (!(a && b && c)) { $('[aria-invalid="true"]', form).focus(); return; }
    window.location.href = 'mailto:kamathvivek91@gmail.com?subject=' + encodeURIComponent('Message from ' + n) +
      '&body=' + encodeURIComponent(t + '\n\n' + n + ' (' + m + ')');
    toast('Your email app is opening with your message.');
    form.reset();
  });
  ['name', 'email', 'msg'].forEach(function (id) {
    $('#' + id).addEventListener('input', function () {
      this.setAttribute('aria-invalid', 'false');
      $('#e-' + id).textContent = '';
    });
  });

  var start = location.hash.slice(1);
  setCurrent(start && document.getElementById(start) ? start : 'home');
})();
