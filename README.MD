#### JQuery 공부

<h4>day1</h4>
: 자바 스크립트의 모듈화 </br>
</br>
<h4>day2</h4>
: onload와 addEventListener('click')사용</br>
</br>
<h4>day3</h4>
: 이미지와 addEventListener('load')사용</br>
웹브라우저의 구성요소들은 하나하나가 객체화되어 있다</br>
window를 구성하는 3가지 요소 DOM, BOM, JavaScript 이해 필수</br>
window는 전역객체이므로 모든 객체들의 앞에 붙어있으며 생략가능하다</br>
navigator은 웹브라우저의 정보를 보여주고 location은 주소를 보여준다</br>
</br>
<h4>day4</h4>
: 새 창을 제어 할 수 있는 window.open()을 구현</br>
하지만 onkeypress 부분이 구현이 안되어서 다시 해봐야할듯하다</br>
요새는 팝업 차단 기능때문에 쓰이지 않는 추세이다</br>
</br>
<h4>day5</h4>
: 자바스크립트를 이용한 제어대상 찾기를 연습한다.</br>
getElmentsByTagName() : 해당 태그네임을 찾는다 -> 배열을 이용해 특정 태그부분만 선언가능</br>
getElementsByClassName() : 선언된 클래스들을 찾는다.</br>
getElementById() : 해당 id의 클래스를 찾는다(id는 중복x)</br>
querySelector() : '이름' - 태그, '#이름' - id, '.이름' - 클래스 -> 각 하나만을 반환</br>
querySelectorAll() : 선택한 모두를 선택가능</br>
