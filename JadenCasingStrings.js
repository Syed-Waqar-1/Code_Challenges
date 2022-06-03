// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real

String.prototype.toJadenCase = function () {
    return this.split(' ').map((e)=>{
       return e[0].toUpperCase() + e.slice(1)
   }).join(' ')
   };

   
// let str = "How can mirrors be real if our eyes aren't real"

// let newStr = ''
// for(let i = 0; i < str.length; i++){
//    newStr += str[i]
//   if(str[i] === ' '){
//      newStr += str[i+1].toUpperCase()
//     i++
//   }
// }console.log(newStr)