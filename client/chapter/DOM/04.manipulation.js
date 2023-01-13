/* ---------------------------------------------------------------------- */
/* DOM Manipulation                                                       */
/* ---------------------------------------------------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */


// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

let div = document.createElement("div");
div.className = "third";
div.textContent = "세번째 입니다.";

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */
const h1 = getNode("h1");
// - node.append(노드나 문자열) – node 끝에 노드를 삽입 , 마지막 자식
//  ? h1.append(div);

// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입 , 첫번쨰 자식에게 들어감
// ? h1.prepend(div);

// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// ? h1.before(div);

// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// ? h1.after(div);

// - node.replaceWith(노드나 문자열) – node를 대체

// - node.remove() – node를 제거 / DOM 자체를 제거
// h1.remove();

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

// 태그나 문자를 넣을 수 있다.
// class = ' box ' 라고 하게 되면 홀따옴표가 문장이 끝났다 라고 인식을 하게 된다 .
// 따옴표 종류 다르게 해줘야 해요
// 여기 사용한건 백틱

let template = /* html */ `<div class="box">새롭게 추가된 엘리먼트 입니다</div>`;

// h1.insertAdjacentHTML("beforebegin", template);

insertBefore("h1", template);

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입
