// merge two arrays and order them then remove duplicate 
function mergeArrays(arr1, arr2) {
    const newArr = arr1.concat(arr2).sort((a,b)=>a - b)
    let filterArr = [...new Set(newArr)]
    return filterArr
  }
  console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))