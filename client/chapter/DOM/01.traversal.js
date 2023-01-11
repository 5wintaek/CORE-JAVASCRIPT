/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes // 탐색하기 어려움
// - firstChild //
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement // 다른 노들을 찾지 않고 해당 엘리먼츠 노드만 사용
// - children // childNodes 보다는 탐색하기 쉬움
// - firstElementChild
// - lastElementChild
// - previousElementSibling // 요소 노드가 아니면 전부 다 null 반환
// - nextElementSibling //  다음 엘리먼트를 찾는다, 자식아님 !

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// let first = document.querySelector(".first"); // first 클래스 찾음

// let span = document.querySelectorAll("span"); // span 태그 요소 찾음

// ! 구조분해할당
let [first, second] = document.querySelectorAll("span"); // span 태그 요소 찾음

// console.log(first);

// lib 파일에 생성해서 파일을 불러와서 생성

console.log(getNode(".first"));

// first 가 node 로 들어가고 그 결과를 리턴 !
// console.log(getNode(".first"));
// console.log(getNode(".second"));

//  ! 이렇게도 쓸수있지만 ! 1억개라면 ..?  구조분해할당을 사용 위에 에시
// let first = span[0];
// let second = span[1];

// entries 객체를 배열로 바꿈 , 정확하지않음 찾아보자

/* 문서 대상 확인 */
// - matches / 여기 안에 매칭이 되냐 ?! 있는게 맞아 ?!
// getNode 안에 class || id 를 가지고 있느 대상이 있어 ?
console.log(getNode(".first").matches(".first"));
