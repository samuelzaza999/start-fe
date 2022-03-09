// null과 undefined 제외한 모든 것은 객체처럼 동작
false.toString();           // 'false'
[1, 2, 3].toString();       // '1, 2, 3'

function Foo(){}
Foo.bar = 1;
Foo.bar;                    // 1

// 숫자를 객체처럼 사용하는 꼼수
1..toString();
2 .toString();
(3).toString();

// object notation으로 객체 만들면 object.prototype 상속 받고 프로퍼티 하나도 없는 객체 생성
var foo0 = {};           // 빈 객체
var bar0 = {test: 12};   // 값이 12인 'test' 프로퍼티가 있는 객체

var foo1 = {'name': 'kitten'};     // 프로퍼티 이름도 따옴표로 감싸면 뭐든지 사용 가능
foo1.name;              // kitten
foo1['name'];           // kitten -> 각괄호 방식이 프로퍼티 이름을 동적 할당해 접근 가능

// 프로퍼티 삭제 시 delete 사용 : null과 undefined는 프로퍼티의 value만 지우고 key는 유지 -> a, b는 출력.
var obj = {
    a: 1,
    b: 2,
    c: 3
};
obj.a = undefined;
obj.b = null;
delete obj.c;

for(var i in obj){
    if(obj.hasOwnProperty(i)){
        console.log(i, '' + obj[i])
    }
}

// 프로토타입 상속 모델 : 프로토타입 체인으로 상속 구현
function Foo(){
    this.value = 42;
}
Foo.prototype = {
    method: function(){}
};
function Bar(){}

Bar.prototype = new Foo();
Bar.prototype.foo = 'hello';            // Foo의 인스턴스를 만들어 Bar의 프로토타입에 할당
Bar.prototype.constructor = Bar;        // Bar 함수를 생성자로 만들기
var test = new Bar();                   // Bar 인스턴스 생성