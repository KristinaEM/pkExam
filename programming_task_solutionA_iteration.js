function countOddEven(input){
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
let arr = input;

for ( x=0; x< arr.length; x++) {
    if (arr[x] === 0) {
            zeroCount++;
    }
    else if (arr[x] % 2 === 0) {
        evenCount++;        
    }
    else {
        oddCount++; 
    }
}
console.log(oddCount + " odd numbers");
console.log(evenCount + " even numbers"); 
console.log(zeroCount+ " zeros");

}

countOddEven([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
