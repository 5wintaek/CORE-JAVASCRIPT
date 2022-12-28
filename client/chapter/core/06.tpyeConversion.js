/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

console.log(String(YEAR));

// undefined, null → 'undefiend'
// numm →'null'
console.log(String(undefined));

let days = null;
console.log(String(days));

// boolean → 'true' or 'false'
let isKind = true;
// console.log(String(isKind));
console.log(isKind + "");
/* 데이터 → 숫자 ----------------------------------------------------------- */

// Number()

// undeinfed -> NaN
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean true : 1 / false : 0
let cutie = true;
console.log(cutie / 1);
console.log(+cutie);
// console.log(typeof cutie * 1);

// string
// 공백이 생길경우 공백을 제거하고 숫자만 나온다
let num = "123";
console.log(num * 1);

// numeric string
// parseFloat() -> 소숫점을 포함해서 출력
// parseInt() -> (string, 진수)
let width = "334.3333px";
console.log(parseInt(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
// 어떤값이 들어있으면 "" true
console.log(Boolean(123));
console.log(!!" ");
