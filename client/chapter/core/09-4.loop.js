/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: function () {
    return "헤헤";
  },
};

let key = "valueOf"; // object 조상에 있는것

// console.log(key in javaScript); // key 값이 javascript 에 있냐 !

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// ? console.log(javaScript.hasOwnProperty(key));
Object.prototype.nickName = "tiger"; // ! 찐 오브젝트에 넣어주는 역할이다

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// let a = {}; // 찐 오브젝트를 생성하는것

// for ~ in 문
for (let key in javaScript) {
  // console.log(key);
  if ({}.hasOwnProperty.call(javaScript, key)) {
    // console.log(key);
  }
}

// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

let tens = [10, 100, 1000];

for (let value in tens) {
  if ({}.hasOwnProperty.call(tens, value)) {
    console.log(tens[value]);
  }
}
