const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
const player = new Image()
const map = new Image();

const SPEED = 3

canvas.width = 1024
canvas.height = 576

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

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
            x: -2379,
            y: -1010
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
