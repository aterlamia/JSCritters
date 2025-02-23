const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
const player = new Image()
const map = new Image();
const boundaries = []

const SPEED = 3
const MAP_SIZE = 100;

const collisionMap = [];

for (let i = 0; i < collisions.length; i += MAP_SIZE) {
    collisionMap.push(collisions.slice(i, i + MAP_SIZE));
}

class Boundary {
    constructor({position: tilePosition}) {
        this.position = tilePosition
        this.width = 48
        this.height = 48
        this.offsetX = -1815
        this.offsetY = -100
    }
    draw() {
        ctx.fillStyle = "red"
        const x = (this.position.x * this.width) + this.offsetX
        const y = (this.position.y * this.height) + this.offsetY
        ctx.fillRect(x, y, this.width, this.height)
    }
}


collisionMap.forEach(
    (row, i) => {
        row.forEach((symbol, j) => {
            if (symbol > 0) {
                boundaries.push(
                    new Boundary({position: {x: j, y: i}})
                )
            }
        })
    }
)

canvas.width = 1024
canvas.height = 576

map.src = "./assets/map.png"
player.src = "./assets/playerDown.png"

class Sprite {
    constructor({position, velocity, image}) {
        this.position = position
        this.image = image
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}


const background = new Sprite(
    {
        position: {
            x: -1815,
            y: -100
        },
        image: map
    }
)

function drawImage() {
    ctx.drawImage(
        player,
        0,
        0,
        player.width / 4,
        player.height,
        canvas.width / 2 - (player.width / 4) / 2,
        canvas.height / 2 - player.height / 2,
        player.width / 4,
        player.height
    )

    boundaries.forEach(
        (boundary) => {
            boundary.draw()
        }
    )


}

const keys = {
    a: {
        pressed: false
    },
    w: {
        pressed: false
    },
    d: {
        pressed: false
    },
    s: {
        pressed: false
    },
    lastKeyX: "",
    lastKeyY: ""
}

function animate() {
    background.draw()
    drawImage()
    if (keys.w.pressed && keys.lastKeyY === "w") {
        background.position.y += SPEED
    } else if (keys.s.pressed && keys.lastKeyY === "s") {
        background.position.y -= SPEED
    }
    if (keys.a.pressed && keys.lastKeyX === "a") {
        background.position.x += SPEED
    } else if (keys.d.pressed && keys.lastKeyX === "d") {
        background.position.x -= SPEED
    }
    window.requestAnimationFrame(animate)
}

animate()

window.addEventListener('keydown', (evt) => {

    switch (evt.key) {
        case "w":
        case "s":
            keys.lastKeyY = evt.key
            keys[evt.key].pressed = true
            break
        case "a":
        case "d":
            keys.lastKeyX = evt.key
            lastKey = evt.key
            keys[evt.key].pressed = true
            break
    }
})

window.addEventListener('keyup', (evt) => {
    switch (evt.key) {
        case "w":
        case "a":
        case "d":
        case "s":
            keys[evt.key].pressed = false
            break
    }

})
