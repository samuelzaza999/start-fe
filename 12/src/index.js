// import _ from "lodash";

// function component() {
//   const element = document.createElement("div");
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   return element;
// }

// document.body.appendChild(component());

const queryString = require("query-string");

console.log(location.search);
//=> '?foo=bar'

const parsed = queryString.parse(location.search);
console.log(parsed);
//=> {foo: 'bar'}
