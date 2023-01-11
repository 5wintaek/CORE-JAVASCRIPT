function getNode(node) {
  // 문자열이 아닌 다른거라면 ?
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입 이여야 합니다.");
  }
  // if(!isString(node)) typeError('에러가 발생했습니다.');
  return document.querySelector(node);
}

// first 가 node 로 들어가고 그 결과를 리턴 !
// console.log(getNode(".first"));
// console.log(getNode(".second"));

//  이렇게도 쓸수있지만 ! 1억개라면 ..?  구조분해할당을 사용 위에 에시
// let first = span[0];
// let second = span[1];
