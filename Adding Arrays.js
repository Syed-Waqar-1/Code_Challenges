// Create a function that takes an array of letters, and combines them into words in a sentence. 
// arrAdder([
//     ['J','L','L','M'],
//     ['u','i','i','a'],
//     ['s','v','f','n'],
//     ['t','e','e','']
//     ]) // => "Just Live Life Man"

const arrAdder = arr => {
    let str = ''
    for(let i = 0; i < arr[0].length; i++){
      for(let v = 0; v < arr.length; v++){
        str += arr[v][i]
      }
      str += (' ')
    }
    return str.trim();
  }
  
  const res = arrAdder([['J','L','L','M'],['u','i','i','a'],['s','v','f','n'],['t','e','e','']])
  
  console.log(res)