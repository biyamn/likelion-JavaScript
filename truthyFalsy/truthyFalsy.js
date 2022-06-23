console.log('hello');
const answer = prompt('나이를 입력해 주세요', 100);
alert(`${answer}를 입력하셨습니다`);

/* answer===''는 !answer과 같다 */
if(!answer) {
  console.log("입력값이 없습니다")
}
else {
  console.log(answer);
}
