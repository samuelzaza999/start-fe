/**
 * 03주차 : 타입변환부터
 */

/* 타입변환 : var의 동적 타입값*/
var foo = 42;
var foo = "bar";
var foo = true;

if("test"){
  console.log("true");    // true로 자동 변환
}
"2" + 2;    // "22"


/**
 * 원시타입 : 변수 할당 시 고정 크기 저장, 변수가 원시 데이터의 값(value) 저장.
 * Number, String, Boolean, null, undefined
 * 
 * 참조타입 : 변수에 데이터 대한 참조(reference)만 저장. -> 상호 변화
 * Object, Array, Function
*/
// value
var a = 1;
var b = a;
b = 2;
console.log(a, b);

var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

// reference
var a = {x: 1};
var b = a;
b.x = 2;
console.log(a, b);

// call by value : 값만 넘겨서 자신은 불변 -> 3
function byValue(count){
  count += 2;
}
var count = 3;
byValue(count);
console.log(count);

// call by reference : 주소를 넘겨서 func 등의 변화에 반응 -> ['1', 2]
function byRef(count){
  count.push(2);
}
var count = ['1'];
byRef(count);
console.log(count);


/**
 * 구문
 */
// if
 var isMan = true;
 if(isMan){
   console.log("man");
 }
 else{
   console.log("sss");
 }
 var gender = isMan ? "남" : "여";  // 실전은 if보다 삼항 위주

 // for
 for(var count = 0; count < 5; count++){
    console.log("샌즈");
 }

 var obj = {a:1, b:2};
 for(var prop in obj){
   console.log(prop, obj[prop]);
 }  // 느려서 비권장

 // 함수
 function sum(x){
   var y = 1;
   return x + y;    // return문 없으면 undefined 반환
 }
 var sum = function(){
  var y = 1;
  return x + y;
 }

function logx(str){
  return str;
}

// 예외 처리 : try, catch, fianlly


/**
 * 주요 전역함수
 */
// 자주 사용
// alert('알림');
// var who = prompt('누구?');      // 딱딱한 느낌

// var isDel = confirm('삭제?');   // 확인 : true, 취소 : false
// if(isDel){
//   alert('sans');
// }

var enc = encodeURIComponent('카카오');   // uri 형식으로 풀기
console.log(enc);
decodeURIComponent(enc);

console.log(isNaN('1'));                 // 숫자 여부 확인
console.log(parseInt('12', 10));         // 정수로 변환, 진법 반드시 표기
console.log(parseFloat('10.33'));

// setTimeout, setInterval
function test(){
  console.log('test()');
}
var id = setTimeout(test, 1000);      // 1초마다 1번 실행
var id = setInterval(test, 1000);     // 1초마다 계속 실행

function test(){
  console.log('test()');
  setTimeout(test, 1000);
}   // setInterval보다 나은 방법

clearTimeout(id);
clearInterval(id);


/**
 * 스코프 : function scope
 */
// 유효범위
var nick = 'aji';   // 전역변수
function ttt(){
  var age = 30;     // 지역변수
  console.log(nick, age);
}
ttt();

// 호이스팅 hoisting : var 구문, function 선언문을 해당 스코프의 가장 처음으로 옮기기.
// 항상 상단에서 변수 선언 권장
var name0 = 'global';
function ttt1(){
  console.log(name0);
  var name0 = 'local';
  console.log(name0);
}

ttt2();
function ttt2(){
  console.log('test');
}


/**
 * 함수 : 한 번 정의하면 몇 번이든 호출 가능, 다른 함수 내 중첩 가능
 * 메소드 : 어떤 객체의 속성으로 저장된 함수
 */
// 일반
function sum(a, b){
  return a + b;
}
sum(1, 3);

// 멤버 변수
var car ={
  year: '2014',
  starting: function(){
    console.log('starting.....');
  }
};
car.starting();

/*
익명 함수 표현식
var xxx = function() {     }

익명 즉시 실행 함수 -> 괄호 내부에만 격리 실행되어 충돌 없음 -> 스코프 보호
(function(){    })();
*/

// 전달인자 생략
function sum(x, y){
  if(!y) y = 1;
  console.log(x + y);
}
sum(3); 

// 가변길이 전달인자 : arguments 객체로 인자 전달
function sum(){
  var size = 0;
  for(var i=0; i<arguments.length; i++){
    size += arguments[i];
  }
  console.log(size);
}
sum(1, 2, 3, 4, 5, 6, 7);

// 함수의 프로퍼티와 메소드
function test(x, y){

}
console.log(test.length);       // 함수가 전달받기 기대하는 인자 개수
test.count = 1;                 // 직접 정의, 정적
test.prototype;                 // prototype 객체 가리키기


/**
 * 표현식 : literal. 코드 상에서 데이터 표현하는 방식
 */
var nwme = 'fe';
var age = 28;
var play = function(){};
var data = { company: 'sans'};
var fruits = ['사과', '바나나'];


/**
 * 정규 표현식 : 문자열에 나타나는 특정 문자 조합과 대응시키기 위해 쓰이는 패턴
 * 폰 번호 정규식 등 조합에 따라 판별 가능
 */
// .test()
var txt = 'abc def ghi jkl abc mno';    // 대상 문자열
var testReg = /abc/;                    // 찾을 문자열
var result = testReg.test(txt);
console.log(result);                    // 문자열 있는지 따라 bool값 반환

// .match()
var txt = 'abc def ghi jkl abc mno';
var matchReg = /abc/;
var result = txt.match(matchReg);
console.log(result);

// .replace()
var txt = 'abc def ghi jkl abc mno';
var replaceReg = /abc/;
var result = txt.replace(replaceReg, '가나다');   // 첫 발견한 자리에 교체
console.log(result);


/**
 * js 특징
 */
// 객체를 전달인자로 사용
function area1(width, height) {
  console.log(width * height);
}
function area2(options) {
  console.log(options.width * options.height);
}
area2({ width: 300, height: 200 });

// 기본 타입 래퍼 객체
var str = 'jeju';
console.log(str.substring(0, 2)); // String 래퍼 객체로 자동 변환, 0번 위치부터 2글자만 출력

var str = new String('jeju');
console.log(str + ' jeju');

// call by value/reference






//=======================
var count = [10,20,30,40,50,60,70,100];
var result = 0;
for(var i = 0; i < count.length; i++){
  result += count[i];
}
console.log(result / count.length);

function gugu(){
  for(var i = 2; i <= 9; i++){
    for(var j = 1; j <= 9; j++){
      console.log(i + " * " + j + " = " + i*j);
    }
  }
}
gugu();

var mans ={
  year: '1997',
  running: function(){
    console.log('wa sans');
  }
};
mans.running();

var [a, b] = prompt('두 수 입력 : ').split(" ");
num1 = Number(a);
num2 = Number(b);
console.log(num1 + num2);