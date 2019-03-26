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
  // 원하는 클래스를 추가한다.
}

function remove() {
  var active = document.getElementById('active');
  active.classList.remove('marked');
  // 원하는 클래스를 제거한다.
}

function toggle() {
  var active = document.getElementById('active');
  active.classList.toggle('list');
  // 클래스 내에 존재하지 않다면 추가, 존재한다면 제거
}
