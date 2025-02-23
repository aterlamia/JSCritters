class Collissions {
    collisionMap = [];
    constructor(debug = false) {
        for (let i = 0; i < collisions.length; i += MAP_SIZE) {
            this.collisionMap.push(collisions.slice(i, i + MAP_SIZE));
        }
        this.debug = debug
    }
    loadCollissions() {
        this.collisionMap.forEach(
            (row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0) {
                        boundaries.push(
                            new Boundary({position: {x: j, y: i}, debug: this.debug})
                        )
                    }
                })
            }
        )
    }
}

