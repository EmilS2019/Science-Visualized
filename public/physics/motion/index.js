var increment = 0

function AnimateBall(ball) {
    c.beginPath()
    c.strokeStyle = `hsl(${color.hue},${color.saturation}%,${color.brightness}%)`
    c.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false)
    c.stroke()
}

function createBall(x, y, velocityVector, radius) {
    return { x: x, y: y, velocityVector: velocityVector, radius: radius }
}

function collision(ball1, ball2) {
    let overlapp = 5
    let b1_xrange = [ball1.x - ball1.radius + overlapp, ball1.x + ball1.radius - overlapp]
    let b1_yrange = [ball1.y - ball1.radius + overlapp, ball1.y + ball1.radius - overlapp]
    if (ball2.x + ball2.radius > b1_xrange[0] && ball2.x - ball2.radius < b1_xrange[1]
        && ball2.y + ball2.radius > b1_yrange[0] && ball2.y - ball2.radius < b1_yrange[1]) {

    }
}

ballArray = [
    createBall(100, 100, [3, 3], 60),
    createBall(300, 100, [0.1, 1], 60)
]

function moveBall() {
    ballArray.forEach(ball => {
        ball.x += ball.velocityVector[0]
        ball.y += ball.velocityVector[1]

        //Bounce if hits wall
        if (ball.x >= canvas.width - ball.radius || ball.x <= ball.radius) {
            ball.velocityVector[0] *= -1
        }

        if (ball.y >= canvas.height - ball.radius || ball.y <= ball.radius) {
            ball.velocityVector[1] *= -1
        }
    })
}

function animate() {
    //c.fillStyle = "rgba(0,0,0,0.1)"
    c.clearRect(0, 0, canvas.width, canvas.height)
    moveBall()
    collision(ballArray[1], ballArray[0])
    //collision(ballArray[1], ballArray[0])
    ballArray.forEach(ball => {
        AnimateBall(ball)
    });
    requestAnimationFrame(animate)
}
animate()