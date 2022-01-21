// options affiche un écran fixe qu'on peut quitter en cliquant sur un bouton et où on peut désactiver le son
options = function()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	console.log(sound_ON);
	window.onclick=()=>{};
	let marge = 8;
	//Dessine l'image de fond
	
	context.drawImage(crd,0,0,canvas.width,canvas.height);

	//Affiche l'encadrement sur le paramètre actif
	if (sound_ON){
		context.fillStyle = "#00FF00";
		context.fillRect(0.1*canvas.width-2*marge, 0.55*canvas.height-2*marge, 0.35*canvas.width+4*marge,  0.15*canvas.height+4*marge);
		context.fillStyle = "#6BA163";
		context.fillRect(0.1*canvas.width-marge, 0.55*canvas.height-marge, 0.35*canvas.width+2*marge,  0.15*canvas.height+2*marge);
	} else {
		context.fillStyle = "#FF0000";
		context.fillRect(0.55*canvas.width-2*marge, 0.55*canvas.height-2*marge, 0.35*canvas.width+4*marge,  0.15*canvas.height+4*marge);
		context.fillStyle = "#6BA163";
		context.fillRect(0.55*canvas.width-marge, 0.55*canvas.height-marge, 0.35*canvas.width+2*marge,  0.15*canvas.height+2*marge);

	}

	//Rectangle pour quitter
	context.fillStyle = "#0062CC";
	context.fillRect(0.50*canvas.width, 0.80*canvas.height, 0.45*canvas.width,  0.15*canvas.height);
	context.fillStyle = "#FFE800";
		context.fillRect(0.50*canvas.width+marge, 0.80*canvas.height+marge, 0.45*canvas.width-2*marge,  0.15*canvas.height-2*marge);
	if((posSourisX>0.50*canvas.width)&(posSourisX<0.95*canvas.width)&(posSourisY>0.80*canvas.height)&(posSourisY<0.95*canvas.height)){
		//HOVER	
		context.fillStyle = "#0055b3";
		context.fillRect(0.50*canvas.width, 0.80*canvas.height, 0.45*canvas.width,  0.15*canvas.height);
		context.fillStyle = "#FFCD01";
		context.fillRect(0.50*canvas.width+marge, 0.80*canvas.height+marge, 0.45*canvas.width-2*marge,  0.15*canvas.height-2*marge);
		// si on clique dessus, on revient au menu
		window.onclick =() => {
			clearInterval(OPTIONS_Interval_ID);
			MENU_Interval_ID=setInterval(menus,40);
			creditsound.pause();
			creditsound.currentTime=0;
			gener.currentTime=0;
			if(sound_ON){
				gener.play();
			}
		}
	}

	//Rectangle 1 pour activer le son	
	context.fillStyle = "#00FF00";
	context.fillRect(0.1*canvas.width, 0.55*canvas.height, 0.35*canvas.width,  0.15*canvas.height);
	if((posSourisX>0.1*canvas.width)&(posSourisX<0.45*canvas.width)&(posSourisY>0.55*canvas.height)&(posSourisY<0.70*canvas.height)){
		//HOVER
		context.fillStyle = "#00CC00";
		context.fillRect(0.1*canvas.width, 0.55*canvas.height, 0.35*canvas.width,  0.15*canvas.height);
		//si on clique dessus, on active le son
		window.onclick =() => {
			soud_ON = true;
			console.log("c");
			//options();
		}
	}

	//Rectangle 2 pour couper le son
	context.fillStyle = "#FF0000";
	context.fillRect(0.55*canvas.width, 0.55*canvas.height, 0.35*canvas.width,  0.15*canvas.height);
	if((posSourisX>0.55*canvas.width)&(posSourisX<0.90*canvas.width)&(posSourisY>0.55*canvas.height)&(posSourisY<0.70*canvas.height)){
		//HOVER
		context.fillStyle = "#CC0000";
		context.fillRect(0.55*canvas.width, 0.55*canvas.height, 0.35*canvas.width,  0.15*canvas.height);
		//si on clique dessus, on active le son
		window.onclick =() => {
			soud_ON = false;
			//options();
		}
	}
	//Affiche les textes

	context.globalAlpha = 0.8;
	context.fillStyle = "white";

	context.fillRect(0.55*canvas.width+marge, 0.55*canvas.height+marge, 0.35*canvas.width-marge*2,  0.15*canvas.height-marge*2);
	context.fillRect(0.1*canvas.width+marge, 0.55*canvas.height+marge, 0.35*canvas.width-marge*2,  0.15*canvas.height-marge*2);
	context.globalAlpha = 1;

	
    context.font = "bold 30px courier";
    context.fillStyle='black';
    context.fillText(('OFF'), 0.55*canvas.width+50, 0.55*canvas.height+60);
    context.fillText(('ON'), 0.1*canvas.width+50, 0.55*canvas.height+60);
    context.fillText(('Valider'), 0.50*canvas.width+marge+80, 0.80*canvas.height+marge+60);



}