const prompt = require('prompt-sync')({sigint: true})


userArray = JSON.parse(prompt("Enter an array: "))

console.log(userArray)

if(userArray.length >= 3){
    console.log(`${userArray[3]}`)
} else {
    console.log(`${userArray[userArray.length-1]}`)
}