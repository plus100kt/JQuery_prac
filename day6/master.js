// $는 jQuery를 의미, ready는 window.onload를 의미
$(document).ready(function($){
  // body 맨위에 ()안의 내용을 추가한다.
  $('body').prepend('<h1>Hello world</h1>');
  $('ul li').css('color', 'red');
  $('.active').css('color', 'blue');
  $('#active').css('color', 'skyblue');
});
