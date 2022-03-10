// 변수 : 어떤 값이든 넣기 가능, 자동 타입 변환. 예약어 불가
var name = 'FE';
var age = 28;
var message = 'hello ' + name;


// 데이터 타입
var count = 5;

var nick = "wa sans";

var isMan = true;

var logx = function(str){
    console.log(str);
};

var image = {};
image.width = 1;
image.height = 2;

var arr = [];
arr[0] = '1.jpg';
arr[1] = '2.jpg';

var xxx = null;

var undef   // undefined : 정의되지 않음


// 주요 연산자
console.log(1+2);       // 값 더함 or 이어붙임
console.log('a'+'b');
console.log(1+'4');

0 == '';            // true
'' == '0';          // false
' \t\r\n' == 0;     // true      
null == undefined;  // true
// 위의 등호 2개짜리는 비권장, === : 일치, !== : 불일치


// 객체 - json : 서버와 통신할 때.
var person = {
    nick: 'fe',
    age: 28,
    area: 'sans',
    hobby: ['js', 'html'],
    sayHello: function() {
        console.log('hello');
    }
};
person.sayHello();


// 배열
var arr1 = [1,2,3,4,5];
console.log(arr1.length);

var arr2 = new Array(1, 2, 3);
console.log(arr2.length);
for (var i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 배열 메소드
console.log(arr1.pop);
arr1.push(4);
console.log(arr1.join('&'));
console.log(arr1.sort());

// 배열 CRUD : 생성, 읽기, 갱신, 삭제
var todos = ['운동'];   // create
var todo = '게임';
todos.push(todo);
console.log(todos);

var todos = ['운동', '게임'];
todos.forEach(function(todo) {      // read : 배열 돌면서 한번씩 실행
  console.log(todo);
});

var todos = ['운동', '게임'];
var updateTodo = '게임';            // update
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

var newTodos = todos.map(function(todo) {
    if (todo === updateTodo) {
      return '공부';
    }
    return todo;
  });
console.log(newTodos);

var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';            // delete
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

var newTodos = todos.filter(function(toods) {
  return todo !== deleteTodo;
});
console.log(newTodo);