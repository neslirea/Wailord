//déclaration de variable pour contenir les paramètres liés au canvas
let canvas;
let context;
let backgroundContext;
//

let Gamerunning = false; //drapeau pour l'écran titre

let mob = new Image(); //image pikachu de l'écran de transition
	mob.src = "pika.png";
	
let titlescreen = new Image(); //image pour l'écran titre
	titlescreen.src = "affpoke.png"
	
let title = new Image(); //image pour le titre de l'écran titre
	title.src = "PokemonTitle.png";
	
let chef = new Image(); //image pour le menu
	chef.src = "red.png";

let jaugeJ = new Image();
	jaugeJ.src = "jaugej.png"
	
let jaugeE = new Image();
	jaugeE.src = "jaugee.png"
	
// Mouse positions
let posSourisX = 0;
let posSourisY = 0;
//
//fond musical menus et crédits
let gener = new Audio('fondmelee.mp4')
gener.loop=true;
gener.volume=0.5;
let creditsound = new Audio('credits.mp3');
//
//variables pour contenir les id des setInterval pour pouvoir les clear et donc arrêter les répétitions
let MENU_Interval_ID
let Credits_Interval_ID
let Fast_Interval_ID
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
	
    window.onclick = () => Gamerunning = true
    
    if (Gamerunning)
    {
        context.clearRect(0, 0, canvas.width, canvas.height); //nettoyage du canvas
        if(transit)
        {
			//affichage du fond titlescreen avec les pika en transition
			context.drawImage(titlescreen,0,0,canvas.width,canvas.height); 
            context.drawImage(mob,0,0, 100, 100);
            context.drawImage(mob,700,500, 100, 100);
            setTimeout(()=> transit=false, 2000) //timer de transition de 2000ms, échu alors fin de transition
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
            context.fillText('Campagne', 400, 180);
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
                context.fillText('Campagne', 400, 180);
				if (prtaudio!=0) //si la souris arrive sur la zone depuis une autre zone alors...
				{
					prtaudio = 0;
					let audio = new Audio('selection.mp3')
					audio.play()
				}
				
				//SUR CLICK, TRANSITION VERS UN ECRAN FIXE, SUITE A DETERMINER
				
				window.onclick = () => {
					context.clearRect(0, 0, canvas.width, canvas.height);
					clearInterval(MENU_Interval_ID)
					context.drawImage(titlescreen,0,0,canvas.width,canvas.height);
					context.drawImage(mob,0,0, 100, 100);
					context.drawImage(mob,700,500, 100, 100);
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
					gener.pause();
					context.clearRect(0, 0, canvas.width, canvas.height);
					clearInterval(MENU_Interval_ID)
					Fast_Interval_ID=setInterval(test,10)
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
					let audio = new Audio('selection.mp3')
					audio.play()
				}
				
				//SUR SELECTION DE CREDITS, FIN DE REPETITION DE LA FONCTION MENUS ET DEBUT DE LA FONCTION CREDITS (voir clearInterval et setInterval ci-dessous)
				
				window.onclick = () => {
					gener.pause();
					context.clearRect(0, 0, canvas.width, canvas.height);
					clearInterval(MENU_Interval_ID)
					Credits_Interval_ID=setInterval(credits,10);
				}
            }
			if((casep!="blue")&(casep!="red")&(casep!="green")&(casep!="salmon")) //si souris en dehors des zones de textes de couleur...
			{
				prtaudio=10;
			}
			casep="vide";
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

//crédits affiche un écran fixe (à agrémenter par la suite) qu'on peut quitter en cliquant

credits = function()
{
	context.drawImage(title,0,0,canvas.width,300);
	creditsound.play();
	context.fillStyle='black';
	context.fillText('Click to skip', 180,35);
	window.onclick =() => {
		clearInterval(Credits_Interval_ID)
		MENU_Interval_ID=setInterval(menus,10);
		creditsound.pause();
		creditsound.currentTime = 0;
		gener.play();
	}
}	
let PV1=100;
let PV2=100;
test = function()
{
	context.clearRect(0,0,canvas.width,canvas.height);
	context.fillStyle='yellow';
	context.font = "bold 50px courier";
	context.fillText('Il faut partir', 0, 30,100);
	console.log(posSourisX,posSourisY)
	context.fillText(PV1,150,30)
	context.fillText(PV2,300,30)
	if((posSourisX<100)&(posSourisY<40))
	{
		window.onclick =() => {
			clearInterval(Fast_Interval_ID)
			MENU_Interval_ID=setInterval(menus,10);
			creditsound.pause();
			creditsound.currentTime = 0;
			gener.play();
		}
	}
	else if(posSourisY<300)
	{
		window.onclick =() => {
			PV1=PV1+10
			if(PV1>100)
			{
				PV1=100
			}
			PV2=PV2-10
			if(PV2<0)
			{
				PV2=0
			}
		}
	}
	else if(posSourisY>300)
	{
		window.onclick =() => {
			PV1=PV1-10
			if(PV1<0)
			{
				PV1=0
			}
			PV2=PV2+10
			if(PV2>100)
			{
				PV2=100
			}
		}
	}
	else{
		window.onclick =() =>{}
	}
	if(PV1>50)
	{
		context.fillStyle='green';
		context.fillRect(635, 300, 140*PV1/100, 40)
	}
	else if ((PV1>25)&(PV1<=50))
	{
		context.fillStyle='yellow';
		context.fillRect(635, 300, 140*PV1/100, 40)
	}
	else 
	{
		context.fillStyle='red';
		context.fillRect(635, 300, 140*PV1/100, 40)
	}
	
	if(PV2>50)
	{
		context.fillStyle='green';
		context.fillRect(110, 80, 150*PV2/100, 40)
	}
	else if ((PV2>25)&(PV2<=50))
	{
		context.fillStyle='yellow';
		context.fillRect(110, 80, 150*PV2/100, 40)
	}
	else 
	{
		context.fillStyle='red';
		context.fillRect(110, 80, 150*PV2/100, 40)
	}
	context.drawImage(jaugeE,0, 40,300,100)
	context.drawImage(jaugeJ,500, 270,300,100)
}	