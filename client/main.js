
import { diceAnimation, getNode  } from "./lib/index.js";






// 주사위 굴리기 노드 잡기
const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)')



// IIFE

const handlerRollingDice = (()=>{
  let isRolling = false
  let stopAnimation;
  
  return () =>{
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation,100) 
    }else{
      clearInterval(stopAnimation)
    }
    isRolling = !isRolling
  }
})()





rollingDiceButton.addEventListener('click',handlerRollingDice)
