
import { getNode } from './getNode.js';
import { addClass, removeClass } from './css.js';


export function showAlert(node,text = '에러입니다',timeout = 1500){

  if(typeof node === 'string') node = getNode(node)
  node.textContent = text
  
  // is-active 를 넣었지만 timeout=1500 이 지나면 다시 is-active 가 사라진다.
  addClass(node,'is-active')
  setTimeout(()=>{
    removeClass(node,'is-active')
  },timeout)
}




