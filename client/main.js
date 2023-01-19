import { 
  insertLast,
  tiger,
  delayP,
  creatUsercard,
  getNode,
 } from "./lib/index.js";


// rendingUserList 함수 만들기
// 

// 1. userList.js 로 간다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록


const userCardContainer = getNode('.user-card-inner')

async function rendingUserList(){
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users')

  let userData = response.data;

  console.log(userData);

  insertLast(userCardContainer,creatUsercard(userData))
  
}

rendingUserList();





