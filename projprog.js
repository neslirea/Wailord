let canvas;
let context;
let backgroundContext;
let Gamerunning = false

let mob = new Image();
	mob.src = "pika.png";

let accueil = new Image();
accueil.src = "Accueil.png";

window.onload = function()		// At start
{
let backgroundCanvas;
let monPara = window.document.getElementById("para_1");
    
    //init background for collision test
    backgroundCanvas = document.createElement( "canvas" );
    // Adjust backgroundCanvas size at window's size
    //backgroundCanvas.width = window.innerWidth;
    //backgroundCanvas.height = window.innerHeight;
    // Init backgroundContext for collision test
    backgroundContext = backgroundCanvas.getContext("2d");
    // Draw background in backgroundContext
    backgroundContext.drawImage(accueil,0,0,window.innerWidth,window.innerHeight);
    //init our canvas and graphic context
    canvas = document.getElementById("myCanvas");
    
    // Adjust backgroundCanvas size at window's size
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
    // Init context to draw the game
    context = canvas.getContext("2d");

    setInterval(animate,20);

    
    
    
    
// Render the scene
}

let transit = true

animate = function(){
    window.onclick = () => Gamerunning = true
    
    backgroundContext.drawImage(accueil,0,0,canvas.width,canvas.height);
    if (Gamerunning)
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if(transit)
        {
            context.drawImage(mob,0,0, 100, 100);
            context.drawImage(mob,700,500, 100, 100);
            setTimeout(()=> transit=false, 2000)
        }
        else{
            
        }
        
    }
    else{
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        context.font = "bold 50px courier";
        context.fillText('Click to play', 180, 180);
    }
    
}