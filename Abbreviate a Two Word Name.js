// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let str = ''
    
    str += name[0] + '.'
    for(let i = 0; i < name.length; i++){  
    if(name[i] === ' '){
        str += name[i+1]
      }
    } return str
    
  }
  
  abbrevName("Sam Harris")
