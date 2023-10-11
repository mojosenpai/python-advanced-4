// let x = 'Hello World!'
// let z = 'Nice to meet you'

// console.log(x + ' ' + z)
// console.log(`${x} and ${z}`)

// console.log(x.length)
// console.log(x.toUpperCase())
// console.log(x.toLowerCase())
// console.log(x.substring(2, 7)) //x[2:7]
// console.log(x.split(''))


// let y = [2, 3, 5, 7]
// console.log(y[2])
// y.push(11)
// console.log(y)
// console.log(y.length)
// y.unshift(1)
// console.log(y)
// console.log(y.indexOf(4))

// a = [2, 4, 6, 8]
// for(let i of a) {
//     console.log(i + 3)
// }
// q = ['Hlho', 'hHOhOh', 'hugiGLIUGiugi']
// for(let i of q) {
//     console.log(i.toLowerCase())
// }

// w = [1, 435, 3214, 64, 5]

// w.forEach(function(num) {
//     console.log(num * 3)
// })

// let e = w.map(function(num) {
//     return num * 3
// })
// console.log(w)
// console.log(e)

// let even = w.filter(function(num) {
//     return num % 2 == 0
// })

// console.log(even)

let cat = {
    name: "Alex",
    age: 5,
    children: [
        "Bob",
        "Caroline",
        "David"
    ]
}

console.log(cat.children)

// function Cat(name, age, children) {
//     this.name = name
//     this.age = age
//     this.children = children
// }

// Cat.prototype.introduce = function() {
//     console.log(`Hello my name is ${this.name} and I'm ${this.age} years old.`)
// }

// let cat2 = new Cat('Elliot', 3, ['Fred', 'Gilbert'])
// cat2.introduce()

class Cat {
    constructor(name, age, children) {
        this.name = name
        this.age = age
        this.children = children
    }

    introduce() {
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

let cat2 = new Cat('Elliot', 3, ['Fred', 'Gilbert'])
cat2.introduce()