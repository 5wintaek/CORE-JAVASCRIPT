
import { diceAnimation, disableElement, enableElement, getNode,getNodes, visibleElement  } from "./lib/index.js";



// 구조 분해 할당
const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button')
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('.buttonGroup > button:nth-child(3)');



// 주사위 굴리기 노드 잡기

const recordListWrapper = getNode('.recordListWrapper')


// IIFE

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
}

const handleReset = ()=>{
  
  visibleElement(recordListWrapper)
}



rollingDiceButton.addEventListener('click',handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)