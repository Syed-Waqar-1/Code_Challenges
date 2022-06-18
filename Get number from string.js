// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    return parseInt(s.split('').filter((e)=> e <= '9' && e >= '0').join(''))
  }
  
  getNumberFromString('hell5o wor6ld')
