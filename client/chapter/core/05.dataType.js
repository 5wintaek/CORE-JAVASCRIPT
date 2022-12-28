/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null); // object 출력

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined); // undefined 출력

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let nickName = "taek";
let message3 = `안녕 내 이름은 ${nickName}`;
console.log(message3); // 안녕 내이름은 taek

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;
console.log("number : ", typeof number); // number : number

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 12913n); // bigint 출력

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true); // boolean 출력

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {}); // object 출력

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol("uid")); // symbol 출력

console.log(typeof Math); //object 출력

const fuc = function () {};

console.log(typeof fuc);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
// const user = new Object()
/* 객체 리터럴 : 값을 그대로 가져다 쓴다  
name , age = property 
property를 입력하고 싶으면 user.age */

const user = {
  name: "tiger",
  age: 27,
  fish: function () {
    return "뻐끔뻐금";
  },
};

// Array
// const list = new Array()
/* 배열 리터럴 : 값을 그대로 가져다 쓴다 */
let list = [10, 100, 1000, 1, 2, 3];

// function
function sum(a, b) {
  return a + b;
}
console.log(sum(100, 3));

// this
