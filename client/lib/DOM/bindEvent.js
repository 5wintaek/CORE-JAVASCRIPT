function bindEvent(node, type, handler) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  // test 안에있는 값과 일치하는게 있으면 true
  if (!/mouseenter|click|mousemove|mouseleave/g.test(type)) {
    typeError("bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.");
  }
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}
