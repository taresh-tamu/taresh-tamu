/* Taresh Guleria, personal site. Everything here is optional:
   each page works without it. */
(function () {
  var d = document;
  d.documentElement.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Looping videos: a pause control for everyone, and no autoplay
     for people who have asked their system for reduced motion. */
  Array.prototype.forEach.call(d.querySelectorAll('video[data-loop]'), function (v) {
    var fig = v.closest('figure');
    var btn = fig ? fig.querySelector('.vbtn') : null;
    function sync() { if (btn) { btn.textContent = v.paused ? 'Play video' : 'Pause video'; } }
    if (reduce) { v.removeAttribute('autoplay'); v.pause(); }
    if (btn) {
      btn.hidden = false;
      btn.addEventListener('click', function () { if (v.paused) { v.play(); } else { v.pause(); } });
    }
    v.addEventListener('play', sync);
    v.addEventListener('pause', sync);
    sync();
  });

  /* Publications: show everything, or only first and co-first author papers. */
  var filter = d.querySelector('.filter');
  if (filter) {
    var buttons = filter.querySelectorAll('button');
    var count = filter.querySelector('.filter-count');
    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener('click', function () {
        var leadOnly = b.getAttribute('data-show') === 'lead';
        Array.prototype.forEach.call(buttons, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        var shown = 0;
        Array.prototype.forEach.call(d.querySelectorAll('.pubs li'), function (li) {
          li.hidden = leadOnly && li.getAttribute('data-lead') !== 'true';
          if (!li.hidden) { shown += 1; }
        });
        if (count) { count.textContent = shown + (shown === 1 ? ' paper shown' : ' papers shown'); }
      });
    });
  }

  /* Enquiry form: there is no server behind a static site, so the form
     builds a pre-filled email and hands it to the visitor's mail app. */
  var form = d.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      function val(k) { return String(data.get(k) || '').trim(); }
      var subject = val('subject') || 'Enquiry from your website';
      var body = val('message');
      var from = [val('name'), val('email')].filter(Boolean).join('\n');
      if (from) { body += '\n\n' + from; }
      window.location.href = 'mailto:taresh@tamu.edu?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();
