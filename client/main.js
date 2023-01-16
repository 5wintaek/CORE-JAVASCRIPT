
import { clearContents, attr, diceAnimation, disableElement, enableElement, getNode,getNodes, insertLast, invisibleElement, visibleElement, memo,  } from "./lib/index.js";



// [ 초기화 시키기 ]
// 1. clearContent 로 정보 지우기
// 2. total, count 초기화 
// 3. 스크롤 밑으로 보내기 
// 4. 메모이제이션 패턴 



// 구조 분해 할당
const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button')
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('.buttonGroup > button:nth-child(3)');

memo('@tbody',()=>getNode('.recordListWrapper tbody'));

let count = 0 
let total = 0
// 기록을 뿌려야함 tBody
function renderRecordListItem(){
  let diceValue = Number(attr(memo('cube'),'data-dice')); // 문자형이여서 +
  let template =  /* html */`
  <tr>
    <td>${++count}</td> 
    <td>${diceValue}</td>
    <td>${total = total + diceValue}</td>
  </tr> 
  `
  // 아래로 쌓이게 하려고 inserLast 사용
  insertLast(memo('@tbody'),template)
  // insertLast('.recordListWrapper tbody',template)
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight
}


// 주사위 굴리기 노드 잡기
const recordListWrapper = getNode('.recordListWrapper')



// IIFE
/* -------------------------------------------------------------------------- */
/*                                  // event                                  */
/* -------------------------------------------------------------------------- */
const handleRollingDice = (()=>{
  let isRolling = false
  let stopAnimation;
  
  return () =>{
    if(!isRolling){
       // console.log('첫번째 클릭');
      stopAnimation = setInterval(diceAnimation,100) 
      disableElement(recordButton)
      disableElement(resetButton)

    }else{
       // console.log('두번째 클릭');
      clearInterval(stopAnimation);
      enableElement(recordButton)
      enableElement(resetButton)
    }
    isRolling = !isRolling
  }
})()


const handleRecord = ()=>{
  
  visibleElement(recordListWrapper)

  renderRecordListItem();
}

const handleReset = ()=>{
  count = 0
  total = 0
  
  invisibleElement(recordListWrapper)

  // clearContents('.recordListWrapper tbody')
  clearContents(memo('@tbody'))
}



rollingDiceButton.addEventListener('click',handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)