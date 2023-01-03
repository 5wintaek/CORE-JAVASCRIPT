/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

// ! 선언문
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
// console.log(arguments);
// 함수 안에서만 접근 가능한 인수들의 집합 객채로서 배열과 유사하여 유사 배열 타입으로 불리는 변수 : arguments
// arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 console.error('있다',있다)
// 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진.짜 배열로 만들어야한다
// 배열의 능력 : forEach, reduce
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  // console.log(arguments); // 함수 안에서 사용할수있는 유사배열

  let total = 0;

  // ? argument 자체를 배열로 만드는법

  let arr = Array.from(arguments); // static method -> 함수 자체에서 제공해주는 것 / 배열 아님 유사배열임
  // let arr = Array.prototype.slice.call(arguments);

  /*  arr.forEach(function (item, index) {
    // foreach 안에 들어가 있는 함수가 콜백함수
    total += item;
  }); */

  return arr.reduce(function (acc, item) {
    return acc + item;
  });

  /* for (let value of arguments) {
    total += value;
  } */

  /* for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  } */
  // return moneyA + moneyB + moneyC + moneyD;

  // return total;
};

console.log(calculateTotal(100, 500, 300, 150, 400, 150)); // 값이 더 늘어나면 무시함
// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  // if (typeof url === "string" && url.includes('http') && url.includes('www')) {
  if (typeof url === "string" && url.match(/http.+www/)) {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression(
  "https://www.naver.com",
  function (url) {
    console.log(`${url}해당 페이지로 이동합니다`); // 매개변수는 함수 안에서 사용 가능하니깐
  },
  function () {
    console.log("url 입력 정보가 올바르지 않습니다");
  }
);

// ?  forEach 는 내부에 이런 식으로 구현되어 있을려나요 ?
// ?  forEach(function(currentValue, index, array){}, thisArg)
// ? arr.forEach(function(item, index){})

// 함수 선언문 vs. 함수 (표현)식
// ? 함수 선언 function aa(){}

// ?const bb = function(){}
// ?함수표현식 const 가 호이스팅되면서 function 을 만나 실행

// 즉시 실행 함수 (표현)식
// 즉시 호출될 수 있는 함수의 표현식
// Immediately Invoked Function Expression
// 오늘날의 많이 쓰이진 않음 , 전역에 오염되지 않게 하려고 쓰임
let IIFE;

const MASTER = (function () {
  // parameter

  const KEY = "alalal#%";

  //내가 내보내고 싶은 항목들만 내보낼거야
  //모듈로서의 활용
  // 정보 은닉화 : 외부의 접근을 차단
  // 일부 정보만 노추

  return {
    getkey: function () {
      return KEY;
    },
  };
})(); // arguments

// var 함수 스코프
// let, const 블록 스코프

//!  접근 불가능 console.log(KEY);
console.log(MASTER.getkey());
