// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59


function past(h, m, s){
    if((h >= 0 && h <= 23) && (m >= 0 && m <= 59) && (s >= 0 && s <= 59)){
      return (h * 3600) * 1000 + (m * 60) * 1000 + (s * 1000) 
    }
  }
  
  past(0,1,1) //61000
  past(1,1,1) //3661000
  past(0,0,0) //0
  past(1,0,1) //3601000
  past(1,0,0) //3600000