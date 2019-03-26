function selectAll() {
  var active = document.getElementById('active');
  console.log(active.classList);
}
function loop() {
  var active = document.getElementById('active');
  for(var i = 0; i < active.classList.length; i++) {
    console.log(i, active.classList[i]);
  }
}

function add() {
  var active = document.getElementById('active');
  active.classList.add('marked');
}

function remove() {
  var active = document.getElementById('active');
  active.classList.remove('marked');
}

function toggle() {
  var active = document.getElementById('active');
  active.classList.toggle('list');
}
