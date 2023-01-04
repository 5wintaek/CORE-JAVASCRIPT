// 함수 선언 → 화살표 함수 (표현)식
// let calcAllMoney = (a, b, c, d) => {
//   return a + b + c + d;
// };
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 화살표 함수와 this

function normalFunction() {
  console.log("일반함수 : ", this);
}

const arrowFunction = () => {
  console.log("화살표함수 : ", this);
};

// normalFunction()
// arrowFunction()

//  객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
//  메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 좋아.

const user = {
  name: "tiger",
  age: 32,
  address: "서울시 중랑구 면목동",
  grades: [80, 90, 100],
  totalGrades: function () {
    /*  let total = 0;
    this.grades.forEach((item)=>{
      this
    })
    return total */

    function foo() {
      console.log("foo : ", this);
    }

    const bar = () => {
      console.log("bar : ", this);
    };

    foo.call(user); // user
    bar(); // user object
  },
};

console.log(user.totalGrades());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// 제곱근으로 만들기
let pow = (numeric, powercount) => {
  let result = 1;
  for (let i = 0; i < powercount; i++) {
    result *= numeric;
  }
  return result;
};

let powExpression = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

// pow(2, 53); // 9007199254740992

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = "";
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

//reduce 중가로 생략 가능 , 없으면 return 된다
// 중가로를 생략안하면 return 을 넣어줘야한다.
let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => {
      return acc + text;
    }, "");

repeat("hello😘", 3); // 'hello😘hello😘hello😘'
