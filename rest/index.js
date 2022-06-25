// rest는 비구조화 할당과 같이 많이 쓰인다. 
// 원하는 값을 빼낼 때도 쓰임

const teacher = {
  name: "유예빈",
  age: 26,
  militaryState: false,
}

const { militaryState, ...another } = teacher;
console.log(another);
// {name: '유예빈', age: 26}
console.log(teacher);
// {name: '유예빈', age: 26, militaryState: false}


//배열
const numbers = [0, 1, 2, 3, 4, 5, 6];
const [zero, ...rest]= numbers;
console.log(rest);
// [1, 2, 3, 4, 5, 6]