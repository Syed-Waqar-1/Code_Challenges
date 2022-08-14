// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A){
  // Calculate the circumference of A 
  const circumference = A * 4;
  
  // Calculate the radius of A
  const radius = circumference / (Math.PI * 2);
  
  // Calculate the area of the square, rounded to 2 decimal places
  const area = Number((radius**2).toFixed(2));
  
  // Return the result
  return area;
}

squareArea(2) // 1.62
squareArea(14.05) // 80