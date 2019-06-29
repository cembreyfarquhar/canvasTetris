const canvas = document.querySelector('#canvas')

// Set up the board
const width = (canvas.width = 528)
const bsl = 44

const height = (canvas.height = window.screen.availHeight - bsl * 3)

const halfL = bsl / 2
const blocksHigh = 20
const blocksWide = 12
// margin 4 on each side
// 12 blocks wide, 20 blocks high

const ctx = document.getElementById('canvas').getContext('2d')
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
