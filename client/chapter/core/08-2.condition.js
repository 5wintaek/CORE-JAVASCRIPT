/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 20;

if (age >= 14 && age <= 90) {
  console.log("14세 이상 90세 이하");
}

//?

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// 배열자체도 값이기 때문에 true 나옴
// 객체 자체도 true 이다
// 안에 { thisIsFalsy: false } 객체 자체가 있으니 true 이다 , 안에 false 는 그냥 value값임!
// ? 전부 다 true 이니 마지막 true 값이 반환된다.
let whichFalsy = true && " " && [] && { thisIsFalsy: false }; //
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
// ? 2는 boolean 으로 변환되었으니깐 true 로 반환된다 따라서 결과값은 2반환
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };

// ! 로그인 구현하기 , 논리연산자 맨 마지막 문제
// esc 누른값은 null
// ? tolowercase() 를 이용하여 소,대문자 구분에도 사용
let userName = prompt("사용자 아이디를 입력해주세요.", "");

if (userName?.toLowerCase() === "admin") {
  // ?가 있으면 그 뒤에 null이나 undefiend이 들어가면 자동 취소가된다
  // 전부 다 소문자로 떨어지기 떄문에 admin도 소문자로 바꿔줌
  let pw = prompt("비밀번호를 입력해 주세요.", "");

  if (pw?.toLowerCase() === "themaster") {
    // 전부 다 소문자로 떨어지기 떄문에 themaster 를 소문자로 바꿔줌
    console.log("환영합니다.");
  } else {
    console.log("취소되었습니다.");
  }
} else if (userName.replace(/\s*/g, "") === "" || userName === null) {
  // null 은 esc
  console.log("취소했습니다.");
} else {
  console.log("인증되지 않은 사용자 입니다.");
}
