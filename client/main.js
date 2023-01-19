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
  getNode,
  attr
  
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

    let response = await tiger.get( ' http://localhost:3000/users' );

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
// 버블링을 이용한 방법 ! 부모한테 위임을 시켜서 e.target 을 줌
// closest('button')); -> 누른 버튼중에 가장 인접한 버튼만 찾아라



function handler(e){
  let deleteButton = e.target.closest('button')
  let article = e.target.closest('article')

  
  if(!deleteButton || !article) return;

  let id = attr(article,'data-index').slice(5)

  // 카드를 지우고 난 뒤에 데이터상에는 바로 사라지고 유저 화면에서는 새로고침 후 사라진다. 이걸 새로고침을 안하려면 어떻게 할까 ? ->then
  tiger.delete(` http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = '';
    rendingUserList()
  })
  
}

userCardContainer.addEventListener('click',handler)









