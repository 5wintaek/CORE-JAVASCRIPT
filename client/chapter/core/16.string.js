/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = "Less is more.";

// length 프로퍼티
let stringTotalLength = message.length;
console.log("stringTotalLength", stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log("extractCharacter", extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
// message[3] = "i"; // 이런건 안된다
let immutableChangeCharacter;

// 문자를 새로 만들고 합치는건 가능
// message = "more" + message[5];

// console.log(message);

// 부분 문자열 추출

// let slice = message.slice(8, -1); // 8번쨰부터 -1번째(끝부분)
let slice = message.slice(8); // 이렇게하면 완전 끝부분까지 가능
console.log("slice", slice);

let subString = message.substring(-1, 5);
console.log("substring", subString);
// let subStr; 사라짐

// 문자열 포함 여부 확인
// 특겅값을 찾을때 없으면 -1 로 반환함
let indexOf = message.indexOf("i");
console.log("indexOf", indexOf);

let lastIndexOf;
let includes;
let startsWith;
let endsWith;

// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;

// 텍스트 반복
let repeat;

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;
