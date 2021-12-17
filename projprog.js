//box
//var context;
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var terrain = new Image();
	terrain.src = "battleground_test.png";

var pk1 = new Image();
    pk1.src = "vaporeon_dos.png";

var pk2 = new Image();
	pk2.src = "flareon.png";

window.onload = function()		// At start
{

const white = canvas.getContext('2d');

white.fillStyle= 'rgba(255,255,255)';
white.fillRect(100, 0, 1300, 600);
console.log(canvas);
 
const background = canvas.getContext("2d");	
background.drawImage(terrain,150,100, 1150, 500);
console.log(canvas);

context = canvas.getContext("2d");	
context.drawImage(pk1,300,150, 500, 500);

context.drawImage(pk2,880,0, 300, 300);
}
