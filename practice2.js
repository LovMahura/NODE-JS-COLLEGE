// Write a code to add a number in front of array
/*
arr = [2,20,40,5]
number = 10
output = [10,2,20,40,5]
*/
let arr = [20, 30, 40];
for (let i = arr.length; i > 0; i--) {
  arr[i] = arr[i - 1]; 
}
arr[0] = 10;
console.log(arr);