const prompt = require('prompt-sync')({sigint: true})

userArray = JSON.parse(prompt("Enter an array: "))

console.log(userArray)

userArraylength = userArray.length
console.log(userArraylength)

bool1 = true
bool2 = false

if(userArraylength <= 10){
    console.log(false)
} else if(userArraylength > 10){
    console.log(true)
}





