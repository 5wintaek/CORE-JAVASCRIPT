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
