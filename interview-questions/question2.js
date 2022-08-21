// Question 2: null vs undefined

console.log("typeof null: " + typeof null);

console.log("typeof undefined: " + typeof undefined);

let a;
let b = null;

console.log(a);

console.log(b);

// console.log(c); -- Uncaught ReferenceError: c is not defined

console.log("null == undefined");
console.log(null == undefined); // Compares entities
console.log("null === undefined");
console.log(null === undefined); // Compares types
