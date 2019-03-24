var win = null;
function winopen() {
  win = window.open('demo2.html', 'ot', 'width=400', 'height=200');
}
function winmsg(msg) {
  win.document.getElementById('msg').innerText=msg;
}
function winclose() {
  win.close();
}
