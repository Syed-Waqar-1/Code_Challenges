// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case 	             return
// name equals owner 	'Hello boss'
// otherwise 	        'Hello guest'

function greet (name, owner) {
    let greet;
    switch(true){
        case name == owner:
        greet = 'Hello boss'
        break;
        default:
        greet = 'Hello guest'
    } return greet;
  }