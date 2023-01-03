/* ---------------------------------------------------------------------- */
/* Condition                          */
/* ---------------------------------------------------------------------- */

//? 문제 : 입력받은 숫자가 0보다 큰 경우 1을 출력
//? 문제 : 입력받은 숫자가 0보다 작은 경우 -1을 출력
//? 문제 : 입력받은 숫자가 0인 경우 0을 출력

//! if문으로 사용하였을때

/* let number = prompt("숫자를 입력해주세요");
if (number > 0) {
  console.log(1);
} else if (number < 0) {
  console.log(-1);
} else {
  console.log("저리가");
}
 */
// ? 삼항연산자로 위에 코드를 다시 썼을떄
/* let number = prompt("숫자를 입력해 주세요", 0);

let call = number > 0 ? "1" : number < 0 ? "-1" : "아무것도 아닙니다.";

console.log(call);
 */

// ? 주석풀기
/* let n = prompt("입력ㄱ");

if (n > 0) {
  console.log(1);
} else if (n <= 0) {
  console.log(-1);
} else {
  console.log("입력안함");
} */

// ?

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화봤니 ?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

// if 문(statement)
if (didWatchMovie.includes("yes")) {
  console.log("그래 봐야지!");
} else if (goingToWatchMovie == "yes") {
  console.log("외않봐?");
} else {
  console.log("오케이안녕");
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

// ? 연습문제 풀이
/* let age = prompt("나이입력ㄱ");

let message = age < 3 ? "baby" : age < 18 ? "hi" : age < 100 ? "welcome" : "나이가 아주 많네 ?";

console.log(message);
 */

// 자바스크립트의 공식이름

/* let message = prompt("자바스크립트의 공식 이름?");

if (message == "ECMAscript") {
  console.log("정답!");
} else {
  console.log("땡!");
}
 */
