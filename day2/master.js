// onclick 과의 차이
// onclick은 하나의 콜백만 지정가능
// addEventListener는 여러개의 이벤트 리스너 추가 가능, 분리의 측면에서도 유리

window.onload = function() {
  var hw = document.getElementById('hw');
  hw.addEventListener('click', function() {
    alert('Hello world');
  });
};

// window.onload는 html코드를 전부 읽어들인 다음 실행
// 서순을 지키기위해 window.onload실행
