var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d")

mouseX = 0
mouseY = 0

var x = 200
var r = 100
var y = 300
var dy = 3
var dx = 4

function animateCircle() {


    if (x >= canvas.width - r || x <= r) {
        dx *= -1
    }

    if (y >= canvas.height - r || y <= r) {
        dy *= -1
    }

    x += dx
    y += dy
    c.beginPath()
    c.arc(x, y, r, 0, Math.PI * 2, false)
    c.strokeStyle = "rgba(255,0,0,0.5)"
    c.fillStyle = "rgba(255,0,0,0.5)"
    c.fill()
    c.stroke()

}



var theta = 0
var alpha = 40
var dTheta = 0.04
function circularMotion() {
    c.beginPath()
    c.arc(200 + alpha * Math.cos(theta) + mouseX, 200 + alpha * Math.sin(theta) + mouseY, 10, 0, Math.PI * 2, false)
    c.fillStyle = "rgba(255,0,0,0.5)"
    c.fill()
    c.stroke()
    theta += dTheta
}


function mouseMove(event) {
    mouseX = event.clientX
    mouseY = event.clientY
}

const gui = new dat.GUI()

const wave = {
    phase: 0.1,
    amplitude: 70,
    frquency: 0.02,
    y: 10,
    speed: 0.1,
    color: 0
}
const wavefold = gui.addFolder('wave')
wavefold.add(wave, 'amplitude', -300, 300)
wavefold.add(wave, 'frquency', 0, 0.1)
wavefold.add(wave, 'y', -200, 450)
wavefold.add(wave, 'speed', -0.3, 0.3)

const color = {
    hue: 0,
    saturation: 50,
    brightness: 50
}
const colorfold = gui.addFolder('color')
colorfold.add(color, 'hue', 0, 255)
colorfold.add(color, 'saturation', 0, 100)
colorfold.add(color, 'brightness', 0, 100)

wavefold.open()
colorfold.open()
var increment = 0

function SineWave() {
    c.beginPath()
    c.strokeStyle = `hsl(${color.hue},${color.saturation}%,${color.brightness}%)`
    c.moveTo(0, 200)
    for (let i = 0; i < canvas.width; i++) {
        c.lineTo(i, 200 + Math.sin(i * wave.frquency + wave.phase + increment) * wave.amplitude + wave.y)
    }
    c.stroke()
    increment += wave.speed
}

function animate() {
    c.fillStyle = "rgba(0,0,0,0.1)"
    c.fillRect(0, 0, canvas.width, canvas.height)
    //animateCircle()
    //circularMotion()
    SineWave()
    requestAnimationFrame(animate)
}
animate()
