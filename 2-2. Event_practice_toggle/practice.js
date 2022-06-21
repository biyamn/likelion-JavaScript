document.querySelector('.nav').addEventListener('click', function() {
  document.querySelector('.nav').innerHTML = '눌렸어!!';
  document.querySelector('.newNav').classList.toggle('show');
})
