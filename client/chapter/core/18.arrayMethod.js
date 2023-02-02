/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray //이게 진짜 배열인지 확인하는방법
const arr = [10, 100, 1000, 10000]

// console.log(typeof arr);
// console.log(Array.isArray(arr));

/* 요소 순환 -------------------------------------------------------------- */

//forEach : 배열을 나열해주는것 ,
const user = {};

// 화살표 함수 => 객체를 뱉어주지 않음 찍어보면 ,
/* arr.forEach((item, index) => {
  this[index] = item;
}, user); */

//
const span = document.querySelectorAll("span");

span.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    console.log((e.target.style.background = "orange"));
    console.log(index);
  });
});

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse();
// console.log(arr);

// splice(시작인덱스,제거,추가)
arr.splice(1, 0, 23, 5); // 1번쨰 인덱스부터 0번째는 제거하지않고 23,5를 추가할거야
console.log("arr", arr); // [10, 23, 5, 100, 1000, 10000]

// sort
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다
// a-b 를 하게되면 일반적으로 정렬된다
// b-a 를 하면 내림차순으로 정렬된다
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
// 반환이니 앞에 받는 변수가 있어야 한다.
let todo = ["밥먹기", "미용실가기", "코딩공부하기"];

let template = todo.map((todoList) => {
  return /* HTML */ `<li>${todoList}</li>`;
});

console.log(template);
// template.forEach((item) => {
//   document.body.insertAdjacentHTML("beforeend", item);
// });

// let newArray = arr.map((item) => {
//   // console.log(item);
//   return item * 2;
// });
// ? 화살표함수 줄임식 , { } 없으면 자동 return 값
// let newArray = arr.map((item) => item * 2);
// console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// 없는 요소를 찾을떈 -1 을 반환한다
console.log(arr.indexOf(100));
// lastIndexOf

// includes
// 해당 배열의 특정값이 있는지를 확인할떄 true,false 를 반환한다
console.log(arr.includes(10));

/* 요소 찾기 -------------------------------------------------------------- */
// 배열만 찾는것

const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];

// find
// find는 대상 1개만 찾는다. 비교해서 true 면 처음껏만 반환한다
const find = users.find((item, index) => {
  return item.id < 5;
});

console.log(find);

// findIndex
const findIndex = users.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex); // 배열이 가지고 있는 index넘버를 가져온다

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
// 필터는 다 찾아서 배열로 넣어준다
const result = arr.filter((number) => {
  return number > 100;
});

console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce
// 초기값을 숫자로 넣어줘야 한다
// 친구들 나이 총합 구하기

let value = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

// ! 이거 잘 모르겠음 질문..
let template2 = todo.reduce((acc, cur, index) => {
  return /* html */ acc + `<li>할일${index + 1} : ${cur}</li>`;
}, "");

console.log(value);
console.log(template2);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */
// 문자는 delete 안댐 배열이나 객체만 가능
let str = "성찬 보경 일범 세민 형진 주현";

// split : 문자 -> 배열
let nameArray = str.split(" ");

console.log(nameArray);

// join 배열 -> 문자

console.log(nameArray.join(" / "));
