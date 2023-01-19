


// 2. 받는 순간 다시 구조분해할당  , 기본값을 넣어줌
export const creatUsercard = ({
  id = '',
  name = 'taek',
  email = 'taek@email.com',
  website = 'goood@name'
} ={}) => { 
  // = {} 빈 객체를 넣어준다는 뜻인데 없어도 된다.

  return /* html */`
  <article class="user-card" data-index="user-${id}">
  <h3 class="user-name">${name}</h3>
  <div class="user-resouce-info">
    <div>
      <a class="user-email" href='mailto:${email}}'>${email}</a>
    </div>
    <div>
      <a class="user-website" href='http://${website}' target="_blank" rel="noopener noreferer">${website}</a>
    </div>
  </div>
  <button class="delete">삭제</button>
</article>
`
}

