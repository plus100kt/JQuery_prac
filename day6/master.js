// $는 jQuery를 의미, ready는 window.onload를 의미
$(document).ready(function($){
  // body 맨위에 ()안의 내용을 추가한다.
  $('body').prepend('<h1>Hello world</h1>');
  $('ul li').css('color', 'red');
  $('.active').css('color', 'blue');
  $('#active').css('color', 'skyblue');
});

//console.group의 이해
window.onload = function() {
  console.group('before');
  var lis = document.getElementsByTagName('li');
  for(var i = 0; i < lis.length; i++) {
    console.log(lis[i]);
  }
  console.groupEnd();
  console.group('after');
  //lis[1].parentNode.removeChiled.lis[1]는 lis[1]의 삭제를 의미
  lis[1].parentNode.removeChild(lis[1]);
  for(i = 0; i < lis.length; i++) {
    console.log(lis[i]);
  }
  console.groupEnd();
};
