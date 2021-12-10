var canvas;
var context;
var backgroundContext;


var mob = new Image();
	mob.src = "pika.png";

window.onload = function()		// At start
{
var backgroundCanvas;
var monPara = window.document.getElementById("para_1");
    
    //init background for collision test
    backgroundCanvas = document.createElement( "canvas" );
    // Adjust backgroundCanvas size at window's size
    backgroundCanvas.width = window.innerWidth;
    backgroundCanvas.height = window.innerHeight;
    // Init backgroundContext for collision test
    backgroundContext = backgroundCanvas.getContext("2d");
    // Draw background in backgroundContext
    
    //init our canvas and graphic context
    canvas = document.getElementById("myCanvas");
    // Adjust backgroundCanvas size at window's size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Init context to draw the game
    context = canvas.getContext("2d");	
    context.drawImage(mob,100,100, 100, 100);
    context.drawImage(mob,500,500, 100, 100);	
        
// Render the scene
}
