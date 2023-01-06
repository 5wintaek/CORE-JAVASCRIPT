function getNode(node) {
  // 문자열이 아아닌 다른거라면 ?
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입 이여야 한다");
  }
  return document.querySelector(node);
}

function getNodes(node) {
  // 문자열이 아아닌 다른거라면 ?
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입 이여야 한다");
  }
  return document.querySelectorAll(node);
}
