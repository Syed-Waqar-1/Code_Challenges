// Simple, remove the spaces from the string, then return the resultant string.
// ex: ('8aaaaa dddd r     '), '8aaaaaddddr')

function noSpace(x){
    return x.split(" ").join('')
  }
  
  console.log(noSpace('s s sg e e se s e'))