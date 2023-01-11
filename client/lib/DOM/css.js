function addClass(node, className) {
  if (typeof node === "string") node = getNode(node); // 한줄일때 { } 생략가능
  node.classList.add(className);
  if (typeof className !== "string") {
    TypeError("addClass 함수의 두번쨰 인자는 문자 타입 이어야 합니다");
  }
  node.classList.add(className);
}

// ! return 을 사용하지 않은 이유
// 함수의 목적은 변경하기 : 대상의 클래스를 지우는것
// 지운값을 받아서 뭘 처리해야하면 return 을 사용하는데 그런게 아니고 set 을 하는거기 떄문에 사용안함
// 어디 담아서 반환하는게 아니라 그냥 함수 자체에 담는거기 때문에 사용을 하지 않았다
function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node); // 한줄일때 { } 생략가능

  if (!className) {
    // 만약에 className에 아무것도 없다면
    node.className = ""; // 공백처리하면 모든게 날라간다
    return;
  }

  if (typeof className !== "string") {
    TypeError("removeClass 함수의 두번쨰 인자는 문자 타입 이어야 합니다");
  }

  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === "string") node = getNode(node); // 한줄일때 { } 생략가능

  if (typeof className !== "string") {
    TypeError("toggleClass 함수의 두번쨰 인자는 문자 타입 이어야 합니다");
  }

  node.classList.toggle(className);
}

// 자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 [ ] 사용
// 대상에게 속성을 받아서 그 속성 값을 보여줘야함
function getCss(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    // ( ) 쓴 이유 노션에 정리
    syntaxError("getCss 함수의 두 번쨰 인자인 prop 은 유효한 css속성이 아닙니다");
  }

  return getComputedStyle(node)[prop]; // 값을 가져와야 하니깐 return 을 해준다
}

// return 안한이유
// 대상에게 원하는 CSS 속성을 추가하는거기 때문에 세팅을 해주는것
function setCss(node, prop, value) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    // !(prop ) 쓴 이유 노션에 정리
    syntaxError("getCss 함수의 두 번쨰 인자인 prop 은 유효한 css속성이 아닙니다");
  }
  if (!value) {
    syntaxError("setCSS 함수의 세 번쨰 인자는 필수값 입니다");
  }

  node.style[prop] = value;
}

// console.log(getCss(".first", "font-size")); // 32px // font-size 와 fontSize 가 내장되어있다

function css(node, prop, value) {
  if (!value) {
    return getCss(node, prop);
  } else {
    setCss(node, prop, value);
  }
}

// ? 삼항연산자로 변경시
// const css = (node, prop, value) => {
//   return !value ? getCss(node, prop) : setCss(node, prop, value);
// };
