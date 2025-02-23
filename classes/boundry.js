class Boundary {
    constructor({position: tilePosition, debug = false}) {
        this.tilePosition = tilePosition
        this.width = 48
        this.height = 48
        this.offsetX = -1815
        this.offsetY = -100
        this.debug = debug

        console.log(tilePosition)
        this.setPostionByTile({position: tilePosition})
        console.log(this.position)
    }

    setPostion({position}) {
        this.position = position
    }

    setPostionByTile({position}) {
        this.position = {
            x: (position.x * this.width),
            y: (position.x * this.height)
        }
    }

    draw() {
        ctx.fillStyle = "red"
        const x = this.position.x + this.offsetX
        const y = this.position.y + this.offsetY
        ctx.fillRect(x, y, this.width, this.height)

        if (this.debug) {
            ctx.fillStyle = "white"
            ctx.font = "16px serif";
            ctx.fillText(`${this.tilePosition.x},${this.tilePosition.y}`, x + 6, y + (this.height / 2));
        }
    }
}
