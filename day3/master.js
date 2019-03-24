//태그네임 img를 찾아 해당 내용을 콘솔에 출력
var imgs = document.getElementsByTagName('img');
window.addEventListener('load', function() {
  console.log(imgs[0]);
  // imgs[1]의 width를 변경
  imgs[1].style.width="100px";
  console.log(imgs[1]);
});
