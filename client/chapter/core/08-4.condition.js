/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = "user@company.io";
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
// receivedEmailAddress 가 전부 받는애니깐 맨앞에 쓰고, 중간에 ? 가  if 조건문 그 뒤에 참 거짓
receivedEmailAddress = emailAddress === undefined || emailAddress === null ? "user@company.io" : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
// emailAddress 에 null 이나 undefiend 가 오면은 "user@company.io" 에 receivedEmailAddress 넣겠다
receivedEmailAddress = emailAddress ?? "user@company.io";

/* ?? vs. || ----------------------------------------------------------- */

receivedEmailAddress = emailAddress ?? "user@company.io";

receivedEmailAddress = emailAddress || "user@company.io";

// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = "10px";

console.log(null || WIDTH); // width
console.log(null ?? WIDTH); // width // null 이나 undefiend 인 경우 width 뱉음

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(true || WIDTH);
console.log(false ?? WIDTH); // 정의된 값을 만나면 뒤까지 안 가고 그 값이 나와요!
