

const firstInput = getNode('#firstNumber') 
const secondInput = getNode('#secondNumber')
const done = getNode('#done')
const result = getNode('.result')


// input 만 가능하다
function getInputValue(node){ 
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getinput 함수 오류')
  return node.value

}


// 리턴이 생략되어 있음
const sum = (valueA,valueB) => valueA + valueB
// function sum(valueA,valueB){
//   return valueA + valueB
// }


// result 에서 - 하이폰이 있는데 여기를 비워주려고 사용한 유틸함수
function clearContents(node){
  if(typeof node === "string") node = getNode(node)
  node.textContent = ''
}




// getInputValue 앞에 + 넣은이유는 숫자로 변환하려고 넣었다.
function handler(e){
  e.preventDefault(); // 지금 맨위에 둔게 왜 그런거죠 그러면 ..?

  let firstValue = +getInputValue(firstInput)
  let secondValue = +getInputValue(secondInput)
  let total = sum(firstValue,secondValue)

    console.log( total );
    
    clearContents('.result')

    insertFirst('.result',total)

}

function inputHandler(){
  let firstValue = +getInputValue(firstInput)
  let secondValue = +getInputValue(secondInput)
  let total = sum(firstValue,secondValue)

  // getNode 
  clearContents(result)
  insertLast(result,total)
  
}


// done을 클릭하면 나오는 이벤트
done.addEventListener('click',handler)

// 자동으로 값 오르게 하는 이벤트
firstInput.addEventListener('change',inputHandler)




