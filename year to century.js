// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(y) {
    if( y >=1 && y <= 100){
       return 1
     }else  if(y % 100 == 0){
       return y / 100
     }else{
       return Math.floor(y / 100) + 1
     } 
   }
century(1705)    // 18
century(1900)    // 19
century(1601)    // 17
century(2000)    // 20 
century(89)      //  1 