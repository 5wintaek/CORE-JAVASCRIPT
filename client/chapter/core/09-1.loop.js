/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

const frontEndDev = ["HTML", "CSS", "SVG", "JavaScript", "jQuery", "React", "Redux"];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);

// // ? lenght -> 일일이 숫자로 몇개씩 적용하지 말고 length 를 사용하여 글자 길이만큼 설정
// let i = 0;
// while (i < frontEndDev.length) {
//   console.log(frontEndDev[i]);

//   i++;
// }

// 역순으로 나오게 해보기
// lenght -1 하는ngth 값은 7이예요 그래서  이유는 인덱스 번호는 0~6까지 인데 le-1 함

/* let i = frontEndDev.length;
while (i >= 0) {
  console.log(frontEndDev[i]);
  i--;
} */

// 전개 연산자 전개 구문 spread operator
// pop 만 사용하면 배열을 다 없애버리는데 전개연산자를 사용하여 다시 생성함
// slice 는 원하는 항목들을 잘라주는거 하지만 항목을 주지않으면 전부 다 배열들을 뱉어낸다
let copyArray = [...frontEndDev]; // 전개연산자는 배열을 펼치기~~
// let copyArray = frontEndDev.slice(); // slice 는 원하는 항목들을 잘라주는거 하지만 항목을 주지않으면 전부 다 배열들을 뱉어낸다

while (frontEndDev.length) {
  console.log(frontEndDev.pop());
}

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환

let i = 0;
while (i < 3) {
  alert(i);
  i++;
}
