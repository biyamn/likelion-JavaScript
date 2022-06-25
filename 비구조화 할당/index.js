const me = {
  name: 'biyam',
  age: 24,
};

// const name = me.name;
// 비구조화 할당
const { name } = me;
// const { name, age } = me;
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);


// 비구조화 할당을 배열에 사용하면 변수가 모두 첫번째를 가리키는 듯..
let arr = [1, 2, 3, 4, 5];

const a = arr[3];
const [ b ] = arr;
const [ c ] = arr;
const [ d ] = arr;
const [ e ] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);