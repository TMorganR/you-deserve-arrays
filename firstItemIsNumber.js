const prompt = require('prompt-sync')({sigint: true})

userArray = JSON.parse(prompt("Enter an array: "))

console.log(userArray)

bool1 = true
bool2 = false

if(!isNaN(userArray[0])){
    console.log(true)
} else {
    console.log(false)
}


