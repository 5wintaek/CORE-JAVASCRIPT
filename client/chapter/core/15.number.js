/* ---------------------------------------------------------------------- */
/* Number Type                                                            */
/* ---------------------------------------------------------------------- */

// 1억 (million)
// 0의 갯수가 많아 금액을 쉽게 파악하기 어렵습니다.
let riches = 100000000;
// console.log("riches", riches);

// 1,000 단위 구분하듯 사용할 수 있을까요?
// 일반 숫자처럼 내보냄
riches = 100_000_000;
// console.log(riches);

// 숫자 옆에 `e`를 붙여 0의 갯수를 설정할 수 있습니다.
riches = 1e8;

// 그렇다면 아래 작성된 숫자 값은 얼마일까요?
riches = 1.45e6; // → 1.45 * 10 ** 6
// console.log(riches);

// 작은 수도 `e`를 사용해 표현할 수 있습니다.
riches = 1e-6; // → 1 / 10 ** 6
// console.log(riches);

/* 어림수 ---------------------------------------------------------------- */

let number = 90_127.53100032;

// 내림처리
let floor = Math.floor(number);
console.log("floor :", floor);

// 반올림
let round = Math.round(number);
console.log(round);

// 올림
let ceil = Math.ceil(number);
console.log(ceil);

// 절삭(소수점 이하)
let truncate = Math.trunc(number);
console.log(truncate);

// 난수 0~1사이 랜덤하게 반환
let random = Math.random();
console.log("random", random);

// 여러 수 중, 최댓값
let max = Math.max(10, 50);
console.log("max", max);

// 여러 수 중, 최솟값
let min = Math.min(10, 50);
console.log("min", min);

// 거듭제곱
let pow = Math.pow(2, 53);
console.log("pow", pow);

// 최소, 최대 값 사이 난수 반환 함수
// round , random
let getRandomMinMax = (min, max) => {
  if (min > max) throw new Error("최솟값은 최댓값보다 적어야 합니다"); // 에러처리
  return Math.round(Math.random() * (max - min) + min); // min 을 끝에 더해주는 최소값마다 값이 달라져서 더해준것
};

console.log(getRandomMinMax(2, 10));

// ! 최소 최대값 사이 난수 반환 구글링해서 찾은것
// function getRandom(min, max) {
//   return min + Math.random() * (max - min);
// }

// console.log(getRandom(2, 5));

/* 진법 ------------------------------------------------------------------ */

// 16진수 0x
//  8진수 0o
//  2진수 0b

// parseInt(string, base) → 진수 2 <= base <= 36
// number.toString(base) → base 진수 변환 후 문자 값 반환

/* 컬러 변환 -------------------------------------------------------------- */

const colorChip = {
  red: 207,
  green: 102,
  blue: 13,
};

// colorChip의 red, green, blue 값을 변환해봅니다.

// 1. 10진수 → 16진수 변환하기

// 2. 16진수 → 10진수 변환하기
