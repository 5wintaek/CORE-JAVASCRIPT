



const creatUsercard = (user) => {

  // 다시 user에게 구조분해할당 : user.id , user.email 이런짓을 하지 않기 위해 사용
  const {id,name,email,website ='사이트' } = user
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
creatUsercard(1,'tiger','eamil','website')


console.log(creatUsercard({
  id :1,
  name : 'tiger',
  email : 'tiger@mail',
}));