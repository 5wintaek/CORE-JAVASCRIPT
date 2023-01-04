/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
/* css */
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
/* css */
let cssMap = {
  position: "fixed",
  ["z-index"]: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: "user-id-asd",
  name: "taek",
  email: "elqkddl",
  IsSignIn: true,
  permission: "paid",
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log("authUser.uid", authUser.uid);

// console.log("authUser.uid", authUser.uid);
// console.log("authUser.uid", authUser.uid);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["email"]);
// console.log(authUser["IsSignIn"]);
// console.log(authUser["permission"]);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

function creatUser(computedProp = calculateProperty) {
  //매개변수가 들어오지 않았을때 기본값을 써라
  return {
    name: "unknown",
    email: "unk@com",
    [computedProp]: "010-666-666",
  };
}
// 리턴된 객체는 user 에 저장
const user = creatUser();

Object.prototype.SIGN = true; // 이 객체는 전역을 오염시킴

// 프로퍼티 포함 여부 확인
for (let key in authUser) {
  // 진짜 객체가 갖고있는 능력을 사용 , 그 역할을 call이 해줌
  // Object.prototype를 {} 로 생략할 수 있음
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    // console.log(key);
  }
  // if ({}.hasOwnProperty.call(authUser, key)) {
  //   console.log(key);
  // }
}

// 프로퍼티 나열

let keyArray = Object.keys(authUser);
let valueAraay = Object.values(authUser);

//  console.log(keyArray); 키 값
// console.log(valueAraay); value 값

// ! 키값만 리턴시킬려면 ?
// arrow function
// const getPropertiesList = (object) => Object.keys(object);

const getPropertiesList = (object) => Object.keys(object);

/* 
function getPropertiesList(object){
  let result = [];
  for(let key in object){
    if({}.hasOwnProperty.call(object,key)){
      result.push(key)
    }
  }
   
  return result;
}
 */

let result = getPropertiesList(authUser);

// 프로퍼티 제거 or 삭제
// remove delete
// 제거 = 값 비움
// 삭제 = 싹 제거

// 제거
authUser["uid"] = null;
// 삭제
delete authUser["uid"];

// ToDo 함수만들떄 생각할것
// 1. 함수 이름 정하기
// 2. 인수와 인자 정하기
// 3. 확인하기(validation)
// 4. 리턴값

// ?  remove 유틸 함수를 만들려면 ??
function removeProperty(object, key) {
  object[key] = null;
}
removeProperty(authUser, "uid");

// ? delete 유틸 함수를 만들려면 ?
function deleteProperty(object, key) {
  delete object[key];
}

deleteProperty(authUser, "uid");

// 단축 프로퍼티
// 이 밑에 애들을 student 에 넣어줄것이다
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

// const student = {
//   name: name,
//   emain: email,
//   authorization: authorization,
//   isLogin: isLogin,
// };
// ? 단축표기법
const student = { name, email, authorization, isLogin };

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0 이면 ? true : false

// ? 이거 질문 일단 생각해보고
function isEmptyObject(object) {
  // return Object.keys(object).length === 0 ? true : false
  return getPropertiesList(object).length === 0;
}

// const empty = {};

console.log(isEmptyObject(authUser));
// console.log(isEmptyObject(empty)); // true 반환

// ? 월급의 총 합을 구해보세요
// object entries 는 키 벨류를 알려줌
// object key 는 key값만 배열로 반환함
// value 는 값만 반환함
// 두개가 다 필요하면 entries 로 반환함 . Object.entries(salaries) 출력해보셈 // 0번쨰 key 1번쨰 벨류
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};
// ? 여긴 옛날방식
// let total = 0;
// for (let keyValues of Object.entries(salaries)) {
//   // console.log(keyValues);
//   let key = keyValues[0];
//   let value = keyValues[1];

//   total += value;
// }

// console.log(total);

/* -------------------------------------------------------------------------- */
/*                      // ? 요즘방식 , 배열 구조 분해 할당 / 부시고 할당함                     */
/* -------------------------------------------------------------------------- */
let total = 0;
for (let [key, value] of Object.entries(salaries)) {
  // console.log(keyValues);
  total += value;
}

// console.log(total);

let color = ["#ff0000", "#2b00ff", "#00ff2f"]; // 컬러는 배열
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

// 위에랑 이 밑에랑 같다. 수고를 덜 수 있다.
// const [COLOR_RED, COLOR_BLUE, COLOR_GREEN] = color;

// 초록색만 나타내고 싶으면 이런식으로도 사용 가능
const [, , COLOR_GREEN] = color;
console.log();

/* -------------------------------------------------------------------------- */
/*                                 객체 구조 분해 할당                                */
/* -------------------------------------------------------------------------- */
/* 
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
}; */
// ? 단축 프로퍼티 사용안함
// const { John: John, Ann: Ann, Pete: Pete } = salaries;\
// ? 단축 프로퍼티로 사용
// 키값만 맞으면 순서상관X
const { John, Ann, Pete } = salaries;

//
console.log(John);
