/*
document.getElementById("btn").removeEventListener("click", function(){
  console.log("click!!!!");
});
*/

let num = 0;
document.getElementById('plus').addEventListener("click", function() {
  num++;
  document.getElementById("num").innerHTML = num;
});

document.getElementById("minus").addEventListener("click", function() {
  num--;
  document.getElementById("num").innerHTML = num;
});

document.querySelector('.bar').addEventListener('click', function(){
  document.querySelector('.bar').innerHTML = '눌렸어!';
  document.querySelector('.newBar').classList.toggle('show');

});