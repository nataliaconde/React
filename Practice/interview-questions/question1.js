// Question 1: map vs forEach -- Both are array functions
// to loop through the items of an array

const arr = [2, 5, 3, 4, 7];

// const isLargeNumber = (element) => element > 6;

console.log(arr + " before map");

const mapResult = arr.map((ar) => {
  return ar + 2;
});
// .findIndex(isLargeNumber); This function can be done with map and not forEach

console.log(arr + " after map & before forEach");

const forEachResult = arr.forEach((ar, i) => {
  arr[i] = ar + 3;
});
console.log(arr + " after forEach");

console.log("Final Result: " + mapResult, forEachResult, arr);
