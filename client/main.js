import { 
  insertLast,
  tiger,
  delayP,
 } from "./lib/index.js";


// rendingUserList 함수 만들기
// 

async function rendingUserList(){
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users')

  let userData = response.data

  console.log(userData);
}

// rendingUserList()




