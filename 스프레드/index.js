const teacher = {
  name: "유예빈",
  age: 26,
};

const militaryTeacher = {
  // teacher의 내용물을 흩뿌리겠다
  ...teacher,
  militaryState: false,
}
// {name: '유예빈', age: 26, militaryState: false}

console.log(militaryTeacher);


// 배열
const animals = ['개', '고양이'];
const anotherAnimals = [...animals, '참새'];

console.log(anotherAnimals);
// ['개', '고양이', '참새']

// 스프레드는 오브젝트는 오브젝트에만, 배열은 배열에만 사용할 수 있다. 