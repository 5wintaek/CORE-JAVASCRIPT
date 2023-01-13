/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode(".visual");
const news = getNode(".news");
const desc = getNode(".desc");

// TODO ? 주석 처리된거 풀어서 확인 target 과 currentTarget 차이
visual.addEventListener("click", function () {
  // ? console.log('target : ',e.target);
  // ? console.log('currentTarget :  ' ,e.currentTarget);
  // ? console.log(this === e.currentTarget);
  // ? console.log(this);
  console.log("%c visual", "background:blue");

  css(".pop", "display", "block");
});

getNode(".pop").addEventListener("click", (e) => {
  e.stopPropagation();
  css(".pop", "display", "none");
});

// news.addEventListener("click", function () {
//   console.log("%c news", "background:orange");
// });

// desc.addEventListener("click", function (e) {
//   e.stopPropagation(); // 버블링을 막는것
//   console.log("%c desc", "background:hotpink");
// });

/* 캡처링 ----------------------------------------------------------------- */

String.prototype.contain = function (data) {
  return this.valueOf(data) >= 0;
};
