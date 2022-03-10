/**
 * 02주차
 * 
 */
var name = 'aj';
// name = 111;
console.log(name);

isMan = 'true';
isMan1 = true;
console.log(isMan);
console.log(isMan1);

var logx = function(str){
    console.log(str);
};
logx('hello');

var image = {};
image.width = 1;
image.height = 2;
console.log(image);

var arr = [];
arr[0] = '1.jpg';
arr[1] = '2.jpg';
console.log(arr);

// debugger;
console.log(1+2);
console.log('a'+'b');
console.log(1+'4');

isHero = true;

console.log(typeof(1+'4'));
typeof foo !== 'undefined';

console.log(arr instanceof Array);

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

console.log(window);

var date = new Date();              // dynamic
console.log(date);

console.log(Math.floor(1.4));       // static

var patten = new RegExp('^abc');
console.log(patten);


var arr1 = [1,2,3,4,5];
console.log(arr1.length);

var arr2 = new Array(1, 2, 3);
console.log(arr2.length);
for (var i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log(arr1.pop);
arr1.push(4);
console.log(arr1.join('&'));
console.log(arr1.sort());

// 배열 CRUD : 생성, 읽기, 갱신, 삭제
// create
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);

// read : 배열 돌면서 한번씩 실행
var todos = ['운동', '게임'];
todos.forEach(function(todo) {      
  console.log(todo);
});

// update
var todos = ['운동', '게임'];
var updateTodo = '게임';            
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

var todos = ['운동', '게임'];
var updateTodo = '게임';
var newTodos = todos.map(function(todo) {
    if (todo === updateTodo) {
      return '공부';
    }
    return todo;
  });
console.log(newTodos);

// delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';            
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(todo) {        // 조건대로 걸러낸 새 배열
  return todo !== deleteTodo;
});
console.log(newTodos);

//=========================
var age = 20;
var isCrazy = true;
var month = [
    'jan', 'feb', 'mar', 'apl', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
];
var person = {
    nick: 'sans',
    age: 330,
    area: 'italy'
};