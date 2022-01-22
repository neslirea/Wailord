
let CHOIX_Interval_ID;
//
let choix_flag = false;

let choix_pokemons = null;
let choix_current = 0;
let musiqueChoix = new Audio('Musiques/SelectionPokemon.mp3');
musiqueChoix.loop=true;
musiqueChoix.volume=0.5;
//

choix = function(){
    //console.log(MENU_Interval_ID)
	let width = canvas.width;
	let height = canvas.height;

	window.onclick = () => Gamerunning = true

    if (Gamerunning)
    {
	    if(is_Sound)
	    {
		    musiqueChoix.play();
	    }
        context.clearRect(0, 0, canvas.width, canvas.height); //nettoyage du canvas

		// Affichage des pok�mons
		let x = 180;
		if (choix_pokemons==null){
			choix_pokemons = Pokemons();
			choix_current = 0;
		}
		current_pkm = choix_pokemons[choix_current]
		// Dessine un rectangle pour former le cadre du pokemon
		let lineaire = context.createLinearGradient(175, 130, 450, 350);
		//lineaire.addColorStop(0,'#BB0B0B');
		lineaire.addColorStop(0,'#ffffff');
        lineaire.addColorStop(1, '#dddddd');
        context.fillStyle = lineaire;
        context.fillRect(0.20*width, 0.20*height, 0.60*width, 0.60*height);

		//Affiche les deux fl�ches
		triangle("#FFE800","#0062cc",0.86*width, 0.93*width, 0.43*height, 0.57*height);
		triangle("#FFE800","#0062cc",0.14*width, 0.07*width, 0.43*height, 0.57*height);

		// Dessine un rectangle pour former le bouton s�lection
		lineaire = context.createLinearGradient(160, 500, 485, 60);
		lineaire.addColorStop(0, '#0062cc');
		lineaire.addColorStop(1, '#0022bb');
        context.fillStyle = lineaire;
        context.fillRect(width/2-485/2, 0.85*height, 485, 60);

		//affichage du Pokemon
		let pokemon = choix_pokemons[choix_current]
		let image = new Image();
		image.src = "Sprites_Pokemon/"+pokemon.sprite;
		context.drawImage(image, 0.5*width-0.58*height/2+10, 0.27*height, 0.58*height, 0.58*height); //affichage du pokemon
		let type = new Image();
		type.src = "Sprites_Menus/"+pokemon.type+".png";
		context.drawImage(type,0.22*width, 0.23*height, 0.06*width, 0.06*width); //affichage du type du pokemon
		context.font = "bold 40px courier";
        context.fillStyle='black';
        context.fillText((pokemon.nom), 0.30*width, 0.28*height);

		//affichage de texte et de ses param�tres
        context.font = "bold 50px courier";
        context.fillStyle='black';
        context.fillText(('CHOIX DU POKEMON'), width/2-490/2, 0.13*height);
		context.font = "30px courier";
        context.fillText(('SELECTIONNER CE POKEMON'), width/2-485/2+30,  0.85*height+40);

		//si on est dans la zone du triangle 1
        if((posSourisX>0.86*width)&(posSourisX< 0.93*width)&(posSourisY>0.43*height)&(posSourisY<0.57*height)) //si la souris se trouve dans cette zone...
		{
			triangle("#FFCD01","#0055b3",0.86*width, 0.93*width, 0.43*height, 0.57*height);

			//SUR CLICK, TRANSITION VERS UN AUTRE Pokemon
			window.onclick = () => {
				if (choix_current==choix_pokemons.length-1){
					choix_current=0;
				} else {
					choix_current+=1;
				}
			}
		}

		//si on est dans la zone du triangle 2
        if((posSourisX>0.07*width)&(posSourisX<0.14*width)&(posSourisY>0.43*height)&(posSourisY<0.57*height)) //si la souris se trouve dans cette zone...
		{
			triangle("#FFCD01","#0055b3",0.14*width, 0.07*width, 0.43*height, 0.57*height);

			//SUR CLICK, TRANSITION VERS UN AUTRE Pokemon
			window.onclick = () => {
				if (choix_current==0){
					choix_current=choix_pokemons.length-1;
				} else {
					choix_current-=1;
				}
			}
		}

		//gestion du d�placement � la souris sur l'image dans le pok
        if((posSourisX>0.20*width)&(posSourisX<0.80*width)&(posSourisY>0.20*height)&(posSourisY<0.80*height)) //si la souris se trouve dans cette zone...
		{
			//affichage d'un rectangle avec transparence
			context.globalAlpha = 0.4;
			let lineaire = context.createLinearGradient(175, 130, 450, 350);
			lineaire.addColorStop(0,'#ffffff');
			lineaire.addColorStop(1, '#dddddd');
			context.fillStyle = lineaire;
			context.fillRect(0.20*width, 0.20*height, 0.60*width, 0.60*height);
			context.globalAlpha = 1;

			lineaire = context.createLinearGradient(175, 130, 450, 350);
			lineaire.addColorStop(0,'#dfdfdf');
			lineaire.addColorStop(1, '#b0b0b0');
			context.fillStyle = lineaire;
			//Affichage des attaques
			let attaques = pokemon.getAttaques();
			let att_width = 0.195*width;
			let att_height = 0.14*height;
			let att_marge = 0.07*width;
			let att_x0 = 0.25*width;
			let att_x1 = 0.535*width;
			let att_y0 = 0.36*height;
			let att_y1 = 0.60*height;
			context.fillRect(att_x0, att_y0, att_width, att_height);
			context.fillRect(att_x1, att_y0, att_width, att_height);
			context.fillRect(att_x0, att_y1, att_width, att_height);
			context.fillRect(att_x1, att_y1, att_width, att_height);
			//affichage de l'attaque 1
			if (attaques.length>=1){
				context.fillStyle = "white";
				context.fillRect(att_x0, att_y0, att_width, att_height);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[0].nom), att_x0+80, att_y0+50);
				let type1 = new Image();
				type1.src = "Sprites_Menus/"+attaques[0].type+".png";
				context.drawImage(type1,att_x0+10, att_y0+20, 0.04*width, 0.04*width); //affichage du type du pokemon
			}
			if (attaques.length>=2){
				context.fillStyle = "white";
				context.fillRect(att_x1, att_y0, att_width, att_height);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[1].nom), att_x1+80, att_y0+50);
				let type2 = new Image();
				type2.src = "Sprites_Menus/"+attaques[1].type+".png";
				context.drawImage(type2,att_x1+10, att_y0+20, 0.04*width, 0.04*width); //affichage du type du pokemon
			}
			if (attaques.length>=3){
				context.fillStyle = "white";
				context.fillRect(att_x0, att_y1, att_width, att_height);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[2].nom), att_x0+80, att_y1+50);
				let type3 = new Image();
				type3.src = "Sprites_Menus/"+attaques[2].type+".png";
				context.drawImage(type3,att_x0+10, att_y1+20, 0.04*width, 0.04*width); //affichage du type du pokemon
			}
			if (attaques.length>=4){
				context.fillStyle = "white";
				context.fillRect(att_x1, att_y1, att_width, att_height);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[3].nom), att_x1+80, att_y1+50);
				let type4 = new Image();
				type4.src = "Sprites_Menus/"+attaques[3].type+".png";
				context.drawImage(type4,att_x1+10, att_y1+20, 0.04*width, 0.04*width); //affichage du type du pokemon
			}
		}

		//gestion du d�placement � la souris sur le bouton SELECT (160, 500, 485, 60)
        if((posSourisX>(width/2-485/2))&(posSourisX<(width/2+485/2))&(posSourisY>(0.85*height))&(posSourisY<(0.85*height+60))) //si la souris se trouve dans cette zone...
		{
			context.font = "bold 30px courier";

			context.fillStyle = "black";
			context.fillText(('SELECTIONNER CE POKEMON'), width/2-485/2+30,  0.85*height+40);

			//SUR CLICK, TRANSITION VERS UN AUTRE ECRAN (COMBAT)
			window.onclick = () => {
					musiqueChoix.pause();
					musiqueChoix.currentTime=0;
					context.clearRect(0, 0, canvas.width, canvas.height);
					//console.log(MENU_Interval_ID)
					clearInterval(CHOIX_Interval_ID)
					choix_pokemons = null;
					combats();
			}
		}

    }
	//inutile : affiche un �cran d'acceuil s il s'agit du premier �cran
    else{
        context.clearRect(0, 0, canvas.width, canvas.height); //nettoyage du canvas
		context.drawImage(titlescreen,0,0,canvas.width,canvas.height); //affichage de titlescreen
		context.drawImage(title,150,0,500,150); //affichage de title
		//affichage de texte avec tout les param�tres
		context.fillStyle='yellow';
        context.font = "bold 50px courier";
        context.fillText('Click to select a pokemon', 180, 590);
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
