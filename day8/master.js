// 속성방식과 property 방식의구분 필요
// property 방식이 조금 빠르지만 외워야한다.

// 속성값 출력
 window.onload = function() {
   var target = document.getElementById('target');
   console.log(target.getAttribute('href'));
   //console.log(target.href); 속성값을 나타내는 property 방식
 };

// 속성 추가
 window.onload = function() {
   var target = document.getElementById('target');
   tartget.setAttribute('class', 'anchor');
   //target.className = 'anchor'; class를 추가하는 property 방식
 };

// 속성 제거
 window.onload = function() {
   var target = document.getElementById('target');
   tartget.removeAttribute('href');
 };

// 속성 유무 확인
 window.onload = function() {
   var target = document.getElementById('target');
   tartget.hasAttribute('href');
 };
