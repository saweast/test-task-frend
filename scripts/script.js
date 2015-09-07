"use strict";
 var input = document.getElementsByClassName('name')[0],
     button = document.getElementById('add'),
     p = document.getElementsByClassName('friends-list')[0],
     wrap = document.getElementsByClassName('wrapper')[0],
     persent = document.getElementsByClassName('persent')[0],
     descr = document.getElementsByClassName('descr')[0];
var array = [];
var per_value = 0;

var playPause = document.getElementById('playPause'),
    videoDiv = document.getElementsByClassName('video')[0],
    duration = document.getElementById('duration'),
    video = document.getElementById('video');
var dur = 0,
    min = 0;

button.removeAttribute('disabled');
input.removeAttribute('disabled'); // в firefox сохраняет дисаблед после перезагрузки странички.

function getSet(from, count, change, to) {
  var txt = input.value;
  if (txt) {
    if (per_value <= 10) {
      from.value = '';
      array.push(' '+txt);
      per_value++;
      count.innerHTML = per_value+' из 10';
      change.style.width = per_value * 10+'%';
      to.innerHTML = array;
    }
    if (per_value >= 10) {
      from.classList.add('full');
      button.disabled = 'true';
      from.disabled = 'true';
      wrap.classList.add('full');
    }
  }
  else {
    from.classList.add('error');
    from.focus();
    setTimeout(function() {
      from.classList.remove('error');
    }, 1000);
  }
}

button.addEventListener('click', function() {
  getSet(input, descr, persent, p);
}, false);
(input).onkeypress = function(e) {
  if (e.which == 13) {
    getSet(input, descr, persent, p);
    return false;
  }
}

video.addEventListener('loadedmetadata', function() {
  dur = video.duration;
  duration.innerHTML = Math.floor(dur / 60) +":"+ Math.floor(dur % 60);
});

videoDiv.onclick = function(e) {
  var target = e.target;
  if (target.id == "playPause" || target.id == 'video') {
    duration.style.display = 'none';
    if (video.paused == true) {
      video.play();
      playPause.classList.add('running');
    }
    else {
      playPause.classList.remove('running');
      playPause.classList.add('pause');
      video.pause();
    }
  }
}
