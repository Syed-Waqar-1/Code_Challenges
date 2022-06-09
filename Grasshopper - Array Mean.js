// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16

// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4

// 3. The mean (or average) of this list is 4

const findAverage = nums =>{ 
    let sum, avg;
     sum = nums.reduce((acc,cv) => acc + cv)
    return avg = sum / nums.length
   
  }
  
  console.log(findAverage([1, 3, 5, 7]))

// other solution

// const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;