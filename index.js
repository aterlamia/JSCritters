const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
const player = new Image()
const map = new Image();
const boundaries = []
const SPEED = 3
const MAP_SIZE = 100;
const debug = true

const collision = new Collissions(debug)


collision.loadCollissions()
canvas.width = 1024
canvas.height = 576
map.src = "./assets/map.png"
player.src = "./assets/playerDown.png"

const background = new Sprite(
    {
        position: {
            x: -1815,
            y: -100
        },
        image: map,
        ctx
    }
)

console.log("create")
const newBoundary = new Boundary({position: {x: 48, y: 10}, debug})
console.log("create done ")
function drawImage() {
    background.draw()
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

    // boundaries.forEach(
    //     (boundary) => {
    //         boundary.draw()
    //     }
    // )
    newBoundary.draw()

}

const movables = [
    background,
    newBoundary
]

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

    drawImage()
    if (keys.w.pressed && keys.lastKeyY === "w") {
        movables.forEach((item) => {
            item.setPostion({
                position: {
                    y: item.position.y += SPEED,
                    x: item.position.x
                }
            })
        })
    } else if (keys.s.pressed && keys.lastKeyY === "s") {
        movables.forEach((item) => {
            item.setPostion({
                position: {
                    y: item.position.y -= SPEED,
                    x: item.position.x
                }
            })
        })
    }
    if (keys.a.pressed && keys.lastKeyX === "a") {
        movables.forEach((item) => {
            item.setPostion({
                position: {
                    y: item.position.y,
                    x: item.position.x += SPEED
                }
            })
        })
    } else if (keys.d.pressed && keys.lastKeyX === "d") {
        movables.forEach((item) => {
            item.setPostion({
                position: {
                    y: item.position.y,
                    x: item.position.x -= SPEED
                }
            })
        })
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
