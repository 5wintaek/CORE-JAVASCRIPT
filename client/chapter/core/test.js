function solution(array) {
  let map = new Map();

  // Map 객체 초기화
  for(let i = 0; i <= Math.max(...array); i++){
      map.set(i, 0);    
  }



  // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
  for(let i = 0; i < array.length; i++){
      map.set(array[i], map.get(array[i]) + 1);
  }

console.log(map); // 5까지 

  
  

  let arr = [];
  map.forEach((n) => arr.push(n));
  
  
  // Map 객체의 value만 모아서 배열로 만든다
  // let arr = Array.from(map.values());

  // 최대값 산출
  let max = Math.max(...arr);

  // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
  if(arr.indexOf(max) !== arr.lastIndexOf(max)){
      return -1;
  } else {
      return arr.indexOf(max);
  }
}

console.log(solution([1,2,3,3,3,4])); // 3
console.log(solution([1,1,2,2])); // -1 


// function solution(array) {
//     // [1,2,3,3,3,4]
//     const arr = array.sort((a, b) => a - b); // 오름차순 정렬
//     let before = -1; // 시작값 1
//     let cnt = 0; // 빈도수 0
//     let maxCnt = 0; // 최대 빈도수 0
//     let max = -1; // 최빈값 0
//     let isDup = false;
  
//     for (let i = 0; i < arr.length; i++) {
//       // 1, 1, 2, 2
//       before !== arr[i] ? (cnt = 1) : (cnt += 1);

//     //   console.log(arr.length);
  
//       if (cnt === maxCnt) {
//         if (max !== arr[i]) {
//           isDup = true;
//         }
//       }
  
//       if (cnt > maxCnt) {
//         max = array[i];
//         maxCnt = cnt;
//         isDup = false;
//       }
//       before = arr[i];
//     //   console.log(cnt);
//       console.log(maxCnt);
//     }
  
//     return isDup ? -1 : max;
    
//   }
// console.log(solution([1,2,3,3,3,4]))

