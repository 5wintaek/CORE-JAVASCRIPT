/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded // 로딩이 오나료된
3:interative // 인터렉티브
4:complete // 완료
*/

// xhrData 함수 만들기
function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type':'application/json'
   }
}){

// const{method,url,body} =  options

const xhr = new XMLHttpRequest()
// 비동기 통신 오픈 시작을 알림
console.log(xhr);
xhr.open(method,url)

Object.entries(headers).forEach(([key,value])=>{
  xhr.setRequestHeader(key,value)
})

xhr.addEventListener("readystatechange", () => {
  const {status,readyState,response} = xhr; // 객체 구조 분해 할당 
  
  if(status >= 200 && xhr.status < 400){
    if(readyState === 4){
      console.log('통신성공');
      onSuccess(JSON.parse(response))
      // console.log(JSON.parse(response));
    }
  }else{
    // console.log('통신 실패');
    onFail('통신 실패')
  }
  
});
// 서버에 요청
xhr.send(JSON.stringify(body))
}

xhrData({
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess : (result)=>{
    console.log(result);
  },
  onFail : (error)=>{
    console.log(error);
  }
})

// 어떠한 행동, 여기 사이트에서 , 이걸로 통신해줘
// 아 기존을 갖고있던게 10 개인데 우리가 POST로 1개 더 만들어서 11번
// xhrData('POST','https://jsonplaceholder.typicode.com/users',{
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },)