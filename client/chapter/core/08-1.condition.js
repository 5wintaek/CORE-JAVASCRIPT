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
/* let number = prompt('숫자를 입력해 주세요',0);

let message = 
(number > 0) ? '1' : 
(number < 0) ? '-1': 
'아무것도 아닙니다.';

console.log(message); */

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

let message = prompt("영화볼거야?");

// if 문(statement)
if (didWatchMovie.includes("yes")) {
  console.log("그래 봐야지!");
} else if (goingToWatchMovie == "yes") {
  console.log("외않봐?");
} else {
  console.log("똥쟁");
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
