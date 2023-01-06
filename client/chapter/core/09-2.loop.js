/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// 조건이 안맞아도 무조건 한번은 실행한다
// ? 여기 주석풀기
/* let i = 10;

do {
  console.log("최초실행");
  i++;
} while (false); */
//? 여기까지 주석 풀기

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단
// ! 안에 if 쓴 이유는 처음에 알람창 뜨고 숫자 입력할때 음수 입력 방지입니다

//!! 여기 깃허브 참조
/* do {
  if (count <= 0 || !count) {
    console.log("최초실행");
    break;
  }
  count--;
  console.log(count);
} while (count);
 */
// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
// nextSibling 은 다음대상을 바로 찾아준다. 주석도 포함

let first = document.querySelector(".first");
let second = document.querySelector(".second");

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);

  return node;
}

// next(first) // second

// prev(second)   // first

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE);

  return node;
}

//  next(first); //second

// 스코프 예시
let x = 1;
{
  let x = 3;
}
