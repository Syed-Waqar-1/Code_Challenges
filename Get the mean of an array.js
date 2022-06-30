// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


function getAverage(marks){
    return Math.floor(marks.reduce((acc,cv,i,arr)=> acc + cv / arr.length,0))
  }
  getAverage([2,2,2,2]) // 2
  getAverage([1,2,3,4,5,]) // 3
  getAverage([1,1,1,1,1,1,1,2]) // 1