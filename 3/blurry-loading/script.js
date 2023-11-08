const background = document.querySelector('.bg')
const text = document.querySelector('.loading-text')

let load = 0

let inter = setInterval(blur, 30)

function blur() {
    load++
    if(load >= 100) {
        clearInterval(inter)
    }
    text.innerText = `${load}%`
    text.style.opacity = 1 - (load / 100)
    background.style.filter = `blur(${30 - ((load * 30) / 100)}px)`
}