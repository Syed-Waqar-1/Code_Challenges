// Write a function that takes an array of numbers and returns the sum of the numbers.

// Sum Numbers
const sum = numbers => {
    "use strict";
    
       const arr = numbers.reduce((acc, currentValue)=>{
        return acc + currentValue; 
      },0)   
  return arr;
    
};
console.log(sum([1, 5.2, 4, 0, -1]))