// loading
  var el = document.getElementById('loading'),
  i = 0,
  load = setInterval(function() {
    i = ++i % 4;
    el.innerHTML = "/" + Array(i + 1).join('.');
  }, 600);

// slide overlay
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

//play pause audio
  var myAudio = document.getElementById("myAudio");
  var isPlaying = false;

  function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
  };

  myAudio.onplaying = function() {
  isPlaying = true;
  };
  myAudio.onpause = function() {
  isPlaying = false;
  };