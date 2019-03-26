window.onload = function() {
  var lis = document.querySelectorAll('li');
  for(var key in lis) {
    lis[key].style.color = 'blue';
  }
};
