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
const second = getNode(".second");
const ground = getNode(".ground");
const ball = getNode(".ball");

// 재사용성 떄문에 자주 사용된다.
// handler 같은 함수들이 여러개가 들어갈 수 있다.
function handler() {
  console.log("hit!");
  css(".second", "display", "none");
}

first.addEventListener("click", handler);




// 여러이벤트가 적용이 안되고 하나만 된다
ground.addEventListener("click", function (e) {
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX}px,${e.offsetY}px)`;
});



ground.addEventListener("mousemove", function (e) {
  console.log(e.offsetX, e.offsetY);
  ball.style.transform = `translate(${e.offsetX}px,${e.offsetY}px)`;
});




function debounce(callback, limit = 2000) {
  let timeout;
  return function (...args) {
    console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}





function throttle(callback, limit = 1000) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

const off = bindEvent(".first", "click", handler);

bindEvent(".first", "click", off);


// second.addEventListener("click", function () {
//   first.removeEventListener("click", handler);
// });

