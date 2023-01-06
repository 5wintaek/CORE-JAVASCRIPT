/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

// indexOf 예제문제
function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") > -1) browser = "chrome";
  else if (ua.indexOf("edge") > -1) browser = "edge";
  else if (ua.indexOf("whale") > -1) browser = "whale";
  else if (ua.indexOf("safari") > -1) browser = "safari";
  else if (ua.indexOf("firefox") > -1) browser = "firefox";

  return browser === browserName;
}

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

let lastIndexOf = message.lastIndexOf("i");

// 이 문자를 포함하구 있어 ? boolean 으로 알려줌
let includes = message.includes("Less");
console.log("includes", includes);

// 첫 글자를 확인해야할떄 사용
let startsWit = message.startsWith("L");
console.log("startsWit", startsWit);

// 끝 글자를 확인할때 사용
let endsWith = message.endsWith(".");
console.log("endsWith", endsWith);

// 공백 잘라내기
let trimLeft = message.trimLeft(); // 이거 사용 x
// console.log("trimLeft :", trimLeft);
let trimRight; //이거 사용 x

// 공백 잘라내기 , 띄워쓰기는 제거 x
let trim = message.trim();
console.log("trim", trim);

// 텍스트 반복
let repeat = message.repeat(3);
console.log("repeat", repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log("toLowerCase", toLowerCase);

let toUpperCase = message.toUpperCase();
console.log("toUpperCase : ", toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, "")
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

toCamelCase("less-is-more"); // lessIsMore
toPascalCase("less-is-more"); // LessIsMore
