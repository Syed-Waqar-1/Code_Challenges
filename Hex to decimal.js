// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexStr){
    return parseInt(hexStr, 16); 
   }
   hexToDec("1")  // 1
hexToDec("a")    // 10
hexToDec("10")   // 16
hexToDec("FF")  // 255
hexToDec("-C") // -12