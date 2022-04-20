// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

const countBy = (n, x) =>{
    let arr = []
    if(n > 0 && x > 0){
        for(let i = 1; i <= x; i++){
        arr.push(i * n);
    }
    }else{
        console.log('sorry! Please give some positive number')
    }
    return arr;
}

console.log(countBy(5, 10))