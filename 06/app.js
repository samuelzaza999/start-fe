/**
 * 220407
 * ECMA 스크립트
 */

/**
 * let : 블록 유효 범위를 갖는 지역 변수
 * const : 상수. 선언과 동시에 리터럴 값 할당, 최신 트렌드
 */
let team = "FE";
const area = "jeju";

/**
 * 템플릿 표현식
 */
var cp = "ssully";
// var url = 'https://1boon.kakao.com/' + cp;   es5 버전
const url = `https://1boon.kakao.com/${cp}`;

/**
 * 기본 매개변수
 */
function multifly(a, b = 1) {
  return a * b;
}

/**
 * 화살표 함수
 */
[1, 2, 3].map((item) => item * 2);

// $btn.addEventListener((event) => {
//   console.log("click");
// });

/**
 * 전개 구문 : 얕은 복사
 */
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// 배열 복사
const words = ["a", "b"];
const newWords = [...words];

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2);

const obj = {
  a: 1,
  b: 2,
};
const newObj = { ...obj };
console.log(newObj);

/**
 * REST 파라미터 : 인자가 많을 때 작성 생략
 */
// es5 버전
// function func(){
//   console.log(arguments);
// }
// func(1,2,3);

function func(...param) {
  console.log(param);
}
func(1, 2, 3);

/**
 * 구조 분해 할당
 */
// es5 버전
// var team0 = obj.team0;
// var area0 = obj.area0;
// var col1 = cols[0];
// var col2 = cols[1];
// function getArea(options) {
//   return options.width * options.height;
// }

const { team0, area0 } = obj;
const [col1, col2] = cols;

function getArea({ width, height }) {
  return width * height;
}

/**
 * 향상된 객체 리터럴 : 자주 쓰는 표현 축약
 */
const num = 1234;
const stu = {
  // number: num,
  num,

  // playGame: function(){  },
  playGame() {
    console.log("play");
  },
};
