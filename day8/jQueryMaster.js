// jQuery는 JavaScript 문법이 통하지 않는것을 유념하자

window.onload = function() {
  var target = $('#target');
  // attr의 인자가 한개 = getAttribute()
  console.log(target.attr('href'));
  // attr의 인자가 2개 = setAttribute()
  target.attr('class', 'acthor');
  // target.removeAttr() = 속성값 제거
  target.removeAttr('href');
};

// property 방식
/*
window.onload = function() {
  var target = $('#target');
  console.log(target.prop('href'));
  target.prop('className', 'anchor');
  target.prop('class', 'anchor2');
}
*/
