
import { getNode, getInputValue, getRandom, insertLast, clearContents, isNumericString } from './lib/index.js'; // 뒤에 꼭 확장자명 붙여줘야함 : .js
import { jujeobData } from "./data/data.js";





  // console.log(isNumericString('123'));


// id는 모듈과 상관없이 콘솔창에서 잡힌다 
const submit = getNode('#submit')
// result 자체를 변수로 담고
const resultArea = getNode('.result')


console.log(submit);







function clickSubmitHandler(e){
  // 1.submit 하면 새로고침 일어나서 밑에 문장을 추가
  e.preventDefault();


  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  // 문자의 길이는 6이라고 지정하면 인덱스 시작점은 0 이니깐 0~5 이다 그래서 -1 을 해주었다
  // list배열 안에서 랜덤한 인덱스로 값을 추출해주는겁니다!
  let pick = list[getRandom(list.length-1)];


  // 이름창에 이름이 아예 안들어왔을때 나오는 코드
  if(!name){
    console.log('이름을 입력해주세요 !');
    return 
  }

  if(isNumericString(name)){
    console.log('제대로된 이름을 입력');
    // 리턴하는 순간 함수가 종료되고 결과창이 실행되지 않음
    return 
  }

  // console.log(pick);

  // 기존에 있던거 없애기
  clearContents(resultArea)
  //result 라는 곳에 뿌림 , 결과창에 보여주려고 쓴 코드
  insertLast(resultArea,pick)

 
}




submit.addEventListener('click',clickSubmitHandler)





