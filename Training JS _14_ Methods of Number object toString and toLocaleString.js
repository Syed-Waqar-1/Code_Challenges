// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"

// That's all of your work. My work is print your color code on your screen.

function colorOf(r,g,b){
  
    let red = r, green = g, blue = b; 
    let c1 = red.toString(16),
        c2 = green.toString(16),
        c3 = blue.toString(16);
    
    let arr = [c1,c2,c3]
   return '#' + arr.map((e)=> e.length === 1 ? '0' + e : e).join('')
  
  }
  
  colorOf(0,111,0)