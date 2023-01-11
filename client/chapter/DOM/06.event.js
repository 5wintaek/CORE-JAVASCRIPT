/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// ? 우리는 실습 메서드만함
// TODO 3.메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = getNode(".first");

function handler() {
  console.log("hit!");
  css(".second", "display", "none");
}

first.addEventListener("click", handler);

const off = bindEvent(".first", "click", handler);

bindEvent(".first", "click", handler);

// ! 범썜 깃헙 다시보기
// second.addEventListener("click", function () {
//   first.removeEventListener("click", handler);
// });
//  !
