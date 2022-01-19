//box
//var context;
const canvas = document.querySelector('canvas');

canvas.width = 1150;
canvas.height = 720;

var terrain = new Image();
	terrain.src = "int_pics/battleground.jpg";

var pk1 = new Image();
    pk1.src = "int_pics/vaporeon_dos.png";

var pk2 = new Image();
	pk2.src = "int_pics/flareon.png";

let jaugeJ = new Image();
	jaugeJ.src = "jaugej.png"
	
let jaugeE = new Image();
	jaugeE.src = "jaugee.png"
	

// sur l interface
var backgroundInt = new Image();
	backgroundInt.src = "int_pics/fond_int.png"; // le Background de l'interface
var btnAtk = new Image();
	btnAtk.src = "int_pics/but_attack.png"; 
var btnBag = new Image();
	btnBag.src = "int_pics/but_bag.png";
var btnSwap = new Image();
	btnSwap.src = "int_pics/but_pokemon.png";
var btnFlee = new Image();
	btnFlee.src = "int_pics/but_escape.png"; 

// Mouse positions
let posSourisX = 0;
let posSourisY = 0;

let INT_Interval_ID;
let ATK_Interval_ID;

function mouse_position(event) //permet de relever la position de la souris via une balise onmousemove dans l'html
{
	posSourisX = event.offsetX;
	posSourisY = event.offsetY;
}

function addInterface() {					// espace de travail (100, 700, 1300, 300);

	context = canvas.getContext("2d");
	context.drawImage(backgroundInt,300,540, 600, 170);

	context.drawImage(btnAtk,450,545, 300, 70);
	context.drawImage(btnBag,305,630, 190, 70);
	context.drawImage(btnSwap,705,630, 190, 70);
	context.drawImage(btnFlee,505,630, 190, 70);

	console.log(posSourisX,posSourisY);
	
	
	let PV1=100;
	let PV2=100;
	
	if(PV1>50)
	{
		context.fillStyle='green';
		context.fillRect(635, 350, 140*PV1/100, 70)
	}
	else if ((PV1>25)&(PV1<=50))
	{
		context.fillStyle='yellow';
		context.fillRect(635, 350, 140*PV1/100, 70)
	}
	else 
	{
		context.fillStyle='red';
		context.fillRect(635, 350, 140*PV1/100, 70)
	}
	
	if(PV2>50)
	{
		context.fillStyle='green';
		context.fillRect(360, 100, 150*PV2/100, 40)
	}
	else if ((PV2>25)&(PV2<=50))
	{
		context.fillStyle='yellow';
		context.fillRect(360, 100, 150*PV2/100, 40)
	}
	else 
	{
		context.fillStyle='red';
		context.fillRect(360, 100, 150*PV2/100, 40)
	}
	context.drawImage(jaugeE,250, 60,300,100)
	context.drawImage(jaugeJ,500, 320,300,130)
	
	
	
	// écouteur sur les boutons
	//btnAtk.onclick = FonctionAttaque();				// Déterminer quand est-ce que ça clique
	//btnBag.onPress = NotDevelopedYet;
	//btnSwap.onPress = NotDevelopedYet;
	//btnFlee.onPress = NotDevelopedYet;

}

function FonctionAttaque() {	

	context.clearRect(300,560, 600, 130);	// on clear la zone d'interface			//le clear fonctionne, mais s'active tout seul

	context = canvas.getContext("2d");
	context.drawImage(backgroundInt,300,560, 600, 130);						// on re dessine illico la zone

	context.drawImage(btnAtk,410,560, 285, 125);
	context.drawImage(btnAtk,705,560, 285, 125);
	context.drawImage(btnAtk,410,600, 285, 125);
	context.drawImage(btnAtk,705,600, 285, 125);
	
	// écouteur sur les boutons
	//Atk1.onPress = FonctionAttaque1;
	//Atk2.onPress = FonctionAttaque2;
	//Atk3.onPress = FonctionAttaque3;
	//Atk4.onPress = FonctionAttaque4;
}

window.onload = function()	{	// At start


 
context = canvas.getContext("2d");	
context.drawImage(terrain,0,0, 1150, 450);
context.drawImage(pk1,200,210, 300, 300);
context.drawImage(pk2,680,140, 200, 200);
context.fillStyle= 'rgba(0,0,0)';
context.fillRect(0, 450, 1150, 80);
context.fillStyle= 'rgba(200,200,200)';
context.fillRect(0, 530, 1150, 190);

INT_Interval_ID=setInterval(addInterface,10);	// a developper....
}
		


// le repertoire des id des images
/*
var imgInterfaceRepertoireId;						a faire fonctionner

imgInterfaceRepertoireId = [
	{src:"int_pics/but_attack.png", id:"btnAtk"},		
	{src:"int_pics/but_bag.png", id:"btnBag"},
	{src:"int_pics/but_pokemon.png", id:"btnSwap"},
	{src:"int_pics/but_escape.png", id:"btnFlee"},
	{src:"int_pics/fond_int.png", id:"fondInt"}
	//à remplir avec les boutons colorés selon le type des attaques
];	
*/