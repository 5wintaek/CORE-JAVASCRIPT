// ? 숫자형 문자가 맞아 ? 라고 물어보는 함수

export function isNumericString(data){
  data = Number(data);
  return !isNaN(data)
}



// ? 숫자만 넣으면 NaN 이 아니니깐 false, 숫지+문자 섞으면 true로함  Nan이기때문
// console.log(isNaN('123'));

// console.log(data);
// let data = '23'
// data = Number(data) 
// console.log(data);
