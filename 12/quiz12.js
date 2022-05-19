import avg from "./avg.js";
import random from "./random.js";

console.log(avg(4, 64, 45, 77));
console.log(avg(4, 64, 45, 77, 4564, 445));
console.log(avg(4, 64, "a"));
console.log(avg([4, 64, 45, 77]));

console.log(random(3, 9));
console.log(random(3));
console.log(random(3, "a"));
