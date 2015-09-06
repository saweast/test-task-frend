"use strict";
 var progress = document.getElementsByTagName('progress')[0],
     input = document.getElementsByTagName('input')[0],
     button = document.getElementsByTagName('button')[0],
     p = document.getElementsByTagName('p')[0],
     wrap = document.getElementsByClassName('wrapper')[0];

var array = [];



function get_set(from, to, change) {
  var text = from.value;
  if (text) {
    if (change.value <= 10) {
      from.value = '';
      array.push(" " + text);
      change.value += 1;
      to.innerHTML = array;
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
