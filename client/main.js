/* global gsap */

import { 
  insertLast,
  tiger,
  delayP,
  getNode as $ ,
  changeColor,
  renderUserCard,
  renderSpinner,
  renderEmptyCard,
  getNode
  
 } from "./lib/index.js";


// rendingUserList 함수 만들기
// 

// 1. userList.js 로 간다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록


const userCardContainer = $('.user-card-inner')

async function rendingUserList(){

  renderSpinner(userCardContainer)

  try{
    await delayP(2000)

    $('.loadingSpinner').remove()

    let response = await tiger.get( 'https://jsonplaceholder.typicode.com/users' );

    let userData = response.data;
    // userData.forEach(data=> renderUserCard(userCardContainer,data))
    userData.forEach((data)=> {
      renderUserCard(userCardContainer,data)
    })

    changeColor('.user-card');

    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5,
      stagger: 0.2,
    })
  }
  catch(err){
    // console.log(err);
    renderEmptyCard(userCardContainer)
  }
}

rendingUserList();



// 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요

getNode('.delte')

userCardContainer.addEventListener('click',(e)=>{
  console.log(e.target);
})






