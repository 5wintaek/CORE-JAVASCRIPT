/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

// ? for 문을 while 로 고쳐쓴것

// let i = 0;
// while (i < 10) {
//   i++;
// }
// console.log(i);

// ? for문  //

// for (let i = 0; i < 10; i++) {
//   console.log(i); // 0부터 9까지 차례대로 출력
// }

/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */

/* // ? 구성요소 생략하기
let j = 0;

for (; j < 10; j++) {
  console.log(j);
}
 */

// ? 2 ~ 10까지의 짝수 출력하기

for (let d = 1; d <= 10; d++) {
  if (d % 2 !== 0) continue;

  // console.log(d);
}

//

// 스플릿은 문자들을 전부 다 배열로 바꿔주는 기능
// ? 여기 확인하기
const frontEndDev = "HTML CSS SVG JavaScript jQuery React Redux".split(" ");

// let i = 0;
// let l = frontEndDev.length;

// while (i < l) {
//   console.log(frontEndDev[i]);
//   i += 1;
// }

for (let i = 0; i < frontEndDev.length; i++) {
  let result = frontEndDev[i];

  if (result.includes("SVG") || result.includes("jQuery")) continue;

  // if (result.includes("jQuery")) break;

  console.log(result);
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
