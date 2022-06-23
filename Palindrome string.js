// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
// Examples(Input ==> Output)

// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

function isPalindrome(line){
    if (typeof line === 'string'){
      return line.split('').reverse().join('') === line ? true : false;
    }else{
      return Number(String(line).split('').reverse().join('')) === line ? true : false;
    }
    
  }
  
  console.log(isPalindrome('anna')) // true
  console.log(isPalindrome("walter")) // false
  console.log(isPalindrome(12321)) // true
  console.log(isPalindrome(123456)) // false
  console.log(isPalindrome('.')) // true
  console.log(isPalindrome('.!!.')) // true
  