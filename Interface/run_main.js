//déclaration de variable pour contenir les paramètres liés au canvas
let canvas;
let context;
let backgroundContext;
//

let Gamerunning = false; //drapeau pour l'écran titre

let mob = new Image(); //image pikachu de l'écran de transition
	mob.src = "Sprites_Menus/pika.png";
	
let titlescreen = new Image(); //image pour l'écran titre
	titlescreen.src = "Sprites_Menus/affpoke.png"
	
let title = new Image(); //image pour le titre de l'écran titre
	title.src = "Sprites_Menus/PokemonTitle.png";
	
let chef = new Image(); //image pour le menu
	chef.src = "Sprites_Menus/red.png";
	
// Mouse positions
let posSourisX = 0;
let posSourisY = 0;
//
//fond musical menus et crédits
let gener = new Audio('Musiques/fondmelee.mp4')
gener.loop=true;
gener.volume=0.5;
let creditsound = new Audio('Musiques/credits.mp3');


// CREDITS
let crd = new Image();
 crd.src = "Sprites_Menus/credits.jpg";

let programmers = new Image();
 programmers.src = "Sprites_Menus/Programmers.png";

let clea = new Image();
 clea.src = "Sprites_Menus/CleaAubery.png";

let mattew = new Image();
 mattew.src = "Sprites_Menus/MattewMartin.png";
 
 let yann = new Image();
 yann.src = "Sprites_Menus/YannJobard.png";

let stephane = new Image();
 stephane.src = "Sprites_Menus/StephaneRoche.png";

 let skip = new Image();
 skip.src = "Sprites_Menus/skip.png";


//
//variables pour contenir les id des setInterval pour pouvoir les clear et donc arrêter les répétitions
let MENU_Interval_ID
let Credits_Interval_ID
//


//le background ici ne nous sert pas pour l'instant, voir il ne nous servira pas donc éléments à retirer éventuellement
window.onload = function()		// At start
{
let backgroundCanvas;
let monPara = window.document.getElementById("para_1"); //inutile aussi dans un premier temps
    
    //init background for collision test
    backgroundCanvas = document.createElement( "canvas" );
    // Adjust backgroundCanvas size at window's size
    //backgroundCanvas.width = window.innerWidth;
    //backgroundCanvas.height = window.innerHeight;
    // Init backgroundContext for collision test
    backgroundContext = backgroundCanvas.getContext("2d");
    
    //init our canvas and graphic context
    canvas = document.getElementById("myCanvas");
    
    // Adjust backgroundCanvas size at window's size
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
	
    // Init context to draw the game
    context = canvas.getContext("2d");
	
    MENU_Interval_ID=setInterval(menus,10); //répétitions toutes les 10ms de la fonction menus
    
    
}

function mouse_position(event) //permet de relever la position de la souris via une balise onmousemove dans l'html
{
	posSourisX = event.offsetX;
	posSourisY = event.offsetY;
}


let transit = true //drapeau transition

//drapeaux pour la gestion de l'audio dans les menus
let prtaudio = 10;
let casep;
//

