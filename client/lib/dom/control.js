import { typeError } from "../error/typeError.js";


//버튼 비활성화
export function disableElement(node) {
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = true;
}

// 버튼해제
export function enableElement(node) {
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = false;
}