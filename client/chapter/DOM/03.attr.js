/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우,
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

let first = getNode(".first");

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// 비표준 속성도 속성 존재 여부를 확인해준다
// console.log(first.hasAttribute("some")); // true or false

// - elementNode.getAttribute(name) – 속성값을 가져옴
// console.log(first.getAttribute("class")); // first
// console.log(first.getAttribute("class") === "first"); // hasAttribute 처럼 사용하기 

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute("id", "box"); // id 값을 box 로 하겠다
first.setAttribute("some", "hello"); // 비표준 속성도 추가할 수 있다.

// - elementNode.removeAttribute(name) – 속성값을 지움 , 안에 있는 속성값을 찾아서 지움
first.removeAttribute("some"); // some 을 지움

first.setAttribute("some", ""); // setAttribute 를 통해 빈 문자열로도 지울 수 있음

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
// console.log(first.attributes);

// for of 를 쓸 수 있냐 없냐?
for (let i = 0; i < first.attributes.length; i++) {
  console.log(first.attributes[i]);
}

// iterator 한 속성이므로 사용 가능, 배열과 객체를 순환해야 할 때는 for of 가 더 낫다.
// Symbol.iterator
for (let value of first.attributes) {
  console.log(value);
}

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset
// dataset.play  =  data-play 
first.dataset.play = "playing"; // set  , playing 이라는 비표준 속성을 만들었음

// console.log(first.dataset.play); // get

// 유틸함수
// ! 여기 깃허브 참조하기 밑에 get,set,attr -> lib 에 넣어놨음
// get 함수 만들기

console.log(attr(".first", "id")); // box
console.log(attr(".first", "id", "container")); // first 노드 요소 안에 id를 container 로 지정

// ! 즉시 실햄 함수 예시 , 질문하기 뭔말인지 모르겠음
// (function () {
//   let first = $(".first");
// })(getNode);

// console.log(getAttr(".first", "class"));

// function setAttr(node, prop, value) {
//   if (typeof node == "string") {
//     node = getNode(node);
//   }
//   let result = node.getAttribute(data);
//   return result.setAttribute(prop);
// }
