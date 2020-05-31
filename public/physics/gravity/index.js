var increment = 0

function AnimateBall(ball) {
    c.beginPath()
    c.strokeStyle = `hsl(${color.hue},${color.saturation}%,${color.brightness}%)`
    c.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false)
    c.stroke()
}

function createBall(x, y, velocityVector, radius, mass) {
    if (!mass) mass = 1
    if (!radius) radius = 50
    return { x, y, velocityVector, radius, mass }
}

function gravity(ball1, ball2) {

    ball1.velocityVector[0] += grav(ball1, ball2, "x")
    ball1.velocityVector[1] += grav(ball1, ball2, "y")

    ball2.velocityVector[0] += grav(ball2, ball1, "x")
    ball2.velocityVector[1] += grav(ball2, ball1, "y")

}

function grav(ball1, ball2, direction) {
    const G = 1000000000000 * 0.0000000000667408
    return G * ball1.mass * ball2.mass / dist(ball1, ball2) ** 2
}

function dist(ball1, ball2) {
    return (((ball2.x - ball1.x) ** 2 + (ball2.y - ball1.y) ** 2) ** (1 / 2))
}

function collisions() {
    /*ballArray.forEach(ball => {
        ballArray.forEach(ball2 => {
            if (aInsideHitboxb(ball2, ball)) {
                collision(ball, ball2)
            }
        })
    })*/
    if (aInsideHitboxb(ballArray[0], ballArray[1])) collision(ballArray[0], ballArray[1])
    if (aInsideHitboxb(ballArray[0], ballArray[2])) collision(ballArray[0], ballArray[2])
    if (aInsideHitboxb(ballArray[1], ballArray[2])) collision(ballArray[1], ballArray[2])
    //if (aInsideHitboxb(ballArray[1], ballArray[0])) collision(ballArray[1], ballArray[0])
}

function aInsideHitboxb(a, b) {
    let overlapp = 5
    let b1_xrange = [a.x - a.radius + overlapp, a.x + a.radius - overlapp]
    let b1_yrange = [a.y - a.radius + overlapp, a.y + a.radius - overlapp]
    if (b.x + b.radius > b1_xrange[0] && b.x - b.radius < b1_xrange[1]
        && b.y + b.radius > b1_yrange[0] && b.y - b.radius < b1_yrange[1]) {
        return true
    }
    return false
}

ballArray = [
    new Ball(120, 300, [0, 0], 40, 2),
    new Ball(300, 200, [0, 0], 40, 2),
    //new Ball(600, 100, [1, -2], 40, 2),
    //new Ball(300, 500, [2, 3], 40, 2),
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
    // collisions()
    gravity(ballArray[0], ballArray[1])
    ballArray.forEach(ball => {
        AnimateBall(ball)
    });
    requestAnimationFrame(animate)
}
animate()