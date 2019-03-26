// ul 부분을 넣지 않으면 모든 li태그가 선택되므로 범위를 지정해주자
window.onload = function() {
  var ul = document.getElementsByTagName('ul')[0];
  var lis = ul.getElementsByTagName('li');
  for(var i=0; i<lis.length; i++) {
    lis[i].style.color = 'red';
  }
};
