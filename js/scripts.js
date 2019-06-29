const canvas = document.querySelector('#canvas')

const sideLength = 44
const halfL = sideLength / 2
const blocksHigh = 20
const blocksWide = 12

// margin 4 on each side
// 12 blocks wide, 20 blocks high

// Set up the canvas
const mapWidth = 528
canvas.width = mapWidth

const mapHeight = window.screen.availHeight - sideLength * 3
canvas.height = mapHeight

const ctx = document.getElementById('canvas').getContext('2d')

// class for every shape
class Shape {
    constructor() {
        this.edges = []
    }

    drawLine = (x, y) => {
        ctx.lineTo(x, y)
    }

    addEdge = (start, end) => {
        this.edges.push([start, end])
    }

    clearEdges = () => {
        this.edges = []
    }
}

// class for Line shape
class LineShape extends Shape {
    constructor(Shape) {
        super(Shape)
        this.xPosition = this.getRandomX()
    }

    getRandomX = () => {
        const rand = Math.floor(Math.random() * (mapWidth - 3 * sideLength))
        const remainder = rand % sideLength
        return rand - remainder
    }

    draw = y => {
        ctx.beginPath()
        ctx.moveTo(this.xPosition, y)
        this.drawLine(this.xPosition + 4 * sideLength, y)
        this.addEdge([this.xPosition, y], [this.xPosition + 4 * sideLength, y])

        this.drawLine(this.xPosition + 4 * sideLength, y - sideLength)
        this.addEdge(this.getLastPoint(), [
            this.xPosition + 4 * sideLength,
            y - sideLength
        ])

        this.drawLine(this.xPosition, y - sideLength)
        this.drawLine(this.xPosition, y)
        this.drawLine(this.xPosition + 1 * sideLength, y)
        this.drawLine(this.xPosition + 1 * sideLength, y - sideLength)
        this.drawLine(this.xPosition + 2 * sideLength, y - sideLength)
        this.drawLine(this.xPosition + 2 * sideLength, y)
        this.drawLine(this.xPosition + 3 * sideLength, y)
        this.drawLine(this.xPosition + 3 * sideLength, y - sideLength)

        ctx.stroke()
    }

    getLastPoint = () => this.edges[this.edges.length - 1][1]

    getEdges = () => {
        return this.edges
    }
}

const Line = new LineShape()
Line.clearEdges()

Line.draw(sideLength)

// // make some basic shapes
// function drawTri(x, y) {
//     ctx.beginPath()
//     ctx.moveTo(x - halfL * 3, y)
//     ctx.lineTo(x + halfL * 3, y)
//     ctx.lineTo(x + halfL * 3, y - bsl)
//     ctx.lineTo(x + halfL * 1, y - bsl)
//     ctx.lineTo(x + halfL * 1, y - bsl * 2)
//     ctx.lineTo(x + halfL * 1, y)
//     ctx.lineTo(x - halfL, y)
//     ctx.lineTo(x - halfL, y - 2 * bsl)
//     ctx.lineTo(x + halfL, y - 2 * bsl)
//     ctx.lineTo(x + halfL, y)
//     ctx.lineTo(x - halfL * 3, y)
//     ctx.lineTo(x - halfL * 3, y - bsl)
//     ctx.lineTo(x + halfL * 3, y - bsl)
//     ctx.stroke()
// }

// function play() {
//     let x = bsl + halfL
//     let y = bsl * 2

//     setInterval(() => {
//         if (y < bsl * (blocksHigh + 2)) {
//             clearPrev(y - bsl * 1)
//         }
//         drawTri(x, y)
//         y += bsl
//     }, 100)
// }

// function clearPrev(distanceDown) {
//     ctx.clearRect(0, 0, canvas.width, distanceDown)
// }

play()

function play() {
    console.log(Line.getEdges())
}
