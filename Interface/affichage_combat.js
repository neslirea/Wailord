let jaugeJ = new Image();
	jaugeJ.src = "Sprites_Menus/jaugej.png"
	
let jaugeE = new Image();
	jaugeE.src = "Sprites_Menus/jaugee.png"
// fond
var terrain = new Image();
	terrain.src = "Sprites_Menus/battleground.jpg";

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
	AfficherStatut();
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



//permet d'afficher les statuts des 2 pok : nom, pv
function AfficherStatut(){
	let PV1=current_pkm.pv;
	let PV1_MAX=current_pkm.maxpv;
	let PV2=adversaire.pv;
	let PV2_MAX=adversaire.maxpv;
	
		
	context.fillStyle='white';
	context.fillRect(635, 350, 140, 70)
	context.fillRect(360, 100, 150, 40)
	if((PV1/PV1_MAX)*100>40)
	{
		context.fillStyle='green';
		context.fillRect(635, 350, 140*PV1/PV1_MAX, 70)
	}
	else if ((PV1/PV1_MAX)*100>25)
	{
		context.fillStyle='yellow';
		context.fillRect(635, 350, 140*PV1/PV1_MAX, 70)
	}
	else 
	{
		context.fillStyle='red';
		context.fillRect(635, 350, 140*PV1/PV1_MAX, 70)
	}
	
	if((PV2/PV2_MAX)*100>40)
	{
		context.fillStyle='green';
		context.fillRect(360, 100, 150*PV2/PV2_MAX, 40)
	}
	else if ((PV2/PV2_MAX)*100>25)
	{
		context.fillStyle='yellow';
		context.fillRect(360, 100, 150*PV2/PV2_MAX, 40)
	}
	else 
	{
		context.fillStyle='red';
		context.fillRect(360, 100, 150*PV2/PV2_MAX, 40)
	}
	context.drawImage(jaugeE,250, 60,300,100)
	context.drawImage(jaugeJ,500, 320,300,130)
}

//permet d'afficher l'interface : fond, pokemons, status, cadre gris
function AfficherCombat(){
	context.clearRect(0, 0, canvas.width, canvas.height-combat_hauteur_menu);
	context.drawImage(terrain,0,0, canvas.width, canvas.height-combat_hauteur_menu);    
	context.fillStyle = "grey";		
	context.fillRect(0, canvas.height-combat_hauteur_menu, canvas.width, combat_hauteur_menu);
	AfficherStatut();		
	let image1 = new Image();
	image1.src = "Sprites_Pokemon/"+current_pkm.sprite_dos;
	context.drawImage(image1,200,210, 300, 300);
	let image2 = new Image();
	image2.src = "Sprites_Pokemon/"+adversaire.sprite;
	context.drawImage(image2,680,140, 200, 200);
}


