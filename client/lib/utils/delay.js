import { getNode } from "../dom/getNode.js";
import { isNumber,isObject } from "./typeOf.js";

const first = getNode('.first');

function delay(callback,timeout = 1000){
  setTimeout(callback,timeout)
}



// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';


// // delay 콜백함수로 바꿔줌 ↑ 
// ? 콜백지옥을 피하기 위해 이건 쓰지않음
// delay(()=>{
//   first.style.top = '-100px'
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       first.style.top = '0px'
//     })
//   })
// })


// delayP()
// .then(()=>{
//   first.style.top = '-100px';
//   return delayP()
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   return delayP()
// })
// .then(()=>{
//   first.style.top = '0px';
// })



// 매개변수에 자리마다 
const defaultOptions = {
  shouldReject : false,
  timeout : 1000,
  data : '성공',
  errorMessage : '알 수 없는 오류가 발생!!'
}




export function delayP(options = {}){

  // 위에 객체가 복사되서 객체로 담기는것 , 기본값으로 남아있어야 하므로
  let config = {...defaultOptions};

  if(isNumber(options)){
    config.timeout = options;
  }

// config 랑 options (밑에 인수받은것)랑 다시 config 에 덮어쓰는것
  if(isObject(options)){
    config = {...config, ...options}
  }


  const {shouldReject,data,errorMessage,timeout} = config

  //  ! 프로미스 사용
  return new Promise((resolve, reject)=>{

    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}

// options 를 인수를 받음
// delayP(3000).then((res)=>{
//   console.log(res); 
// })



// 위에 promise resolve 값을 then을 통해 값을 내뱉음
// delayP().then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })



//async await

// async function delayA(){
//   return '완료'
// }


// let result = await delayA()


// console.log(result);


async function 라면끓이기(){

  try{

  await delayP(1500)
  first.style.top = '-100px';

  await delayP(1500)
  first.style.transform = 'rotate(360deg)';

  await delayP(1500)
  first.style.top = '0px';

  console.log('계란넣기');

  throw new Error('계란 껍질이 들어가버렸다!')
  await delayP(1500)
  console.log('그릇에담기');

}catch(err){
  // console.log(err);
}
}


라면끓이기()







