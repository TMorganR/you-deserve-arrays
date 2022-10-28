const prompt = require('prompt-sync')({sigint: true})

userArray = JSON.parse(prompt("Enter an array: "))

console.log(userArray)


if(userArray[2] !== undefined && typeof userArray[2] === 'string'){
    let str = userArray[2]
    if(str.length >= 2){    
    console.log(str.substring(1,2))
} else {
    console.log("Error!")
}
}