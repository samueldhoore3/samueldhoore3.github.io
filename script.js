var el = document.getElementById('loading'),
    i = 0,
    load = setInterval(function() {
      i = ++i % 4;
      el.innerHTML = 'Welcome' + Array(i + 1).join('.');
}, 600);