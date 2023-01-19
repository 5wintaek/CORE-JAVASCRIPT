

import { getNode, saveStorage } from "./lib/index.js";


const textField = getNode('#textField')
const deleteButton = getNode('input[value="삭제"]')

// 새로고침을 하여도 텍스트가 저장되어 남아있음
localStorage('area').then((res)=>{
  textField.value = res
})

// localStorage 에 입력하게 만드는 함수
function inputHandler() {
  saveStorage('area',textField.value)
}




//textField 에 input 이라는 핸들러가 있다
textField.addEventListener('input',inputHandler)