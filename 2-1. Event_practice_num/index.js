let num = 0;
document.getElementsByClassName('plus')[0].addEventListener('click', function() {
  num ++;
  document.getElementsByClassName('num')[0].innerHTML=num;
})

document.getElementsByClassName('minus')[0].addEventListener('click', function() {
  num --;
  document.getElementsByClassName('num')[0].innerHTML=num;
})