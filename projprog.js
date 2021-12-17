let canvas;
let context;
let backgroundContext;
let Gamerunning = false;
var mob = new Image();
	mob.src = "pika.png";

// Mouse
var posSourisX = 0;
var posSourisY = 0;


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

function mouse_position(event)
{
	posSourisX = event.offsetX;
	posSourisY = event.offsetY;
}


let transit = true
animate = function(){
    
    window.onclick = () => Gamerunning = true
    
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

            context.font = "bold 50px courier";
            context.fillStyle='black';
            context.fillText(('MENU'), 260, 80);


            context.fillStyle='blue';
            context.fillText('Campagne', 400, 180);
            if((posSourisX>400)&(posSourisY>150)&(posSourisY<190)){
                let lineaire = context.createLinearGradient(350, 180, 380, 220);
                lineaire.addColorStop(0,'#AAAADD');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect(350, 150, 380, 40);
                context.fillStyle='blue';
                context.fillText('Campagne', 400, 180);
            }

            
            context.fillStyle='red';
            context.fillText('Partie rapide', 400, 250);
            if((posSourisX>400)&(posSourisY>220)&(posSourisY<260)){
                let lineaire = context.createLinearGradient(350, 250, 380, 290);
                lineaire.addColorStop(0,'#DDAAAA');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect(350, 220, 380, 40);
                context.fillStyle='red';
                context.fillText('Partie rapide', 400, 250);
            }
            context.fillStyle='green';
            context.fillText('Options', 400, 320);
            if((posSourisX>400)&(posSourisY>285)&(posSourisY<325)){
                let lineaire = context.createLinearGradient(350, 320, 380, 360);
                lineaire.addColorStop(0,'#AADDAA');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect(350, 290, 380, 40);
                context.fillStyle='green';
                context.fillText('Options', 400, 320);
            }
            context.fillStyle='salmon';
            context.fillText('Crédits', 400, 390);
            if((posSourisX>400)&(posSourisY>360)&(posSourisY<400)){
                context.fillRect(340,360,30,30);
            }
        }
        
    }
    else{
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "bold 50px courier";
        context.fillText('Click to play', 180, 180);
    }
    
}

