console.log(3 == '3')
let x = 5
// x = "goodbye!"
console.log(x)
const y = false
// y = 8
console.log(y)

if(x === '5') {
    console.log("X if five!")
}

let age = 17
if(age >= 18) {
    console.log("allowed")
}
else if(age >= 15) {
    console.log("only with guardian")
}
else {
    console.log("not allowed")
}
console.log(!true)
console.log(true && false)
console.log(true || false)

let c = 1
while(c <= 10) {
    console.log(c)
    c += 1
}

console.log(19 % 7)

counter = 1
while(counter <= 100) {
    if(counter % 3 == 0 && counter % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if(counter % 3 == 0) {
        console.log("Fizz")
    }
    else if(counter % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(counter)
    }
    counter += 1
}
let i = 5
for(let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log(i)

result = "black"
let w_score = 0.0
let b_score = 0.0

switch(result) {
    case "black":
        b_score += 1.0
        break
    case "white":
        w_score += 1.0
        break
    case "draw":
        w_score += 0.5
        b_score += 0.5
        break
    default:
        console.log("invalid result")
}

console.log(w_score)
console.log(b_score)

function is_even(x=6) {
    if(x % 2 == 0) {
        return "yes"
    }
    else {
        return "no"
    }
}

console.log(is_even(4))
console.log(is_even(5))
console.log(is_even())

function sum(a, b, c) {
    return a + b + c
}

let sum = (a, b, c) => a + b + c