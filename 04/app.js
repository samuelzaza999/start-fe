/**
 * index.html과 연동
 * 
 * DOM (Document Object Model) :
 * html & xml 문서 대한 프로그래밍 인터페이스, 문서 구성 객체에 어떻게 접근할지 정의하는 api.
 * 
 * BOM (Browser Object Model) :
 * 클라이언트 측 계층 구조와 레벨 0 DOM, 브라우저마다 차이.
 * window(최상위 객체), location(url 정보), history(브라우저), screen(화면 해상도), navigator(브라우저)
 * 
 */

// window.outerWidth;
// window.name;
// window.open('http://www.daum.net');
// window.opener;  // 자식창
// window.close(); // 보안 : js로 open한 창만 close 가능

// location.herf = 'http://www.daum.net';
// location.reload();

// history.back();
// history.go(1);   // 보안 : 객체 못 읽음

console.log(screen.width);
console.log(screen.availWidth);

console.log(navigator.userAgent);   // 브라우저 사용 정보
console.log(navigator.language);    // 브라우저 언어
console.log(navigator.platform);


/**
 * DOM 탐색
 */
// id 찾기
const element0 = document.getElementById('wrap');
console.log(element0);

// class 찾기
const element1 = document.querySelector('.item');
console.log(element1);

// 태그 전부 찾기 : 배열 형태로 가져오기
const elements = document.querySelectorAll('div');
console.log(elements);


/**
 * DOM 생성 : js로 항목 생성
 */
const divxx = document.createElement('div');
divxx.style.border = "1px solid red";
divxx.innerHTML = "hello";


/**
 * DOM 삽입
 */
// body 제일 아래에 생성한 dom 넣기
document.body.appendChild(divxx);

const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

// 비표준, 작은 코드 넣을 때, 위의 createElement(), appendChild()보다 편리
const text = '<span>hello!<span>';
document.querySelector('#debug').innerHTML = text;    // id 찾아서 위의 내용 넣기


/**
 * DOM 제거
 */
const el = document.getElementById('div1');
el.remove();

const listxx = document.getElementById('list');
listxx.removeChild(list.children[0]);


/**
 * 이벤트 : 문서에서 element에 변화가 생기면 발생하는 모든 사건.
 * click, mouseover, load, mouseout, unload, 
 * change,submit, focus, blur, error, keypress,
 * DOMContentLoaded,touchstart ..
 */
// 프로퍼티로 주기, 권장X
// window.onload = function(){
//   alert("load");
// };

// DOM 레벨 2 : callback 함수
window.addEventListener('load', function(){
  console.log("load1");
});

window.addEventListener('load', function(){
  console.log("load2");
});

// 이벤트 등록
// function eventHandler(event) {
//   if (event.type == 'fullscreenchange') {
//     /* 전체화면 여부 변화 처리 */
//   } else /* fullscreenerror */ {
//     /* 전체화면 오류 처리 */
//   }
// }

// callback 함수 : 특정 동작(이벤트) 등이 완료 후 발생하는 함수
var clickCount = 0;
function popup(event){
  console.log(++clickCount);
  console.log(arguments, this, event, event.type, event.currentTarget);
}
document.body.addEventListener('click', popup);   // 이벤트 종류

document.body.addEventListener('click', function(){
  console.log("click@@");
});

// 이벤트 위임 패턴
var app = document.getElementById("list1");
app.addEventListener("click", function(event1){
  if(event1.target.nodeName == "LI"){
    // 한 개의 이벤트 리스너로 모든 li에 click 이벤트 등록
    console.log("click!!");
  }
});

// 이벤트 전파 : top-most element -> child -> descendant 순서
var link2 = document.querySelector('a');
link2.addEventListener('click', function(event){
  window.open('http://www.daum.net');   // html에서 감추고 여기서 작동
  event.preventDefault();
});

// event.stopPropagation(); // 이벤트 전파 중지
// event.preventDefault(); // 기본 행동 중지

// 정 뭐하면 classroom git에서, 아니면 유튜브