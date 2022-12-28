// 1. Find Given number is even or not
// 2. try to use every with extra function;
// 3. try to use every without extra function
// TIP: extra function is isEven Function 

var isEven = (userData) => {
   // if (userData % 2 === 0) {
   //    return true;
   // }
   // return false;

   // or
   userData % 2 === 0;
} 
console.log(isEven(9));

var answer = [2, 4, 6, 8].every(isEven);

console.log(answer);

// 1. every function is callback function.
// 2. every element is true every function is return true. any one element is flase every function return false.
var answer = [2, 4, 6, 8].every((e) => {
   e % 2 === 0;
});

console.log(answer);