class Boundary {
    constructor({position: tilePosition, debug = false}) {
        this.position = tilePosition
        this.width = 48
        this.height = 48
        this.offsetX = -1815
        this.offsetY = -100
        this.debug = debug
    }

    draw() {
        ctx.fillStyle = "red"
        const x = (this.position.x * this.width) + this.offsetX
        const y = (this.position.y * this.height) + this.offsetY
        ctx.fillRect(x, y, this.width, this.height)

        if (this.debug) {
            ctx.fillStyle = "white"
            ctx.font = "16px serif";
            ctx.fillText(`${this.position.x},${this.position.y}`, x + 6, y + (this.height / 2));
        }
    }
}
