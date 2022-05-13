// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

const accum = s => {
	const str = s.toUpperCase()
  let lStr= s.toLowerCase()
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    newStr += str[i] + lStr[i].repeat(i);
    newStr += '-'
  }
  return(newStr.slice(0,newStr.length-1))
}
accum("ZpglnRxqenU")