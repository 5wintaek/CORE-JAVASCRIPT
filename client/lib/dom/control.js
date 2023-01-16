import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";

// /** 엔터 하면 자동완성 됨 ㅋㅋ 'JS Doc' 이라고 함.
/**
 * @function isElement checkElement
 * @param {HTMLElement} node  
 * @return set disabled
 */


export function disableElement(node){

  if(!isElement(node)){
    typeError('disableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
  }
  node.disabled = true;
}


export function enableElement(node){
  if(!isElement(node)){
    typeError('enableElement 함수의 인자는 DOM 요소 노드 이어야 합니다.')
  }

  node.disabled = false;
}


export function visibleElement(node){ // 보여아함
  if(!isElement(node)){
    typeError('visibleElement 함수의 인잔느 DOM 요소 노드 이어야 합니다')
  }
  node.hidden = false;
}

export function invisibleElement(node){ // 안보여야함
  if(!isElement(node)){
    typeError('visibleElement 함수의 인잔느 DOM 요소 노드 이어야 합니다')
  }
  node.hidden = true;
}
