/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded // 로딩이 오나료된
3:interative // 인터렉티브
4:complete // 완료
*/

// xhrData 함수 만들기
function xhrData(method,url){
  const xhr = new XMLHttpRequest()


// 비동기 통신 오픈 시작을 알림
xhr.open(method,url)

// 변경이 일어날떄마다 호출하는 역할
xhr.addEventListener("readystatechange", () => {
  if(xhr.status >= 200 && xhr.status < 400){
    if(xhr.readyState === 4){
      console.log('통신성공');
      console.log(JSON.parse(xhr.response));
    }
  }else{
    console.log('통신 실패');
  }
  
});
// 서버에 요청
xhr.send()
}
xhrData('GET','https://jsonplaceholder.typicode.com/users')