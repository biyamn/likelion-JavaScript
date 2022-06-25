const teacher = {
  name: "유예빈",
  age: 26, 
  gender: 'male',
};

const me = {
  name: "biyam",
  age: 24,
  gender: 'female',
};


function addMilitaryStateIfMale(person) {
  if (person.gender === 'male') {
    person.militaryState = false;
  }
}

addMilitaryStateIfMale(teacher);
addMilitaryStateIfMale(me);

console.log(teacher);
console.log(me);


function parseBoolean(value) {
  if (value === true) {
    return "참";
  } else if (value === false) {
    return "거짓";
  }
}


/*
if (teacher.militaryState !== undefined) {
  console.log(parseBoolean(me.militaryState));
}

if (me.militaryState !== undefined) {
  console.log(parseBoolean(me.militaryState));
}
*/

// <처음 나오는 falsy 값을 반환한다>
// && 앞에 나오는게 true이면 뒤를 반환한다
teacher.militaryState !== undefined && console.log(parseBoolean(teacher.militaryState));
// && 앞에 나오는게 false이면 뒤의 코드를 실행도 하지 않는다
me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
