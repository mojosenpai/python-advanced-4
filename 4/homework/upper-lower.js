let arg = "HELlo WoRLd!"

let upper = 0
let lower = 0
arg_array = arg.split('')
arg_array.forEach(i => {
    if (i.toLowerCase() != i.toUpperCase()){
        if (i == i.toUpperCase()) {
            upper += 1
        }
        else {
            lower += 1
        }
    }
});

if (upper > lower) {
    console.log(arg.toUpperCase())
}
else {
    console.log(arg.toLowerCase())
}