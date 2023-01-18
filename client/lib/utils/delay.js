import { getNode } from "../dom/getNode.js";

const first = getNode('.first');

function delay(callback,timeout = 1000){
  setTimeout(callback,timeout)
}



// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';


// // delay 콜백함수로 바꿔줌 ↑
// delay(()=>{
//   first.style.top = '-100px'
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       first.style.top = '0px'
//     })
//   })
// })


delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
})




function delayP(timeout = 1000){

  return new Promise((resolve, reject)=>{

    setTimeout(() => {
      resolve('성공!')
    }, timeout);
  })
}

// 위에 promise resolve 값을 then을 통해 값을 내뱉음
delayP().then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})






