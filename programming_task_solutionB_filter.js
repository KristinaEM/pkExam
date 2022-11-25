function countOddEven(input){

let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
let arr = input;

let zero = arr.filter (n => n == 0);
let odd = arr.filter(n => n%2);
let even = arr.filter (n => n%2==0);


zeroCount = zero.length;
evenCount = even.length-zeroCount;
oddCount = odd.length;

console.log(oddCount + " odd numbers");
console.log(evenCount + " even numbers"); 
console.log(zeroCount+ " zeros");

}

countOddEven([0,1,2,3,4,5,6,7,8,9])