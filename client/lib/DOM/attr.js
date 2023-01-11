// IIFE 패턴
// const attr = (function(){
//   function getAttr(node,prop){
// node = '.first'
// prop = 'class'

//     if(typeof node === 'string'){
//       node = getNode(node);
//     }

//     return node.getAttribute(prop);

//   }

// computed property
// function setAttr(node,prop,value){
// validation : 확인
//     if(typeof node === 'string') node = getNode(node);
//     if(typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다.')

//     if(prop.includes('data')){
//       let rest = prop.slice(5);
//       node.dataset[rest] = value;
//     }

//     if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

//     node.setAttribute(prop,value);

//   }

// const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);

//   function attr(node,prop,value){

// if(!value){
//   return getAttr(node,prop);
// }else{
//   setAttr(node,prop,value);
// }

//     return !value ? getAttr(node,prop) : setAttr(node,prop,value);

//   }

// incapsulation // 캡슐화
// /정보 은닉
//   return attr

// })()
// incapsulation // 캡슐화
// 정보 은닉

function getAttr(node, prop) {
  // node ='.first'
  // prop = 'class'
  if (typeof node === "string") {
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

// 중가로 생략 할 수 있어서 생략함
// 안에 문이 많아지면 중가로 써야함
// 중가로 생략하고 return 이 되는것은 화살표함수
function setAttr(node, prop, value) {
  if (typeof node == "string") node = getNode(node);
  if (typeof prop !== "string") throw new TypeError("setAttr 함수의 두 번쨰 인자는 문자 타입 이여야 한다.");

  if (!value) throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다..");
  node.setAttribute(prop, value);
}

// first 라는 노드 안에 data-value의 값으로 hello 를 집어넣겠다
// setAttr(".first", "data-value", "hello");

// ? get , set 함수 만들기

function attr(node, prop, value) {
  // if (!value) {
  //   return getAttr(node, prop);
  // } else {
  //   return setAttr(node, prop, value);
  // }

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}
