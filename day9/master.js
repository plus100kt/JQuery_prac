$(function(){
  var list = $('.marked');
  console.group('document');
  for(var i=0; i<list.length; i++) {
    console.log(list[i]);
  }
  console.groupEnd();
  // $('자식', '부모')
  list = $('.marked', '#active');
  //list = $('#active .marked');
  //list = $('#active').find('marked');
  console.group('active');
  for(i=0; i<list.length; i++) {
    console.log(list[i]);
  }
  console.groupEnd();
});
