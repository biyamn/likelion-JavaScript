let input = prompt('입력해주세요');

/*
if (input === '') {
  console.log('입력한 값이 없습니다.')
} else {
  console.log(input);
}
*/

// 처음 나오는 truthy 값을 반환한다
// 만약 둘 다 falsy라면, 마지막 값을 반환한다
console.log(input || '입력한 값이 없습니다.');