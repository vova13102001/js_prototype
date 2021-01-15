'use strict';


function MyArray(){};
MyArray.prototype = new Array();


const testArr = [1, 2, 3];
const arr = new MyArray();
console.log(arr instanceof MyArray);

//2
testArr.push(4);
console.log(testArr);

//3
testArr.pop();
console.log(testArr);

//4
testArr.unshift(5);
console.log(testArr);

//5
testArr.shift();
console.log(testArr);

//6
const test = testArr.concat(4, 5, 9);
console.log(test);

//7
const test1 = test.reverse();
console.log(test1);

//8
let sum = null;
testArr.forEach(element => sum += element);
console.log(sum);

//9
let res = testArr.map(element => element * 3);
console.log(res);