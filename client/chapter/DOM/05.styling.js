/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

console.log(first.className);
first.classList.add("hello"); // 기존 클래스를 냅두고 추가가 hello 가 추가되었다
// first.classList.remove("hello"); // 제거
// first.classList.toggle("is-active") //is-active가 나왔다가 사라졌다가
// console.log(first.classList.contains("hello")); // hello 라는 클래스가 들어있어 ? true / false

addClass(".first", "aaa");
removeClass(".first", "hello");

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
