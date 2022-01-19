function AfficherAttaque(Attaquant, Attaque){
    
    context.fillText(Attaquant.nom +" utilise "+Attaque.nom, 100, 250);
    const p = document.getElementById("Affichage");
        p.innerText += Attaquant.nom + " utilise " + Attaque.nom +"!\n";
}

function AfficherEfficacite(Efficacite){
    const p = document.getElementById("Affichage");

    if (Efficacite<1){
        p.innerText += "Ce n'est pas très efficace...\n";
    } else if (Efficacite==1){

    } else {
        p.innerText += "C'est super efficace ! \n";
    }
}

function AfficherDegats(isUser, PVperdus){
	//isUser à 1 s'il s'agit du pok de l'utilisateur, 0 si c'est l'IA
	context.font = "bold 40px courier";
	context.fillStyle='black';
	if(isUser){
		context.fillText("...", 100, 270);
	}else {
		context.fillText("...", 300, 270);
	}
}

function AfficherManque(){                                 
	context.font = "bold 40px courier";
	context.fillStyle='black';
	context.fillText("Mais cela échoue !", 300, 270);
}

function AffichageChoixAttaque(pokemon){
	console.log("arg");
	const marge = combat_marge;
	const ratio_menu = combat_ratio_menu;
	
	//affichage d'un rectangle avec transparence 
	context.globalAlpha = 0.2;
	//définit la zone de choix des attaques
	let y0 = canvas.height-combat_hauteur_menu+marge
	let y1 = canvas.height-marge
	let x0 = canvas.width*(1-ratio_menu)+marge
	let x1 = canvas.width-marge
	let lineaire = context.createLinearGradient(x0, y0, x1, y1);
	//lineaire.addColorStop(0,'#850606');
	//lineaire.addColorStop(1, '#f0f0f0');
	lineaire.addColorStop(0,'#ffffff');
	lineaire.addColorStop(1, '#dddddd');
	context.fillStyle = lineaire;
	context.fillRect( x0, y0, x1-x0, y1-y0);
	context.globalAlpha = 1;
			
	lineaire = context.createLinearGradient(175, 130, 450, 350);
	lineaire.addColorStop(0,'#dfdfdf');
	lineaire.addColorStop(1, '#b0b0b0');
	context.fillStyle = lineaire;
	//Affichage des attaques
	let attaques = pokemon.getAttaques();
	let width =  (x1-x0-3*marge)/2
	let height = (y1-y0-3*marge)/2
	context.fillRect(x0+marge, y0+marge, width, height);
	context.fillRect(x0+width+2*marge, y0+marge, width, height);
	context.fillRect(x0+marge, y0+height+2*marge, width, height);
	context.fillRect(x0+width+2*marge, y0+height+2*marge, width, height);
	//affichage de l'attaque 1
	if (attaques.length>=1){				
				context.fillStyle = "white";				
				context.fillRect(x0+marge, y0+marge, width, height);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[0].nom), x0+marge, y0+marge+height/2);
	}
	if (attaques.length>=2){				
				context.fillStyle = "white";				
				context.fillRect(x0+width+2*marge, y0+marge, width, height);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[1].nom), x0+width+2*marge, y0+marge+height/2);
	}
	if (attaques.length>=3){				
				context.fillStyle = "white";				
				context.fillRect(x0+marge, y0+height+2*marge, width, height);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[2].nom), x0+marge, y0+height+2*marge+height/2);
	}
	if (attaques.length>=4){				
				context.fillStyle = "white";				
				context.fillRect(x0+width+2*marge, y0+height+2*marge, width, height);
				context.font = "bold 18px courier";
				context.fillStyle='black';
				context.fillText((attaques[3].nom), x0+width+2*marge, y0+height+2*marge+height/2);
	}
}		