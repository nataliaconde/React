// Question4: Flatten the Array

let arr3 = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

let arr4 = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

let flattened = [].concat(...arr3);

console.log(flattened);
console.log(arr4.flat(2));

function customFlat(arr3, depth = 1) {
  let result = [];
  arr3.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else result.push(ar);
  });
  return result;
}

console.log(customFlat(arr3, 2));

// [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12]
