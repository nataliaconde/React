// Problem Solving and Frontend Basics
// "this" keyword output question

const user = {
  name: "Steve",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.name}!`;
  },
};

console.log(user.greet()); // What is logged?
console.log(user.farewell()); // What is logged?
