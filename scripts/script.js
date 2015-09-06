"use strict";
 var progress = document.getElementsByTagName('progress')[0],
     input = document.getElementsByClassName('name')[0],
     button = document.getElementById('add'),
     p = document.getElementsByClassName('friends-list')[0],
     wrap = document.getElementsByClassName('wrapper')[0];

var array = [];


console.log(document.styleSheets[0].cssRules.length);

function get_set(from, to, change) {
  var text = from.value;
  if (text) {
    if (change.value <= 10) {
      from.value = '';
      array.push(" " + text);
      to.innerHTML = array;
      change.value += 1;
      document.styleSheets[0].insertRule('.friends progress:after {content: "'+change.value+' из 10"}', document.styleSheets[0].cssRules.length); // в етом случае розмер цсс нужно обновлять каждый раз, страдает производительность, но если розширять то так лутше
    }
    if (change.value >= 10) {
      input.classList.add('full');
      button.disabled = 'true';
      input.disabled = 'true';
      wrap.classList.add('full');
    }
  }
  else {
    input.classList.add('error');
    from.focus();
    setTimeout(function() {
      input.classList.remove('error');
    }, 1000);
  }

}

button.addEventListener('click', function() {
  get_set(input, p, progress);
}, false);
(input).onkeypress = function(e) {
  if (e.which == 13) {
    get_set(input, p, progress);
    return false;
  }
}




//window.onload = function() {
//
//  // Video
//  var video = document.getElementById("video");
//
//  // Buttons
//  var playButton = document.getElementById("play-pause");
//  var muteButton = document.getElementById("mute");
//  var fullScreenButton = document.getElementById("full-screen");
//
//  // Sliders
//  var seekBar = document.getElementById("seek-bar");
//  var volumeBar = document.getElementById("volume-bar");
//
//}
//
//// Event listener for the play/pause button
//playButton.addEventListener("click", function() {
//  if (video.paused == true) {
//    // Play the video
//    video.play();
//
//    // Update the button text to 'Pause'
//    playButton.innerHTML = "Pause";
//  } else {
//    // Pause the video
//    video.pause();
//
//    // Update the button text to 'Play'
//    playButton.innerHTML = "Play";
//  }
//});
//
//// Event listener for the mute button
//muteButton.addEventListener("click", function() {
//  if (video.muted == false) {
//    // Mute the video
//    video.muted = true;
//
//    // Update the button text
//    muteButton.innerHTML = "Unmute";
//  } else {
//    // Unmute the video
//    video.muted = false;
//
//    // Update the button text
//    muteButton.innerHTML = "Mute";
//  }
//});
//
//// Event listener for the full-screen button
//fullScreenButton.addEventListener("click", function() {
//  if (video.requestFullscreen) {
//    video.requestFullscreen();
//  } else if (video.mozRequestFullScreen) {
//    video.mozRequestFullScreen(); // Firefox
//  } else if (video.webkitRequestFullscreen) {
//    video.webkitRequestFullscreen(); // Chrome and Safari
//  }
//});
//
//// Event listener for the seek bar
//seekBar.addEventListener("change", function() {
//  // Calculate the new time
//  var time = video.duration * (seekBar.value / 100);
//
//  // Update the video time
//  video.currentTime = time;
//});
//
//// Update the seek bar as the video plays
//video.addEventListener("timeupdate", function() {
//  // Calculate the slider value
//  var value = (100 / video.duration) * video.currentTime;
//
//  // Update the slider value
//  seekBar.value = value;
//});
//
//// Pause the video when the slider handle is being dragged
//seekBar.addEventListener("mousedown", function() {
//  video.pause();
//});
//
//// Play the video when the slider handle is dropped
//seekBar.addEventListener("mouseup", function() {
//  video.play();
//});
//
//// Event listener for the volume bar
//volumeBar.addEventListener("change", function() {
//  // Update the video volume
//  video.volume = volumeBar.value;
//});
