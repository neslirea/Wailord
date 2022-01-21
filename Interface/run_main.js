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
let gener = new Audio('Musiques/MainTheme.mp3');
gener.loop=true;
gener.volume=0.5;
let creditsound = new Audio('Musiques/PokemonLeagueTheme.mp3');
creditsound.loop=true;
creditsound.volume=0.5;
let options = new Audio('Musiques/Options.mp3');
options.loop=true;
options.volume=0.5;

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
    window.onclick = () => Gamerunning = true

    if (Gamerunning)
    {
        context.clearRect(0, 0, canvas.width, canvas.height); //nettoyage du canvas
        if(transit){
			//affichage du fond titlescreen avec les pika en transition
			context.drawImage(titlescreen,0,0,canvas.width,canvas.height);
            context.drawImage(mob,0,0, (canvas.width)/10, (canvas.height)/8);
            context.drawImage(mob,(canvas.width)*9/10,(canvas.height)*7/8, (canvas.width)/10, (canvas.height)/8);
            setTimeout(()=> transit=false, 2000) //timer de transition de 2000ms, échu alors fin de transition
        }
        else{
			//affichage de texte et de ses paramètres
            context.font = "bold 50px courier";
            context.fillStyle='black';
            context.fillText(('MENU'), (canvas.width)*2/5, (canvas.height)/12,(canvas.width)/5);
			//

			context.drawImage(chef,(canvas.width)*5/30,(canvas.height)/4,(canvas.width)/3,(canvas.height)/2); //affichage du chef dans le menu

			//affichage de texte et de ses paramètres + gestion du déplacement à la souris sur le menu
            context.fillStyle='blue';
            context.fillText('Campagne', (canvas.width)*4/7, (canvas.height)*4/12,(canvas.height)*2/5,(canvas.height)/12);
            if((posSourisX>(canvas.width)*4/7)&(posSourisY>(canvas.height)*7/24)&(posSourisY<(canvas.height)*4/12)) //si la souris se trouve dans cette zone...
			{
				casep ="blue";

				//affichage d'un rectangle avec transparence
                let lineaire = context.createLinearGradient((canvas.width)*11/21, (canvas.height)*3/12, (canvas.width)*13/21, (canvas.height)*4/12);
                lineaire.addColorStop(0,'#AAAADD');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect((canvas.width)*11/21, (canvas.height)*7/24,  (canvas.width)*13/21, (canvas.height)/24);
				//

                context.fillStyle='blue';
				context.fillText('Campagne', (canvas.width)*4/7, (canvas.height)*4/12,(canvas.height)*2/5,(canvas.height)/12);
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
					clearInterval(MENU_Interval_ID)
					CHOIX_Interval_ID=setInterval(choix,10);
					choix();
				}
            }

            //TYPES
            context.fillStyle='red';
            context.fillText('Etude des types', (canvas.width)*4/7, (canvas.height)*5/12,(canvas.height)*3/5,(canvas.height)/12);
            if((posSourisX>(canvas.width)*4/7)&(posSourisY>(canvas.height)*9/24)&(posSourisY<(canvas.height)*5/12))
			{
				casep ="red";
                let lineaire = context.createLinearGradient((canvas.width)*11/21, (canvas.height)*4/12, (canvas.width)*13/21, (canvas.height)*5/12);
                lineaire.addColorStop(0,'#DDAAAA');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect((canvas.width)*11/21, (canvas.height)*9/24, (canvas.width)*13/21, (canvas.height)/24);
                context.fillStyle='red';
				context.fillText('Etude des types', (canvas.width)*4/7, (canvas.height)*5/12,(canvas.height)*3/5,(canvas.height)/12);
				if (prtaudio!=1)
				{
					prtaudio = 1;
					let audio = new Audio('selection.mp3')
					audio.play()
				}
				window.onclick = () => {
					window.open('https://neslirea.github.io/Wailord/types.html', '_blank');
				}
            }

			//OPTIONS
            context.fillStyle='green';
            context.fillText('Options', (canvas.width)*4/7, (canvas.height)*6/12,(canvas.height)*2/5,(canvas.height)/12);
            if((posSourisX>(canvas.width)*4/7)&(posSourisY>(canvas.height)*11/24)&(posSourisY<(canvas.height)*6/12))
			{
				casep ="green";
                let lineaire = context.createLinearGradient((canvas.width)*11/21,  (canvas.height)*5/12, (canvas.width)*13/21,  (canvas.height)*6/12);
                lineaire.addColorStop(0,'#9ACD9A');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect((canvas.width)*11/21, (canvas.height)*11/24, (canvas.width)*13/21, (canvas.height)/24);
                context.fillStyle='green';
				context.fillText('Options', (canvas.width)*4/7, (canvas.height)*6/12,(canvas.height)*2/5,(canvas.height)/12);
				if (prtaudio!=2)
				{
					prtaudio = 2;
					let audio = new Audio('selection.mp3')
					audio.play()
				}
				window.onclick = () => {
					gener.pause();
					options.play();
					context.clearRect(0, 0, canvas.width, canvas.height);
					clearInterval(MENU_Interval_ID)
					console.log(MENU_Interval_ID)
					context.drawImage(titlescreen,0,0,canvas.width,canvas.height);
					context.drawImage(mob,0,0, 100, 100);
					context.drawImage(mob,700,500, 100, 100);

				}
            }


			// CREDITS
            context.fillStyle='salmon';
            context.fillText('Crédits', (canvas.width)*4/7,  (canvas.height)*7/12,(canvas.height)*2/5,(canvas.height)/12);
            if((posSourisX>(canvas.width)*4/7)&(posSourisY>(canvas.height)*13/24)&(posSourisY<(canvas.height)*7/12))
			{
				casep ="salmon";
                let lineaire = context.createLinearGradient((canvas.width)*11/21,  (canvas.height)*6/12, (canvas.width)*13/21,  (canvas.height)*7/12);
                lineaire.addColorStop(0,'#DAB0A2');
                lineaire.addColorStop(1, 'white');
                context.fillStyle = lineaire;
                context.fillRect((canvas.width)*11/21, (canvas.height)*13/24, (canvas.width)*13/21, (canvas.height)/24);
                context.fillStyle='salmon';
				context.fillText('Crédits', (canvas.width)*4/7,  (canvas.height)*7/12,(canvas.height)*2/5,(canvas.height)/12);
				if (prtaudio!=3)
				{
					prtaudio = 3;
					let audio = new Audio('selection.mp3');
					audio.play();
				}

				//SUR SELECTION DE CREDITS, FIN DE REPETITION DE LA FONCTION MENUS ET DEBUT DE LA FONCTION CREDITS (voir clearInterval et setInterval ci-dessous)

				window.onclick = () => {
					gener.pause();
					creditsound.play()
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

        }

    } else{
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
	creditsound.play();
	context.drawImage(crd,0,0,canvas.width,canvas.height);

	 context.drawImage(programmers,490,340,170,25);
	 context.drawImage(clea,493,385,160,25);
	 context.drawImage(mattew,493,420,160,25);
	 context.drawImage(yann,493,455,160,25);
	 context.drawImage(stephane,480,490,185,28);
	 context.drawImage(skip,canvas.width-50,canvas.height-50,50,50);
	window.onclick =() => {
		clearInterval(Credits_Interval_ID)
		MENU_Interval_ID=setInterval(menus,10);
		creditsound.pause();
		creditsound.currentTime=0;
		gener.currentTime=0;
		gener.play();
	}
}
