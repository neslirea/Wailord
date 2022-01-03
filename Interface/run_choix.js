
let charmander = new Image(); //image pour le menu
	charmander.src = "Sprites_Pokemon/charmander.png";
	/*
function mouse_position(event){
	posSourisX = event.offsetX;
	posSourisY = event.offsetY;
};

//le background ici ne nous sert pas pour l'instant, voir il ne nous servira pas donc éléments à retirer éventuellement
window.onload = function()		// At start
{
let backgroundCanvas;
    
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
	
    MENU_Interval_ID=setInterval(choix,10); //répétitions toutes les 10ms de la fonction menus   
}
*/
let flag = false;

let pokemons = null;
let current = 0;
//

choix = function(){
    //console.log(MENU_Interval_ID)
	
    
	window.onclick = () => Gamerunning = true
    
    if (Gamerunning)
    {
        context.clearRect(0, 0, canvas.width, canvas.height); //nettoyage du canvas

		// Affichage des pokémons
		let x = 180;
		if (pokemons==null){
			pokemons = Pokemons();
			current = 0;
		}
		pokemons.forEach((pokemon)=>{

		})

		// Dessine un rectangle pour former le cadre du pokemon
		let lineaire = context.createLinearGradient(175, 130, 450, 350);
		lineaire.addColorStop(0,'#BB0B0B');
        lineaire.addColorStop(1, 'white');
        context.fillStyle = lineaire;
        context.fillRect(175, 130, 450, 350);

		//Affiche les deux flèches
		triangle("#FFE800","#0062cc",700, 750, 292, 367);
		triangle("#FFE800","#0062cc",100, 50, 292, 367);

		// Dessine un rectangle pour former le bouton sélection
		lineaire = context.createLinearGradient(160, 500, 485, 60);
		//lineaire.addColorStop(0,'#0062cc');
        //lineaire.addColorStop(1, '#0022bb');
		lineaire.addColorStop(0, '#cccccc');
		lineaire.addColorStop(1, '#0022bb');
        context.fillStyle = lineaire;
        context.fillRect(160, 500,485, 60);

		//affichage du Pokemon
		let pokemon = pokemons[current]
		let image = new Image();
		image.src = "Sprites_Pokemon/"+pokemon.sprite;
		context.drawImage(image,225, 180, 375, 350); //affichage du pokemon
		let type = new Image();
		type.src = "Sprites_Menus/"+pokemon.type+".png";
		context.drawImage(type,375, 185, 50, 50); //affichage du pokemon
		context.font = "bold 40px courier";
        context.fillStyle='black';
        context.fillText((pokemon.nom), 300, 170);

		//affichage de texte et de ses paramètres
        context.font = "bold 50px courier";
        context.fillStyle='black';
        context.fillText(('CHOIX DU POKEMON'), 160, 80);
		context.font = "30px courier";
        context.fillText(('SELECTIONNER CE POKEMON'), 190, 540);

		//si on est dans la zone du triangle 1
        if((posSourisX>40)&(posSourisX<110)&(posSourisY>282)&(posSourisY<377)) //si la souris se trouve dans cette zone...
		{
			casep ="blue";			
			triangle("#FFCD01","0055b3",100, 50, 292, 367);
				
			//SUR CLICK, TRANSITION VERS UN AUTRE Pokemon				
			window.onclick = () => {
				if (current==pokemons.length-1){
					current=0;
				} else {
					current+=1;
				}
			}
		}	

		//si on est dans la zone du triangle 2
        if((posSourisX>690)&(posSourisX<760)&(posSourisY>282)&(posSourisY<377)) //si la souris se trouve dans cette zone...
		{
			casep ="blue";			
			triangle("#FFCD01","0055b3",700, 750, 292, 367);
				
			//SUR CLICK, TRANSITION VERS UN AUTRE Pokemon				
			window.onclick = () => {
				if (current==0){
					current=pokemons.length-1;
				} else {
					current-=1;
				}
			}
		}	
			
		//gestion du déplacement à la souris sur l'image dans le pok
        if((posSourisX>175)&(posSourisX<625)&(posSourisY>130)&(posSourisY<470)) //si la souris se trouve dans cette zone...
		{
			casep ="blue";			
			//affichage d'un rectangle avec transparence 
			context.globalAlpha = 0.4;
			let lineaire = context.createLinearGradient(175, 130, 450, 350);
			lineaire.addColorStop(0,'#850606');
			lineaire.addColorStop(1, '#f0f0f0');
			context.fillStyle = lineaire;
			context.fillRect(175, 130, 450, 350);
			context.globalAlpha = 1;

			//Affichage des attaques
			let attaques = pokemon.getAttaques();
			context.fillRect(200, 250, 185, 85);
			context.fillRect(415, 250, 185, 85);
			context.fillRect(200, 350, 185, 85);
			context.fillRect(415, 350, 185, 85);
			//affichage de l'attaque 1
			if (attaques.length>=1){				
				context.fillStyle = "white";				
				context.fillRect(200, 250, 185, 85);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[0].nom), 230, 280);
			}
			if (attaques.length>=2){				
				context.fillStyle = "white";				
				context.fillRect(415, 250, 185, 85);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[1].nom), 445, 280);
			}
			if (attaques.length>=3){				
				context.fillStyle = "white";				
				context.fillRect(200, 350, 185, 85);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[2].nom), 230, 375);
			}
			if (attaques.length>=4){				
				context.fillStyle = "white";				
				context.fillRect(415, 350, 185, 85);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[3].nom), 445, 375);
			}
		}		
		
		//gestion du déplacement à la souris sur le bouton SELECT (160, 500, 485, 60)
        if((posSourisX>160)&(posSourisX<660)&(posSourisY>485)&(posSourisY<545)) //si la souris se trouve dans cette zone...
		{
			casep ="blue";			
			//affichage d'un rectangle avec transparence 
			// Dessine un rectangle pour former le bouton sélection
			lineaire = context.createLinearGradient(160, 500, 485, 60);
			lineaire.addColorStop(0,'#0062cc');
			lineaire.addColorStop(1, '#0022bb');
			context.fillStyle = lineaire;
			context.fillRect(160, 500, 485, 60);
			context.font = "bold 30px courier";
			
			context.fillStyle = "black";
			context.fillText(('SELECTIONNER CE POKEMON'), 190, 540);
				
			//SUR CLICK, TRANSITION VERS UN AUTRE ECRAN (COMBAT)				
			window.onclick = () => {
				context.clearRect(0, 0, canvas.width, canvas.height);
				clearInterval(MENU_Interval_ID)
				context.drawImage(titlescreen,0,0,canvas.width,canvas.height);
				context.drawImage(mob,0,0, 100, 100);
				context.drawImage(mob,700,500, 100, 100);
				console.log(MENU_Interval_ID)
			}
		}	



			/* AFFICHAGE DE LA POS SOURIS (debug)
			console.log(posSourisX)
		console.log(posSourisY)*/
        
    }
    else{
        context.clearRect(0, 0, canvas.width, canvas.height); //nettoyage du canvas
		context.drawImage(titlescreen,0,0,canvas.width,canvas.height); //affichage de titlescreen
		context.drawImage(title,150,0,500,150); //affichage de title
		//affichage de texte avec tout les paramètres
		context.fillStyle='yellow';
        context.font = "bold 50px courier";
        context.fillText('Click to select a pokemon', 180, 590);

		
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
		MENU_Interval_ID=setInterval(choix,10);
	}
}	

let triangle = function(col1, col2, x1, x2, y1, y2){
	context.fillStyle = col1;
    context.beginPath();     //Begin a path..
    context.moveTo(x1, y1);  //Startpoint (x, y) x1, y1
    context.lineTo(x2, y1+(y2-y1)/2); //Point 1    (x, y) x2, y1-y2/2
    context.lineTo(x1, y2);  //Point 2    (x, y) x1, y2
    context.closePath();     //Close the path.
    //Fill triangle with previous set color.
    context.fill();
    //Give triangle a stroke (width: 4 pixels).
    context.strokeStyle = col2;
    context.lineWidth   = 4;
    context.stroke();
}

let afficher_pokemon = function(pokemon){
		let image = new Image();
		image.src = "Sprites_Pokemon/"+pokemon.sprite;
		context.drawImage(image,225, 155, 375, 350); //affichage du pokemon
		context.font = "bold 30px courier";
        context.fillStyle='black';
        context.fillText((pokemon.nom), 180, 540);
}