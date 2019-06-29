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

// class for Line shape
class LineShape {
    constructor() {
        this.xPosition = Math.floor(Math.random() * (mapWidth - 3 * sideLength))
    }

    draw = y => {
        ctx.beginPath()
        ctx.moveTo(this.xPosition, y)
        ctx.lineTo(this.xPosition + 4 * sideLength, y)
        ctx.lineTo(this.xPosition + 4 * sideLength, y - sideLength)
        ctx.lineTo(this.xPosition, y - sideLength)
        ctx.lineTo(this.xPosition, y)
        ctx.lineTo(this.xPosition + 1 * sideLength, y)
        ctx.lineTo(this.xPosition + 1 * sideLength, y - sideLength)
        ctx.lineTo(this.xPosition + 2 * sideLength, y - sideLength)
        ctx.lineTo(this.xPosition + 2 * sideLength, y)
        ctx.lineTo(this.xPosition + 3 * sideLength, y)
        ctx.lineTo(this.xPosition + 3 * sideLength, y - sideLength)

        ctx.stroke()
    }
}

const Line = new LineShape()

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
