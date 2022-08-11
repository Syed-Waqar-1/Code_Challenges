// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    return bin.split('').reduce((acc,cv)=> (Number(acc) * 2) + Number(cv) ,0)
  }

  binToDec("1001001") // 73