var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d")

mouseX = 0
mouseY = 0

function mouseMove(event) {
    mouseX = event.clientX
    mouseY = event.clientY
}

function resize(event) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

function startAnimation(animationArray) {
    animationArray.forEach(func => {
        func()
    })

    requestAnimationFrame(animate)
}