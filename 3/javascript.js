// console.log("hello world!")
// console.warn("warning!")
// console.error("error!")
// alert("welcome!")
// console.log(window)

// const p1 = document.getElementById("second")
// console.log(p1)
// p1.innerText = "This was changed by Javascript!"
// p1.style.backgroundColor = "blue"
// const p2 = document.getElementsByClassName("paragraph")
// console.log(p2)
// const h = document.getElementsByTagName("h1")
// console.log(h)
// h[0].style.backgroundColor = "white"
// const one = document.querySelector("#second")
// const many = document.querySelectorAll("h1, .paragraph")
// console.log(many)

function myfunc(x) {
    const h = document.getElementById("header1")
    h.style.color = "green"
}

const btn = document.getElementById("btn")
btn.addEventListener("click", myfunc)