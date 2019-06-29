const canvas = document.querySelector('#canvas')

// Set up the board
const width = (canvas.width = 528)
const height = (canvas.height = window.screen.availHeight - 150)

const bsl = 44
const halfL = bsl / 2
// margin 4 on each side
// 12 blocks wide, 20 blocks high

const ctx = document.getElementById('canvas').getContext('2d')
// let x = width / 4
// let y = 100

drawTri(bsl + halfL, bsl * 2)

// make some basic shapes
function drawTri(x, y) {
    ctx.beginPath()
    ctx.moveTo(x - halfL * 3, y)
    ctx.lineTo(x + halfL * 3, y)
    ctx.lineTo(x + halfL * 3, y - bsl)
    ctx.lineTo(x + halfL * 1, y - bsl)
    ctx.lineTo(x + halfL * 1, y - bsl * 2)
    ctx.lineTo(x + halfL * 1, y)
    ctx.lineTo(x - halfL, y)
    ctx.lineTo(x - halfL, y - 2 * bsl)
    ctx.lineTo(x + halfL, y - 2 * bsl)
    ctx.lineTo(x + halfL, y)
    ctx.lineTo(x - halfL * 3, y)
    ctx.lineTo(x - halfL * 3, y - bsl)
    ctx.lineTo(x + halfL * 3, y - bsl)
    ctx.stroke()
}
