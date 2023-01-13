/* ---------------------------------------------------------------------- */
/* DOM Node Class                                                         */
/* ---------------------------------------------------------------------- */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

/* 노드 정보 ------------------------------------------------------------- */

//  ? getNode

let first = getNode(".first");
// console.log(first); // first 클래스 속해있는 태그 전부 다 나옴

// - nodeType
// true false
// first.nodeType = 1 이다
// first.nodeType 
// nodeType 으로 하면 숫자로 반환된다. typeof 랑 다름
// Array.isArray() - 배열인지 아닌지 판별
// Array.from() - 유사배열을 진짜 배열로 만들어줌 [...arg]
// NodeType 1 , 3 , 9 번 잘나옴
// !
// console.log(first.nodeType === document.ELEMENT_NODE);
// console.log(first.nodeType === 1);
// console.log(first.nodeType);

// - nodeName (vs. tagName)
// 노드네임은 항상 대문자로 나온다 꼭 기억
// 
// console.log(first.nodeName === "SPAN"); 
// console.log(first.tagName === "SPAN");

/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML
// 앞으로 갈 수는 없음 뒤에만 붙일 수 있음
first.innerHTML = "like Lion";
first.innerHTML += "like Lion";
first.innerHTML += "<strong>like Lion</strong>";

// * 기존 내용 삭제
first.innerHTML = " ";

// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML += "<strong>like Lion</strong>";

// - textContent
// 텍스트 컨텐츠 자체를 확인할떄 사용
console.log(first.textContent); // get // like Lion

// * 요소 내의 텍스트에 접근
first.textContent = "난 짱짱이다"; // set

// * 태그는 제외하고 오로지 텍스트만 추출

/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

// first.hidden = true; // first 클래스만 hidden 하게 된다 .
// getNode("h1").hidden = true; // DOM 에 property에 접근하여 hidden 속성이 추가된다

// ! 예시
// toggle 에 false 를 잡든 true 를 잡든 잘 돌아가는데 그 이유가 무엇일까요 ?
let toggle = false;

setInterval(() => {
  getNode("h1").hidden = toggle ? false : true;
  toggle = !toggle;
}, 1000);
