const canvas = document.querySelector('#canvas');

// Set up the board
const width = canvas.width = 528
const height = canvas.height = window.screen.availHeight - 150;


const bsl = 44;
const halfL = bsl / 2;
// margin 4 on each side
// 12 blocks wide, 20 blocks high 

const ctx = document.getElementById('canvas').getContext('2d');

// make a basic shape
ctx.beginPath();
ctx.moveTo((width / 2) - (halfL * 3), 100);
ctx.lineTo((width / 2) + (halfL * 3), 100);
ctx.lineTo((width / 2) + (halfL * 3), 100 - bsl);
ctx.lineTo((width / 2) + (halfL * 1), 100 - bsl);
ctx.lineTo((width / 2) + (halfL * 1), 100 - (bsl * 2));
ctx.lineTo((width / 2) + (halfL * 1), 100);
ctx.lineTo((width / 2) - halfL, 100);
ctx.lineTo((width / 2) - halfL, 100 - (2 * bsl));
ctx.lineTo((width / 2) + halfL, 100 - (2 * bsl));
ctx.lineTo((width / 2) + halfL, 100);
ctx.lineTo((width / 2) - (halfL * 3), 100);
ctx.lineTo((width / 2) - (halfL * 3), 100 - bsl);
ctx.lineTo((width / 2) + (halfL * 3), 100 - bsl);

ctx.stroke();