menus = function(){
    //console.log(MENU_Interval_ID)	
    window.onclick = () => Gamerunning = true
    
    if (Gamerunning)
    {
        context.clearRect(0, 0, canvas.width, canvas.height); //nettoyage du canvas
        if(transit)
        {
			//affichage du fond titlescreen avec les pika en transition
			
		    const timer = 1000
			
			context.drawImage(titlescreen,0,0,canvas.width,canvas.height); 
            context.drawImage(mob,10,10, 100, 100);
			setTimeout(()=> transit=false, timer)
			//timer de transition de 2000ms, échu alors fin de transition
        }
        else{
			//affichage de texte et de ses paramètres
            context.font = "bold 50px courier";
            context.fillStyle='black';
            context.fillText(('MENU'), 260, 80);
			//
			
			context.drawImage(chef,20,150,300,400); //affichage du chef dans le menu
			
			//affichage de texte et de ses paramètres + gestion du déplacement à la souris sur le menu
            context.fillStyle='blue';
            context.fillText('Combat', 400, 180);
            if((posSourisX>400)&(posSourisY>150)&(posSourisY<190)) //si la souris se trouve dans cette zone...
			{
				casep ="blue";
				
				//affichage d'un rectangle avec transparence 
                let lineaire = context.createLinearGradient(350, 180, 380, 220);
                lineaire.addColorStop(0,'#AAAADD');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect(350, 150, 380, 40);
				//
				
                context.fillStyle='blue';
                context.fillText('Combat', 400, 180);
				if (prtaudio!=0) //si la souris arrive sur la zone depuis une autre zone alors...
				{
					prtaudio = 0;
					let audio = new Audio('selection.mp3')
					audio.play()
				}
				
				//SUR CLICK, TRANSITION VERS UN ECRAN FIXE, SUITE A DETERMINER				
				window.onclick = () => {
					gener.pause();
					context.clearRect(0, 0, canvas.width, canvas.height);
					console.log(MENU_Interval_ID)
					clearInterval(MENU_Interval_ID)
					MENU_Interval_ID=setInterval(choix,10);
				}
            }

            //MEME QUE CAS BLEU
			
            context.fillStyle='red';
            context.fillText('Partie rapide', 400, 250);
            if((posSourisX>400)&(posSourisY>220)&(posSourisY<260))
			{
				casep ="red";
                let lineaire = context.createLinearGradient(350, 250, 380, 290);
                lineaire.addColorStop(0,'#DDAAAA');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect(350, 220, 380, 40);
                context.fillStyle='red';
                context.fillText('Partie rapide', 400, 250);
				if (prtaudio!=1)
				{
					prtaudio = 1;
					let audio = new Audio('selection.mp3')
					audio.play()
				}
				window.onclick = () => {
					context.clearRect(0, 0, canvas.width, canvas.height);
					clearInterval(MENU_Interval_ID)
					console.log(MENU_Interval_ID)
					context.drawImage(titlescreen,0,0,canvas.width,canvas.height);
					context.drawImage(mob,0,0, 100, 100);
					context.drawImage(mob,700,500, 100, 100);
				}
            }
			
			//MEME QUE CAS BLEU
			
            context.fillStyle='green';
            context.fillText('Options', 400, 320);
            if((posSourisX>400)&(posSourisY>285)&(posSourisY<325))
			{
				casep ="green";
                let lineaire = context.createLinearGradient(350, 320, 380, 360);
                lineaire.addColorStop(0,'#AADDAA');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect(350, 290, 380, 40);
                context.fillStyle='green';
                context.fillText('Options', 400, 320);
				if (prtaudio!=2)
				{
					prtaudio = 2;
					let audio = new Audio('selection.mp3')
					audio.play()
				}
				window.onclick = () => {
					context.clearRect(0, 0, canvas.width, canvas.height);
					clearInterval(MENU_Interval_ID)
					console.log(MENU_Interval_ID)
					context.drawImage(titlescreen,0,0,canvas.width,canvas.height);
					context.drawImage(mob,0,0, 100, 100);
					context.drawImage(mob,700,500, 100, 100);
					
				}
            }
			
			
			// subtilité pour les crédits 
			
			
            context.fillStyle='salmon';
            context.fillText('Crédits', 400, 390);
            if((posSourisX>400)&(posSourisY>360)&(posSourisY<400))
			{
				casep ="salmon";
                let lineaire = context.createLinearGradient(350, 390, 380, 430);
                lineaire.addColorStop(0,'#FFB5A7');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect(350, 360, 380, 40);
                context.fillStyle='salmon';
                context.fillText('Crédits', 400, 390);
				if (prtaudio!=3)
				{
					prtaudio = 3;
					let audio = new Audio('Musique/selection.mp3')
					audio.play()
				}
				
				//SUR SELECTION DE CREDITS, FIN DE REPETITION DE LA FONCTION MENUS ET DEBUT DE LA FONCTION CREDITS (voir clearInterval et setInterval ci-dessous)
				
				window.onclick = () => {
					gener.pause();
					context.clearRect(0, 0, canvas.width, canvas.height);
					console.log(MENU_Interval_ID)
					clearInterval(MENU_Interval_ID)
					Credits_Interval_ID=setInterval(credits,10);
					credits();
				}
            }
			if((casep!="blue")&(casep!="red")&(casep!="green")&(casep!="salmon")) //si souris en dehors des zones de textes de couleur...
			{
				prtaudio=10;
			}
			casep="vide";

			/* AFFICHAGE DE LA POS SOURIS (debug)
			console.log(posSourisX)
			console.log(posSourisY)*/
        }
        
    }
    else{
        context.clearRect(0, 0, canvas.width, canvas.height); //nettoyage du canvas
		context.drawImage(titlescreen,0,0,canvas.width,canvas.height); //affichage de titlescreen
		context.drawImage(title,150,0,500,150); //affichage de title
		//affichage de texte avec tout les paramètres
		context.fillStyle='yellow';
        context.font = "bold 50px courier";
        context.fillText('Click to play', 180, 590);
		//
		
		gener.play(); //lancement musique gener
		
    }
    
}
console.log(MENU_Interval_ID)

//crédits affiche un écran fixe (à agrémenter par la suite) qu'on peut quitter en cliquant

credits = function()
{
	context.drawImage(crd,0,0,canvas.width,canvas.height);
	 context.drawImage(programmers,310,310,170,25);
	 context.drawImage(clea,313,345,160,25);
	 context.drawImage(mattew,313,380,160,25);
	 context.drawImage(yann,313,415,160,25);
	 context.drawImage(stephane,300,450,185,28);
	 context.drawImage(skip,canvas.width-50,canvas.height-50,50,50);
	window.onclick =() => {
		clearInterval(Credits_Interval_ID)
		MENU_Interval_ID=setInterval(menus,10);
		creditsound.pause();
		creditsound.currentTime = 0;
		gener.play();
	}
}	