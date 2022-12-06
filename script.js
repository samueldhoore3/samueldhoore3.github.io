// loading
var el = document.getElementById('loading'),
    i = 0,
    load = setInterval(function() {
      i = ++i % 4;
      el.innerHTML = 'Welcome' + Array(i + 1).join('.');
}, 600);

// slide overlay
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }