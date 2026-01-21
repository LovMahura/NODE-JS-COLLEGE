// Write a Program for Palindrome String
/*
Declare a string
check in the loop, if the reverse string is same
if same, print output as "yes it is palindrome"
if not, print output as "no palindrome"
to print in js, you need console.log()
*/

let str = "Hello"
let reverse = ""
for(let i = str.length-1; i>=0; i--){
  reverse += str[i];
}
if(str === reverse){
  console.log("yes, it is a palindrome")
}
else{
  console.log("no, it is not a palindrome")
}